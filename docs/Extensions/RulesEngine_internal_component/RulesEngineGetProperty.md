---
id: RulesEngineGetProperty
---

# RulesEngine.GetProperty




:::note

This article is about the **GetProperty** method of the [RulesEngine internal component](/Extensions/RulesEngine_internal_component).
See also [Rules Engine properties](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **RulesEngine.GetProperty**

Retrieves the current setting for a [Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties) by accessing the value of the specified property. To reset a Rules Engine property to a different value, use the **SetProperty** method.

*Syntax*

```sql
SELECT RulesEngine.GetProperty( *property* )
```

The required and case-insensitive *property* is a string that must be the name of one of the Rules Engine properties.


:::warning

Do not confuse Rules Engine properties with:

:::

*Example*

This example returns the name of the application as known to the Rules Engine.

```sql
SELECT RulesEngine.GetProperty( 'Application' )
```

 