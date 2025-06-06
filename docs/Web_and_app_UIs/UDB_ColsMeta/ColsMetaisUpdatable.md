---
id: ColsMetaisUpdatable
tags: [USoft11, USoft10]
---
# ColsMeta.isUpdatable()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **isUpdatable()** function of the [ColsMeta object](/docs/Web_and_app_UIs/UDB_ColsMeta).

## **ColsMeta.isUpdatable()**

Finds out if this column may be updated.

Returns either a boolean or a string. Returns true if the column may be updated, false if it may not be updated, and 'isNull' if it may only be updated if NULL.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).isUpdatable()
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). The optional *cols* is a [column selector](/docs/Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object.md).

*Example*

```js
var updatable = $.udbMeta('EMP').cols('ADDRESS').isUpdatable();
```

 