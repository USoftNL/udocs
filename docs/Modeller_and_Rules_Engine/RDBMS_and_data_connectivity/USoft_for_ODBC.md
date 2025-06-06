---
id: USoft_for_ODBC
---

# USoft for ODBC

USoft for ODBC is a normal USoft application that connects to an (R)DBMS to retrieve and store data. The connection is made via an ODBC Driver. This can be useful when you wish to work with an RDBMS other than those directly supported by USoft. A requirement is that there must be an ODBC driver for this external (R)DBMS and that ODBC driver must support at least the requirements listed in the following section.

USoft for ODBC could be particularly useful in combination with a lightweight stand-alone RDBMS (for example, Sybase SQLAnywhere) on a notebook or laptop computer for demonstrations, presentations, on-site development, and so on.

## ODBC driver requirements

A USoft for ODBC application requires an ODBC driver and a DBMS to access data. There are many ODBC drivers available on the market. Not all ODBC drivers can be used with USoft. This section details the minimum ODBC driver functionality required by a USoft ODBC application.

A USoft ODBC application does not check all the requirements listed in this section every time at start-up. Instead it just activates the ODBC functions and sends SQL-statements to the driver at run-time.

If the connected ODBC driver is not capable of executing the request it will return an error. USoft will retrieve the error message, show it to the user and cancel the requested action. This way it is possible to use an USoft ODBC application in combination with an ODBC driver that does not support the complete SQL syntax and all SQL data types and scalar functions. Development or deployment can be severely hindered, or even become impossible, when too many of the requirements are not met.As a work around, you might need to change the application by changing or removing the error-producing SQL or data type definitions. Whenever possible use an ODBC driver that does support at least all the requirements.

## ODBC conformance

ODBC drivers conform to certain conformance levels. There are conformance levels for ODBC functions (API) and SQL grammar. USoft Production for ODBC requires the following minimum conformance levels from the ODBC driver.

SQL_ODBC_API_CONFORMANCE must be set to a non-negative value (zero or higher).

SQL_ODBC_SQL_CONFORMANCE must be set to 1 or higher than 1.

The ODBC driver MUST support transaction processing (Commit and Rollback) and transaction isolation level: SQL_TXN_REPEATABLE_READ or higher (SQL_TXN_SERIALIZABLE or SQL_TXN_VERSIONING).

The ODBC driver must be capable of having two or more connections active: SQL_ACTIVE_CONNECTIONS must be set to 2 or higher. It must be set to 3 or higher when creating application tables from within USoft Developer).

The ODBC driver must be capable of having two or more active statements per connection: SQL_ACTIVE_STATEMENTS must be set to 2 or higher. MS SQL Server via ODBC reports 1 active statement, but still functions correctly with USoft Developer.

## ODBC functions

The ODBC programming interface consists of functions that come in two categories:

- Core functions
- Extended functions (level 1, and level 2)

ODBC functions supported and unsupported by USoft are listed in the following tables, grouped by task.

### Connecting to a data source

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQLAllocEnv|Core    |Yes     |Obtains an environment handle. One handle is used for one or more connections.|
|SQLAllocConnect|Core    |Yes     |Obtains a connection handle.|
|SQLBrowseConnect|2       |No      |        |
|SQLConnect|Core    |Yes     |Connects to a specific driver by data source name, user ID, and password. One connection is used for one or more statements.|
|SQLDriverConnect|1       |Yes     |Connects to a specific driver by connection string or requests that the Driver Manager and driver display connection dialogs for the user.|



### Obtaining information about driver and data source

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQLGetfunctions|1       |Yes     |Returns information about a specific driver and data source.|
|SQLGetInfo|1       |Yes     |<p>Returns supported driver functions. This function also returns supported scalar functions for the infotypes:</p><p>- SQL_numeric_functions<br/>- SQL_string_functions<br/>- SQL_system_functions<br/>- SQL_timedate_functions<br/>- SQL_convert_functions.<br/></p>|
|SQLGetTypeInfo|1       |Yes     |Returns information about supported data types.|



### Setting and retrieving driver options

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQLGetConnectOption|1       |Yes     |Returns the value of a connection option.|
|SQLGetStmtOption|1       |Yes     |Returns the value of a statement option.|
|SQLSetConnectOption|1       |Yes     |Sets a connection option.|
|SQLSetStmtOption|1       |Yes     |Sets a statement option.|



### Preparing SQL requests

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQAllocStmt|Core    |Yes     |Allocates a statement handle.|
|SQLPrepare|1       |Yes     |Prepares a SQL statement for later execution.|
|SQLBindParameter|1       |Yes     |Assigns storage for a parameter in a SQL statement.|
|SQLParamOptions|2       |Yes     |Specifies the use of multiple values for parameters.|
|SQLGetCursorName|Core    |Yes     |Returns the cursor name that is associated with a statement handle.|
|SQLSetCursorName|Core    |Yes     |Specifies a cursor name.|
|SQLSetScrollOptions|2       |No      |        |



### Submitting requests

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQLExecute|Core    |Yes     |Executes a prepared statement.|
|SQLExecDirect|Core    |Yes     |Executes a statement.|
|SQLNativeSql|2       |Yes     |Returns the text of a SQL statement as translated by the driver.|
|SQLDescribeParam|2       |No      |        |
|SQLNumParams|2       |Yes     |Returns the number of parameters in a statement.|
|SQLParamData|1       |No      |        |
|SQLPutData|1       |No      |        |



### Retrieving results and information about results

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQLRowCount|Core    |Yes     |Returns the number of rows affected by an insert, update, or delete request.|
|SQLNumResultsCols|Core    |Yes     |Returns the number of columns in the result set.|
|SQLDescribeCol|Core    |Yes     |Describes a column in the result set.|
|SQLColAttributes|Core    |Yes     |Describes attributes of a column in the result set.|
|SQLBindCol|Core    |Yes     |Assigns storage for a result column and specifies the data type.|
|SQLFetch|Core    |Yes     |Returns a result row.|
|SQLExtendedFetch|2       |Yes     |Returns multiple result rows.|
|SQLGetData|1       |Yes     |Returns part or all of one column of one row of a result set. (Useful for long data values.)|
|SQLSetPos|2       |No      |        |
|SQLMoreResults|2       |Yes     |Determines whether there are more result sets available and, if so, initialises processing for the next result set.|
|SQLError|Core    |Yes     |Returns additional error or status information.|



### Obtaining information about the data source's system tables (catalog functions)

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQLColumns|1       |Yes     |Returns the list of columns in specified table(s).|
|SQLColumnPrivileges|2       |No      |        |
|SQLForeignKeys|2       |No      |        |
|SQLPrimaryKeys|2       |Yes     |Returns the list of column names that make up the primary key for the specified table.|
|SQLProcedureColumns|2       |No      |        |
|SQLProcedures|2       |No      |        |
|SQLSpecialColumns|1       |Yes     |Returns information about the optimal set of columns that uniquely identifies a row in a specified table, or the columns that are automatically updated when any value in the row is updated by a transaction.|
|SQLStatistics|1       |Yes     |Returns statistics about a single specified table and the list of indexes associated with the table.|
|SQLTablePrivileges|2       |No      |        |
|SQLTables|1       |Yes     |Returns the list of table names stored in a specific data source.|



### Terminating a statement

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQLFreeStmt|Core    |Yes     |Ends statement processing and closes the associated cursor, discards pending results, and, optionally, frees all resources associated with the statement handle.|
|SQLCancel|Core    |Yes     |Calls the SQLFreeStmt function.|
|SQLTransact|Core    |Yes     |Commits or rolls back a transaction.|



### Terminating a connection

|**Function**|**Level**|**Supported?**|**Purpose**|
|--------|--------|--------|--------|
|SQLDisconnect|Core    |Yes     |Closes a connection.|
|SQLFreeConnect|Core    |Yes     |Releases the connection handle.|
|SQLFreeEnv|Core    |Yes     |Releases the environment handle.|



## Supported SQL

An external program that accesses the database of a USoft business application must define its data needs in standard SQL. The SQL statements that can be used are:

- SELECT
- INSERT
- UPDATE
- DELETE
- INVOKE

Data definition statements such as CREATE, ALTER, and DROP are not supported. Use the USoft Developer's Create Application Tables function instead.

The authorisation statements GRANT and REVOKE are not supported.