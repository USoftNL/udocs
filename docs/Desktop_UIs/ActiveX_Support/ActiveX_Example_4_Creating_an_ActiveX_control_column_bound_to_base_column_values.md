---
id: ActiveX_Example_4_Creating_an_ActiveX_control_column_bound_to_base_column_values
---

# ActiveX Example 4: Creating an ActiveX control column bound to base column values

This example shows you how to:

- Create an ActiveX Control Column
- Have it respond to database values.

For this example, you need to have a version of the standard Microsoft Calendar Control on your machine. You also need a sample database column of the DATE data type.

To create the ActiveX control column subclass:

1. Click the Controls tab page, and expand the following nodes in this order: Column Display, OLE Container, ActiveX Control Column.

2. In the list of available ActiveX Control Columns, click with your right mouse button on the Calendar Control Column class, and choose New from the resulting menu.

A subclass of the Calendar class will be created.

Right-click on the new subclass, and rename it to MyCalendarColumn.

Press Enter, or click OK to dismiss the information box.

To use the ActiveX control column subclass:

3. From the Info Boxes tab page of the Windows Designer catalog, open an info window class containing a field based on a DATE base column.

4. Open the Property Inspector for the text box corresponding to the DATE base column.

5. Set the Display Class property of this text box to "MyCalendarColumn".

6. Using the Object Tree, navigate to the active_data child object of the column control.

7. On the Behavior tab page, make sure the Default Bind property of the active_data object refers to the property holding the selected date value. For version 7 of the calendar control, this is the "_Value" property (with an underscore), and for version 8, the "Value" property. In either case the property can be found on the General tab page of the Property Inspector.

8. Run the info window and perform a query in order to see the result. The date values in the database are now displayed in the calendar layout instead of in a text box.


:::note

This example only shows how to display existing date values in a different way. You cannot use this implementation to manipulate the date values, or to specify query conditions.

:::
