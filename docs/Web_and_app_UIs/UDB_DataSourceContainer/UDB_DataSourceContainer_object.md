---
id: UDB_DataSourceContainer_object
tags: [USoft11, USoft10]
---
# UDB DataSourceContainer object



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **DataSourceContainer** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
> This model is built around the [udb](/docs/Web_and_app_UIs/UDB_udb), [DataSourceMetaContainer](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer), DataSourceContainer, [Rowset](/docs/Web_and_app_UIs/UDB_Rowset), [Rows](/docs/Web_and_app_UIs/UDB_Rows), [ColsMeta](/docs/Web_and_app_UIs/UDB_ColsMeta), and [Cols](/docs/Web_and_app_UIs/UDB_Cols) object types. See also [UDB events](/docs/Web_and_app_UIs/UDB_Events).

A **DataSourceContainer** object contains one or more specified data sources.

*Syntax*

```js
$.udb( *ds* )
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). If you do not specify *ds,* all the data sources in scope are returned.

*Examples*

```js
var dsc = $.udb();
```

```js
var dsc = $.udb('EMP');
```

```js
var dsc = $.udb(['EMP','DEPT']);
```

> [!NOTE]
> Alternatively, instead of using data source names, you can identify data sources by ID. Additionally, you can identify data sources with the help of data source paths, pages, frame controls, and meta-selectors. All the options explained for [$.udbMeta()](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md) also apply to **$.udb()**.