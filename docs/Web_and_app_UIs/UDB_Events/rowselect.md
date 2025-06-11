---
id: rowselect
---

# rowselect




:::note

This article is about the **rowselect**[ UDB event handler](/Web_and_app_UIs/UDB_Events).

:::

## **rowselect**

The **rowselect** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`rowselect`|Multi-record UI controls|A new record is selected in a multi-record control for any of the data sources in the page.|
|`rowselect`|Multi-record UI controls|A new record is selected in a multi-record control for the data source.|



This event occurs when a new row is selected in the data source in a multi-record UI control such as a GridControl, a TabularGridControl, or a ReplicatedColumnsControl. Such new row selection may be executed programmatically by calling [Rows.select()](/Web_and_app_UIs/UDB_Rows/Rowsselect.md).

## How to use

Find or create an Event Listener object with Event Type = rowselect. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the multi-record UI control. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.