---
id: pcReadXmlFiles
---

# pc:ReadXmlFiles




:::note

This article is about the **pc:ReadXmlFiles**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:ReadXmlFiles**

Attempts to parse the contents of a specified set of files as XML. If successful, returns that XML content as a node set.

If not successful, an error is returned. See the "Errors" section.

*Syntax*

```
<pc:ReadXmlFiles filepath="*file-path*">
     <file filepath="*file-path*"/>
     <file .../>
     ...
</pc:ReadXmlFiles>
```

In each of the **file** child elements, the required **filepath** points to the file to be read. If **filepath** is a relative filepath, the path is relative to the current working directory.

In the pc:ReadXmlFiles parent element, **filepath** is optional. In this position, **filepath** must point to a directory rather than to a file, and the filepath values in the child nodes must be relative paths. The latter are interpreted relative to the directory that filepath in the parent element points to.

The name **file** used for the child elements could be any valid XML element name. This type of element is only a pretext for getting a filepath attribute where you can specify one of the files to be read.

*Example*

```xml
<pc:ReadXmlFiles filepath="c:\definerData">

     <file filepath="definerData1.xml"
          assign:doc1_tables="documentRoot/t_table/*"
          assign:doc1_constraints="documentRoot/t_constraints/*" />
     <file filepath="definerData5.xml" assign:myVariable="."/>

</pc:ReadXmlFiles>
```

## Errors

If one of the files does not contain valid XML, an \<Error> element is returned such as the following:
\<Error>The '\<this>' start tag on line 2 position 4 does not match the end tag of 'that'.\</Error>