---
id: rowpostrefresh
---

# rowpostrefresh




:::note

This article is about the **rowpostrefresh**[ UDB event handler](/Web_and_app_UIs/UDB_Events).

:::

## **rowpostrefresh**

The **rowpostrefresh** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`rowpostrefresh`|Data source objects|After a record is refreshed|



## How to use

Find or create an Event Listener object with Event Type = rowpostrefresh. Event Listeners are in the Web Designer Controls catalog:

![](./assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.