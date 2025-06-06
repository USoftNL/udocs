---
id: udbMetadsisAutoQuery
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).isAutoQuery()



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

This article is about the **isAutoQuery()** function of the [DataSourceMetaContainer object](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).isAutoQuery()**

Detects whether the data source automatically queries the next data sets. This depends on the value of the 'Automatically query next data sets' property of the data source. If this value is true, the data source automatically queries the next 9 data sets relative to the currently selected data set, after the last set has been queried. This is done asynchronically, so that the user is not hindered by its progress.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).isAutoQuery()
```

The required *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
if ($.udb(this.dsId).isAutoQuery() && options.dsi < this.currentDSI+9 && options.dsi < this.nofSets) {
    var _this = this;
    var context = $.udb.currentFrameId;
    setTimeout(function(){
        $.udb.executeInContext(context, function() {
            _this.get({dsi: options.dsi + 1});
        }, _this);
    }, 5);
}
```

 