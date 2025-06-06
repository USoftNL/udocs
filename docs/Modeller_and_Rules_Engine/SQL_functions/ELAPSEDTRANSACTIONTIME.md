---
id: ELAPSEDTRANSACTIONTIME
---

# ELAPSEDTRANSACTIONTIME



> [!NOTE]
> This article has additional information about the **ELAPSEDTRANSACTIONTIME** SQL function.
> For convertibility of this function, go to [SQL functions  D - H](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20DH.md).

## **ELAPSEDTRANSACTIONTIME**

Returns the amount of time in seconds that elapsed since the current transaction started. A transaction starts when a record is locked (for example when starting updating a record), or otherwise when a data manipulation statement (insert, update, delete) is sent to the database.

The elapsed transaction time is reset to 0 (zero) when a commit or rollback takes place.

Syntax

```sql
SELECT    ELAPSEDTRANSACTIONTIME()
```

Notes

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.