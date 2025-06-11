---
id: pcZipUpdate
---

# pc:ZipUpdate




:::note

This article is about the **pc:ZipUpdate**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:ZipUpdate**

Compresses a set of files or inline content as entries in a ZIP file. This happens on an INSERT-OR-UPDATE basis. If the file already exists, new entries are added to it, entries with the same names are overwritten, and entries not mentioned in the \<pc:ZipFileCreate> directive are left alone.

There is no result value.

*Syntax*
 

```
<pc:ZipUpdate filepath="*file-path*" select="*xpath*">

*input*

</pc:ZipUpdate>

*input*  ::=  [
  { <File              entryname="*entryname*"  path="*file-path*" />          |
    <Content           entryname="*entryname*"> *content* </Content>           |
    <ContentFromBase64 entryname="*entryname*"> *content* </ContentFromBase64>   
  }   ... ]

*entryname*  ::=  *relative-file-path*
```

The required **filepath** is a path leading to the ZIP file you want to update. This is conventionally a file that has the ".zip" file extension. The optional **select** attribute can be used to restrict the operation to a specific part of input.

The required **input** can either be specified as a list of external files to be zipped, or as inline content to be compressed:

- To supply a list of one or more files, use the \<File> element name for each input file. In the path attribute, specify where the file is found on the file system.
- To supply inline content, supply it as content of a \<Content> element or, if the content is binary and 64-bit encoded, as content of a \<ContentFromBase64> element.

In either case, for **entryname**, supply a relative path that determines the place of the zipped file in the internal folder structure of the ZIP file.

*Example*

```xml
<pc:ZipUpdate filepath="{$myjarfile}" >
    <Content entryname="{$myentry}" content="{$NewUServiceClasses}" />
</pc:ZipUpdate>
```

 