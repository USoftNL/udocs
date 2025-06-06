---
id: pcZipExtractFiles
---

# pc:ZipExtractFiles



> [!NOTE]
> This article is about the **pc:ZipExtractFiles**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:ZipExtractFiles**

Unzips a set of files from a ZIP file.

There is no result value.

*Syntax*

```
<pc:ZipExtractFiles
  filepath="*file-path*"
  pattern="*pattern*"
  destinationpath="*folder-path*"
  overwrite="*overwrite*"
/>

*overwrite*  ::=  { yes | no }
```

The required **filepath** is a file path leading to the ZIP file that you want to extract files from.

The required **pattern** is a directory name pattern identifying the subset of files and directories to be extracted. In such a pattern, one or more asterisks ( * ) act as a wildcard character. To extract the entire content of the file, specify:

```
pattern="*"
```

The required destinationpath is a folder path leading to the directory where you want the output to be unzipped to.

If you set overwrite="yes", result directories and files that already exist by the same name are silently overwritten. Otherwise, if any result directory or file already exists, the entire operation is cancelled and an error message is returned.

*Example*

```language-xml
<root xmlns:pc="Processing.Command">
  <pc:ZipExtractFiles filepath="c:\temp\Installation.zip" pattern="asset*\asset*" destinationpath="c:\temp\output" />
</root>
```

 