---
id: pcMoveFile
---

# pc:MoveFile




:::note

This article is about the **pc:MoveFile**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:MoveFile**

Moves a file or a set of files to a different location. If there is an existing file(s) with the same name in that location, it's an error, except if you specify otherwise.

If successful, returns the following XML comment.

```
<!--files:MoveFile(*source*, *destination*) true-->
```

*Syntax*
 

```
<pc:MoveFile
     source="*file-path*"
     destination="*file-path*"
     overwrite="*overwrite*" />

*overwrite*  ::=  { yes | no }
```

The required **source** is a path pointing to the file to be moved. The required **destination** is a filepath pointing to the target folder and filename.

For both **source** and **destination**, in the case of a relative filepath, the path is relative to the current working directory.

**Source** is allowed to be a path pattern (a path containing an asterisk ( * ) character as in Example 2. In this case, **destination** must identify a folder rather than a file, and all the files that match source are moved to destination.

If you pass overwrite="yes", the effect is the same as pc:MoveFileOverwrite.

*Example 1*

```language-xml
<pc:MoveFile source="input.xml" destination="c:\temp\output.xml" />
```

*Example 2*

```language-xml
<pc:MoveFile source="*.xml" destination="c:\temp" />
```

## Errors

If there is an existing file with the same name in the target location, and you do not pass overwrite="yes", then the call is ineffective, and the return value is:

```language-xml
<!--files:MoveFile(source, destination) The file 'destination' already exists.-->
```

 