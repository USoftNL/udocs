---
id: ShowComponentErrors
---

# ShowComponentErrors




:::note

This article is about the **ShowComponentErrors**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **ShowComponentErrors**

The **ShowComponentErrors** Rules Engine property can be used to override the [Show_Component_Errors](/Authorisation_and_access/Deployment_configurations/Show_Component_Errors.md) deployment configuration parameter setting for the current deployment context and for the duration of the current session.


:::tip

You can set deployment configuration parameters in USoft Authorizer for 3 different deployment contexts: Client/Server, RunBatch, and Rules Service.

:::

This setting determines whether or not component error messages are displayed.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'ShowComponentErrors', '*value*' )

value  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*. 'Yes' is the USoft factory default, meaning that the Show_Component_Errors deployment parameter has the default value of 'True'.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'ShowComponentErrors' )
```

This entire statement is case-insensitive, including the property name.