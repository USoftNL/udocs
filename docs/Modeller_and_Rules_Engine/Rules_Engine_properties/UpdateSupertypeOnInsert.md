---
id: UpdateSupertypeOnInsert
---

# UpdateSupertypeOnInsert




:::note

This article is about the **UpdateSupertypeOnInsert**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **UpdateSupertypeOnInsert**

The **UpdateSupertypeOnInsert** Rules Engine property can be used to override the [UPDATE_SUPERTYPE_ON_INS ](/Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Rules_Engine_parameters.md)Rules Engine parameter setting for the current deployment context and for the duration of the current session.

This setting determines whether or not inserting a subtype for an existing supertype must be considered as an UPDATE on the whole constellation.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'UpdateSupertypeOnInsert', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of value. 'No' is the USoft factory default, meaning that the UPDATE_SUPERTYPE_ON_INS Rules Engine parameter is set to 'False' by default.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'UpdateSupertypeOnInsert' )
```

This entire statement is case-insensitive, including the property name.