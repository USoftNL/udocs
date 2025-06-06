---
id: beforecheckdata
---

# beforecheckdata



> [!NOTE]
> This article is about the **beforecheckdata**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

## **beforecheckdata**

The **beforecheckdata** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`beforecheckdata`|Page objects|Before each data check action|



USoft automatically checks newly submitted (inserted or updated) data when they are submitted to the server, for example, when the user commits or (in the case of child data) when the user navigates to a different parent row. In default USoft applications, the user can also request a data check manually by pressing the Check button. You can execute a data check programmatically calling $.udb.checkData().

## Purpose

You can use the beforecheckdata event to block processing if the event occurs and a given condition is not satisfied.

## How to use

Find or create an Event Listener object with Event Type = beforecheckdata. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the Page object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs. A typical pattern is to specify the condition under which you want processing to be blocked, to block the process, and to give an error message in an alert box. This pattern looks like this:

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

Or you can create the event handler more explicitly by calling **$.udb.on()**.

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.

```js
function( 'beforecheckdata', *options* ){}

*options*   ::=  *event-options*

*event-options*   ::=  {
     success:  *success*,
     options:  *caller-options*
}

*success*  ::=  { true | false }
```

This syntax means that you can access the **success** option by scripting:

```js
options.success
```

and that you can access the caller options by scripting

```js
options.options.*caller-option*
```

If you set *success* to false, processing is interrupted. As a result, the data check operation will not take place.

*Caller-options* are the options exposed by the .checkData() function of the calling page object.

 