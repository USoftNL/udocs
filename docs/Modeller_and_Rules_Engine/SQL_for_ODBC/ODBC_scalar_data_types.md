---
id: ODBC_scalar_data_types
---

# ODBC scalar data types

## ODBC scalar data types

Mapping of USoft Developer data types to ODBC  data types is as follows:

|**USoft data type**|**ODBC data type**|
|--------|--------|
|BINARY  |SQL_BINARY|
|BIT     |SQL_BIT |
|CHAR    |SQL_CHAR|
|CLOB    |SQL_LONGVARCHAR|
|DATE    |SQL_TIMESTAMP|
|DATETIME|SQL_TIMESTAMP|
|DECIMAL |SQL_DECIMAL|
|DOUBLE PRECISION|SQL_FLOAT|
|FLOAT   |SQL_FLOAT|
|FLOAT4  |SQL_FLOAT|
|IMAGE   |SQL_LONGVARBINARY|
|INT     |SQL_INTEGER|
|INTEGER |SQL_INTEGER|
|INTEGER1|SQL_TINYINT|
|LONG    |SQL_LONGVARCHAR|
|LONG VARBINARY|SQL_LONGVARBINARY|
|LONG VARCHAR|SQL_LONGVARCHAR|
|LONGRAW |SQL_LONGVARBINARY|
|MONEY   |SQL_FLOAT|
|NCHAR   |SQL_CHAR|
|NUMBER  |SQL_NUMERIC|
|NUMERIC |SQL_NUMERIC|
|NVARCHAR|SQL_VARCHAR|
|RAW     |SQL_VARBINARY|
|REAL    |SQL_REAL|
|SMALLDATETIME|SQL_TIMESTAMP|
|SMALLINT|SQL_SMALLINT|
|SMALLMONEY|SQL_REAL|
|TEXT    |SQL_LONGVARCHAR|
|TIME    |SQL_TIMESTAMP|
|TIMESTAMP|SQL_TIMESTAMP|
|TINYINT |SQL_TINYINT|
|VARBINARY|SQL_VARBINARY|
|VARCHAR |SQL_VARCHAR|
|VARCHAR2|SQL_VARCHAR|



## ODBC Default datatypes

When application tables are generated directly on ODBC, USoft Developer retrieves the ODBC DBMS specific data type names from the connected ODBC driver, using the function: SQLGetTypeInfo. If the ODBC-driver does not support this level-1 function or when generating SQL script files (containing CREATE TABLE and INDEX statements), then the following default data type names are used:

|**Required data type**|**Default name**|
|--------|--------|
|SQL_CHAR|CHAR    |
|SQL_VARCHAR|VARCHAR |
|SQL_LONGVARCHAR|LONG VARCHAR|
|SQL_DECIMAL|DECIMAL |
|SQL_NUMERIC|NUMERIC |
|SQL_INTEGER|INTEGER |
|SQL_SMALLINT|SMALLINT|
|SQL_TINYINT|TINYINT |
|SQL_REAL|REAL    |
|SQL_FLOAT|FLOAT   |
|SQL_BIT |BIT     |
|SQL_BINARY|BINARY  |
|SQL_VARBINARY|VARBINARY|
|SQL_LONGVARBINARY|LONG VARBINARY|
|SQL_DATE|DATE    |
|SQL_TIME|TIME    |
|SQL_TIMESTAMP|TIMESTAMP|



## ODBC substitute data types

When application tables are generated directly on ODBC and the ODBC driver does support the level 1 function SQLGetTypeInfo, but the ODBC-driver does not support a particular ODBC SQL data type, then the following table shows the data type that will be substituted. If that data type is also not supported, then the substitute for that will be used, and so on, down the table.

|**Required data type**|**Substitute**|
|--------|--------|
|SQL_CHAR|SQL_VARCHAR|
|SQL_VARCHAR|SQL_CHAR|
|SQL_DECIMAL|SQL_NUMERIC|
|SQL_NUMERIC|SQL_DECIMAL|
|SQL_SMALLINT|SQL_INTEGER|
|SQL_INTEGER|SQL_SMALLINT|
|SQL_TINYINT|SQL_SMALLINT|
|SQL_REAL|SQL_FLOAT|
|SQL_FLOAT|SQL_REAL|
|SQL_BINARY|SQL_VARBINARY|
|SQL_VARBINARY|SQL_BINARY|
|SQL_BIT |SQL_BINARY|
|SQL_BIT |SQL_CHAR|
|SQL_TIMESTAMP|SQL_DATE|



When application tables are generated, USoft Developer will rename existing tables before creating the new application tables. Because "RENAME TABLE" is not defined in the ODBC SQL syntax specification, USoft Developer will generate the following standard syntax when generating SQL-script files:

```sql
ALTER TABLE *table-old-name* RENAME TABLE *table-new-name*
```

This may result in errors when running the SQL-script file for the specific ODBC DBMS because the rename syntax is not correct. If this is the case, you must change this syntax into the ODBC DBMS-specific syntax. To avoid problems with non-executable SQL script files for ODBC databases, always try to generate application tables by connecting directly to the ODBC DBMS via an ODBC driver (preferably one with ODBC-API level-1 conformance).

Universal date_to_char and char_to_date functions are available for ODBC. The syntax is:

```sql
SELECT date_to_char( *expression, format* ) FROM table
SELECT char_to_date( expression, format ) FROM table
```

 