---
id: udbdsrowCount
tags: [USoft11, USoft10]
---
# $.udb(ds).rowCount()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **rowCount()** function of the [DataSourceContainer object](/docs/Web_and_app_UIs/UDB_DataSourceContainer).

## **$.udb(ds).rowCount()**

Returns the number of records of the first data source in the container.

*Syntax*

```js
$.udb( *ds* ).rowCount()
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
$.udb('EMP').rowCount();
```

This is short for:

```js
$.udb('EMP').rowSet('current').rowCount();
```

 