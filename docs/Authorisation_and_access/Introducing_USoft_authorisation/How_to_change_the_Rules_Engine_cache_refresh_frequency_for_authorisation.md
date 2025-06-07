---
id: How_to_change_the_Rules_Engine_cache_refresh_frequency_for_authorisation
tags: [USoft10]
---
# How to change the Rules Engine cache refresh frequency for authorisation

`USoft 10``{.vs_10}`


:::warning

This article is only for USoft 10. In USoft 11, cache refresh is fully automated and cannot be set.

:::

If the persons logging on to your web application switch roles or users, or if your role content changes frequently, you don't want the Rules Engine and the Page Engine caching authorisation data because this prevents the data refresh you are looking for.

Additionally, any time you are debugging or testing the effect of authorisation settings that you are developing or changing, you want to prevent caching because otherwise you are unsure whether you are looking at a cached result or a refreshed result.

This article helps you prevent or minimise caching. Because Rules Engine and Page Engine form 1 stack running your USoft web application, you need to address the cache refresh frequency of both.

## Determining how often the Rules Engine refreshes authorisation data

The Rules Engine cacheRefreshPeriod setting determines the frequency with which the Rules Engine refreshes its authorisation data. This period is 3 minutes by default.

USoft advises to set this resource to 0 or -1:

```
*cacheRefreshPeriod:0

```

This ensures that the Rules Engine will refresh its data on each logon and each call to RulesEngine.SetUSer().  Add this line, or edit the setting if the line already exists, in the **USDI file** (for USoft Batch, Rules Service, or Remote Rules Service API) or in the **USDIW file** (for client-server). These files can be found in the \\APP directory of your USoft installation.


:::tip

Theoretically there is a performance penalty: making less frequent calls will yield better performance. In practice, this is negligeable. In fact, we find most teams apply this 0 setting in all environments.

:::

## Determining how often the Page Engine refreshes authorisation data

If you run your USoft web application with a Page Engine defined in USoft Service Definer (now the norm), as opposed to a COM+ component in combination with IIS (now obsolete), then the cache refresh period of this Page Engine is determined by the setting of the Cache Refresh Period attribute of your Web Designer Publication Configuration. The default is 3 minutes. When you publish, Web Designer writes this setting to the \\_internal\\uspublication.xml file.

If you want to minimise caching, set the Cache Refresh Period for your Publication Configuration to 0. This results in the following element in “uspublication.xml”:

```xml
<CACHE_REFRESH PERIOD="0"/>
```

 