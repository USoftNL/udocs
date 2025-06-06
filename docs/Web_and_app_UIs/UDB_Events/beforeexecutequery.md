---
id: beforeexecutequery
---

# beforeexecutequery




:::note

This article is about the **beforeexecutequery**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

:::

## **beforeexecutequery**

The **beforeexecutequery** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`beforeexecutequery`|Data source objects|Before the data source is queried|



## Purpose

You can use the **beforeexecutequery** event to supply additional query conditions, to alter query conditions, or to enforce restrictively that the user supplies certain query conditions.

## How to use

Find or create an Event Listener object with Event Type = beforeexecutequery. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs. For example, for restrictive action, a typical pattern is to specify the condition under which you want the query to be prevented, block processing, and give an error message in an alert box. This pattern looks like this:

```js
if ( *condition-not-satisfied* ) {
  options.success = false;
  alert( *message* );
}
```

You are implicitly associating the event with an event handler function. This function has an options parameter. For available options, see the Options section at the end of this help topic:

```js
function(*evt*, *options*){ ... }
```

Or you can create the event handler more explicitly by calling **$.udb('data-source').on().**

*Example*

```js
if ( this.searchCols("PRODUCT_TYPE").val() == "" ) {
  options.success = false;
  alert( "To query, you must specify a product type." );
}
```

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.

```js
function( 'beforeexecutequery', *options* ){}

*options*   ::=  *event-options*

*event-options*   ::=  {
     success:  *success*,
     options:  *caller-options*
}

*success*  ::=  { true | false }
```

This syntax means that you can access the success option by scripting:

```js
options.success
```

and that you can access the caller options by scripting

```js
options.options.*caller-option*
```

If you set *success* to false, processing is interrupted. As a result, query execution will not take place.

*Caller-options* are the options exposed by the .executeQuery() function of the calling data source object.