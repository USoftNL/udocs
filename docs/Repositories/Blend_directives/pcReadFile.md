---
id: pcReadFile
---

# pc:ReadFile




:::note

This article is about the **pc:ReadFile**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:ReadFile**

Retrieves the content of the specified file and returns this content as an XML text node.

*Syntax*

```
<pc:ReadFile filepath="*file-path*" />
```

The required **filepath** identifies the file to be read. If **filepath** is a relative filepath, the path is relative to the current working directory.

*Example*

If applied to an input file that has the following contents:

```xml
<file>Contents</file>
```

the following script:

```xml
<pc:assign path="c:\temp\definerData.txt"/>
<pc:ReadFile filepath="{$path}" assign:fileContent="."/>
<pc:value-of select="$fileContent" />
```

will return:

```
<file>Contents</file>
```


:::tip

You can prevent the output of XML markup characters from being escaped by passing disable-output-escaping="yes". See pc:value-of.

:::
