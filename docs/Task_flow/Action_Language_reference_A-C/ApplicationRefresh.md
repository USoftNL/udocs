---
id: ApplicationRefresh
---

# ApplicationRefresh()




:::note

This article is about the **ApplicationRefresh** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ApplicationRefresh()**

Applies authorization rules for the user newly logged in, and refreshes the menu.

*Syntax*

```
ApplicationRefresh()
```

This action is executed automatically when the user currently logged in is changed dynamically by executing the statement:

```sql
SELECT RulesEngine.SetUser( *user*, *password*, '')
```

 