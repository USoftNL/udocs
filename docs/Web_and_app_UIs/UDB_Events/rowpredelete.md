---
id: rowpredelete
---

# rowpredelete



> [!NOTE]
> This article is about the **rowpredelete**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

## **rowpredelete**

The **rowpredelete** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`rowpredelete`|Data source objects|Before a record is deleted|



## Purpose

You can use this event restrictively to keep the user from deleting a record if some precondition is not satisfied.

## How to use

Find or create an Event Listener object with Event Type = rowpredelete. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs. For example, for restrictive action, a typical pattern is to specify the condition under which you want the record delete to be prevented, block processing, and give an error message in an alert box. This pattern looks like this:

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

Or you can create the event handler more explicitly by calling **$.udb('data-source').on()**.

## Example

```js
if ( this.rows('current').cols("AGE").val() < 18 ) {
  options.success = false;
  alert( "Cannot delete minors from this page." );
}
```

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.

```js
function( 'rowpredelete', *options* ){}

*options*   ::=  *event-options*

*event-options*   ::=  {
     success:  *success*
}

*success*  ::=  { true | false }
```

This syntax means that you can access the **success** option by scripting: options.success.
If you set *success* to false, processing is interrupted. As a result, the update will not take place.