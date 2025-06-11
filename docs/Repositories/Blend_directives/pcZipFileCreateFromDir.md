---
id: pcZipFileCreateFromDir
---

# pc:ZipFileCreateFromDir




:::note

This article is about the **pc:ZipFileCreateFromDir**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:ZipFileCreateFromDir**

Compresses the content of a directory into a ZIP file.

There is no result value.

*Syntax*

```
<pc:ZipFileCreateFromDir
      dirpath="*folder-path*"
      filepath="*file-path*"
      overwrite="*overwrite*" />

*overwrite*  ::=  { yes | no }
```

The required **dirpath** is a path leading to the directory to be zipped. The required **filepath** is a path that determines the location and name of the output file (the ZIP file).

If you set overwrite="yes", any existing ZIP file with the same name will be silently overwritten. Otherwise, the operation is cancelled and an error message is returned saying that the file already exists.

*Example*

```xml
<pc:ZipFileCreateFromDir
     dirpath="c:\temp\zip\mynewzip\mydir"
     filepath="c:\temp\zip\mynewzip.zip"
/>
```

 