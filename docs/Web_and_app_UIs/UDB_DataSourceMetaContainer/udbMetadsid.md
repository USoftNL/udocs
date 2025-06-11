---
id: udbMetadsid
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).id()



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

This article is about the **id()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).id()**

Gets the data source ID of the first data source in the container.

Returns a data source ID.

*Syntax*

```js
$.udbMeta( *ds* ).id()
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
$.udbMeta('EMP').id();
```

 