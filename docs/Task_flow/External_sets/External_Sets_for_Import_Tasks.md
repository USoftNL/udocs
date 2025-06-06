---
id: External_Sets_for_Import_Tasks
---

# External Sets for Import Tasks

When used for an import task, an external set describes the structure, format, and record separator of the external file that contains the data to be imported. It also defines a temporary table, in memory or in the database, in which import data is temporarily stored during the import, and to which you can refer in import SQL statements.

> [!NOTE]
> A record is complete when reading external sets for import tasks when the number of columns defined in the external set and the record separator are reached.

For example, if the external set is defined with three columns, File Format = Comma Separated Values (CSV) and record separator = \\n and the file used for the import contains the following data:

```
1, abc
def, mmm
2, abcdef, mmm

```

the external set will only have two records:

```
1, abc(\n)def, mmm

```

and

```
2, adcdef, mmm

```

## Driving sets

When several files are imported within a single import task, there will be an external set for each file. In this case, you must specify which external set is the driving set. Each import task has exactly one driving set.

For example, suppose that the Travel Agency is in the middle of a large conversion project, in which files from different systems have to be converted into a single database. They have one file which contains information on scheduled tours, and another which contains reservation data. Because a scheduled tour may have more than one reservation, this file will be chosen as the driving set.

The files that you choose to be "non-driving" are read into temporary tables in one go. The file that you choose to be "driving" is read into a temporary table in memory or in the database, one record at a time. The validity of the resulting data is checked before the data (in this case the tours and their reservations) is inserted into the database.

The driving and non-driving sets use the external set as a table. See: "Storing External Set Data in Tables" Storing External Set Data in Tables.

When you execute an import task using a driving set, USoft Batch Runner makes sets available as tables. If necessary, existing records in these database tables are deleted.

Next, the non-driving sets are read into temporary tables in one go.

Next, as long as there are records in the driving import set, the following steps are executed:

1. Read a record and inserts it into the driving set.

2. Execute the import SQL statements defined for the import task.

3. Delete the driving set record.

4. Commit the data if the import task has row-level commit. If the commit fails, roll back the transaction and write a record in the error file.

When running an import task, it is possible to delete the record in the driving set via a DELETE statement. This rejects the record being imported. This way, you can filter the records to be imported. Take care with task-level commit import tasks. The DELETE statement causes a rollback for the complete task. It is therefore only useful for record-level commit import tasks.

## Import task set virtuals

The external sets that an import task uses may have one or more import task set virtuals. These are fields you define in the external set, which do not exist in the file to be imported. You can use them for storing intermediate values during the import, for example, for computing values on the basis of other fields in the external set. Import task set virtuals can only be used within external sets that are not table-based.

The virtual element receives its value from the import SQL statement defined for the particular import task. For each virtual element that you want to use, you must specify the name, data type and length.

> [!NOTE]
> The performance of USoft Batch can be much improved if you use virtuals rather than constraints to compute values on the basis of external set elements during import tasks.

To take an example, you can use import task set virtuals to improve the performance of foreign key generation for imported child data. Suppose you have an import task in which the import SQL statement needs to join with the database table PERSON to retrieve the newly generated primary key value for the parent record.

If there are many children for each parent, you can improve performance by retrieving the primary key value once for the entire set of children and storing it in a virtual column of the parent external set.

> [!NOTE]
> In fact, this method is sometimes the best way to handle tables with automatically generated primary keys, as follows.

Suppose you want to import parent records with related child records, and the child records are in a separate file, and related to the parent records through an ID number. If the table has automatically generated primary keys, then USoft Batch will write new primary keys for each imported record, thereby destroying the links between the parent and child records.

If you retrieve the newly generated primary key value for each parent record, and store it in a virtual column, you can then use it for all the child inserts.

You could also use an alternate key (assuming that there is some other column in the child record that uniquely identifies the parent), and fetch the new key for each parent. But the disadvantage is that you need to first put the parent in the database, and then query the database for the key for each child record, and this will not perform as efficiently as the solution using a virtual column.

## User-defined tables for Import tasks

When USoft Batch executes an import task, it creates temporary database tables for the non-driving external sets. Since no indexes or storage parameters are defined for these tables, the performance of a multi-set import task may not be very good.

However, USoft Batch supports the use of user-defined tables for non-driving external sets. A user-defined table is a database table for an external set. This table must be created in the database in advance, and can be defined, but does not have to be defined, in the Definer.

When you use this feature, USoft Batch will use the database table you specify for temporary storage of the external set, instead of creating an anonymous temporary table on the fly. In this way, you can improve performance by defining indexes and storage parameters on the table.

In order to use this feature, you must set the Use User Table checkbox (in the Import Tasks window), and enter the name of the table in the User Table field. Each table name must be unique within any one import task.

> [!CAUTION]
> A user-defined table is used as a private temporary storage area, and cannot be used to store other data. USoft Batch begins and ends the execution of an import task by deleting all records from all user-defined tables in the task.

> [!NOTE]
> When batch jobs that use user-defined tables run simultaneously, you must use the "user_table" job parameter to ensure that each job uses its own set of tables.

Before you can use user-defined tables, you must do the following:

1. Create the tables in the RDBMS.

2. Optimize performance by defining indexes and storage parameters on the tables.

3. Make sure that every user table in the RDBMS matches the definition of the corresponding external set in the USoft repository:

- The number of columns in the table must be equal to the number of elements in the external set (including any virtual elements).
- The column names must match the names of the external set elements.
- The data type of every external set element must be a data type which is supported by your RDBMS.
- The data type of every column must be equal to the data type of the corresponding external set element.
- If a column width is associated with the data type, the column width must be equal to the length of the corresponding element in the external set.
- The database table must not have mandatory or NOT NULL columns.

 

4. Make sure that multiple batch jobs running simultaneously use different user tables.