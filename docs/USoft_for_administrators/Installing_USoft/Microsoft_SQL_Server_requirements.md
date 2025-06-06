---
id: Microsoft_SQL_Server_requirements
---

# Microsoft SQL Server requirements

There are a number of system requirements which must be satisfied if you intend to use USoft Series products with Microsoft SQL Server. You must check that your system complies with these requirements before you proceed with the installation of USoft Series products.

Refer to your Microsoft SQL Server documentation for more detailed explanations of the requirements described here.

## Supported versions of MS SQL Server

### USoft 11.0

USoft 11.0 supports the following versions of the Microsoft SQL Server RDBMS:

- SQL Server 2022
- SQL Server 2019
- SQL Server 2017

Most drivers for older versions (2014, 2012) remain available in USoft 11.0, but proper working is not guaranteed, and support requests are solved only for the latest drivers from the above list.

### USoft 10.1

USoft 10.1 supports the following versions of the Microsoft SQL Server RDBMS:

- SQL Server 2022
- SQL Server 2019
- SQL Server 2017
- SQL Server 2016

Most drivers for older versions (2014, 2012) remain available in USoft 10.1, but proper working is not guaranteed, and support requests are solved only for the latest drivers from the above list.

MSOLEDBSQL database driver

USoft 10 expects the MSOLEDBSQL driver by default when running against SQL Server. To install this driver, go to:

[https://docs.microsoft.com/en-us/sql/connect/oledb/download-oledb-driver-for-sql-server?view=sql-server-ver15](https://docs.microsoft.com/en-us/sql/connect/oledb/download-oledb-driver-for-sql-server?view=sql-server-ver15)

USoft 9.1 expects the SQLNCLI11 driver by default  when running against SQL Server. However, this driver is deprecated: it is not suitable for secure connections because it will not support TLS1.2. See:
[https://docs.microsoft.com/nl-nl/archive/blogs/sqlnativeclient/released-microsoft-ole-db-driver-for-sql-server](https://docs.microsoft.com/nl-nl/archive/blogs/sqlnativeclient/released-microsoft-ole-db-driver-for-sql-server)

To use the MSOLEDBSQL driver on USoft 9.1, add the following to the command line by which you start USoft:

```
-xrm "*OledbDriver: MSOLEDBSQL"
```

Alternatively, you can make this setting in the USDI and/or USDIW resource file.

## MS SQL Server client utilities

Before you can run USoft Developer, at least one of the utilities from the Microsoft SQL Server Client Utilities set must be installed. This is to ensure that DLLs required by USoft Developer are present.

## MS SQL Server installation notes

When you are installing the database server, make sure that you set the sort order of the database server to "Dictionary order, case-sensitive". This must be done to ensure the proper operation of USoft tools.

## Repository Owner in MS SQL Server

A database owner (DBO) in Microsoft SQL Server, can also be a repository owner. Repository tables are identified by user name.

## Collation

USoft recommends you specify a Windows collation (as opposed to a SQL Server collation) for a SQL Server database used for a USoft project. For most projects, the following case-sensitive collation is suitable:

```
Latin1_General_100_CS_AS
```

In SQL Server, you can specify a collation at the server level, database level, or column level, and you can specify collations within your queries. In MS SQL Server Management Studio, you can set the collation at database level in the New Database dialog (click Options and select the collation from a dropdown list). You can also create a SQL Server database by running the [pc:NewUDevelop](/docs/Repositories/Blend%20directives/pcNewUDevelop.md) command, in which case you can pass the collation using the **collation** option.

Also, see Microsoft's recommendations with regard to SQL Server collations:

[https://learn.microsoft.com/en-us/sql/t-sql/statements/sql-server-collation-name-transact-sql?view=sql-server-ver15](https://learn.microsoft.com/en-us/sql/t-sql/statements/sql-server-collation-name-transact-sql?view=sql-server-ver15)

## Database properties

When using USoft on MS SQL Server, the database properties “Allow snapshot isolation” and “Is read committed Snapshot on” must be set to true.