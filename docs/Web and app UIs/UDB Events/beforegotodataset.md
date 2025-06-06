# beforegotodataset



> [!NOTE]
> This article is about the **beforegotodataset**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **beforegotodataset**

The **beforegotodataset** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`beforegotodataset`|Data source objects|Before navigation to a different data set takes place|



A data set, or record set, is a set of query result records that is displayed in one and the same page. If the query result has more items than can be displayed in a single data set, some way is provided to the user to navigate between the various data sets. In USoft default pages, a DataSetNumbers control is offered for this purpose below the grid that displays the current data set. To navigate programmatically, call the .gotoDataSet() function.

## Purpose

You can use the beforegotodataset event to block the navigation if the event occurs and a given condition is not satisfied.

## How to use

Find or create an Event Listener object with Event Type = beforegotodataset. Event Listeners are in the Web Designer Controls catalog:

![](/api/Web%20and%20app%20UIs/UDB%20Events/assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs. A typical pattern is to specify the condition under which you want processing to be blocked, to block the process, and to give an error message in an alert box. This pattern looks like this:

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

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.

```js
function( 'beforegotodataset', *options* ){}

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

If you set *success* to false, processing is interrupted. As a result, navigation to the data set will not take place.

*Caller-options* are the options exposed by the .gotoDataSet() function of the calling data source object.