---
id: pcDropDatabase
---

# pc:DropDatabase




:::note

This article is about the **pc:DropDatabase**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:DropDatabase**

Drops a database. In Oracle terms, "database" designates the collection of tables (if any) stored in the database account of the user by the name of "database".

There is no return value.

This directive, executed with the droplogin="yes" option, is the reverse of **pc:NewDatabaseForUSoft**.
This directive is interpreted differently for Oracle than for SQL Server.

## Oracle

*Syntax*

```
<pc:DropDatabase
    rdbms="oracle"
    connectstr="*connectstr*"
    database="*database*"
    dba="*dba*"
    dbapwd="*dbapassword*"
    droplogin="*droplogin*"
/>

*droplogin*  ::=  { yes | no }>
```

All attributes except **droplogin** are required. **connectstr** must be the full database connectstring (as opposed to the short alias you can declare in "tnsnames.ora"). **database** must be the database user name of the database account that contains the database tables. The combination of **dba** and **dbapwd** must be a successful DBA login that is authorised to drop the database. **dba** must have **sys** (all-lowercase) or **SYS** (all-uppercase) as its name, or as part of its name.

If you pass droplogin="yes", then not only the database tables, but also the database user will be dropped.

*Example*

This example drops the tables in database account USD91_TRAVEL, and then drops the database account (= the database user) itself.

```xml
<pc:DropDatabase
    rdbms="oracle"
    connectstr="
        (DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=L3100100247.usoft.com)(PORT=1521))
        (CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)))"
    database="USD91_TRAVEL"
    dba="sys"
    dbapwd="manager"
    droplogin="yes"
/>
```

## SQL Server

*Syntax*

```
<pc:DropDatabase
    rdbms="sqlserver"
    connectstr="*connectstr*"
    database="*database*"
    dba="*dba*"
    dbapwd="*dbapassword*"
    droplogin="*droplogin*"
/>

*droplogin*  ::=  { yes | no }
```

The required **rdbms** must be “sqlserver”. The required **connectstr** must be the string identifying the Server Name in terms of Microsoft SQL Server Management Studio. The required **database** must be the database name.

The combination of these 2 settings:

```xml
connectstr="MYSERVERNAME\SQLEXPRESS"

database="MYDATABASE"
```

corresponds to the colon notation in the Database field in the USoft Binder tool (in: File, Project Properties, Database):

```
MYSERVERNAME\SQLEXPRESS:MYDATABASE
```

The combination of **dba** and **dbapwd** is a username/password combination that allows you to access the required database information using SQL Server Authentication. This combination is optional if you are connecting to the database server using Windows Authentication, and required if you are using SQL Server Authentication.

If you pass droplogin="yes", then the Login object with the same name as the database will also be dropped.

*Example*

This example drops the USD91_TRAVEL Database and the USD91_TRAVEL Login object, on condition that you have access to the database server using Windows Authentication.

The Object Explorer catalog in MS SQL Server Management Studio continues to show a database dropped in this way, even after you execute its Refresh (F5) function. To use this Object Explorer to check whether the database has effectively been dropped, you must expand the Tables subnode to see that the list of user tables is empty.

```xml
<pc:DropDatabase
    rdbms="sqlserver"
    connectstr="P6400100200\SQLEXPRESS"
    database="USD91_TRAVEL"
    droplogin="yes"
/>
```

 