---
id: WaitForLock
---

# WaitForLock



> [!NOTE]
> This article is about the **WaitForLock**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

## **WaitForLock**

The WaitForLock Rules Engine property can be used to override the [Wait_For_Lock](/docs/Authorisation_and_access/Deployment_configurations/Wait_for_Lock.md) deployment configuration parameter setting for the current deployment context and for the duration of the current session.

> [!TIP]
> You can set deployment configuration parameters in USoft Authorizer for 3 different deployment contexts: Client/Server, RunBatch, and Rules Service.

This setting determines whether or not your application is to wait for locks in the database to be obtained:

- If it is set to wait/True, every locking attempt will wait until it obtains the lock (or is timed out by the database).
- If it is set to nowait/False, every locking attempt will return immediately when it fails.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'WaitForLock', '*value*' )

*value*  ::=  { wait | nowait }
```

This entire statement is case-insensitive, including the property name and the values of *value*.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'WaitForLock' )
```

This entire statement is case-insensitive, including the property name.