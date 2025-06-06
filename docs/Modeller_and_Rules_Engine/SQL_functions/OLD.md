---
id: OLD
---

# OLD



> [!NOTE]
> This article has additional information about the **OLD** SQL function.
> For convertibility of this function, go to [SQL functions  N - R](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_NR.md).

## **OLD**

The OLD() SQL function is a USoft-specific extension of the SQL language. It is handled on all platforms by the USoft Rules Engine itself and thus portable across platforms.

This function must be passed exactly 1 argument, which must identify a column:

```sql
OLD( *column* )
```

> [!WARNING]
> This function is legal only in the context of **constraint SQL** (for both table constraints and domain constraints).

> [!TIP]
> Go to [Transitional constraints](/docs/Modeller_and_Rules_Engine/Constraints/Transitional_constraints.md) to find out how the OLD function is used.