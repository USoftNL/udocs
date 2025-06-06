# LockForeignKeys



> [!NOTE]
> This article is about the **LockForeignKeys**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **LockForeignKeys**

The **LockForeignKeys** Rules Engine property can be used to override the [Lock_Foreign_Keys](/docs/Authorisation%20and%20access/Deployment%20configurations/Lock_Foreign_Keys.md) deployment configuration parameter setting for the current deployment context and for the duration of the current session.

> [!TIP]
> You can set deployment configuration parameters in USoft Authorizer for 3 different deployment contexts: Client/Server, RunBatch, and Rules Service.

This setting determines whether or not the parent record must be locked when foreign keys are checked. If LockForeignKeys = Yes (the default), the parent record is locked whilst changes are made to child records.

You can also make this setting separately for an individual relationship by setting that relationship's "Lock Foreign Key on Check" attribute.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'LockForeignKeys', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'LockForeignKeys' )
```

This entire statement is case-insensitive, including the property name.