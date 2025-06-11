---
id: unload
---

# unload




:::note

This article is about the **unload**[ UDB event handler](/Web_and_app_UIs/UDB_Events).

:::

## **unload**

The **unload** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`unload`|Page objects|The page is "swapped" for a different page|



This event is similar, but not identical, to the HTML **onunload** event.

The HTML **onunload** event :

- Is usually attached to the \<body> DOM element.
- Occurs when the browser is about to unload the current page because it is instructed to navigate to a different page.
- Occurs after the HTML **beforeunload** event occurs. This **beforeunload** event may be used to prevent the browser from leaving the page.

The USoft **unload** event is usually attached to the top-level Page object.

The USoft **unload** event is different from HTML **onunload**, because in a USoft context you usually 'swap' displayed content dynamically, rather than to leave the current page completely. To explain when it occurs, we need a closer look at what happens during this 'swap'.

When opening a new page (stack) via menu navigation:

- The existing controls are unrendered and any resources they use are cleaned up;
- The existing data sources are destroyed;
- The new page controls are loaded and displayed following the procedure described for the USoft **load** event.

When opening a lookup or related page:

- The existing controls are hidden;
- The current data sources are "archived";
- The page stack index is increased;
- The new page is loaded following the procedure described for the USoft **load** event.

When a lookup or related page is closed and the application navigates back to the original page (.closePage() behaviour):

- The existing controls are unrendered;
- Information from current data sources that is needed on the original page is sent back, and then the current data sources are destroyed;
- The original page is re-displayed, previous data sources are "unarchived", and updated with info from the lookup or related page.

In these scenarios, the USoft **unload** event occurs when existing controls are unrendered, or in the case of a lookup or related page being opened, directly before the previous page content is hidden.

How to use

Find or create an Event Listener object with Event Type = unload. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the Page object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.