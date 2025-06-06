---
id: FileOpen
---

# FileOpen()



> [!NOTE]
> This article is about the **FileOpen** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **FileOpen()**

Opens the standard Windows "Open File" dialog that enables the user to open a file. If the user does choose a file in the dialog, the name of that file is returned as the value of the current control.

*Syntax*

```
FileOpen( *title*, *directory*, *file*, *read-only*, *filter* ... )

*read-only*  :=  { *read-only* | }

*filter*  :=  *description*, *type*
```

All parameters are optional string parameters. If you want to pass any parameter, it is interpreted in strict order of position. Thus, to pass a *filter* parameter, you must make sure to pass at least an empty string for each of *title, directory, file, read-only.*

*Title* is the text to appear as the dialog window title. If *title* is not specified, "Open" is used.

*Directory* is the directory shown by default (= when the dialog is opened). If *directory* is not specified, a default directory depending on settings in the file system is shown at this point, such as the last visited directory.

*File* is the name of the file to be selected by default (= when the dialog is opened). This name is displayed in the File Name field. If *file* is not specified, either the field is empty at this point, or a default file is displayed, depending on settings in the file system.

If the value 'read-only' is passed for *read-only,* the dialog will offer by default to open the file in read-only mode. Otherwise, the dialog will offer by default to open the file in read-write mode.

You can add any number of optional *filter* parameters. Each *filter* parameter is a *description, type* pair, where *description* and *type* are separated by commas from each other and from preceding and following values. *Description* is the description of the file type that the dialog will display. *Type* is a descriptor of the corresponding set of files. *Type* will contain at least one * wildcard.

*Example*

```
FileOpen( 
    'Select File'
,   'c:\temp\' 
,   FORMULA ( :1 || :2, query.job(), '.log' )
,   ''
,   'Log Files (*.log)' ,  '*.log'
,   'All Files (*.*)'   ,  '*.*' 
)
```

 