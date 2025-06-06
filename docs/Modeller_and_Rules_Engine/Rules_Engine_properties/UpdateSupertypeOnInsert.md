---
id: UpdateSupertypeOnInsert
---

# UpdateSupertypeOnInsert



> [!NOTE]
> This article is about the **UpdateSupertypeOnInsert**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **UpdateSupertypeOnInsert**

The **UpdateSupertypeOnInsert** Rules Engine property can be used to override the [UPDATE_SUPERTYPE_ON_INS ](/docs/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/Rules%20Engine%20parameters.md)Rules Engine parameter setting for the current deployment context and for the duration of the current session.

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