---
id: RulesEngineSetRole
---

# RulesEngine.SetRole




:::note

This article is about the **SetRole** method of the [RulesEngine internal component](/Extensions/RulesEngine_internal_component).

:::

## **RulesEngine.SetRole**

Changes the role on the basis of which the logged-on user has access to the application. This is the active role. On application entry, the active role is the user's default role.

Calling this method if you are running in distinct-roles mode is an error. In merged-roles mode, the user has access to all her roles at all times.

Calling this method is effective only if the logged-on user has been given multiple roles. In this case, she accesses the application on the basis of her default role. Calling the method allows switching to other roles. Access rights on tables, columns, components, and jobs, and the First Menu Page are changed accordingly.

*Syntax*

```sql
SELECT RulesEngine.SetRole (
    *role*
)
```

The required *role* is the name of the role being switched to. This must be one of the roles associated with the user in in USoft Authorizer.

*Example*

```sql
SELECT RulesEngine.SetRole (
        'REVIEWERS'
)
```

 