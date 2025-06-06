---
id: TRANSACTION_DATE
---

# TRANSACTION_DATE



> [!NOTE]
> This article has additional information about the **TRANSACTION_DATE** SQL function.
> For convertibility of this function, go to [SQL functions  S - Z](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_SZ.md).

## **TRANSACTION_DATE**

Returns the server date and time of the first time this function is processed within the transaction.

*Syntax*

```sql
SELECT TRANSACTION_DATE()
```

## Notes

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.

- If TRANSACTION_DATE() is used repeatedly within the same transaction, each instance represents the same date and time.
- TRANSACTION_DATE() is queried on the server only once within the transaction. If called again within the transaction, it is handled locally.

Contrast with Oracle-specific SYSDATE. With SYSDATE, identical date and time within the same transaction is not guaranteed. If a statement containing SYSDATE is sent to the server because it cannot be solved locally, then the current server date and time is retrieved even if SYSDATE had already been called earlier within the transaction.

> [!WARNING]
> Compare with [CURRENT_DATE()](/docs/Modeller_and_Rules_Engine/SQL_functions/CURRENT_DATE.md).

 