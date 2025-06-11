---
id: udbMetadsrealDataSource
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).realDataSource()



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

This article is about the **realDataSource()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).realDataSource()**

Gets the name of the data source that a virtual data source is connected to.

Returns a data source ID.

If the first data source in the container is a virtual data source, this function returns the data source that that first data source is connected to. Otherwise, it returns that first data source.

*Syntax*

```js
$.udbMeta( *ds* ).realDataSource()
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
$.udbMeta('EMP').realDataSource();
```

 