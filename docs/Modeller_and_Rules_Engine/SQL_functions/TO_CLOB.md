---
id: TO_CLOB
---

# TO_CLOB



> [!NOTE]
> This article has additional information about the **TO_CLOB** SQL function.
> For convertibility of this function, go to [SQL functions  S - Z](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20SZ.md).

## **TO_CLOB**

Converts a value to CLOB data type.

*Syntax*

```sql
SELECT TO_CLOB( value )
```

## Background

This is a convertible function resolved by USoft but NOT supported on MS Sql Server, where you must use CONVERT.

Large strings (>32K) returned by component methods are truncated when used in other SQL statements. If the method call is called directly within an INVOKE statement, for example:

```sql
INVOKE     MyComponent.FetchLongString
```

then there is no problem returning the large string. But as soon as the call is incorporated in a SQL statement, the value will be silently truncated to 32K, the USoft limit for long strings. For example:

```sql
SELECT     MyComponent.FetchLongString()
FROM       MyTable
```

You can use the TO_CLOB() function to return the long string correctly without it being truncated.

The TO_CLOB() function must be positioned directly around the method call, otherwise truncation might occur before the TO_CLOB() function can do the conversion. For example, the following statement still truncates the value:

```sql
SELECT     TO_CLOB( 'Test' || MyComp.MyMethod( col ))
FROM       MyTable   t1
```

To ensure that no truncation occurs, the TO_CLOB() function must be positioned directly around the method call:

```sql
SELECT     'Test' || TO_CLOB( MyComp.MyMethod( col ))
FROM       MyTable   t1
```

 