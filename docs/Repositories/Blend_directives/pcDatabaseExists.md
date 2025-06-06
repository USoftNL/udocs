---
id: pcDatabaseExists
---

# pc:DatabaseExists



> [!NOTE]
> This article is about the **pc:DatabaseExists**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:DatabaseExists**

Determines whether or not a database exists at a connection. In Oracle terms, "database" designates the collection of tables (if any) stored in the database account of the user by the name of "database".

Returns a \<yes> tag with properties of the database if it exists, or a \<no> tag with existing sibling databases if it does not exist.

Use this directive to find out, before you call pc:NewDatabaseForUSoft, whether you need to call pc:DropDatabase.

This directive is interpreted differently for Oracle than for SQL Server.

## Oracle

*Syntax*

```
<pc:DatabaseExists
    rdbms="oracle"
    connectstr="*connectstr*"
    database="*database*"
    owner="*owner*"
    pwd="*ownerpassword*"
    dba="*dba*"
    dbapwd="*dbapassword*"
/>
```

All attributes are required. **connectstr** must be the full database connectstring (as opposed to the short alias you can declare in "tnsnames.ora"). **database** must be the database user name of the database account that contains the database tables. The combination of **owner** and **pwd** must be a successful DBA login that is required to get confirmation that the database exists. The combination of **dba** and **dbapwd** must be a successful DBA login that is required to get the list of existing schemas. This list is only returned if **dba** has the 3 lowercase letters **sys** as its name, or as part of its name.

*Example*

```language-xml
<pc:DatabaseExists
    rdbms="oracle"
    connectstr="
        (DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=L3100100247.usoft.com)(PORT=1521))
        (CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)))"
    database="USD100_TRAVEL"
    owner="sys"
    pwd="manager"
    dba="sys"
    dbapwd="manager"
/>
```

If the USD100_TRAVEL database account exists and the owner/pwd username/password combination is a successful login for finding out about it, the return value looks like this:

```language-xml
<yes
    connectstr="(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=L3100100247.usoft.com)(PORT=1521))
        (CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)"
    database="USD100_TRAVEL" />
```

If the USD100_TRAVEL database account does not exist but the dba/dbapwd username/password combination is a successful login for finding out about existing database accounts at the connection, the return value looks like this:

```language-xml
<no>
   <Schemas>
      <Schema owner="USD100_TRAVEL" />
      <Schema owner="USD101_CARRENTAL" />
   </Schemas>
</no>
```

## SQL Server

*Syntax*

```
<pc:DatabaseExists
    rdbms="sqlserver"
    connectstr="*connectstr*"
    database="*database*"
    dba="*dba*"
    dbapwd="*dbapassword*"
/>
```

All attributes are required, except **dba** and **dbapwd** in certain cases (see details below). **connectstr** must be the string identifying the Server Name in terms of Microsoft SQL Server Management Studio. This is the same database connect string that you use in USoft Binder to access application data, except for the database suffix introduced by a colon. **database** must be the database name. The following 2 attribute settings:

```language-xml
connectstr="MYSERVERNAME\SQLEXPRESS"

database="MYDATABASE"
```

correspond to the following colon notation in the USoft Binder tool (in the Database field in File, Project Properties, Database):

```
MYSERVERNAME\SQLEXPRESS:MYDATABASE
```

The combination of **dba** and **dbapwd** is a username/password combination that allows you to access the required database information using SQL Server Authentication. This combination is optional if you are connecting to the database server using Windows Authentication, and required if you are using SQL Server Authentication. In either case, this username/password information is returned in the return XML string if the database exists.

*Example*

This example only works if you have access to the database server using Windows Authentication:

```language-xml
<pc:DatabaseExists
    rdbms="sqlserver"
    connectstr="P6400100200\SQLEXPRESS"
    database="USD100_TRAVEL"
/>
```

If the USD100_TRAVEL database account exists, the return value looks like this:

```language-xml
<yes
   connectstr="Server=L3100100247\SQLEXPRESS;Integrated security=SSPI;database=USD100_TRAVEL2"
   usoftconnectstr="L3100100247\SQLEXPRESS:USD100_TRAVEL2" />
```

If the USD100_TRAVEL database account does not exist, the return value looks like this:

```language-xml
<no>
   <SqlServers />
</no>
```

 