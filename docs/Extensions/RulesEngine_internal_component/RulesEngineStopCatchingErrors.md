---
id: RulesEngineStopCatchingErrors
---

# RulesEngine.StopCatchingErrors




:::note

This article is about the **StopCatchingErrors** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

:::

## **RulesEngine.StopCatchingErrors**

Instructs the RulesEngine to stop an error catching session started earlier with the **StartCatchingErrors** method.

Returns a number equal to or higher than 0. This number indicates the nesting depth of the stopped session. If the stopped session was started while one session started earlier was still active ( = had not been stopped), this number returned is 2. If there was no active session at the time of calling StopCatchingErrors, the number returned is 0.

*Syntax*

```sql
SELECT RulesEngine.StopCatchingErrors()
```

 