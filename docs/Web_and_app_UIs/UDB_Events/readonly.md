---
id: readonly
---

# readonly



> [!NOTE]
> This article is about the **readonly**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **readonly**

The **readonly** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`readonly`|Read-only custom UI controls|When the value of the control becomes programmatically available|



This event applies only to read-only custom UI controls. They are controls with the Type property set to 'custom'.

## How to use

Find or create an Event Listener object with Event Type = readonly. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the object for the read-only custom UI control. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.