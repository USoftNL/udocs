---
id: TIMESTAMP_TO_DATE
---

# TIMESTAMP_TO_DATE



> [!NOTE]
> This article has additional information about the **TIMESTAMP_TO_DATE** SQL function.
> For convertibility of this function, go to [SQL functions  S - Z](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_SZ.md).

## **TIMESTAMP_TO_DATE**

Converts a datetime containing time information to a date not containing time information (or implying midnight for time).

*Syntax*

```sql
TIMESTAMP_TO_DATE( *date* )
```

*Example*

```sql
SELECT     TIMESTAMP_TO_DATE( SYSDATE )
FROM       dual
```

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.