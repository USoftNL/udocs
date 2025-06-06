# How to create ActiveX Control Columns

In the Windows Designer, you can create ActiveX Control Columns. These controls have the look and feel of an imported ActiveX control while interacting with a column value stored for each record. The control must have a bindable property if this is to work.

To create an ActiveX Control Column, for instance, an ActiveX Calendar look and feel for a DATE database column:

1. On the Controls tab page of the , expand the Column Display, OLE Container, and ActiveX Control Column nodes.

2. From the list, select the ActiveX Control Column you want to use and place the cursor on it. If it is not there, copy or download it onto your machine first, and re-start the Windows Designer.

3. From the catalog, make a new ssublcass for the control and rename the new subclass to a manageable name, for instance, "MyCalendarColumn".

4. Open the window class containing the ActiveX control column. If you want ALL fields based on a particular DATE column to have the Calendar look and feel, choose the Base Table class for the table.

5. Select the column.

6. Open the Property Inspector and set the Display Class property to the name of the newly created ActiveX Column Control subclass (e.g. "MyCalendarColumn").

7. Save.