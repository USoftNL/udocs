---
id: DATE_TO_CHAR
---

# DATE_TO_CHAR




:::note

This article has additional information about the **DATE_TO_CHAR** SQL function.
For convertibility of this function, go to [SQL functions  D - H](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_DH.md).

:::

## **DATE_TO_CHAR**

Converts a datetime value to a character string of a specific format.

*Syntax*

```sql
DATE_TO_CHAR( *datetime, io-format* )
```

*Example*

```sql
DATE_TO_CHAR( start_date, 'MM/DD/YY' )
```

DATE_TO_CHAR is a convertible function resolved by USoft and thus supported on all RDBMS platforms. However, its exact behaviour partly depends on the underlying RDBMS function.

## Oracle

On Oracle, USoft converts the input expression to:

```sql
TO_CHAR( *datetime, io-format* )
```

## SQL Server

On SQL Server, USoft converts the input expression to:

```sql
CONVERT( VARCHAR, *datetime, io-format* )
```

and this raises an error if io-format is not one of the standardised formats supported for this use of the SQL Server CONVERT() function. For example, the following will raise an error on SQL Server:

```sql
CONVERT( VARCHAR, start_date, 'DD-MON-YYYY' )
```

## ODBC

On ODBC, the function has no effect because USoft converts the input expression to:

```sql
*datetime*
```

## JDBC, Derby

On JDBC and Derby, USoft converts the input expression to:

```sql
TO_CHARDATE( *datetime*, NVL( *io-format*, 'DD-MON-YYYY' ) )
```

 