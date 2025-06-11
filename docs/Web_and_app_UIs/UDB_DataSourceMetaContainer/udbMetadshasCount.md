---
id: udbMetadshasCount
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).hasCount()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **hasCount()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).hasCount()**

Detects whether a record count must be performed when querying the first data source in the container. This depends on the value of the hasCount property of that data source.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).hasCount()
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
$.udbMeta('EMP').hasCount();
```

 