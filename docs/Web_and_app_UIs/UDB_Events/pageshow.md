---
id: pageshow
---

# pageshow



> [!NOTE]
> This article is about the **pageshow**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **pageshow**

The **pageshow** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`pageshow`|Page objects|Every time the page is constructed|



This event is similar, but not identical, to the HTML **onpageshow** event. These 2 events are also similar, but not identical, to the **load** and **onload** events.

The HTML onpageshow event :

- Is usually attached to the \<body> DOM element.
- Occurs every time the page is loaded. Compare this to the HTML onload event, which does not occur when the page is re-loaded from the browser cache.
- May be used to trigger an action every time the user navigates to a different page in the browser cache by operating the browser's Back and Forward buttons.

The USoft **pageshow** event has a completely different practical purpose. In a USoft context, when navigating to a page displayed as a dialog, the load event does not occur since no new content is being loaded or rendered, and therefore we need to use the pageshow event in order to execute some action when the dialog is navigated to.

The USoft **pageshow** event occurs just after the USoft **load** event, which is something to keep in mind when you use both events on the same page. Alternatively, you can use the **startpagecomplete** event, which occurs after the **pageshow** event at the very end of the page loading process.

## How to use

Find or create an Event Listener object with Event Type = pageshow. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the Page object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.