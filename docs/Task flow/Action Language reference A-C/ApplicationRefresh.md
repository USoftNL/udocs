# ApplicationRefresh()



> [!NOTE]
> This article is about the **ApplicationRefresh** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

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

 