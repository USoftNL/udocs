# colpreupdate



> [!NOTE]
> This article is about the **colpreupdate**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **colpreupdate**

The **colpreupdate** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`colpreupdate`|Data source objects|Before a value in a column is updated *|



* Whether the value is updated manually or by looking up a (new) value from a dropdown list.

## Purpose

You can use the colpreupdate event to manipulate programmatically a value that a user supplied manually for update.

## How to use

Find or create an Event Listener object with Event Type = colpreupdate. Event Listeners are in the Web Designer Controls catalog:

![](/api/Web%20and%20app%20UIs/UDB%20Events/assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

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

## Examples

*Example 1*

This example tacitly sets a new age value to 18 if the value that the user attempts to update this column to is lower than 18:

```js
if (this.rows('current').cols("AGE").val() < 18)
  options.value = 18;
```

If the context of your code is such that the updated column is known to be the AGE column, you can abbreviate to:

```js
if (options.col.val() < 18)
    options.value = 18;
```

*Example 2*

This example replaces any empty values by the value "Unknown":

```js
if (options.value == "")
  options.value = "Unknown";
```

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.

```js
function( 'colpreupdate', *options* ){}

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



 