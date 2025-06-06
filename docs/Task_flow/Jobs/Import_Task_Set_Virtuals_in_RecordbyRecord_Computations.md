---
id: Import_Task_Set_Virtuals_in_RecordbyRecord_Computations
---

# Import Task Set Virtuals in Record-by-Record Computations

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
    FROM     database-table [, database-table ...]
    WHERE    (join with current import record)
)

```

4. Define an import SQL statement transferring the current import record, including computed values, to the database table. This import SQL statement typically has the form:

```sql
INSERT INTO database-table
SELECT      all-columns
FROM        driving-import-task-set

```

5. At job level, specify RECORD level commit for this import task.