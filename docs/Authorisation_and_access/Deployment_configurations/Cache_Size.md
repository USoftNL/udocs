---
id: Cache_Size
---

# Cache Size




:::note

This article is about the **Cache Size**[deployment configuration parameter](/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

:::

## **Cache Size**

*Allowed values*

```
*posivite integer*
```

The default value is 2500. This is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter by setting the Cache Size field in the General box at the top of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

The Cache Size setting is used to specify the maximum number of records stored in cache.

This cache is used for the local evaluation of SQL queries and may optimize performance by saving round trips to the database. The cache is useful when different SQL statements (constraint- or batch SQL) update the same record repeatedly. When this does not happen very often a high number (500+) of entries in the cache affects performance negatively. a high number of entries in the cache is easily achieved because deleting a record from the table does not delete it from the cache but marks it as deleted.

If performance is an issue with your application, experiment with this cache size.


:::tip

Changes made to this setting are only effective if the Record Facts Cache parameter is set to In Memory or On File.
Maintaining the cache on file is an old setting that is nowadays much slower than in memory cache or no cache, we intend to remove this option in a future version. Records in temporary tables (e.g. used within USoft Batch internally) are not cached in any way.

:::
