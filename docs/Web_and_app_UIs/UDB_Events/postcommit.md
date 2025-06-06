---
id: postcommit
---

# postcommit



> [!NOTE]
> This article is about the **postcommit**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **postcommit**

The **postcommit** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`postcommit`|Page objects|After each commit action|



## Purpose

You can use the postcommit event to obtain additional behaviour that depends on whether the commit ended successfully or not.

## How to use

Find or create an Event Listener object with Event Type = postcommit. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the Page object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs. A typical pattern is to test whether the commit completed successfully or not, and then script behaviour depending on this outcome. This pattern looks like this:

```js
if (options.success)
  // additional action if commit succeeded
else
  // additional action if commit failed
```

You are implicitly associating the event with an event handler function. This function has an options parameter. For available options, see the Options section at the end of this help topic:

```js
function(*evt*, *options*){ ... }
```

Or you can create the event handler more explicitly by calling **$.udb.on()**.

## Example

```js
$.udb.on("postcommit", function(evt, options) {
  if (options.success)
    alert("Commit succeeded.");
  else
    alert("Commit failed.");
});
```

## Options

When the event occurs, the following event handler function is called. You can use this function's options parameter in your event scripting.

```js
function( 'postcommit', *options* ){}

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

You can use *success* to test whether the commit was successful. *Caller-options* are the options exposed by the .commit() function of the calling page object.