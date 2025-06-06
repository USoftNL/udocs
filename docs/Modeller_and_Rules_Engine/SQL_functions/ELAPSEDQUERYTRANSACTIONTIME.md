---
id: ELAPSEDQUERYTRANSACTIONTIME
---

# ELAPSEDQUERYTRANSACTIONTIME



> [!NOTE]
> This article has additional information about the **ELAPSEDQUERYTRANSACTIONTIME** SQL function.
> For convertibility of this function, go to [SQL functions  D - H](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_DH.md).

## **ELAPSEDQUERYTRANSACTIONTIME**

Returns the amount of time in seconds that elapsed since the first SELECT statement was issued on the database after the last commit or rollback.

Syntax

```sql
SELECT    ELAPSEDQUERYTRANSACTIONTIME()
```

## Notes

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.