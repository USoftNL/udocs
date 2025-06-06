---
id: udbdscreateRowSet
tags: [USoft11, USoft10]
---
# $.udb(ds).createRowSet()



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

This article is about the **createRowSet()** function of the [DataSourceContainer object](/docs/Web_and_app_UIs/UDB_DataSourceContainer).

:::

## **$.udb(ds).createRowSet()**

Creates a new rowset in the data source for some parent key.

Returns the associated Rowset object.

*Syntax*

```js
$udb( *ds* ).createRowSet( *parent-key* )
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The possible values for the required *parent-key* are described in topic: dsc.rowSet() function.


:::tip

If *parent-key* has the value 'current', then no Rowset object is created, and the currently active Rowset is returned.

:::


:::tip

If the Rowset to be created already exists, then no new Rowset is created.

:::

*Example*

```js
$.udb(alias).createRowSet(parentKey).select();
$.udb(childProps.alias).executeQuery({
    source: "TreeControl",
    success: function(options) {
        $.udb(options.dsRefs).trigger("showdata", {parentId: row.rowId(), pKeys:
            parentKey, mode: null, source: 'openfolder', nodeId:
            options.args.nodeId});
        $.udb(options.dsRefs).trigger("aftertreedata");
    },
    hostvars: this.getParentKeys(childProps.alias, row),
    args: {nodeId: n}
});
```

 