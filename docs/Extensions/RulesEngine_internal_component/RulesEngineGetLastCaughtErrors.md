---
id: RulesEngineGetLastCaughtErrors
---

# RulesEngine.GetLastCaughtErrors




:::note

This article is about the **GetLastCaughtErrors** method of the [RulesEngine internal component](/Extensions/RulesEngine_internal_component).

:::

## **RulesEngine.GetLastCaughtErrors**

Reports on all error messages caught in the active error catching session, using plain text as a format. To get the result in XML, use the **GetLastCaughtErrorsAsXML** method instead.

Returns a string that contains these error messages. Returns NULL if no errors occurred in the active error catching session.

Call this method just before you call the **StopCatchingErrors** method. If you call it AFTER calling StopCatchingErrors, and there is another (parent) catching session running, you will not get the error messages of your (stopped) session, but of the other session that is still running.

*Syntax*

```sql
SELECT RulesEngine.GetLastCaughtErrors()
```

 