---
id: pcZipReplace
---

# pc:ZipReplace



> [!NOTE]
> This article is about the **pc:ZipReplace**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:ZipReplace**

Compresses one or more files or inline content as entries in a ZIP file. This happens on a CLEAR-AND-INSERT basis. If the file already exists, all its entries are cleared, and the new entries supplied are compressed into the file instead.

There is no result value.

*Syntax*
 

The required filepath is a path leading to the ZIP file you want to update. This is conventionally a file that has the ".zip" file extension. The optional select attribute can be used to restrict the operation to a specific part of input.

```
<pc:ZipReplace filepath="*file-path*" select="*xpath*">

*input*

</pc:ZipReplace>

*input*  ::=  [
  { <File                entryname="*entryname*"  path="*inputfile*" />          |
    <Content             entryname="*entryname*"> *content* </Content>           |
    <ContentFromBase64   entryname="*entryname*"> *content* </ContentFromBase64>   
  }   ... ]
```

The required input can either be specified as a list of external files to be zipped, or as inline content to be compressed:

- To supply a list of one or more files, use the \<File> element name for each input file. In the path attribute, specify where the file is found on the file system.
- To supply inline content, supply it as the content attribute of a \<Content> element or, if the content is binary and 64-bit encoded, a \<ContenFromBase64> element.

In both cases, for entryname, supply a relative file path that determines the place of the zipped file in the internal folder structure of the ZIP file.

*Example*

```language-xml
<pc:ZipReplace filepath="{$myjarfile}" >
    <Content entryname="{$myentry}" content="{$NewUServiceClasses}" />
</pc:ZipReplace>
```

 