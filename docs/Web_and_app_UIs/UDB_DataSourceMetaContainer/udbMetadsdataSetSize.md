---
id: udbMetadsdataSetSize
---

# $.udbMeta(ds).dataSetSize()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **dataSetSize()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).dataSetSize()**

Gets the size of a data set of the first data source in the container.

Returns the size of a dataset.

*Syntax*

```js
$.udbMeta( *ds* ).dataSetSize( )
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Example*

```js
$.udbMeta('EMP').dataSetSize();
```

> [!WARNING]
> In versions prior to USoft 10.0.1K, you could use this function not only to get, but also to **set** a data set size. From 10.0.1K, if you attempt to use the function for this purpose, a warning is thrown and the call is forwarded to the new [$.udb(ds).setDataSetSize()](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer/udbdssetDataSetSize.md).