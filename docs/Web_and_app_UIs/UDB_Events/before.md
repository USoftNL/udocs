---
id: before
---

# before



> [!NOTE]
> This article is about the **before**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

## **before**

The **before** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`before`|Data source objects|Before any Page Engine action that involves the data source, eg., getDataSet().|



The before event is raised as a consequence of the server handling Page Engine requests.

 

## Purpose

You can use the before event to show waitstates that you hide subsequently on the after event.

> [!WARNING]
> The before event is not suitable for blocking or preventing the Page Engine action under specific conditions. For this purpose, use specific before... events instead, such as beforecheckdata.

## How to use

Find or create an Event Listener object with Event Type = before. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.