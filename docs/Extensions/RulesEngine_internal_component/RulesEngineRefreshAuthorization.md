---
id: RulesEngineRefreshAuthorization
tags: [USoft10]
---
# RulesEngine.RefreshAuthorization

`USoft 10``{.vs_10}`


:::warning

This article is only for USoft 10. In USoft 11, cache refresh is fully automated and cannot be set.

:::

## **RulesEngine.RefreshAuthorization**

Instantly refreshes all authorization data regardless of the setting of the Rules Engine's cacheRefreshPeriod resource.

There is no return value.

*Syntax*

```sql
SELECT RulesEngine.RefreshAuthorization()
```

 