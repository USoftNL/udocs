---
id: LockParentOnSeqno
---

# LockParentOnSeqno




:::note

This article is about the **LockParentOnSeqno**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **LockParentOnSeqno**

The **LockParentOnSeqno** Rules Engine property can be used to override the [LOCK_PARENT_ON_SEQNO ](/docs/Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Rules_Engine_parameters.md)Rules Engine parameter setting for the current deployment context and for the duration of the current session.

This setting determines whether or not parent records must be locked whilst child records are being entered or edited.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'LockParentOnSeqno', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'LockParentOnSeqno' )
```

This entire statement is case-insensitive, including the property name.