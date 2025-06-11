---
id: udbdssetDataSetSize
tags: [USoft11, USoft10]
---
# $.udb(ds).setDataSetSize()



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

This article is about the **setDataSetSize()** function of the [DataSourceContainer object](/Web_and_app_UIs/UDB_DataSourceContainer).

:::

## **$.udb(ds).setDataSetSize()**

Sets the size of a data set of the first data source in the container.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.


:::note

To get an existing data set size, call [$udbMeta(ds).dataSetSize()](/Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsdataSetSize.md).

:::

*Syntax*

```js
$.udb( *ds* ).setDataSetSize( *value, promise* )

*promise*  ::=  { true | false }
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The required *value* is an integer specifying the desired target data set size.

The optional *promise *determines the return value of this function. If *promise* has the value 'true' (the default), a udbPromise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Example*

```js
$.udb('EMP').setDataSetSize(20);
```

 