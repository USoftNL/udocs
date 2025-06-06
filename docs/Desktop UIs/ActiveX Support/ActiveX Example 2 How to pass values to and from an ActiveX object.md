# ActiveX Example 2: How to pass values to and from an ActiveX object

This example shows you how to:

- Insert a text box into a dialog that contains an ActiveX Calendar control
- Pass the Calendar control's value to the text box
- Pass the text box's value to the Calendar control.

To try this example yourself, you must have:

- Started the Windows Designer.
- Completed the example: How to Create a Simple Dialog that Contains an ActiveX Control.

To insert a text box into the dialog:

1. Click the Dialog Boxes tab page, and then drag the MyDialogBox1 class to the design area on the right.

2. Click on the "Dialog header message" label, press the ALT key, and then click on the label again to select its parent, the Controls Group class.

You can also open the Property Inspector, and then use its Object tree to navigate to the Controls Group class.

3. From the menu bar, choose Insert, Text, Text Box.

4. Select the text box you just inserted, and then open the Property Inspector.

5. On the Property Inspector's General tab page, set the Data Length and Display Length properties to "30", and the Prompt property to "Date:".

6. From the menu bar, choose File, Save As. Type "MyDialogBox2" and click OK.

 

To make the text box respond to the calendar control:

1. Select the MyCalendar class, and click the Property Inspector's Behavior tab page.

2. Set the After Update property of the calendar to:

```
Variables.Text_Box_1 (:"MyCalendar_1.value()")
```

This will put the value of the Calendar control's Day property into the text box, every time the user selects a new date.

3. Save your work.

4. From the menu bar, choose Design, Run.

5. Manipulate the calendar control by clicking on a date field other than the active date.

> [!NOTE]
> The date format depends on your Windows Control Panel settings. Also note that you can read the value of any of the properties advertised in the property inspector for the calendar control. For instance, if you wanted the text box to display only the day value instead of the entire date, you could set the After Update property to:

```
Variables.Text_Box_1 (:"MyCalendar_1.Day()")
```

6. Close the dialog.

To make the calendar control respond to the text box:

1. Select the text box object on the dialog, and then set its Post-edit property to:

```
MyCalendar_1._Value(:"Variables.Text_Box_1()")
```

This will pass the text box's value to the Calendar control every time you enter the field, change its value, and then leave the field again.

> [!NOTE]
> If you have version 8.0 of the Calendar Control, the name of the value property is no longer "_Value" but "Value" (without the underscore).

2. From the menu bar, choose File, Save.

3. From the menu bar, choose Design, Run.

4. Type a date value such as "3/20/98" in the text box, and then press the TAB key.

> [!NOTE]
> The calendar control responds by selecting the corresponding date field.

5. Close the dialog, and then close its design view.

 