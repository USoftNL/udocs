---
id: udbMetadsisDistinct
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).isDistinct()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **isDistinct()** function of the [DataSourceMetaContainer object](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer).

## **$.udbMeta(ds).isDistinct()**

Detects whether the SELECT output list of the first data source in the container contains the DISTINCT operator, or not.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).isDistinct()
```

The required *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
var distinct = $.udbMeta('EMP').isDistinct();
```

 