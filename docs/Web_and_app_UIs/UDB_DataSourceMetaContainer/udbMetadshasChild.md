---
id: udbMetadshasChild
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).hasChild()



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

This article is about the **hasChild()** function of the [DataSourceMetaContainer object](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).hasChild()**

Detects whether a given data source is a direct child data source in the current scope, or whether it is a descendent data source.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).hasChild( *data-source*, *recursive* )

*recursive*  ::=  { true | false }
```

The required *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The required *data-source* identifies the data source to search for. Use [data source path syntax](/docs/Web_and_app_UIs/Data_sources/Data_source_path_syntax.md) to refer to data sources.

If the optional *recursive* is set to false (the default), the search is for direct children only. If *recursive* is true, the search is for children at any descendent level, for example, grandchildren.

*Example*

```js
var isRelated = $.udb('COMP').hasChild('DEPT');
```

 