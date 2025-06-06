---
id: DATALENGTH_LEN
---

# DATALENGTH, LEN




:::note

This article has additional information about the **DATALENGTH** and **LEN** SQL functions.
For convertibility of these SQL functions, go to [SQL functions  D - H](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_DH.md).

:::

## **DATALENGTH, LEN**

DATALENGTH and LEN are native SQL functions on SQL Server.

DATALENGTH is not convertible for USoft.

```sql
DATALENGTH( *expression* )
```

returns the number of bytes used to represent expression.

LEN is converted by USoft to LENGTH on other platforms than SQL Server.

```sql
LEN( *expression* )
```

returns the number of characters of expression, excluding trailing blanks.

```sql
LEN( *expression* )
```

is not supported on SQL Server for expressions of type TEXT or NTEXT. To get the length of such expressions, use DATALENGTH instead, bearing in mind that this returns the number of bytes instead of the number of characters, and that DATALENGTH is not convertible for USoft.