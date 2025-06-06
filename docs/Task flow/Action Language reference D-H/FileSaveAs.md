# FileSaveAs()



> [!NOTE]
> This article is about the **FileSaveAs** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **FileSaveAs()**

Opens the standard Windows "Save As" dialog that enables the user to save a file. Allows the user to save the contents of the on-screen editor in a file.

If the user does use the dialog to save contents as a file, the name of that file is returned as the value of the current control.

*Syntax*

```
FileSaveAs( *title*, *directory*, *file*, *read-only*, *filter* ... )

*read-only*  :=  {  }

*filter*  :=  *description*, *type*
```

All parameters are optional string parameters. If you want to pass any parameter, it is interpreted in strict order of position. Thus, to pass a *filter* parameter, you must make sure to pass at least an empty string for each of *title, directory, file, read-only.*

*Title* is the text that appears as the dialog window title. If *title* is not specified, "Save As" is used.

*Directory* is the directory shown by default (= when the dialog is opened). If *directory* is not specified, a default directory depending on settings in the file system is shown at this point, such as the last visited directory.

*File* is the file name shown by default in the File Name field. This field specifies under which name the contents is to be saved. If *file* is not specified, the field is empty at this point.

*Read-only* must be passed as an empty string ('') if you want to pass one or more *filters* successfully.

You can add any number of optional *filter* parameters. Each *filter* parameter is a *description, type* pair, where *description* and *type* are separated by commas from each other and from preceding and following values. *Description* is the description of the file type that the dialog will display. *Type* is a descriptor of the corresponding set of files. *Type* will contain at least one * wildcard. The typical use case for *filters* in FileSaveAs() is to help users select a logical file extension.

*Example*

```
FileSaveAs( 
    'Save As'
,   'c:\temp\' 
,   FORMULA ( :1 || :2, query.job(), '.log' )
,   ''
,   'Log File (*.log)'   ,  '*.log'
,   'Text File (*.txt)'  ,  '*.txt' 
)
```

 