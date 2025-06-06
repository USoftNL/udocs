# ShowRdbmsErrors



> [!NOTE]
> This article is about the **ShowRdbmsErrors**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **ShowRdbmsErrors**

The **ShowRdbmsErrors** Rules Engine property can be used to override the [Show_Rdbms_Errors](/docs/Authorisation%20and%20access/Deployment%20configurations/Show_Rdbms_Errors.md) deployment configuration parameter setting for the current deployment context and for the duration of the current session.

> [!TIP]
> You can set deployment configuration parameters in USoft Authorizer for 3 different deployment contexts: Client/Server, RunBatch, and Rules Service.

This setting determines whether or not RDBMS error messages are displayed.

## Setting this property

```sql
SELECT RulesEngine.GetProperty( 'ShowRdbmsErrors' )
```

You can reset this property by executing:
 

```sql
SELECT RulesEngine.SetProperty( 'ShowRdbmsErrors', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'ShowRdbmsErrors' )
```

This entire statement is case-insensitive, including the property name.