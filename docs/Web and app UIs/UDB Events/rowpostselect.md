# rowpostselect



> [!NOTE]
> This article is about the **rowpostselect**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **rowpostselect**

The **rowpostselect** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`rowpostselect`|Data source objects|After a record is selected|



How to use

Find or create an Event Listener object with Event Type = rowpostselect. Event Listeners are in the Web Designer Controls catalog:

![](/api/Web%20and%20app%20UIs/UDB%20Events/assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the data source object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.