# $.udbMeta(ds).lifeTime()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **lifeTime()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).lifeTime()**

Gets the value of the Life Time property of the first data source in the container.

Returns an integer.

*Syntax*

```js
$.udbMeta( *ds* ).lifeTime()
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The value of the lifeTime property determines the lifecycle of the data in the data source:

|**Value**|**Explanation**|
|--------|--------|
|-1      |Data stays unchanged until it leaves the scope.|
|0       |Data is refreshed each time the data source is touched.|
|*n* (where *n *> 0)|Data is refreshed when an interval of *n* seconds has passed after the time it was last read.|



*Example*

```js
$.udbMeta('EMP').lifeTime();
```

 