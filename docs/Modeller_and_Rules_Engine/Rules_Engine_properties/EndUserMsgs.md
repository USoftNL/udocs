---
id: EndUserMsgs
---

# EndUserMsgs



> [!NOTE]
> This article is about the **EndUserMsgs**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **EndUserMsgs**

The **EndUserMsgs** Rules Engine property determines whether the end user message mode is to be enabled, disabled, or reset to the value it had when the application was started.

## Setting this property

You can reset this property by executing:
 

```sql
SELECT RulesEngine.SetProperty( 'EndUserMsgs', '*msg-mode*' )

*msg-mode*  ::=  { Yes | No | Reset }
```

This entire statement is case-insensitive, including the property name and the values of *msg-mode*.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'EndUserMsgs' )
```

This entire statement is case-insensitive, including the property name.