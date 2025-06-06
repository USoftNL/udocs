---
id: value
---

# value




:::note

This article is about the **value**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

:::

## **value**

The **value** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`value` |Custom UI controls|When the value of the custom control become programmatically available.|



This event only applies to custom UI controls. They are controls that have the Type property set to 'custom'.

## Purpose

You can use this event to adjust the way in which the value is displayed in the control.

## How to use

Find or create an Event Listener object with Event Type = value. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the object for the custom UI control. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs. A typical pattern is to mix the control value with an HMTL structure responsible for altering aspects of display style:

```js
$(this).empty().append('<span data-lang="'+ options.value + '">' +
$.udb.msg.getString(options.value) + ':</span>');
```

You are implicitly associating the event with an event handler function. This function has an options parameter. For available options, see the Options section at the end of this help topic:

```js
function(*evt*, *options*){ ... }
```

For available options, see the Options section at the end of this help topic:

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.
 

```js
function( 'value', *options* ){}

*options*   ::=  *event-options*

*event-options*   ::=  {
     value:  *value*
}
```

This syntax means that you can access the **value** option by scripting:

```js
options.*value*
```

 