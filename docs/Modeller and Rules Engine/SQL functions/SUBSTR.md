# SUBSTR



> [!NOTE]
> This article has additional information about the **SUBSTR** SQL function.
> For convertibility of this function, go to [SQL functions  S - Z](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20SZ.md).

## **SUBSTR and SUBSTRING**

Returns a part of a given input string.

SUBSTR is a native SQL function on Oracle and JDBC and a convertible SQL function for USoft.

On all platforms, you can call this function with either 2 or 3 parameters. On SQL Server and ODBC, if you pass 2 parameters, USoft adds the required 3rd parameter before making the database call.

SUBSTRING is a synonym for SUBSTR on all platforms except JDBC, Derby.

*Syntax*

```sql
SELECT     SUBSTR( *input-string*, *from*, *length* )
SELECT  SUBSTRING( *input-string*, *from*, *length* )
```

The required *input-string* is the string that the returned substring is of.

The required *from* is an integer indicating the starting position of the substring within the input string.

The optional *length* is an integer indicating the length of the substring (Example 1). If omitted, the entire input string after *from* is returned (Example 2).

*Example 1*

```sql
SELECT  SUBSTR( 'ABCDE', 2, 3 )
```

This example returns:

```
BCD
```

*Example 2*

```sql
SELECT   SUBSTR( 'ABCDE', 2 )
```

This example returns:

```
BCDE
```

 