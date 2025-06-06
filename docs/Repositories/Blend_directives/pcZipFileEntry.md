---
id: pcZipFileEntry
---

# pc:ZipFileEntry




:::note

This article is about the **pc:ZipFileEntry**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:ZipFileEntry**

Extracts (unzips) an individual entry from a ZIP file.

Returns the content of the unzipped entry.

Syntax

```
<pc:ZipFileEntry filepath="*file-path*" entryname="*relative-file-path*"/>
```

The required **filepath** is a path leading to the ZIP file that you want to extract files from. The required **entryname** is a relative path leading to the entry you want to unzip.

*Example*

This example outputs the contents of the "asset1.txt" file from the top-level directory "assets" in the ZIP file to the standard output (the console):

```language-xml
<pc:assign-string
    jarfile="c:\labs\GetAPI.jar"
    jarentry = "assets\asset1.txt"   />

<pc:copy-of>
  <pc:ZipFileEntry filepath="{$jarfile}" entryname="{$jarentry}" />
</pc:copy-of>
```

 