---
id: udbMetadstable
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).table()



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

This article is about the **table()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).table()**

Returns the table name of the first data source in the container.

*Syntax*

```js
$.udbMeta( *ds* ).table()
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
$.udbMeta('EMP').table();
```

 