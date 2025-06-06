# $.udbMeta(ds).isAutoQuery()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **isAutoQuery()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).isAutoQuery()**

Detects whether the data source automatically queries the next data sets. This depends on the value of the 'Automatically query next data sets' property of the data source. If this value is true, the data source automatically queries the next 9 data sets relative to the currently selected data set, after the last set has been queried. This is done asynchronically, so that the user is not hindered by its progress.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).isAutoQuery()
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

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

 