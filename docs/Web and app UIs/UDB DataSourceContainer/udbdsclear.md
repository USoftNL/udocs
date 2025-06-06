# $.udb(ds).clear()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **clear()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).clear()**

Clears the contents of the data sources in the container.

Returns the 'this' object.

*Syntax*

```js
$.udb( *ds* ).clear()
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Example*

```js
$.udb('EMP').clear();
```

 