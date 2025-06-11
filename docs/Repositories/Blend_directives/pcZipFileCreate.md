---
id: pcZipFileCreate
---

# pc:ZipFileCreate




:::note

This article is about the **pc:ZipFileCreate**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:ZipFileCreate**

Compresses one or more files or inline content as entries in a ZIP file. This happens on an INSERT-NO-UPDATE basis. If the file already exists, new entries are added to it, entries with the same names remain silently unchanged, and entries not mentioned in the \<pc:ZipFileCreate> directive are left alone.
There is no result value.

*Syntax*

```
<pc:ZipFileCreate filepath="*file-path*" select="*xpath*">

*input*

</pc:ZipFileCreate>

*input*  ::=  [
               { <File                entryname="*entryname*"  path="*inputfile*" />          |
                 <Content             entryname="*entryname*"> *content* </Content>           |
                 <ContentFromBase64   entryname="*entryname*"> *content* </ContentFromBase64>   
               }   ... ]

*entryname*  ::=  *relative-file-path*
```

The required **filepath** is a path leading to the target ZIP file. This is conventionally a file that has the ".zip" file extension. The optional **select** attribute can be used to restrict the operation to a specific part of input.

The required **input** can either be specified as a list of external files to be zipped, or as inline content to be compressed:

- To supply a list of one or more files, use the \<File> element name for each input file. In the path attribute, specify where the file is found on the file system.
- To supply inline content, place it inside a \<Content> element or, if the content is binary and 64-bit encoded, a \<ContenFromBase64> element.

In both cases, for **entryname**, supply a relative filepath that determines the place of the zipped file in the internal folder structure of the ZIP file.

*Example 1*

This example zips 3 files into 1 ZIP file.

```xml
<pc:ZipFileCreate filepath="c:\temp\mynewzip.zip">
   <File entryname="assets\resources.xml" path="c:\temp\resources.xml" />
   <File entryname="assets\tasks.xml" path="c:\temp\tasks.xml" />
   <File entryname="assets\tasks.txt" path="c:\temp\tasks.txt" />
</pc:ZipFileCreate>
```

*Example 2*

This is the same as Example 1, except for the select attribute. This example zips only the 2 first referenced files. The 3rd \<File> element is not processed because it does not match the location path in the select attribute.

```xml
<pc:ZipFileCreate filepath="c:\temp\mynewzip.zip" select="*[contains(@path,'.xml')]">
   <File entryname="assets\resources.xml" path="c:\temp\resources.xml" />
   <File entryname="assets\tasks.xml" path="c:\temp\tasks.xml" />
   <File entryname="assets\tasks.txt" path="c:\temp\tasks.txt" />
</pc:ZipFileCreate>
```

*Example 3*

```xml
<pc:ZipFileCreate filepath="c:\temp\mynewzip.zip">
    <Content entryname="assets\resources.txt">No resources apply to this instance.</Content>
</pc:ZipFileCreate>
```

 