---
id: How_to_display_data_as_hyperlink
---

# How to display data as hyperlink

For input controls that contain data representing a URI or URL, you can specify that this data must be displayed as a hyperlink

*Example 1*

```
http://www.mysite.com
```

*Example 2*

```
mailto:webmaster@myorganization.com
```

To display data as hyperlink:

1. In the object tree, select the input control that displays URL data.

Usually, this is a grid cell control, or the underlying Data input control of a TextColumnControl.

2. Choose Insert, EventListener from the menu.

You can also drag an Event object from the Controls tab of the catalog, for example the onclick Event Listener.

3. For the new EventListener1 object, set the Event Type to the (HTML) event on which you want to perform the action, for example: onclick.

You can type any W3C standard HTML event type in this field.

4. From the menu, select Insert, Action, and choose the showURI action from the dropdown list.

You can also drag the showURI action from the Controls tab of the catalog.

5. Click OK.

6. Save your changes.