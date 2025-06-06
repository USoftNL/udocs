---
id: pcReadFiles
---

# pc:ReadFiles




:::note

This article is about the **pc:ReadFiles**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:ReadFiles**

Retrieves the content of a specified set of files, and returns this content as a set of XML text nodes.

*Syntax*
 

```
<pc:ReadFiles  filepath="*directory-path*" disable-output-escaping="*disable*">
     <file filepath="*file-path*" />
     ...
</pc:ReadFiles>

*disable*  ::=  { yes | no }
```

In each of the file child elements, the required **filepath** points to the file to be read. If **filepath** is a relative filepath, the path is relative to the current working directory.

In the pc:ReadFiles parent element, **filepath** is optional. In this position, **filepath** must point to a directory rather than to a file, and the **filepath** values in the child nodes must be relative paths. The latter are interpreted relative to the directory that filepath in the parent element points to.

The name file used for the child elements could be any valid XML element name. This type of element is only a pretext for getting a filepath attribute where you can specify one of the files to be read.

If you pass disable-output-escaping="yes", XML markup characters (if any) will not be escaped. See the examples at pc:ReadFile.

*Examples*

```language-xml
<pc:ReadFiles filepath="c:/temp/xmldirectory/">
     <file filepath="DefinerModel.xml"/>
     <file filepath="ApplicationData.xml"/>
</pc:ReadFiles>
```

```language-xml
<pc:ReadFiles>
     <file filepath="c:/temp/document_1.xml" assign:document1="."/>
     <file filepath="d:/production/document_2.xml" assign:document2="."/>
</pc:ReadFiles>
```

 