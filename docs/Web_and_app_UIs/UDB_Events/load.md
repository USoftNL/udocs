---
id: load
---

# load



> [!NOTE]
> This article is about the **load**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

## **load**

The **load** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`load`  |Page objects|The first time the page is constructed|



This event is similar, but not identical, to the HTML **onload** event.

The HTML **onload** event :

- Is usually attached to the \<body> DOM element.
- Occurs when the document has finished loading.
- For images, this event occurs when the specific image has finished loading and is displayed on the screen.
- For scripts, this event occurs when the script file content has been loaded. The script itself has NOT been executed at this time; script execution happens in parallel to anything defined for the event, but independently of it.

The USoft **load** event is different, because USoft uses dynamic page construction. This event:

- Is usually attached to the top-level Page object.
- Occurs at the time when all data sources have been created and initiated * and all USoft UI controls and their child elements have been created **.

* At the time when a data source is created and initiated, the query has started, but has not necessarily completed. When **load** occurs, any 'deferred query' data sources have not started yet: if they contain asynchronous content, they are started immediately after the event handling is started; otherwise, they are started when event handling has finished.

** At the time when USoft UI controls are created, they have all been added to the DOM as well.

## How to use

Find or create an Event Listener object with Event Type = load. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the Page object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.