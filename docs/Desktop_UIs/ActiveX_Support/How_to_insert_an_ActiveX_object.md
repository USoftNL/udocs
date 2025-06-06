---
id: How_to_insert_an_ActiveX_object
---

# How to insert an ActiveX object

Before inserting an ActiveX object, first determine which of the following applies:

- The control is to be used as an independent GUI control
- The control will enable the user to view and manipulate column values stored in the application database.

In the second case, you should create an ActiveX Control Column rather than inserting an ActiveX Control.

To insert an ActiveX control in a USoft application:

1. In the Windows Designer, open the window class in which you want to use the control.

2. If necessary, select the control or control group within which you want to use the ActiveX control.

3. On the Controls tab page of the , expand the ActiveX Control node. Place the cursor on the ActiveX control class you want to use. If it is not there, copy or download it onto your machine first, and re-start the Windows Designer.

4. (Recommended: ) From the catalog, make a subclass of this control, and rename the subclass to a manageable name such as "MyControl".

5. Drag-and-drop the control or the user-defined subclass from the catalog onto the design view.