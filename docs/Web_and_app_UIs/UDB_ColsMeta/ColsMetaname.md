---
id: ColsMetaname
tags: [USoft11, USoft10]
---
# ColsMeta.name()



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

This article is about the **name()** function of the [ColsMeta object](/Web_and_app_UIs/UDB_ColsMeta).

:::

## **ColsMeta.name()**

Finds out what is this column's name.

Returns a string.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).name()
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). The optional *cols* is a [column selector](/Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object.md).

*Example*

```js
var name = $.udbMeta('EMP').cols('EMPNO').name();
```

 