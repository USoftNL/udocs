---
id: udbinput
tags: [USoft11, USoft10]
---
# $.udb.input()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **input()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

## **$.udb.input()**

Displays a message to the user and a variety of input fields for user input. These input fields can then be validated and processed. Input dialogs of this type have many uses, ranging from configuration dialogs, and login dialogs to practically anything that requires user input.

Calling .input() while a dialog is already being displayed will result in this existing dialog being removed entirely and rendering its input values null and void: they will not get validated or processed.

Returns a customised Promise object if *promise* is true (the default). Otherwise, returns ‘undefined’.

> [!TIP]
> $.udb.input() is similar to [$.udb.dialog()](/docs/Web_and_app_UIs/UDB_udb/udbdialog.md) but more complex:

*Syntax*

```js
$.udb.input( { *dialog-control-name* | *caller-block* } )

*caller-block*  ::=  
  {
       promise: *promise*,
       validate:  *validate-input-fn*,
       message:  *dialog-message*,
       title:  *dialog-title*,
       fields:  *fields-array*,
       buttons:  *buttons*,
       width:  *width*,
       useOpacity:  *use-opacity*,
       closeButton:  *close-button*
  }

*promise* ::= { true | false }

*fields-array*   ::=  *field-object*, [*field-object*...]
*field-object*   ::=
         {
              id: *field-id*,
              prompt: *field-prompt*,
              type: *field-type*,
              value: *field-value*,
              height: *field-height*,
              maxlength: *field-max-length*,
              allowedValues: *field-allowed-values*,
              help: *field-helpinfo-text*,
              func: *field-custom-fn*
         }
*field-type*            ::=  { text     | password | textarea |
                                    checkbox | radio    | select   |
                                    static | htmlarea }
*field-height*          ::=  *integer*
*field-max-length*      ::=  *integer*

*field-allowed-values*  ::=  *field-allowed-value* [, *field-allowed-value* ...]
*field-allowed-value*   ::=  { *value* | *prompted-value* }
*prompted-value*        ::=  prompt: *value-prompt*, value: *value*

*buttons*        ::=  *button* [, *button* ...]
*button*         ::=  { *string* | *button-object* }

*width*          ::=  *integer*
*use-opacity*    ::=  { true | false }
*close-button*   ::=  { true | false }

.*input-promise-chain-keyword*(function(*result*){ ... }

*input-promise-chain-keyword*  ::= { then | catch | finally | validate }

*result*  ::= {
   answer: *answer*,
   fields: *fields-array*,
   caller: *caller-block*
}

```

You must pass either a *dialog-control-name* which is a string, or a *caller-block* which is a JSON object containing the properties listed (with all the items except 'message' being optional).

*Validate-input-fn* is a function that is called when the user presses a dialog button that causes the dialog to close. The function is used to validate the input fields and receives the pressed button’s "Id" value and the values of all the fields. Validation can result in the function returning false (i.e. validation failed). In that case, the dialog is kept open. In any other case, the dialog is closed. It is possible to use *validate-input-fn* to process the input values as well, but you can also do that in the .then() clause of the Promise instead. Instead of passing *validate-input-fn* as an option, you can chain it as a .validate() function, in the same way that you can chain .then() and .catch() with a Promise.

The *validate-input-fn* and any ensuing .then() and .close() Promise functions do NOT execute if you have closeButton: true and the user closes the dialog by clicking the close icon ( 'X' ) in the top-right corner.

*Dialog-message* is the message that the dialog must display. This can be either a string, or an object with a message parameter string and an optional params array. Both options are processed by the translation engine to create the required end user message. Passing an empty message (or omitting it) will result in no dialog being displayed.

*Dialog-title* is the title of the dialog. Its default value is  "Data input". The title is displayed in a title bar at the top of the dialog. If set to ' ' (the empty string), this title bar will not be displayed.  In the same way as with dialog-message, the title can be either a string, or an object with a message parameter string with an optional params array, and both are processed by the translation engine to create the required title string.

*Fields-array* is an array of one or more input field definitions. Each field is a JSON object, a *field-object*. A *field-object* must have specific parameters to work correctly. The parameters may differ from one *field-object* to the next.

*Field-id* is a string that identifies the field in the generated dialog. If omitted, the value becomes ‘field’ followed by the array index of this *field-object*, eg., ‘field1’.

*Field-prompt* is the string displayed alongside the input field. If left empty, the value of *field-id* is used.

*Field-type* is the type of the input field. The default is ‘text’. Field types are:

|        |        |
|--------|--------|
|text    |Text box|
|password|Password box|
|textarea|Multi-line text area|
|checkbox|Checkbox|
|radio   |Radio button group|
|select  |Dropdown list|
|static  |Read-only field showing regular text string|
|htmlarea|Read-only field showing HTML-formatted text string|



*Field-value* is the initial value of the input field. The default is the empty string.

*Field-height* is the height of the field; this is used for customised fields and for multi-line fields such as text areas. By default, the height is automatically calculated, which means the value ‘auto’ is used for the  field.

*Field-max-length* is the maximum number of characters the field is allowed to contain. This applies only to text boxes, password boxes and multi-line text areas. If not specified, there is no maximum.

*Field-allowed-values* is an array with all the possible values this field may have. This applies to selection input fields: radio button groups and dropdown lists. You can supply simple text strings or you can supply a name-value pair that represents a prompt with a value.

*Field-helpinfo-text* is a text that appears when the user hovers the mouse above a question mark icon to the right of the input field. This text is used to further explain the meaning or usage of the input field. If omitted (which is the default), the text is empty, and the question mark icon is not shown.

*Field-custom-fn* is a function that can be used to further customise the behaviour of an input field, eg., to add behaviour that it normally does not have. This allows you, for example, to add autocompletion features to a text input field. *Field-custom-fn* receives the generated HTML object and the field object as its parameters.

*Buttons* is an array of button definitions for one or more buttons displayed at the bottom of the dialog. For each button you can pass either a string value or a button object:

- If a string is passed, its value will be used for the button's "Id" attribute and for the button's text label (which is also processed by the translation engine).
- If a button object is passed, its parameters will be used to create a customised button. The syntax of these button objects is the same as for the .usdialog() framework API function. The default is a single "OK" button without any special customisation.

*Use-opacity* is a boolean that determines if the dialog is displayed as a modal dialog, in which case an Opacity Control is displayed behind the dialog so that anything on the underlying page becomes inaccessible. The dialog is modal if use-opacity is true (the default), and non-modal otherwise.

*Close-button* is a boolean that determines if a close icon ( 'X' ) is displayed in the top-right corner of the dialog.

*Input-promise-chain-keyword* applies only if *promise* is true. You can pass a function with a *result* parameter to a **.then()**, **.catch()** or **.finally()** clause in a promise chain. You can also have a **.validate()** clause with the same purpose as *validate-input-fn* in the caller block (use one or the other, but not both).

As the Example shows, you can then get from the *result.***answer** property the id of the button that the user pressed, and from *result.***fields** an array of objects equal to the fields option passed to the $.udb.input function, with a current value filled out for each array member. You can get from *result*.**caller** the *caller-block* that $.udb.input() was called with.

*Example*

```js
$.udb.input({
    title: "Log In",
    message: "Please enter your credentials",
    buttons: ["Log In", "Cancel"],
    fields: [   { id: 'user', prompt: 'User name', type: 'text' },
                { id: 'cred', prompt: 'Password', type: 'password' }
            ]
}).validate(function(result) {
    if (result.answer === "Log In") {
        var user = result.fields[0].value;
        var pwd = result.fields[1].value;
        if (!user || !pwd) {
            $.udb.dialog({message: "You must enter a username and password"});
            return false;
        }
        if (!pwd || pwd.length < 4) {
            $.udb.dialog({message: "Passwords are at least 4 characters long"});
            return false;
        }
    }
}).then(function(result) {
    var user = result.fields[0].value;
    var pwd = result.fields[1].value;
    if (result.answer === "Log In")
        $.udb.login(user, pwd)
            .then(function() {
                $.udb.dialog({message: "Login successful"});
            })
            .catch(function() {
                $.udb.dialog({message: "Login failed"});
            });
});
```

 