---
id: BatchLogLevel
---

# BatchLogLevel




:::note

This article is about the **BatchLogLevel**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **BatchLogLevel**

The **BatchLogLevel** Rules Engine property can be used to override the [Batch_Loglevel](/Authorisation_and_access/Deployment_configurations/Batch_Loglevel.md) deployment configuration parameter setting for the current deployment context and for the duration of the current session.


:::tip

You can set deployment configuration parameters in USoft Authorizer for 3 different deployment contexts: Client/Server, RunBatch, and Rules Service.

:::

This setting determines the log level applied when USoft Batch jobs are run.

## Setting this property

You can set this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'BatchLogLevel', '*log-level*' )

*log-level*  ::=  { No Logging | Debug | Information | Error }
```

This entire statement is case-insensitive, including the property name and the values of *log-level*. 'Information' is the USoft factory default for the underlying Batch_Loglevel deployment parameter.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'BatchLogLevel' )
```

This entire statement is case-insensitive, including the property name.