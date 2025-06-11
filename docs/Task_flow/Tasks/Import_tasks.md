---
id: Import_tasks
---

# Import tasks

**Import tasks** are useful if:

- you are using CSV as an external data format, or
- you require a high level of performance because of large data volumes, or
- you are working on legacy USoft applications that use import tasks.

In other cases, consider using [XML/JSON import](/Repositories/Data_flow_control_with_XML_or_JSON/Data_flow_control_with_XML_or_JSON.md) instead. This gives you better control over the data in testing in and debugging.

### Import tasks, purpose

You can use Import Tasks to:

- **Load backup data files** into a database. For example, if the Travel Agency makes regular backups of its data using an export task, the data can easily be reloaded by means of an import task, in cases of disaster recovery.
- **Import data**  from other USoft and non-USoft applications. For example, suppose the product designers have created a new set of tours on a different system. An import task can be used to import this data into the Travel Agency database.
- **Convert data** from different systems into one unified USoft application.

To load new data, write an INSERT statement. To change existing data, write an UPDATE statement.

### Defining an import task

To define an import task:

1. Choose Define, Tasks, Import Tasks.

The Import Tasks window appears.

2. In the Import Name field, type a unique name for the import task. The name can be up to 30 characters long.

3. Click the Import SQL Statements tab page to enter information in each of the following fields.

For each SQL statement that you want to have performed on the external data, application tables, or parameter sets:

- In the Sequence field, type a (sequence) number to indicate the order in which the SQL statements are to be executed. It is a good idea to start numbering from 10 upwards, in units of 10, so that you can insert other statements later, if required.
- In the Active field, check or clear the box to activate or deactivate statements that you may have used for debugging purposes.
- In the Disable Rules field, check or clear the box to specify whether rules (constraints, relationships, mandatory columns, allowed values, and more) need to be disabled or not when executing this Import SQL statement. This enables you to speed up performance when the data comes from a trusted source and is therefore expected not to contain any errors. Refer to "Disabling Rules" for more information.
- In the Description field, type a description of the purpose or nature of the SQL statement.
- In the SQL Statement field, enter the SQL statement. You can click the Edit button to open the popup text editor, or click the SQL Definer button to start the Graphical SQL Definer (for more information on the Graphical SQL Definer, see the USoft Definer Help).

4. Click the Import Task Sets tab page to enter information in each of the following fields. For each external set that is used by this import task:

- In the Set Name field, click the lookup button and select a previously defined external set.
- In the Driving Set field, check or clear the box to indicate which of the external sets "drives" the import process. An import task must have exactly one driving set.
- In the Filename field, type the name of the file that contains the data to be imported. By default, USoft Batch looks for this file in the working directory, but you can override this by entering a full pathname before the file name.
- In the Use User Table field, check or clear the box to specify whether or not USoft Batch should use a user-defined database table for temporary storage of the external set.
- In the User Table field, specify the name of the table to use to store the external set temporarily.

5. If the set to be imported has one or more import task set virtuals, specify the name, data type, and length.

**NOTE 1:** To view Log Information changes, click the Log Info tab. You can use the What's This? Help in the Log Info tab page for more information on each field.

**NOTE 2:** You can check the validity of the SQL statements by pressing the Check button. If the statements are correct, the Correct flag for the Import Task will be set to correct, that is, the checkbox will be checked. This is not a mandatory action, the state of the correct flag has no effect on the execution of the Import Task.

### Import task, example

Suppose the product designers have created a new set of tours on a different system. An import task can be used to import this data (contained in an external set called NEW_TOURS) into the Travel Agency database.

The import SQL statement to import the new data would be:

```sql
INSERT INTO tour
(
        destination
,       tour_type
,       num_days
,       max_age
,       description
,       image1
)
SELECT
        n.destination
,       n.tour_type
,       n.num_days
,       n.max_age
,       n.description
,       n.image1
FROM    new_tours n

```

The external set elements of which the data type, length, and format would have to be defined are the columns of the Tours table.

### Import files, location

By default, import files are searched by import tasks in the USoft working directory. To have these files searched in a different location, do one of the following:

- Specify the Directory attribute for a Batch Runner item in USoft Binder.
- In Batchrunner calls, use the -data_directory predefined parameter.
- Add a data_directory parameter to the Batch Runner command line, for example:

```
-exe "job( IMP_PERSON,INS_AFTER=01-APR-2001,data_directory=C:\Data\ )"

```

You may want to set a hard-coded File Name attribute within the Import Task Set definition.


:::note

The data_directory parameter takes precedence over hard-coded paths or %% variables in Import or Export Task definitions. If data_directory is set, partial paths (subfolder/filename) are concatenated with data_directory. File location is determined in the following order of precedence:

:::

- data_directory parameter
- Hard-coded path with system variables substituted
- No path: current (working) directory