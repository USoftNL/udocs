---
id: RulesEngineSetProperty
---

# RulesEngine.SetProperty




:::note

This article is about the **SetProperty** method of the [RulesEngine internal component](/Extensions/RulesEngine_internal_component).
See also [Rules Engine properties](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **RulesEngine.SetProperty**

Sets or changes system information kept by the Rules Engine by (re)setting the value of a [Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties). To retrieve the existing value of a property, use the **GetProperty**method.


:::warning

Do not confuse Rules Engine properties with:

:::

*Syntax 1*

```sql
SELECT RulesEngine.SetProperty( *property, value* )
```

*Syntax 2*

```sql
INVOKE RulesEngine.SetProperty WITH
SELECT     *property*
,          *value*
FROM       …
```

The required and case-insensitive *property* must be a string that is the name of one of the Rules Engine properties.

*Example*

```sql
SELECT RulesEngine.SetProperty( 'MaxConstraintDepth', 75 )
```

 