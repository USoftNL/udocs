---
id: ConstraintsActive
---

# ConstraintsActive




:::note

This article is about the **ConstraintsActive**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **ConstraintsActive**

If constraint disabling is allowed (see "Prerequisite..." below), the **ConstraintsActive** Rules Engine property determines whether or not table constraints, domain constraints and relationship attributes declared for the Rules Engine are applied.


:::danger

You should not normally set this property to No. Setting this property to No defeats the purpose of using a Rules Engine. If data have been manipulated with this property set to No, you can use USoft Benchmark after-the-fact to find out if this has led to any data that violate the rules implemented by the constraints and relationships. You can set this property to No to import data into an empty repository fast if you have independent reason to believe that the data are non-violating.

:::

## Prerequisite: Allow_Disable_Constraint = True

Setting this property only has an effect if you have set the [Allow_Disable_Constraint](/Authorisation_and_access/Deployment_configurations/Allow_Disable_Constraint.md) deployment configuration parameter to True.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'ConstraintsActive', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of value.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'ConstraintsActive' )
```

This entire statement is case-insensitive, including the property name.