---
id: ColsMetaisKey
tags: [USoft11, USoft10]
---
# ColsMeta.isKey()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **isKey()** function of the [ColsMeta object](/docs/Web_and_app_UIs/UDB_ColsMeta).

:::

## **ColsMeta.isKey()**

Finds out if this column is a key column.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).isKey()
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). The optional *cols* is a [column selector](/docs/Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object.md).

This function returns true if the column is a key column, false otherwise.

*Example*

```js
var isKey = $.udbMeta('EMP').cols('EMPLOYEE_ID').isKey();
```

 