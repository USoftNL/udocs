# ActiveX Example 1: Creating a simple dialog that contains an ActiveX control

This example shows you how to:

- Create a subclass of an ActiveX control class
- Create a dialog box containing the ActiveX control

For this example, you need to have a version of the standard Microsoft Calendar Control on your machine.

To create the ActiveX control subclass:

1. Click the Controls tab page, and then expand the ActiveX Control class.

2. In the list of available ActiveX controls, click with your right mouse button on the Calendar Control class, and choose New from the resulting menu. A subclass of the Calendar class will be created. Right-click on the new subclass, and rename it to MyCalendar.

To create a dialog box to contain the ActiveX control:

1. Click the Dialog Boxes tab page.

2. Drag the Dialog Box class to the design area on the right.

3. Navigate to the dialog's controls group by clicking on the words "Dialog header message", holding the ALT key down, and clicking again. The status bar should now read "Group: Controls Group".

4. Click the Controls tab page, and then drag the required subclass (MyCalendar, created earlier) onto the Controls Group.

5. Choose File, Save As from the menu.

6. Type a name (MyDialogBox1) for the dialog as the class name, and then click OK.

7. Dismiss the message that appears, and then choose Design, Run from the menu to see the result.