---
id: udbMetadsdataSetSize
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).dataSetSize()



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

This article is about the **dataSetSize()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).dataSetSize()**

Gets the size of a data set of the first data source in the container.

Returns the size of a dataset.

*Syntax*

```js
$.udbMeta( *ds* ).dataSetSize( )
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
$.udbMeta('EMP').dataSetSize();
```


:::warning

In versions prior to USoft 10.0.1K, you could use this function not only to get, but also to **set** a data set size. From 10.0.1K, if you attempt to use the function for this purpose, a warning is thrown and the call is forwarded to the new [$.udb(ds).setDataSetSize()](/Web_and_app_UIs/UDB_DataSourceContainer/udbdssetDataSetSize.md).

:::
