---
id: timeout
---

# timeout



> [!NOTE]
> This article is about the **timeout**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

## **timeout**

The **timeout** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`timeout`|\<body> DOM element|User is idle for a longer period than the time-out period|



This event occurs when the idle time exceeds the time-out period set for the application. The idle time is the time during which the user does not perform any action causing a server call. Actions leading to a server call include new queries and commits.

> [!TIP]
> The timeout event is different from other top-level events in that it is bound to the entire application. It is attached directly to the **body** element of the HTML document (or rather, the **body** element as a DOM node), as the code example shows.

## Purpose

By default, when the user remains inactive for longer than the specified time-out period, the login page is displayed. You can use the timeout event to replace this default behaviour by something else.

## How to use

Create an explicit event handler by calling** $.udb.on()** for the **body** element:

```js
$("body").on("timeout", function(evt, options) {
  alert("This is the timeout event");
});
```

You can create and remove the event handler dynamically:

```js
function OnTimeOut(event,options){
    if(options.success)alert('Succeeded!');
}
$.udb.on('timeout',OnTimeOut);
$.udb.off('timeout',OnTimeOut);
```

 