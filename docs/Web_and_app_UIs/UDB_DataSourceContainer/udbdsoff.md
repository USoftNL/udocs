---
id: udbdsoff
---

# $.udb(ds).off()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **off()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).off()**

Removes a handler from an event (in the same way as in the jQuery implementation).

Returns the 'this' object.

*Syntax*

```js
$.udb( *ds* ).off( *eventType*, *handler*( *event* ) )
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The required *eventType* is a string that identifies the event to unbind. The possible values for the 'eventType' parameter are described in the Events reference section.

The required *handler*(*event*) is a function that identifies the entry to be removed.

*Example*

```js
function OnSelect(event, r) {al
    alert(Row: ' + r.index());
};
$.udb('EMP').on('rowselect', OnSelect);
$.udb('EMP').off('rowselect', OnSelect);
```

 