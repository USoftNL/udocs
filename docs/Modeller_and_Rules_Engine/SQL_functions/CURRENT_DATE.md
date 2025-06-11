---
id: CURRENT_DATE
---

# CURRENT_DATE




:::note

This article has additional information about the **CURRENT_DATE** SQL function.
For convertibility of this function, go to [SQL functions  A - C](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_AC.md).

:::

## **CURRENT_DATE**

Returns the server date and time each time it is called.

By contrast, TRANSACTION_DATE() retrieves the current server date only the first time it is called within a transaction. Subsequent calls to TRANSACTION_DATE() within the same transaction return the same date and time value. These subsequent calls are handled on the client and therefore give better performance than CURRENT_DATE().

*Syntax*

```sql
CURRENT_DATE()
```

## Notes

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.