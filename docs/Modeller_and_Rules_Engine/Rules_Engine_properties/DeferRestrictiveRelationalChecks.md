---
id: DeferRestrictiveRelationalChecks
---

# DeferRestrictiveRelationalChecks




:::note

This article is about the **DeferRestrictiveRelationalChecks**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **DeferRestrictiveRelationalChecks**

The **DeferRestrictiveRelationalChecks** Rules Engine property can be used to override the [DEFER_RESTR_REL_CHECKS](/Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Rules_Engine_parameters.md) Rules Engine parameter setting for the current deployment context and for the duration of the current session.

This setting determines whether or not restrictive relational checks are deferred until commit time.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'DeferRestrictiveRelationalChecks', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*.

'Yes' is the USoft factory default, meaning that in USoft 10 the underlying the DEFER_RESTR_REL_CHECKS Rules Engine parameter is set to 'True' by default. After upgrade from a pre-9.1 version, DEFER_RESTR_REL_CHECKS is 'False' by default.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'DeferRestrictiveRelationalChecks' )
```

This entire statement is case-insensitive, including the property name.