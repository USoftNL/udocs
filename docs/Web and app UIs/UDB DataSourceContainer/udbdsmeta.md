# $.udb(ds).meta()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **meta()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).meta()**

Returns the meta data container of the first data source in the container.

> [!NOTE]
> This is an alternative way of accessing metadata offered by the udbMeta() function object.

*Syntax*

```js
$.udb( *ds* ).meta()
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Example*

```js
var ds = $.udb("EMP");
var dsMeta = ds.meta();
```

This is equivalent to:

```js
var ds = $.udb("EMP");
var dsMeta = $.udbMeta(ds);
```

 