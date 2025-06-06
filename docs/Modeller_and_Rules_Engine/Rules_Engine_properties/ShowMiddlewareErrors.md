---
id: ShowMiddlewareErrors
---

# ShowMiddlewareErrors




:::note

This article is about the **ShowMiddlewareErrors**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **ShowMiddlewareErrors**

The **ShowMiddlewareErrors** Rules Engine property determines whether or not middleware error messages are displayed.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'ShowMiddlewareErrors', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'ShowMiddlewareErrors' )
```

This entire statement is case-insensitive, including the property name.