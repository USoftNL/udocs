---
id: CAST
---

# CAST




:::note

This article has additional information about the **CAST** SQL function.
For convertibility of this function, go to [SQL functions  A - C](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_AC.md).

:::

## **CAST**

The CAST() SQL function converts a value from one data type to another.

The function is convertible to all RDBMS platforms. This function takes 1 argument and a data type specifier. Some data type specifiers have additional length and precision specifiers.

*Syntax*

```sql
CAST( *expression* AS *DATATYPE* )
```

*Example 1*

This example converts a datetime value to a time value:

```sql
SELECT   CAST(CURRENT_DATE() AS SQL_TIME)
```

*Example 2*

This example converts a string value to a number value:

```sql
SELECT   CAST('3.14159265' AS SQL_NUMERIC(7, 5))
```

## Notes

Even though this is a convertible function, supported on all RDBMS platforms, the translation of the data type specifier to the RDBMS-specific data type differs from one RDBMS to another.

The outcome of CAST may also differ.

The following table gives an overview of the data type specifiers supported by USoft and the translation to the RDBMS specific data type.

This table has additions in parentheses:

|        |        |
|--------|--------|
|(*n*)   |<p>Integer value denoting storage space</p><p>Example: (256)</p>|
|(*p*, [*s*])|<p>Integer value denoting precision (*p*), optionally following by integer value denoting scale (*s*).</p><p>Precision is the number of digits in a number. Scale is the number of digits to the right of the decimal point in a number.</p><p>Examples: (8), (10,2)</p>|



The addition is *optional* where surrounded by brackets [].

|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBC, Derby**|
|--------|--------|--------|--------|--------|
|SQL_BIGINT|INTEGER |INTEGER |SQL_BIGINT|BIGINT  |
|SQL_BINARY[(*n*)]|RAW(*n*)|BINARY[(*n*)]|SQL_BINARY[(*n*)]|CHAR FOR BIT DATA|
|SQL_CHAR[(*n*)]|CHAR[(*n*)]|CHAR[(*n*)]|SQL_CHAR|CHAR[(*n*)]|
|SQL_DATE|(*1)    |DATE    |SQL_DATE|DATE    |
|SQL_DECIMAL|        |        |SQL_DECIMAL (*2)|        |
|SQL_DECIMAL( *p* [,*s*] )|NUMBER( *p* [,*s*] )|DECIMAL( *p* [,*s*] )|        |DECIMAL( *p* [,*s*] )|
|SQL_DOUBLE|FLOAT   |FLOAT   |SQL_DOUBLE|DOUBLE  |
|SQL_FLOAT|FLOAT   |FLOAT   |SQL_FLOAT|FLOAT   |
|SQL_INTEGER|INTEGER |INTEGER |SQL_INTEGER|INTEGER |
|SQL_LONGVARBINARY|(*3)    |VARBINARY(MAX)|SQL_LONGVARBINARY|BLOB    |
|SQL_LONGVARCHAR|(*3)    |VARCHAR(MAX)|SQL_LONGVARCHAR|CLOB    |
|SQL_NCHAR[(*n*)]|NCHAR[(*n*)]|NCHAR[(*n*)]|SQL_WCHAR|CHAR[(*n*)]|
|SQL_NLONGVARCHAR|(*3)    |NVARCHAR(MAX)|SQL_WLONGVARCHAR|CLOB    |
|SQL_NUMERIC|        |        |SQL_NUMERIC|        |
|SQL_NUMERIC( *p* [,*s*] )|NUMBER( *p* [,*s*] )|DECIMAL( *p* [,*s*] )**|        |DECIMAL( *p* [,*s*] )|
|SQL_NVARCHAR[(*n*)]|NVARCHAR2(*n*)|NVARCHAR(*n*)|SQL_WVARCHAR|VARCHAR[(*n*)]   (*4)|
|SQL_REAL|REAL    |REAL    |SQL_REAL|REAL    |
|SQL_SMALLINT|SMALLINT|SMALLINT|SQL_SMALLINT|SMALLINT|
|SQL_TIME|(*1)    |TIME    |SQL_TIME|TIME    |
|SQL_TIMESTAMP|TIMESTAMP|DATETIME|SQL_TIMESTAMP|TIMESTAMP|
|SQL_TINYINT|SMALLINT|SMALLINT|SQL_TINYINT|SMALLINT|
|SQL_VARBINARY[(*n*)]|RAW(*n*)|VARBINARY[(*n*)]|SQL_VARBINARY[(*n*)]|VARCHAR FOR BIT DATA|
|SQL_VARCHAR[(*n*)]|VARCHAR2(*n*)|VARCHAR(*n*)|SQL_VARCHAR|VARCHAR[(*n*)]    (*4)|



(*1) Oracle does not have means to get a date-part or time-part out of a date using the CAST() function. For these two data types, USoft performs the following translation:
   CAST( *date* AS SQL_DAT ) → TRUNC( *date* )
   CAST( *date* AS SQL_TIME ) → TO_CHAR( *date*, 'HH24:MI:SS' )

(*2) The ODBC CAST function does not allow for specification of precision or scale.

(*3) Oracle does not allow casting to a (N)CLOB or BLOB. For these three data types, USoft translates the CAST() into TO_(N)CLOB() / TO_BLOB()

(*4) Derby does not allow casting numbers to VARCHAR directly. An additional CAST as CHAR() is automatically performed first.