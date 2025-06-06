# $.udbMeta(ds).path()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **path()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).path()**

Gets the full data source path of the first data source in the container, including embedded pages (if any).

Returns a data source path using [data source path syntax](/docs/Web%20and%20app%20UIs/Data%20sources/Data%20source%20path%20syntax.md).

*Syntax*

```js
$.udbMeta( *ds* ).path( *short* )

*short*  ::=  { true | false }
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

If *short* is true, the main page's path is excluded from the result.

*Example*

```js
$.udbMeta('EMP').path();

```

 