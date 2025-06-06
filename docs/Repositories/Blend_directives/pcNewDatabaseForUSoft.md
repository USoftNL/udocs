---
id: pcNewDatabaseForUSoft
---

# pc:NewDatabaseForUSoft



> [!NOTE]
> This article is about the **pc:NewDatabaseForUSoft**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:NewDatabaseForUSoft**

Creates a database in which you can create or load a USoft application. In Oracle terms, "database" designates the collection of tables (if any) stored in the database account of the user by the name of "database".

There is no return value.

> [!NOTE]
> This directive is the reverse of pc:DropDatabase executed with the droplogin="yes" option.

This directive is interpreted differently for Oracle than for SQL Server.

## Oracle

*Syntax*

```
<pc:NewDatabaseForUSoft
    rdbms="oracle"
    connectstr="*connectstr*"
    database="*database*"
    owner="*owner*"
    pwd="*ownerpassword*"
    dba="*dba*"
    dbapwd="*dbapassword*"
    tablespace="*tablespace*"
/>
```

All attributes are required except the **owner/pwd** combination and **tablespace**. **rdbms** must be “oracle”. **connectstr** must be the full database connectstring (as opposed to the short alias you can declare in "tnsnames.ora"). **database** must be the database user name of the database account you want to create. The combination of **dba** and **dbapwd** must be a successful DBA login that is authorised to create a user (a database account). **dba** must have the 3 lowercase letters sys as its name, or as part of its name.

If you omit the optional **owner/pwd** combination, both **owner** and **pwd** will be set to the same value as database. Otherwise, **owner** is the owner of the physical tables at RDBMS level.

If you specify **tablespace**, USoft tables are created in this tablespace. If you omit **tablespace**, USoft tables are created in the default tablespace, which is commonly USERS.

*Example*

This example creates an empty database account USD100_TRAVEL in tablespace TABLESPACE_1.

```language-xml
<pc:NewDatabaseForUSoft
    rdbms="oracle"
    connectstr="
        (DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=L3100100247.usoft.com)(PORT=1521))
        (CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)))"
    database="USD100_TRAVEL"
    dba="sys"
    dbapwd="manager"
    tablespace="TABLESPACE_1"
/>
```

## SQL Server

*Syntax*

```
<pc:NewDatabaseForUSoft
    rdbms="sqlserver"
    connectstr="*connectstr*"
    database="*database*"
    owner="*owner*"
    pwd="*ownerpassword*"
    dba="*dba*"
    dbapwd="*dbapassword*"
/>
```

The required **rdbms** must be “sqlserver”. The required **connectstr** must be the string identifying the Server Name in terms of Microsoft SQL Server Management Studio. This is the same database connect string that you use in USoft Binder to access application data, except for the database suffix introduced by a colon. The required **database** must be the database name. The combination of these 2 settings:

```
connectstr="MYSERVERNAME\SQLEXPRESS"

database="MYDATABASE"
```

corresponds to the following colon notation in the USoft Binder tool (in: File, Project Properties, Database):

```
MYSERVERNAME\SQLEXPRESS:MYDATABASE
```

The combination of **dba** and **dbapwd** is a username/password combination that allows you to access the required database information using SQL Server Authentication. This combination is optional if you are connecting to the database server using Windows Authentication, and required if you are using SQL Server Authentication.

The combination of **owner** and **pwd** is the runtime username/password combination by which you will be able to install and access the USoft application. If you omit these attributes, their values will be set to the value of database.

*Example*

Using Windows Authentication, this example creates a Database object called USD100_TRAVEL and a Login object called TRAVEL_LOGIN with password TRAVEL_LOGIN_PWD.

Further objects are created to enable TRAVEL_LOGIN to connect to USD100_TRAVEL. For the new Database object, a User object TRAVEL_LOGIN and a Schema object TRAVEL_LOGIN are created. TRAVEL_LOGIN is given the Connect permission on the new USD100_TRAVEL database.

```language-xml
<pc:NewDatabaseForUSoft
    rdbms="sqlserver"
    connectstr="P6400100200\SQLEXPRESS"
    database="USD100_TRAVEL"
    owner="TRAVEL_LOGIN"
    pwd="TRAVEL_LOGIN_PWD"
/>
```

 