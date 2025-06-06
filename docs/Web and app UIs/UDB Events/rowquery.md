# rowquery



> [!NOTE]
> This article is about the **rowquery**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **rowquery**

The **rowquery** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`rowquery`|Data source objects|Before row selection changes to a different row|



## Purpose

You can use this event to prevent the user from moving on to a different row, perhaps because a specific value must be supplied or changed in the currently selected row.

## How to use

Find or create an Event Listener object with Event Type = rowquery. Event Listeners are in the Web Designer Controls catalog:

![](/api/Web%20and%20app%20UIs/UDB%20Events/assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.