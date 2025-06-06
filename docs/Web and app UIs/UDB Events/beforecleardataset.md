# beforecleardataset



> [!NOTE]
> This article is about the **beforecleardataset**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **beforecleardataset**

The **beforecleardataset** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`beforecleardataset`|Data source objects|Before a data set is cleared|



## How to use

Find or create an Event Listener object with Event Type = beforecleardataset. Event Listeners are in the Web Designer Controls catalog:

![](/api/Web%20and%20app%20UIs/UDB%20Events/assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.

You are implicitly associating the event with an event handler function. This function has an options parameter. For available options, see the Options section at the end of this help topic:

```js
function(*evt*, *options*){ ... }
```

Or you can create the event handler more explicitly by calling **$.udb('data-source').on().**

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.

```js
function( 'beforecleardataset', *options* ){}

*options*   ::=  *event-options*

*event-options*   ::=  {
     success:  *success*
}

*success*  ::=  { true | false }
```

This syntax means that you can access the **success** option by scripting:

```js
options.success
```

If you set *success* to false, processing is interrupted. As a result, navigation to the data set will not take place.