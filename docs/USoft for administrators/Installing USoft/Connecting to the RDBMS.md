# Connecting to the RDBMS

USoft needs a **database connect string** to connect to the RDBMS.

For local Windows (ie., non-Web) access, you enter this connect string in USoft Binder on the Database tab of the Project Properties dialog (choose File, Project Properties from the USoft Binder menu).

For Web access, you enter this connect string as a property of the Rules Service. You can also run the **ure.config** console from USoft Binder, re-using the connect string already declared there. Do this by choose Item, New, Rules Service, right-mouse-click and press Configure.

## Oracle

For Oracle, the connect string may be an alias if this alias can be expanded used on information in the **tnsnames.ora** file. In many cases, the connect string alias for a locally installed Oracle Express database is

```
XE
```

An alternative for using an alias is to provide the complete connect string. For example:

```
( DESCRIPTION =
  ( ADDRESS_LIST =
    ( ADDRESS = (PROTOCOL = TCP)(HOST = COMPUTER_22)(PORT = 1521) )
  ) 
  ( CONNECT_DATA = (SERVICE_NAME = XE) ) 
)

```

 

The advantage of a complete connect string is that it will work if you send the Binder file to a different team member on the same company network who may not have the same alias settings in **tnsnames.ora.**

For Oracle over SQL*Net TCP/IP version 1, the connect string is of the form:

```
T:machine-name:database-sid
```

For SQL*Net Version 2, it is of the form:

```
machine_name database-sid
```

In the Database field, the ORACLE_SID may be offered as a suggestion.

 

## SQL Server

For SQL Server, the connect string depends on whether default instances or named instances are used.

If you are using a default instance, the connect string is of the form:

```
computer-name : database-name
```

The default instance of the SQL Server 2000 database engine operates the same way as the database engines in earlier versions of SQL Server. The default instance is identified solely by the name of the computer on which the instance is running, it does not have a separate instance name. When applications specify only the computer name in their requests to connect to SQL Server, the SQL Server client components attempt to connect to the default instance of the database engine on that computer. This preserves compatibility with existing SQL Server applications.There can only be one default instance on any computer, the default instance can be any version of SQL Server.

If you are using a named instance, the connect string is of the form:

```
computer-name \ instance-name : database-name
```

All instances of the database engine other than the default instance are identified by an instance name that is specified during installation of the instance. Applications must provide both the computer name and the instance name of any named instance to which they are attempting to connect.

There can be multiple named instances running on a computer, but only the SQL Server 2000 database engine can operate as a named instance. The database engines from earlier versions of SQL Server cannot operate as a named instance.

 

## ODBC

For ODBC, the dropdown list in the Database field may offer sources from the registry as a suggestion.

 

## Derby

An example database connect string for a Derby database (that you could distribute along with the USoft Binder file) is:

```
jdbc:derby://localhost:{port}/{systemdir}\ExampleBinders\MyDb1;create=true
```

 

 