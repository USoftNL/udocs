---
id: SESSION_ID
---

# SESSION_ID




:::note

This article has additional information about the **SESSION_ID** SQL function.
For convertibility of this function, go to [SQL functions  S - Z](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_SZ.md).

:::

## **SESSION_ID**

Returns a unique session identifier for the current session.

If the value of the STARTUP_EVENT Rules Engine parameter has been set to True, this unique identifier is the SESSION_ID value that was inserted in the T_EVENT table the last time the Rules Engine was started.

*Syntax*

```sql
SELECT    SESSION_ID()
```

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.