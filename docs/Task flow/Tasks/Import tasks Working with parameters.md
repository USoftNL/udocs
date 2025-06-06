# Import tasks: Working with parameters

This article has tips for working with parameters in [Import Tasks](/docs/Task%20flow/Tasks/Import%20tasks.md).

### Job parameters as Import Task variables

Use job input parameters as variables during an import task to:

- Detect value change in sorted import records.
- Reduce database trips.

If you know the sort order of records in the external file, you can simplify definition and maintenance of import SQLs. Because part of the processing only needs to be done when a value change is detected in the sorted column(s), the import task is also likely to be faster.

Database trips are a performance drain. You can reduce the number of database trips if data manipulation during an import task can be deduced from data in the import records. Instead of re-querying the database for each imported record, keep track of data changes locally.

To use a job input parameter for tracking value change in sorted import records.

1. Define a parameter set with a set element that has the same data type as the value to be tracked.

2. Define a SQL task preceding the import task, in which you initialize the job parameter to a suitable default value.

3. You can now include import SQL statements that are conditional on the value of the import record having changed (or not) relative to the previous record. In a WHERE clause, compare the value of the current record to the value of the job parameter.

4. At the end of the import task, define an import SQL statement setting the parameter to the sort value of the current record. This way, you can compare it with the value in the next import record.

To use a job input parameter for reducing database trips.

1. Define a input parameter set with a set element that has the same data type as the value in the database that you do not want to re-query.

2. Define an import SQL statement retrieving the current database value into the job parameter.

3. Define further import SQLs, referring to or manipulating the job parameter without re-querying the value in the database.

### Import Task Set Virtuals managing decision trees

Complex import tasks often include decision trees: if the current import record meets a SQL condition, then if it meets another condition A should happen, otherwise B, etc.

You can use import task set virtuals to keep track of decision trees in import tasks.

This strategy makes it easier to construct and maintain decision trees in complex import tasks.

To use an import task set virtual for managing decision trees:

1. Define an (additional) import task set virtual for the driving set of the import task.

2. Define an import SQL statement setting the virtual to a certain value if a SQL condition is met. Such a statement would typically have the form:

```sql
UPDATE    driving-set
SET       virtual = value
WHERE     ... subquery ...

```

The WHERE clause compares one or more (computations of) driving set values to (computations of) database values.

3. Define a further import SQL statement referring to the current value of the virtual, e.g.

```sql
UPDATE    driving-set
SET       virtual = value
WHERE     ... subquery ...
AND       virtual = value

```

and so on.

4. Finally, make the import statement(s) subject to values for the virtual. A typical construction would be:

```sql
INSERT INTO table
(
    SELECT    ...
    FROM      driving-set
    WHERE     virtual = value
)

```

### Import Task Set Virtuals in record-by-record computations

Suppose a table has a number of columns with computed values, and records in it are processed by an import task. (Computed values can theoretically be extracted from other tables, but because this takes time and the computed values are often re-used, they are stored in a separate field for performance reasons.)

You can use import task set virtuals to hold computed values for the currently imported record.

The standard in USoft technology is to compute values using productive constraints. In batch jobs, however, you can also use virtuals to compute the eventual values.

Another aspect of these computed values is that in many instances, these values are always produced by batch processing and never during online processing. If you implement the computations in constraints, these are checked unnecessarily during online processing.

You can get record-by-record commit and default error reports even if you want to compute values in EXISTING data. Export the data, then import them (export-for-import strategy). During import, compute the values.

To use import task set virtuals for record-by-record computations:

1. Define an external set describing the structure of the external file. This external set does not include the computed values.

2. Define the import task based on the external set. Use the external set as driving import task set. For this set, define as many import task set virtuals as you have computed columns.

3. Define import SQL statements that compute the import task set virtuals on the basis of database values and values in the current import record (and possibly values in non-driving import sets).

These import SQL statements typically have the form:

```sql
UPDATE    driving-import-task-set
SET       import-task-set-virtual =
(
    SELECT    ...
    FROM     database-table , ...
    WHERE    join-with-current-import-record
)

```

4. Define an import SQL statement transferring the current import record, including computed values, to the database table. This import SQL statement typically has the form:

```sql
INSERT INTO database-table
SELECT      all-columns
FROM        driving-import-task-set

```

5. At job level, specify RECORD level commit for this import task.