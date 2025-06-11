---
id: udbdstrigger
tags: [USoft11, USoft10]
---
# $.udb(ds).trigger()



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

This article is about the **trigger()** function of the [DataSourceContainer object](/Web_and_app_UIs/UDB_DataSourceContainer).

:::

## **$.udb(ds).trigger()**

Triggers an event (in the same way as in the jQuery implementation).

Returns the 'this' object.

*Syntax*

```js
$.udb( *ds* ).trigger( *eventType*, *data* )
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The required *eventType* is a string that identifies the event to be triggered. The possible values for the 'eventType' parameter are described in the Events reference section.

The optional *data* is an array of additional parameters to pass along to the event handler.

*Example*

```js
$.udb('EMP').on('rowselect', function(event, r) {
    alert('Row: ' + r.index());
});
$.udb('EMP').trigger('rowselect');
```

 