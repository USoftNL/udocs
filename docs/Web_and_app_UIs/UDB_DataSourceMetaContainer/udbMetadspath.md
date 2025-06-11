---
id: udbMetadspath
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).path()



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

This article is about the **path()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).path()**

Gets the full data source path of the first data source in the container, including embedded pages (if any).

Returns a data source path using [data source path syntax](/Web_and_app_UIs/Data_sources/Data_source_path_syntax.md).

*Syntax*

```js
$.udbMeta( *ds* ).path( *short* )

*short*  ::=  { true | false }
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

If *short* is true, the main page's path is excluded from the result.

*Example*

```js
$.udbMeta('EMP').path();

```

 