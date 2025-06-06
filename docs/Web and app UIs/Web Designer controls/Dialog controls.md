# Dialog controls

> [!TIP]
> For simple dialogs, call a dialog by scripting a [**$.udb.dialog()**](https://developer.usoft.com/documentation/100doc/index.html?us__dialog().htm) call.

If you want more control and maintainability, you can also develop a Dialog Control class in Web Designer and call it through an id name or class name. In this case, make sure you set the Auto Open property to True (the default is False), otherwise the dialog will not display in the Page Preview pane.

*Example*

When using the Bootstrap framework, you can call (open) and close a dialog control with id "myDialog" as follows:

```js
$('#myDialog').udbControl().show()
$('#myDialog').udbControl().close()

```

## Lookup dialogs

A  **lookup dialog** is a quick and maintainable way of displaying lookup data in a dialog control, as opposed to showing that lookup data in a standard Lookup Page.

Lookup dialogs may be convenient if you want to style a lookup control as a dialog (with the same resize behavior, modal behavior...). They also offer some performance gain because the application does not perform page stacking when the user accesses the lookup data.

To create a lookup dialog:

1. Make sure the Lookup Page property of the calling page to some value that is unique to the Lookup Dialog you want to call, for example, **Pick-Up Branches for Rentals.**

2. Create a Dialog Control class and set its Id property to **Pick-Up Branches for Rentals**.

3. Make sure you have a Lookup Page class with **Pick-Up Branches for Rentals** as the value for both the Id and the Name property.

4. Drag (embed) the **Pick-Up Branches for Rentals** Lookup Page class into the **Pick-Up Branches for Rentals** Dialog Control class.

You can now style the dialog as the user will see it by styling the Dialog Class.