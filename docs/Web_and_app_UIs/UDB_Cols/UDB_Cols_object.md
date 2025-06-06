---
id: UDB_Cols_object
tags: [USoft11, USoft10]
---
# UDB Cols object



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

This article is about the **Cols** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
This model is built around the [udb](/docs/Web_and_app_UIs/UDB_udb), [DataSourceMetaContainer](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer), [DataSourceContainer](/docs/Web_and_app_UIs/UDB_DataSourceContainer), [Rowset](/docs/Web_and_app_UIs/UDB_Rowset), [Rows](/docs/Web_and_app_UIs/UDB_Rows), [ColsMeta](/docs/Web_and_app_UIs/UDB_ColsMeta), and Cols object types. See also [UDB events](/docs/Web_and_app_UIs/UDB_Events).

:::

A **Cols** object contains a collection of columns.

*Syntax*

```js
$.udb( *ds* ).rows( *rows* ).cols( *cols* )
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). If you omit *ds*, all the data sources in scope are selected.

The optional *rows* is a [row selector](/docs/Web_and_app_UIs/UDB_DataSourceContainer/udbdsrows.md). If you omit *rows,* all the rows in scope are selected.

The optional *cols* is a [column selector](/docs/Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object.md). If you omit *cols,* all the columns in scope are selected.

*Example*

```js
var v = $.udb('EMP').rows('current').cols('EMPNO');
```

 