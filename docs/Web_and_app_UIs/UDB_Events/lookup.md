---
id: lookup
---

# lookup




:::note

This article is about the **lookup**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

:::

## **lookup**

The **lookup** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`lookup`|Data objects of input controls|When the lookup button at the input control is clicked|



This event applies to Data objects for input controls that take foreign key values. They are input controls in a child table that offer a lookup button for looking up values in a parent table.

## How to use

Find or create an Event Listener object with Event Type = lookup. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the Data child object of the input control object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.

You are altering the default lookup functionality represented by the .navigateToLookup() function. If you want to offer the lookup functionality only if condition is satisfied, give the event handler the following script to execute:

```js
if ( *condition* )
  $.udb.navigateToLookup("lookup page", { ... });
```


:::danger

When USoft publishes runtime lookup behavior, it generates a lookup button and transfers the lookup behavior defined for the InputControl onto the 'onclick' event for that button. This transfer is only successful if you script against Web Designer objects as explained in the steps of this help topic. The following attempt at a fully programmatic approach would be *unsuccessful*:

:::
