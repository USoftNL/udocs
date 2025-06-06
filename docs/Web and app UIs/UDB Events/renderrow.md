# renderrow



> [!NOTE]
> This article is about the **renderrow**[ UDB event handler](/docs/Web%20and%20app%20UIs/UDB%20Events).

## **renderrow**

The **renderrow** event may be called from web pages developed in Web Designer and processed by a USoft page engine service.

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|`renderrow`|Multi-record UI controls|After the GUI realisation of the HTML for the row has been completed|



This event applies to multi-record UI controls only. For single-record UI controls, use the afterrender event instead.

## How to use

Find or create an Event Listener object with Event Type = renderrow. Event Listeners are in the Web Designer Controls catalog:

![](/api/Web%20and%20app%20UIs/UDB%20Events/assets/ff8672be-ff07-426e-ba7e-0ecf37444b63.png)

Insert the event listener into the Page object. Insert a callClientScript action into the event listener. Use this action's Script property to code the behaviour that you want to see when the event occurs.