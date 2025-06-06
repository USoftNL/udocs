# ActionDialogOk()



> [!NOTE]
> This article is about the **ActionDialogOk** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ActionDialogOk()**

Performs the action(s) specified if all mandatory fields in a dialog (or in an info box inserted into the dialog) are filled out. Closes the dialog after performing the action(s).

If not all mandatory fields are filled out, an error message is produced. In this case, the specified action is not performed, and the dialog is not closed.

*Syntax*

```
ActionDialogOk( *action* )
```

The required action is the action you want to perform. You can perform multiple actions separated by commas.

*Exposed by*

- Dialogs