---
id: udbMetadslifeTime
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).lifeTime()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **lifeTime()** function of the [DataSourceMetaContainer object](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).lifeTime()**

Gets the value of the Life Time property of the first data source in the container.

Returns an integer.

*Syntax*

```js
$.udbMeta( *ds* ).lifeTime()
```

The required *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

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

 