---
id: showdata
---

# showdata



> [!NOTE]
> This article is about the **showdata**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **showdata**

The **showdata** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`showdata`|Data source objects|New data is available for display.|



## Purpose

You can use this event to notify controls on the page that new data is available for display.

## How to use

Find or create an Event Listener object with Event Type = showdata. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the page or data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.