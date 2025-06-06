# $.udbMeta(ds).realDataSource()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **realDataSource()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).realDataSource()**

Gets the name of the data source that a virtual data source is connected to.

Returns a data source ID.

If the first data source in the container is a virtual data source, this function returns the data source that that first data source is connected to. Otherwise, it returns that first data source.

*Syntax*

```js
$.udbMeta( *ds* ).realDataSource()
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Example*

```js
$.udbMeta('EMP').realDataSource();
```

 