---
id: pcCopyFileOverwrite
---

# pc:CopyFileOverwrite



> [!NOTE]
> This article is about the **pc:CopyFileOverwrite**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:CopyFileOverwrite**

Copies a file or a set of files to a different location, silently overwriting any already existing file(s) with the same name in that location.

If successful, returns the following XML comment:

```language-xml
<!--files:CopyFileOverwrite(source, destination) true-->
```

*Syntax*

```
<pc:CopyFileOverwrite
     source="*file-path*"
     destination="*file-path*" />
```

The required **source** is a path pointing to the file to be copied. The required **destination** is a filepath pointing to the target folder and filename.

For both **source** and **destination**, in the case of a relative filepath, the path is relative to the current working directory.

**Source** is allowed to be a path pattern (a path containing an asterisk ( * ) character as in Example 2. In this case, **destination** must identify a folder rather than a file, and all the files that match source are copied to destination.

*Example 1*

```language-xml
<pc:CopyFileOverwrite source="input.xml" destination="c:\temp\output.xml" />
```

*Example 2*

```language-xml
<pc:CopyFileOverwrite source="*.xml" destination="c:\temp" />
```

 