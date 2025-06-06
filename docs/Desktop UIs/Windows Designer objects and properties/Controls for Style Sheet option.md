# Controls for Style Sheet option

The result of inserting an object of a given control class in a window is that the inserted object will always have all the characteristics of the control class.

You can add flexibility by using the Controls for Style Sheet option. This allows you to specify, for a given window (ie., info box or dialog) class, what a given control class must look like IF it is inserted into that window class. For example: if this dialog D has a button B, then that button will be blue, but a button of the same type is not necessarily blue if inserted elsewhere.

To use this feature, both the window class and the control must be read/write.

To use the Controls for Style Sheet option::

1.Use the Windows Designer catalog to open the window class for which you want to define Controls for Style Sheet specifications.

2.From the menu, choose Design, Controls For Style Sheet.

3.Use the Controls tab page of the Windows Designer catalog to drag and drop the required control class or classes onto the design view.

> [!CAUTION]
> Do NOT use the Insert menu in this case.

4.Use the Property Inspector to give the control classes the required look and feel.

5.Save your changes.

You can only save your changes if you have actually specified a particular setting for the control. Just inserting it is not enough.

If you now open the window class or a class that inherits from it, and insert one of the controls involved into it, the control will take on your specifications.