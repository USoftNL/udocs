---
id: RulesEngineGetProperty
---

# RulesEngine.GetProperty



> [!NOTE]
> This article is about the **GetProperty** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine%20internal%20component).
> See also [Rules Engine properties](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **RulesEngine.GetProperty**

Retrieves the current setting for a [Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties) by accessing the value of the specified property. To reset a Rules Engine property to a different value, use the **SetProperty** method.

*Syntax*

```sql
SELECT RulesEngine.GetProperty( *property* )
```

The required and case-insensitive *property* is a string that must be the name of one of the Rules Engine properties.

> [!WARNING]
> Do not confuse Rules Engine properties with:

*Example*

This example returns the name of the application as known to the Rules Engine.

```sql
SELECT RulesEngine.GetProperty( 'Application' )
```

 