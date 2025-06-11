---
id: ROLE
---

# ROLE




:::note

This article has additional information about the **ROLE** SQL function.
For convertibility of this function, go to [SQL functions  N - R](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_NR.md).

:::

## **ROLE**

Returns the role or roles that are active for the user currently logged in.

*Syntax*

```sql
SELECT ROLE()
```

If you are running in distinct-roles mode, exactly 1 role is active. The name of this role is retured.

If you are running in merged-roles mode, at least 1 role is active. If 1 role is active, the name of this role is returned:

```sql
ROLE_1
```

If more than 1 role is active, the names of the active roles are shown in brackets and separated by commas:

```
[ROLE_1,ROLE_2]
```

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.