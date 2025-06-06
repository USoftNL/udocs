# ActiveX Example 3: Calling a method of an ActiveX browser control

In this example, you will see how you can:

- Create a dialog that contains an ActiveX Web Browser control
- Pass a URL value from a text box to the web browser using the browser's "navigate" method.

For this example, you need a version of the standard Microsoft Web Browser control on your machine.

First start your Windows Designer.

How to create the ActiveX control subclass:

1. Click the Controls tab page, and then expand the ActiveX Control class.

2. In the list of available ActiveX controls, click with your right mouse button on the Web Browser control class. Choose New from the resulting context menu. A subclass of the Web Browser class will be created. Right-click on the new subclass, and rename it to MyBrowser.

How to create a dialog box to contain the ActiveX control:

1. Click the Dialog Boxes tab page.

2. Drag the Dialog Box class to the design area on the right.

3. Navigate to the dialog's controls group by clicking on the words "Dialog header message", holding the ALT key down, and click again. The status bar should now read "Group: Controls Group".

4. Click the Controls tab page, and then drag the required subclass (MyBrowser, created earlier) onto the Controls Group.

5. Select the newly inserted MyBrowser control, and set its Width property (Layout tab page on the Property Inspector) to 500.

6. From the menu bar, choose Insert, Text, Text Box.

7. Select the newly inserted Text Box control, and set its Data Length and Display Length properties (General tab page on the Property Inspector) to 80. Set its Prompt property to "URL: ".

8. From the menu bar, choose File, Save As.

9. Type a name (MyDialogBox3) for the dialog as the class name, and then click OK.

 

How to make the browser respond to the text box:

1. Select the newly inserted Text Box control and open the Property Inspector. Click the Behavior tab page, and set the text box's Post-edit property to:

```
MyBrowser_1.Navigate(:"Variables.Text_Box_1()")
```

2. Save.

3. From the menu bar, choose Design, Run.

4. Type a web address such as "www.usoft.com" into the URL field, and then press the TAB key (to trigger the Post-edit event).

> [!NOTE]
> You can follow links, and/or use the context menu to navigate.

 

 