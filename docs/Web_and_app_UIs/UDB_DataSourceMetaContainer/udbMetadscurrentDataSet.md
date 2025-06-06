---
id: udbMetadscurrentDataSet
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).currentDataSet()



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

This article is about the **currentDataSet()** function of the [DataSourceMetaContainer object](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).currentDataSet()**

Gets the position of the data set of the first data source in the container that is the currently selected data set in that data source.

Returns an integer.

Syntax

```js
$.udbMeta( *ds* ).currentDataSet()
```

The required *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
var dsi = $.udb('EMP').currentDataSet();
```

 