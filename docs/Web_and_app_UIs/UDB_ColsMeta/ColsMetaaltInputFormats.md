---
id: ColsMetaaltInputFormats
tags: [USoft11, USoft10]
---
# ColsMeta.altInputFormats()



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

This article is about the **altInputFormats()** function of the [ColsMeta object](/Web_and_app_UIs/UDB_ColsMeta).

:::

## **ColsMeta.altInputFormats()**

Returns an array of the alternative input formats of the first item.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).altInputFormats()
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). The optional *cols* is a [column selector](/Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object.md).

*Example*

```js
var altFormats = $.udbMeta('EMP').cols('POSTAL_CODE').altInputFormats();
```

 