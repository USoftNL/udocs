---
id: udbdialog
tags: [USoft11, USoft10]
---
# $.udb.dialog()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **dialog()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

## **$.udb.dialog()**

Displays a dialog in a dialog window. The dialog shows a message or starts a conversation with the user. The dialog is styled in the framework chosen in the publication configuration.

Calling .dialog() while a dialog is already being displayed will result in both messages being displayed in the same dialog.

Returns a Promise object if *promise* is true (the default). Otherwise, returns 'undefined’.

> [!TIP]
> $.udb.dialog() is similar to [$.udb.input()](/docs/Web_and_app_UIs/UDB_udb/udbinput.md) but simpler:
> For more styling and control of dialog content, especially if using previously defined HTML code, prefer [.usdialog()](/docs/Web_and_app_UIs/UI_Library/usdialog.md).

*Syntax*

```js
$.udb.dialog( { *dialog-control-name* | *caller-block* } )

*caller-block*  ::= 
  {
       promise:  *promise,*
       message:  *dialog-message*,
       title:  *dialog-title*,
       func:  *close-dialog-fn*,
       fields:  *fields-array*,
       icon:  *dialog-icon-cls*,
       buttons:  *buttons*,
       useOpacity:  *use-opacity*,
       closeButton:  *close-button*
  }

*promise*        ::=  { true | false }

*buttons* ::= *button*[, *button* ...] *button* ::= { *string* | *button-object* } *use-opacity* ::= { true | false } *close-button* ::= { true | false }

.*promise-chain-keyword*(function(*result*){ ... }

*promise-chain-keyword*  ::= { then | catch | finally }

*result*  ::= {
  answer: *answer*,
  caller: *caller-block*
}
```

If *promise* is true (the default, and recommended), a Promise object is returned. Otherwise, ‘undefined’ is returned.

You must pass either a *dialog-control-name* which is a string, or a *caller-block* which is a JSON object containing the properties listed (with all the items except 'message' being optional). The remainder of this explanation discusses *caller-block*.

*Dialog-message* is the message that the dialog must display. This can be either a string, or an object with a message parameter string and an optional params array. Both options are processed by the translation engine to create the required end user message. Passing an empty message (or omitting it) will result in no dialog being displayed.

*Dialog-title* is the title of the dialog. The default value is 'Warning'. The title is displayed in a title bar across the top of the dialog. If set to ' ' (the empty string), this title bar will not be displayed. In the same way as with dialog-message, the title can be either a string, or an object with a message parameter string with an optional params array, and both are processed by the translation engine to create the required title string.

If *promise* is false, 'func’ is a function called when a dialog button is pressed that causes the dialog to close. The function receives the string value (or the Id value of the button object, if used). See also *close-botton* below and Example 3.

> [!WARNING]
> This function is **deprecated.** Instead, set promise**= true and use the .then() clause of the Promise object returned by $.udb.dialog, which can perform the exact same action. This strategy is shown in Example 1.

If you call $.udb.dialog() with a 'fields' fields-array, this will result in the call being transferred to [$.udb.input() ](/docs/Web_and_app_UIs/UDB_udb/udbinput.md)instead, so that the input fields can be properly displayed.

*Dialog-icon-cls* is a string which designates a CSS icon class used in the dialog. It specifies what kind of dialog is to be displayed. This option is only supported if the JQuery-UI framework is specified (by the Framework publication property). The default is ‘ui-icon-alert’.

*Buttons* is an array of button definitions for one or more buttons displayed at the bottom of the dialog. For each button you can pass either a string value or a button object:

- If a string is passed, its value will be used for the button's "Id" attribute and for the button's text label (which is also processed by the translation engine).
- If a button object is passed, its parameters will be used to create a customised button. The syntax of these button objects is the same as for the .usdialog() framework API function. The default is a single "OK" button without any special customisation.

*Use-opacity* is a boolean that determines if the dialog is displayed as a modal dialog, in which case an Opacity Control is displayed behind the dialog so that anything on the underlying page becomes inaccessible. The dialog is modal if use-opacity is true (the default), and non-modal otherwise.

*Close-button* is a boolean that determines if a close icon ( 'X' ) is displayed in the top-right corner of the dialog. If the user presses this icon, the dialog closes without the close-dialog-function being processed.

*Promise-chain-keyword* applies only if *promise* is true. You can pass a function with a *result* parameter to a **.then()**, **.catch()** or **.finally()** clause in a promise chain. You can then get from the *result.***answer** property the id of the button that the user pressed, as the Examples show. You can get from *result*.**caller** the *caller-block* that $.udb.dialog() was called with.

*Example 1*

```js
$.udb.dialog({
    message: "Are you sure you want to delete this record?",
    title: "Confirm delete",
    buttons: ["YES", "NO"]
}).then(function(result) {
    if (result.answer === "YES") {
      return $.udb("PERSON").rows("current").rowDelete();
    }
});
```

*Example 2*

```js
$.udb.dialog({
    message: {
        message: "PENDING",
        params: [changedRows.length]
    },
    title: "Information",
    buttons: ["SAVE", "DISCARD", {id: "CANCEL", default: true}],
    closeButton: false,
    icon: "ui-icon-info"
}).then(function(result) {
    if (result.answer === "" || result.answer === "CANCEL") {
        return;
    } else
    if (result.answer === "SAVE") {
        return $.udb.commit({quiet: this.params.quiet});
    } else
        //...
});
```

## Old use: call without promise

*Example 3*

This is the same as Example 1, but without the promise mechanism. This is now old use.

```js
$.udb.dialog({
    promise: false,
    message: "Are you sure you want to delete this record?",
    title: "Confirm delete",
    buttons: ["YES", "NO"],
    func: function(result){
      if (result === "YES") {
        $.udb("PERSON").rows("current").rowDelete();
      }
    }
});
```

 