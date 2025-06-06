---
id: colpostupdate
---

# colpostupdate




:::note

This article is about the **colpostupdate**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

:::

## **colpostupdate**

The **colpostupdate** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`colpostupdate`|Data source objects|After a value in a column is updated *|



* Whether the value is updated manually or by looking up a (new) value from a dropdown list.

## Purpose

You can use this event to supplement a user UPDATE with follow-on actions based on the result of the update (the new values). 

## How to use

Find or create an Event Listener object with Event Type = beforecheckdata. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs. A typical pattern is to specify the condition under which you want to manipulate the user input, and then to specify how you want to alter the input if the condition applies. This pattern looks like this:

```js
if ( *user-value-test* ) {
  options.value = *manipulated-value*;
}
```

You are implicitly associating the event with an event handler function. This function has an options parameter. For available options, see the Options section at the end of this help topic:

```js
function(*evt*, *options*){ ... }
```

Or you can create the event handler more explicitly by calling **$.udb('data-source').on()**.

*Example*

This example passes the result of the column update in a message to the user:

```js
alert( "The new value is " + options.value);
```

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.

```js
function( 'colpostupdate', *options* ){}

*options*   ::=  *event-options*

*event-options*   ::=  {
     options:  *caller-options*
}
```

This syntax means that you can access a caller option by scripting

```js
options.*caller-option*
```

*Caller-options* are as follows:

|**Property**|**Type**|**Description**|
|--------|--------|--------|
|value   |(Any primitive type)|The value that the column is updated to|
|col     |String  |The name of the column being updated|
|record  |Number, Array|The index(es) of the affected row(s)|



 