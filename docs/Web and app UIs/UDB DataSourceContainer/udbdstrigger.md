# $.udb(ds).trigger()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **trigger()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).trigger()**

Triggers an event (in the same way as in the jQuery implementation).

Returns the 'this' object.

*Syntax*

```js
$.udb( *ds* ).trigger( *eventType*, *data* )
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The required *eventType* is a string that identifies the event to be triggered. The possible values for the 'eventType' parameter are described in the Events reference section.

The optional *data* is an array of additional parameters to pass along to the event handler.

*Example*

```js
$.udb('EMP').on('rowselect', function(event, r) {
    alert('Row: ' + r.index());
});
$.udb('EMP').trigger('rowselect');
```

 