---
id: Import_tasks_rejecting_tables
---

# Import tasks: rejecting tables

Instead of having jobs produce import status files, you can use the database for import error handling. Several strategies exist:

- Have a default error file made, then import the error file into a "reject table". A reject table corresponds to one application table. Its purpose is to accept records that for some reason could not be imported into the application table.
- Import all records into a reject table, then have USoft Batch transfer records from this table into the actual application table where possible. After this operation, the contents of the reject table can be read as an error report.
- Import expected error data into a reject table, deal with this data separately, then import all data into the application table.

Depending on the strategy chosen, general advantages of storing import errors are:

1. You do not need to maintain import status files. If you disable their creation, performance is improved.

2. Error reports that are stored in the database (as opposed to files) can be:

- Made more readable
- Queried using any desired ad-hoc query
- Made to contain any desired additional information
- Easily processed further, using SQL.

## Defining a Reject table

If you want to use a reject table, you need to define it in USoft Definer. A reject table is a duplication of an application table.

However, some duplicated columns might be based on different domains from those used by the application table, because domain constraints and other implicit rules defined at domain level must not apply to the reject table.

It is suggested that you define a number of dummy string domains ("description" domains) of different lengths. Reserve these domains for reject columns.

To define a reject table:

1. Determine what dummy string domains you need, and define them.

2. Define a new domain that will generate unique numerical values for the primary key of the reject table.

3. Determine if you want any additional information in the reject table, such as a timestamp. Define new domains where necessary.

4. Define the reject table and its columns. Columns should include:

- Numerical primary key column based on the newly defined domain.
- One duplicated column for each application column. Each duplicated column must be based on a dummy (string) domain without domain constraints.
- Any additional columns such as a timestamp.

5. Have the reject table implemented by choosing Tools, Create Physical Tables (option New or Updated) from the Definer menu bar.

## Transferring error status data into a Reject table

To transfer error status data into a reject table:

1. Define and create a reject table if necessary.

2. Define an import task importing records into the application table from a "\<file name>.\<file extension>" file.

3. Define an error import task importing all records into the reject table from the "\<file name>.ERR" file.

4. Append the error import task to the main import task. For instance, define an overall job that contains first the main import task and then the error import task.

5. Run the overall job. Rejected records will be imported into the reject table.

## Importing all records via a Reject table

Perhaps "Reject Table" in this strategy would be more appropriately termed "import table". It is a reject table in the sense that rejected records remain in it.

The advantage of this strategy is that you import all data in one go. You do not need to rely on an external file halfway into the import task. You can also use constraints and status fields to process import records from the reject table in a controlled manner.

One drawback of this strategy is that you require more database space. You are also likely to need more processing time.

To import all records from an external file via a reject table:

1. Define and create a reject table if necessary.

2. Define an import task importing all records into the reject table.

3. Define a SQL task transferring records from the reject table to the application table.

The basic idea is to write these SQL statements:

```sql
INSERT INTO   ( application table>[(columns)] )
SELECT        ( all records )
FROM          ( reject table )
DELETE        ( all records )
FROM          ( reject table )
WHERE EXISTS  ( condition to check whether records are inserted in application table )

```

You have a lot of flexibility here. Instead of using a SQL task you could use productive constraints or status fields. Import data could be written to more than one application table, etc.

4. Append the SQL task to the import task (following it). For instance, define an overall job that contains the import task and then the SQL task.

5. Run the overall job. Rejected records will remain in the reject table.

## Detecting and repairing expected import errors before bulk import

This is a good strategy if there are clearly defined expected errors in external data, and if they are likely to affect only a small subset of the data.

To detect and repair expected import errors before bulk import:

1. Define and create a reject table if necessary.

2. Define an error import task importing records that have expected errors into the reject table (use a WHERE clause to test for the error).

3. Define the main import task. This job can be based on the assumption that the expected error(s) no longer exist(s) in the data.

Alternatively, you can append the main import task to the error import task, and make it conditional upon the error import no longer affecting any data.

4. Run the error import task.

5. Inspect the reject table. On the basis of this information, fix the errors in the external file.

6. If necessary, run the error import task again to test that the error no longer occurs.

7. Run the main import task.