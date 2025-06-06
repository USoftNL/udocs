---
id: udboff
---

# $.udb.off()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **off()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.off()**

Removes a handler from an event (in the same way as in the jQuery implementation).

Returns the 'this' object.

*Syntax*

```js
.off( *eventType*, *handler(event)* )
```

The required *eventType* is a string that identifies the event to unbind. The possible values for the 'eventType' parameter are described in the Events reference section.

The required *handler(event)* is a function that identifies the entry to be removed.

*Example*

```js
function OnCommit(event,options){
    if(options.success)alert('Succeeded!');
}
$.udb.on('postcommit',OnCommit);
$.udb.off('postcommit',OnCommit);
```

 