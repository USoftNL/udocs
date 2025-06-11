---
id: ColsMetaisGroupBy
tags: [USoft11, USoft10]
---
# ColsMeta.isGroupBy()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **isGroupBy()** function of the [ColsMeta object](/Web_and_app_UIs/UDB_ColsMeta).

:::

## **ColsMeta.isGroupBy()**

Finds out if this column is part of a GROUP BY clause.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).isGroupBy()
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). The optional *cols* is a [column selector](/Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object.md).

This function returns true if the column is part of a GROUP BY clause, false otherwise.

*Example*

```js
var isGroupBy = $.udbMeta('EMP').cols('DEPT_ID').isGroupBy();
```

 