# pc:MoveFileOverwrite



> [!NOTE]
> This article is about the **pc:MoveFileOverwrite**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:MoveFileOverwrite**

Moves a file or a set of files to a different location, silently overwriting any already existing file(s) with the same name in that location.

If successful, returns the following XML comment.

```
<!--files:MoveFileOverwrite(*source*, *destination*) true-->
```

*Syntax*

```
<pc:MoveFileOverwrite
     source="*file-path*"
     destination="*file-path*" />
```

The required **source** is a path pointing to the file to be moved. The required **destination** is a filepath pointing to the target folder and filename.

For both **source** and **destination**, in the case of a relative filepath, the path is relative to the current working directory.

**Source** is allowed to be a path pattern (a path containing an asterisk ( * ) character as in Example 2. In this case, **destination** must identify a folder rather than a file, and all the files that match source are moved to destination.

*Example 1*

```language-xml
<pc:MoveFileOverwrite source="input.xml" destination="c:\temp\output.xml" />
```

*Example 2*

```language-xml
<pc:MoveFileOverwrite source="*.xml" destination="c:\temp" />
```

 