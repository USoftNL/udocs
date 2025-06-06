---
id: RulesEngineSetUserGroup
---

# RulesEngine.SetUserGroup




:::note

This article is about the **SetUserGroup** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

:::

## **RulesEngine.SetUserGroup**


:::danger

This function has been deprecated in USoft 10.0. Use [RulesEngine.SetRole](/docs/Extensions/RulesEngine_internal_component/RulesEngineSetRole.md) instead.

:::

*Syntax*

```sql
SELECT RulesEngine.SetUserGroup (
    *usergroup*
)
```

### Note

In versions previous to USoft 10.0, if the logged-on user was declared as a member of multiple user groups. She accessed the application as a member of whichever of these user groups came first alphabetically. Calling the method allowed switching to other user groups.

In USoft 10.0, the call syntax **RulesEngine.SetUserGroup()** has become a synonym of **RulesEngine.SetRole()**.