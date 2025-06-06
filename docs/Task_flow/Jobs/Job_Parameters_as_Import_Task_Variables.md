---
id: Job_Parameters_as_Import_Task_Variables
---

# Job Parameters as Import Task Variables

Use job input parameters as variables during an import task, for example to:

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