---
id: Update_Oracle_sequences
---

# Update Oracle sequences




:::note

This article is about the **Update Oracle sequences**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Update Oracle sequences**

This action is now **deprecated**. USoft 9.1 import routines deal with database sequence updates (both on Oracle and SQL Server) automatically. You only ever need this action if, for some reason, you plan to perform INSERTs of records directly against the RDBMS.

This action applies only to the Oracle RDBMS. You must have Oracle software installed that allows you to call sqlplus from the command line. Delivery Manager does not offer this facility for SQL Server.

1.    Creates an Oracle SQL script for resetting the current value of Oracle sequences used by USoft applications in "Database account" for generating unique numbers. This Oracle SQL script is named:

```
sequences-exec.500.post.rdbms.sql
```

and is placed in the folder indicated by the required "Working directory" parameter.
2.    Executes this script in "Database account" if "Execute script" is set to Yes.

The purpose of resetting the sequences is to avoid problems with INSERTs after data have changed as a result of data import actions. If a SEQ_PERSON sequence is used for generating unique person ID numbers, and the highest person ID in the current data is 1500, the current value of the sequence is reset to 1501:
 

```sql
drop sequence SEQ_PERSON;                                                                                                                                                                                                                  
create sequence SEQ_PERSON start with 1501;
```

This type of problem is automatically prevented if you perform the INSERT through USoft.

The operation applies to all Oracle sequences in "Database account", not only for unique numbers for end user application tables, but also for unique numbers for tables of USoft applications such as USoft Definer.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Database account|Database account|No      |
|Working directory|Folder or file|No      |
|Execute script|Option flag|Yes     |



### Script files

|**Short Name**|**File Name**|**Type**|
|--------|--------|--------|
|make    |sequences-make.500.post.rdbms.sql|Input file|
|use     |sequences-use.500.post.rdbms.sql|Input file|
|temp    |sequences-temp.500.post.rdbms.sql|Interim spool file|
|exec    |sequences-exec.500.post.rdbms.sql|Executable script|



The **make** and **use** input files contain the instructions necessary to execute the operation.

The **temp** file is an interim spool file.

The **exec** file contains the SQL commands for updating the Oracle sequences.

The **temp** and **exec** files are generated each time the make file is run.

### Running from the command line

You can (re)generate the exec file, away from USoft Delivery Manager, in Oracle SQL*Plus by running the make script from the command line. Pass the working directory as an additional parameter:

```
sqlplus username/password@connection working-dir/sequences-make.500.post-rdbms.sql working-dir
```

To execute immediately, uncomment the following code line in the make file:

```
/* start &&1\sequences-exec.500.post.rdbms.sql */
```

Or you can execute separately, by giving the command:

```
sqlplus username/password@connection working-dir/sequences-exec.500.post-rdbms.sql
```

 