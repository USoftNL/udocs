---
id: udbtrigger
tags: [USoft11, USoft10]
---
# $.udb.trigger()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **trigger()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

## **$.udb.trigger()**

Triggers an event (in the same way as in the jQuery implementation).

Returns the 'this' object.

*Syntax*

```js
.trigger( *eventType*, *data* )
```

The required *eventType* is a string that identifies the event to be triggered. The possible values for the 'eventType' parameter are listed and described in the Events reference section.

The optional *data* is an array of additional parameters to pass along to the event handler.

*Examples*

```js
$.udb.trigger("login");
```

```js
$.udb.trigger("aftergetmenu",{menu:menu,menuName:name});
```

 