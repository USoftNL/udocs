---
id: AllowSetManipulations
---

# AllowSetManipulations




:::note

This article is about the **AllowSetManipulations**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **AllowSetManipulations**

The **AllowSetManipulations** Rules Engine property can be used to override the  [ALLOW_SET_MANIPULATIONS](/Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Rules_Engine_parameters.md) Rules Engine parameter for the current deployment context and for the duration of the current session.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'AllowSetManipulations', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'AllowSetManipulations' )
```

This entire statement is case-insensitive, including the property name.

 

 