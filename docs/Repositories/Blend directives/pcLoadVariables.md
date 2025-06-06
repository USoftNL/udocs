# pc:LoadVariables



> [!NOTE]
> This article is about the **pc:LoadVariables**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:LoadVariables**

Retrieves, from a specified file, a list of named variables and their values, with the option to edit this list in the process.

*Syntax*
 

```
<pc:LoadVariables pc:filepath="*file-path*" pc:include="*csv-list*" pc:overwrite="*overwrite*" />

*overwrite*  ::=  { true | false }
```

The required *file-path* is a path pointing to the location of the file to be read.

The optional *csv-list* allows you to specify a subset of variables that you DO want to load. Other subsets in the file (if any) are excluded.

The optional *overwrite* allows you to specify whether or not you want existing variables with the same names to be overwritten. By default, they are overwritten.

This operation is only successful if the variable names and values are stored in the file in the same way in which <pc:SaveVariables/> produces this information.

*Example*

This example loads, from the variable settings found in "c:\\temp\\myfile.xml", the settings for the connectstring and owner variables.

```language-xml
<pc:LoadVariables pc:filepath="c:\temp\myfile.xml" pc:include="connectstring, owner">
```

## Input file

For details on the required format of the input file, go to the "Result file" section of the pc:SaveVariables help topic.