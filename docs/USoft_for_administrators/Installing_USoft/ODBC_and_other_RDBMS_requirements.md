---
id: ODBC_and_other_RDBMS_requirements
---

# ODBC and other RDBMS requirements

This section describes requirements and installation tips for supported RDBMS platforms other than Oracle and MS SQL Server.

> [!CAUTION]
> All the forms of database access in this article have **Beta** status. USoft offers only limited support on features with Beta status.

## Supported versions of other RDBMS platforms

USoft 11.0 and USoft 10.1 offer limited support on:

- PostgreSQL/ODBC connectivity
- Derby

## USoft-for-ODBC

USoft-for-ODBC is a regular USoft application that connects to an (R)DBMS to retrieve and store data. The connection is made via an ODBC Driver. This could be useful if you wish to work with an RDBMS other than those directly supported by USoft (Oracle, SQL Server). A prerequisite is that there must be an ODBC driver for this external (R)DBMS and that the ODBC driver must support at least the requirements listed here.

USoft-for-ODBC could be useful in combination with a stand-alone RDBMS on a notebook or laptop computer for demonstrations, presentations, or on-site development.

USoft-for-ODBC requires an ODBC driver and an RDBMS to access data. There are many ODBC drivers available on the market. Not all ODBC drivers can be used with USoft. A brief description of ODBC conformance requirements is given below.

USoft does not check that all requirements are satisfied at start-up. It just activates the ODBC functions and sends SQL statements to the driver at runtime. If the connected ODBC driver is not capable of executing the request it will return an error. USoft will retrieve the error message, show it to the user and cancel the requested action. This way it is possible to use an USoft ODBC application in combination with an ODBC driver that does not support the complete SQL syntax and all SQL data types and scalar functions.

Whenever possible, use an ODBC driver that supports all the requirements. If you can’t, as a workaround, you may need to change the application by editing or removing the SQL or the data type definitions that produce the error.

> [!WARNING]
> Running the end-user application with a single user should work decently, but multiple users at the same time could cause problems because locking is not fully implemented.

## ODBC conformance

ODBC drivers conform to certain conformance levels. There are conformance levels for ODBC functions (API) and SQL grammar. USoft Production for ODBC requires the following minimum conformance levels from the ODBC driver:

**Functions**

SQL_ODBC_API_CONFORMANCE must be >= 0

**Grammar & Data Types**

SQL_ODBC_SQL_CONFORMANCE must be >= 1

The ODBC driver MUST support transaction processing (Commit and Rollback) and transaction isolation level: SQL_TXN_REPEATABLE_READ or higher (SQL_TXN_SERIALIZABLE or SQL_TXN_VERSIONING).

The ODBC driver must be capable of having two or more connections active:

SQL_ACTIVE_CONNECTIONS >= 2

(three when creating application tables from within USoft Developer) and must be capable of having two or more active statements per connection:

SQL_ACTIVE_STATEMENTS >= 2

A USoft ODBC application conforms to the ODBC version 1.0 specification. It can therefore be used with ODBC version 1.0 and 2.0 drivers and driver managers (ODBC.DLL).

SQL_ODBC_VER must be >= 1

## CONFRMNC.EXE (ODBC)

An example program called CONFRMNC.EXE is available. The program lists the conformance and capabilities of an ODBC driver.

To run the program, open a DOS command shell. Go to the BIN subdirectory of the installed USoft Series product set, e.g. C:\\Program Files\\USD8\\BIN. Then type:

**confrmnc.exe \<outputfilename>**

Where \<outputfilename> is replaced by a filename for storing the retrieved information.

You are then prompted to enter the Data Source Name, User ID and password that will be used to make a connection. If the connection fails an error message will be displayed and the program stops.

If the connection to the ODBC driver succeeds, the following information will be written to the output file you specified when starting the program:

- Connection parameters
- Supported ODBC functions (Version 1.0 and 2.0)
- General driver information
- DBMS product information
- SQL support information
- Supported SQL data types
- Supported SQL scalar functions, divided into:

Numeric functions
String functions
System functions
Time & Date functions
Convert functions

 