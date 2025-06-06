# usdialog()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article covers the **usdialog()** function as part of the [UI Library](/docs/Web%20and%20app%20UIs/UI%20Library).
> The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/docs/Web%20and%20app%20UIs/UDB%20udb/UDB%20udb%20object.md) for data exchange between USoft web pages and a Rules Engine.

## **.usdialog()**

The **usdialog()** function creates a dialog overlay on a current page in a framework-independent fashion.

![](/api/Web%20and%20app%20UIs/UI%20Library/assets/ebed01fb-5df5-4b62-8048-77dfe3a3883f.png)

You can apply this function to turn practically anything into a dialog window. This function allows you to style and control all elements of the dialog precisely.

> [!TIP]
> Prefer [$.udb.dialog()](/docs/Web%20and%20app%20UIs/UDB%20udb/udbdialog.md) if you want to produce a simple interactive message.

> [!WARNING]
> **usdialog()** documentation is **deprecated** in USoft 11. Prefer calling methods and acting on events exposed by the native HTML **<dialog>** element.

The **.usdialog()** function can be called in two ways:

- On an HTML element that has no specific dialog markup at all. In this case, the HTML element becomes the dialog body and all other elements are generated around it, to properly display a dialog. For most circumstances, this is the proper way to show a dialog. Dialog title and buttons need to be managed using the appropriate options in this case, and cannot be modified using the Web Designer. **See Example 1.**
- On an HTML element that already contains all the dialog markup, elements and classes and attributes that the dialog needs. This is especially useful if the dialog markup is made within the Web Designer already and is being managed there, and it just needs to be activated to be shown as a dialog. **See Example 2.**

Returns the HTML element.

*Syntax*

```js
.usdialog( *command* )
.usdialog( *options* )

*command*        ::= { "show" | "close" | "destroy" }

*options*        ::= {
    resizable: *is-resizable*,
    draggable: *is-draggable*,
    modal: *is-modal*,
    width: *width*,
    height: *height*,
    title: *title*,
    buttons: [ *button-object*, *button-object*... ],
    closeOnEscape: *show-close-button*,
    open: *dialog-open-function*
}

*is-resizable*        ::= { true | false }
*is-draggable*        ::= { true | false }
*is-modal*            ::= { true | false }

*width*                   ::= { *integer* | *percentage-string* | *viewport-width-string* }
*height*                  ::= { *integer* | *percentage-string* | *viewport-height-string* }
*percentage-string*       ::= *integer*%
*viewport-width-string*   ::= *integer*vw
*viewport-height-string*  ::= *integer*vh

*buttonlist*          ::= { [ *button-name*, *button-name*... ] |
                          [ *button-object*, *button-object*... ] }

*show-close-button*   ::= { true | false }

```

You must call **.usdialog()** with either a *command* keyword or an *options* struct.

*Command* is a string keyword that indicates how the state of the dialog is altered:

- "show": displays the dialog,
- "close": closes the dialog,
- "destroy": closes the dialog and destroys the dialog-specific elements that were added.

*options* is a struct that can have the following items, all of which are optional.

*is-resizable* may be set to a boolean that determines if the dialog can be resized. The default is false, which means that the dialog cannot be resized. This option has an effect only in the ‘jquery-ui’ framework.

*is-draggable* may be set to a boolean that determines if the dialog can be dragged to a different position on the screen. The default is false, which means that the dialog is not draggable. This option has an effect only in the ‘jquery-ui’ framework.

*is-modal* may be set to a boolean that determines if the dialog is modal and can only be closed by clicking on one of its buttons or on its close icon, as opposed to begin closed by the Escape key being pressed or the backdrop behind the dialog being clicked. The default is true, which means that the dialog is modal.

*width* and *height* determine the size of the dialog. These values can be: an integer that designates a precise number of pixels; a string that is an integer followed by the '%' symbol and that designates the percentage relative to the screen width or screen height; or a string that is an integer followed by 'vw' (for viewport width) or 'vh' (for viewport height) and that designates the percentage relative to the width or height of the viewport.

> [!TIP]
> USoft recommends explicitly setting width and height. There are no standard defaults. Practical sizes are 650 pixels of width and 350 pixels of height for smaller dialogs, and ‘92vw’ and ‘92vh’ for larger dialogs, e.g. those that display (lookup) dialog pages.

If *title* is set to a title string value, this value is shown as text in the title bar of the dialog. If *title* is set to an empty string, the title bar does not appear. *Title* may be a simple string but it may also be an HTML fragment. The contents of *title* are translatable.

*buttons* is a list of buttons that will appear in the dialog. This is either an array of button names that are string values, or an array of button objects. If you are using button names, each button will have the button name as its **id** property and as its **label** property. Button objects are described in the section below in this help topic.

*show-close-button* determines whether a close icon is shown on the dialog on the upper-right. The default is true, which means a close icon is shown.

*dialog-open-function* may be set to a function executed when the dialog is shown on the screen. This function is executed during the **dialogopen** event, which fires at the time when the dialog is displayed.

### Examples

*Example 1*

This shows the principle of styling a dialog by setting options passed with the **usdialog()** command.

> [!TIP]
> For an example of how to add functionality to the buttons, see *Example 3* at the end of this article.

1.Add an HTMLControl control to your page. Set the HTML property of this control to:

```language-html
<div class="my-dialog">My text</div>
```

2.Add a push button to your page. Make sure the button executes this script when clicked:

```js
$(".my-dialog").usdialog({
   width: "92vw",
   height: "92vh",
   modal: true,
   buttons: [
      { id: "OK", class: 'btn-success', icon:'benchmark-icon-save' },
      { id: "RESET", class: 'btn-warning' },
      { id: "CANCEL", class: 'btn-danger', default: true },
   ],
   title: 'Settings',
   closeOnEscape: true
});
```

*Example 2a*

This shows the principle of displaying previously hidden HTML as a modal dialog, but nothing else.

1.Add an HTMLControl control to your page. Set the HTML property of this control to:

```language-html
<div id="my-dialog"><p>My text</p></div>
```

2.Add the following class to the class list (the Class property) of the HTMLControl:

hide

3.Add a push button to your page. Make sure the button executes this script when clicked:

```js
$('#my-dialog').usdialog('show');
```

*Example 2b*

This shows the principle of styling a dialog in the HTML code.

1.Add an HTMLControl control to your page. Set the HTML property of this control to:

```language-html
<div class="modal hide">
  <div class="my-dialog">
    <div class="dialog-content modal-content">
      <div class="dialog-header modal-header">
        <h1>My Header</h1>
      </div>
      <div class="dialog-body modal-body">
        <p>Here are my buttons: (...)</p>
      </div>				
      <div class="dialog-footer modal-footer">
        <p>This is my footer</p>
      </div>					
    </div>
  </div>
</div>
```

2.Add a push button to your page. Make sure the button executes this script when clicked:

```js
$('.my-dialog').usdialog('show');
```

## Button objects

Each button object has its own list of properties and values, all of which except id are optional:

*Syntax*

```js
*button-object*  ::= {
    id: *button-id*,
    label: *button-label*,
    func: *button-function*,
    icon: *class-list*,
    class:  *class-list*,
    default: *button-is-default*,
    style: *button-style*,
    props: *button-properties*,
    attr: *button-attributes*
}

*class-list*          ::= { *class class*... }
*button-is-default*   ::= { true | false }
```

The required *button-id* must be set to a string value that is the ID used to identify the button.

*button-label* may be set to a string value that is displayed on the button as a text label. If 'label' is not set, it will default to the value of the 'id' property. If 'label' is set, it is translated by the translation engine.

*button-function* may be set to a function that is called when the button is clicked. This is equivalent to an onclick event being added to a button in Web Designer.

**icon** may be set to a string value that is a space-separated list of class names. If you set this property for example to:

```
us-icon ui-icon-folder
```

you can then use regular CSS styling to retrieve an image file to style the icon, like so:

```language-css
us-icon.ui-icon-folder {
    height: 16px;
    width: 16px;
    background-image: url(../images/folder.png) !important;
}
```

or you can style the icon by referring to a Unicode character icon, as in:

```language-css
ui-icon-search::before {
    content: "\f0c5";
    color: #00a;
    font-family: "FontAwesome Regular";
}
```

*class* may equally be set to a string value that is a space-separated list of class names. These class names can be added to the button to alter its appearance. E.g. in Bootstrap you can add the ‘btn-warning’ class to add a yellow background color to the button.

*button-is-default* determines whether the button must have input focus by default when the dialog opens. If you do not set *button-is-default* to 'true' for any of the buttons, the FIRST button in the dialog gets input focus when the dialog opens. If you set *button-is-default* to 'true' for multiple buttons, the FIRST button of this type gets input focus.

*button-style* may be set to a button-style string value that contains inline CSS rules for the button.

*button-properties* may be set to a JSON object the properties of which are added to the DOM element of the button.

*button-attributes* may be set to a JSON object the properties of which are added as extra HTML attributes of the button.

### Examples

*Example 3*

This shows how, in the situation of *Example 1,* you can use of the **func** property to specify the functionality of a button. The example is that the Cancel button closes the dialog:

```js
$(".my-dialog").usdialog({
   width: "92vw",
   height: "92vh",
   modal: true,
   buttons: [
      { id: "OK", class: 'btn-success', icon:'benchmark-icon-save' },
      { id: "RESET", class: 'btn-warning' },
      { id: "CANCEL", class: 'btn-danger', default: true, func:function(){$(".my-dialog").usdialog("close");} },
   ],
   title: 'Settings',
   closeOnEscape: true
});
```

 