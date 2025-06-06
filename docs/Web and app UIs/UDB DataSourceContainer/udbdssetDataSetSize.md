# $.udb(ds).setDataSetSize()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **setDataSetSize()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).setDataSetSize()**

Sets the size of a data set of the first data source in the container.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

> [!NOTE]
> To get an existing data set size, call [$udbMeta(ds).dataSetSize()](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/udbMetadsdataSetSize.md).

*Syntax*

```js
$.udb( *ds* ).setDataSetSize( *value, promise* )

*promise*  ::=  { true | false }
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The required *value* is an integer specifying the desired target data set size.

The optional *promise *determines the return value of this function. If *promise* has the value 'true' (the default), a udbPromise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Example*

```js
$.udb('EMP').setDataSetSize(20);
```

 