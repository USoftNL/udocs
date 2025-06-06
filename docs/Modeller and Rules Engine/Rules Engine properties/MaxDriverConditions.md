# MaxDriverConditions



> [!NOTE]
> This article is about the **MaxDriverConditions**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **MaxDriverConditions**

The **MaxDriverConditions** Rules Engine property can be used to override the [Max_Driver_Conditions](/docs/Authorisation%20and%20access/Deployment%20configurations/Max_Driver_Conditions.md) deployment configuration parameter setting for the current deployment context and for the duration of the current session.

> [!TIP]
> You can set deployment configuration parameters in USoft Authorizer for 3 different deployment contexts: Client/Server, RunBatch, and Rules Service.

This setting determines how USoft builds queries to perform constraint checks when the primary key cannot be found directly.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'MaxDriverConditions', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'MaxDriverConditions' )
```

This entire statement is case-insensitive, including the property name.