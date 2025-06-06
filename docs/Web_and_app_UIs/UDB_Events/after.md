---
id: after
---

# after



> [!NOTE]
> This article is about the **after**[ UDB event handler](/docs/Web_and_app_UIs/UDB_Events).

## **after**

The **after** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`after` |Data source objects|After any Page Engine action that involves the data source, eg., getDataSet(), has been completed.|



The after event is raised as a consequence of the server handling Page Engine requests. This contrasts with the afterrender event, which is related to UI (ie., non‑server) events.

## Purpose

You can use the after event to hide waitstates that you have started showing on the before event.

## How to use

Find or create an Event Listener object with Event Type = after. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.