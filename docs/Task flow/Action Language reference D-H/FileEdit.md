# FileEdit()



> [!NOTE]
> This article is about the **FileEdit** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **FileEdit()**

Opens the editor, and loads the file with the specified name. This name is the current value of the current record in the field where the action is used.

If the file exists it is loaded into the editor. Otherwise, an empty editor is displayed.

*Syntax*

```
FileEdit( *title*, *dialog* )
```

If the optional *title* is specified, the editor window will be titled "\<name>Shell". Otherwise it will be titled "File Editor".

If the optional *dialog* is specified, a dialog of the specified class is opened and is used to display the file. Otherwise, the 'File Editor Dialog' class is used.

*Exposed by*

- Column controls (Fields)

> [!NOTE]
> The 'File Editor Dialog' class is a default class. You can find it on the Dialogs tab of the Windows Designer catalog. You can customize this class. You can also make a subclass of this dialog class and pass the name of that subclass as the *dialog* parameter when calling FileEdit().