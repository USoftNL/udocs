---
id: pcLoadVariablesOverwrite
---

# pc:LoadVariablesOverwrite




:::note

This article is about the **pc:LoadVariablesOverwrite**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:LoadVariablesOverwrite**

Retrieves, from a specified file, a list of named variables and their values, with the option to edit this list in the process.

The retrieved information is added to the list of variables (if any) that the Blend script already references at the time of calling <pc:LoadVariablesOverwrite/>.

Existing variable settings (for variables with the same name) ARE overwritten. To prevent this, use pc:LoadVariables instead.

*Syntax*

```
<pc:LoadVariablesOverwrite filepath="*file-path*" include="*csv-list*" exclude="*csv-list*" />
```

The required **filepath** attribute is a path pointing to the location of the file to be read.

The optional **include** attribute allows you to specify a subset of variables that you want to load.

The optional **exclude** attribute allows you to specify a subset of variables that are found in the file but that you do NOT want to load.

This operation is only successful if the variable names and values are stored in the file in the same way in which <pc:SaveVariables/> produces this information.

*Example*

This example loads all the variables found in "c:\\temp\\myfile.xml" except the connectstring and owner variables.

```language-xml
<pc:LoadVariablesOverwrite filepath="c:\temp\myfile.xml" exclude="connectstring, owner">
```

## Input file

For details on the required format of the input file, go to the "Result file" section of the pc:SaveVariables help topic.

 