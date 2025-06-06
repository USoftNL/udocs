---
id: udbdsmeta
tags: [USoft11, USoft10]
---
# $.udb(ds).meta()



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

This article is about the **meta()** function of the [DataSourceContainer object](/docs/Web_and_app_UIs/UDB_DataSourceContainer).

:::

## **$.udb(ds).meta()**

Returns the meta data container of the first data source in the container.


:::note

This is an alternative way of accessing metadata offered by the udbMeta() function object.

:::

*Syntax*

```js
$.udb( *ds* ).meta()
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

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

 