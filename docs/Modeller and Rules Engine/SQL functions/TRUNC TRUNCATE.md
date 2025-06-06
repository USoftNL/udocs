# TRUNC, TRUNCATE



> [!NOTE]
> This article has additional information about the **TRUNC** and **TRUNCATE** SQL functions.
> For convertibility of this function, go to [SQL functions  S - Z](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20SZ.md).

## **TRUNC, TRUNCATE**

TRUNC is a convertible function resolved by USoft and thus supported on all RDBMS platforms.

TRUNC is also a native SQL function on Oracle and JDBC. TRUNCATE is a native SQL function on ODBC.

SQL Server does not have a corresponding native function. When resolving TRUNC() on SQL Server, USoft converts the expression to a ROUND() expression and passes it to the RDBMS. If 1 argument is passed:

```
TRUNC( *n1* )
```

then the following is sent to SQL Server:

```
ROUND( *n1* - 0.5, 0 )
```

If 2 arguments are passed:

```sql
TRUNC( *n1, n2* )
```

then the following is sent to SQL Server:

```sql
ROUND( *n1* - 0.5 * POWER( 10.0, -(*n2*) ), *n2* )
```

 