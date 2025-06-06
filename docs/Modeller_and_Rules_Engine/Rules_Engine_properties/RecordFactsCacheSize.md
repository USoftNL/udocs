---
id: RecordFactsCacheSize
---

# RecordFactsCacheSize



> [!NOTE]
> This article is about the **RecordFactsCacheSize**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **RecordFactsCacheSize**

The **RecordFactsCacheSize** Rules Engine property can be used to override the "[Cache Size](/docs/Authorisation%20and%20access/Deployment%20configurations/Cache%20Size.md)" deployment configuration parameter setting for the current deployment context and for the duration of the current session.

> [!TIP]
> You can set deployment configuration parameters in USoft Authorizer for 3 different deployment contexts: Client/Server, RunBatch, and Rules Service.

This setting is used to specify the maximum number of records stored in cache. For details, see the "Cache Size" topic.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'RecordFactsCacheSize', '*value*' )
```

where the required *value* is either a positive integer or the value -1. In the case of a positive integer, the cache is set to that size. In the case of -1, caching is turned off.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'RecordFactsCacheSize' )
```

The statements are entirely case-insensitive, including the property name.