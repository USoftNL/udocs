---
id: FolderBrowse
---

# FolderBrowse()




:::note

This article is about the **FolderBrowse** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **FolderBrowse()**

Opens a dialog that allows the user to browse for a folder (directory). You can use this if you want the user to specify a target directory.

*Syntax*

```
FolderBrowse( *title*, *start-directory* )
```

The optional *title* is the dialog window title that is shown by default. If *title* is not specified, 'Browse for Folder' is used as a title.

The optional *start-directory* is the path to the directory that must be selected when the dialog opens. If *start-directory* is not specified, this directory is the 'My Computer' directory. You can use environment variables in this parameter, such as

```
%%SYSTEMDIR%%\app 
```

or

```
%%TEMP%%\myname 
```

The USoft registration database entries are searched first for such variables. If they are not found, the standard DOS environment is searched.