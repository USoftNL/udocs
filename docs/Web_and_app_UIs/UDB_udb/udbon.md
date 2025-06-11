---
id: udbon
tags: [USoft11, USoft10]
---
# $.udb.on()



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

This article is about the **on()** function of the [udb object](/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.on()**

Binds a handler to an event (in the same way as in the jQuery implementation).

Returns the 'this' object.

*Syntax*

```js
.on( eventType, data, handler(event) )
```

The required *eventType* is a string that identifies the event to bind to. The possible values for the 'eventType' parameter are described in the Events reference section.

The optional *data* is a key-value map that contains certain data options to be passed to the event as its events.data object.

The optional *handler(event)* is a function that identifies the entry to be removed.

*Example*

```js
function OnCommit(event,options){
    if(options.success)alert('Succeeded!');
}
$.udb.on('postcommit',OnCommit);
$.udb.off('postcommit',OnCommit);
```

 