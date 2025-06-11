---
id: pcapply2file
---

# pc:apply2file




:::note

This article is about the **pc:apply2file** [Blend directive](/Repositories/Blend_directives).

:::

## **pc:apply2file**

Applies an XSLT transformation to a specified XML document and writes the result to a file on the file system.

*Syntax*

```
<pc:apply2file
     xml = "*expr >> path*"
     xsl = "*expr >> path*"
     filepath = "*expr >> path*"
     [ *variable* = "*value*" ... ]  />
```

The required **xml**, **xsl**, and **filepath** are filepaths identifying (respectively) the input XML file, the XSLT stylesheet, and the result file.

Optional variable-value pairs may be passed as input parameters to the XSLT stylesheet corresponding to \<xsl:param> entries within the stylesheet.

**xml**, **xsl** and **filepath** must be absolute filepaths or filepaths relative to the location of the script file. The example illustrates the latter.

*Example*

```xml
<pc:apply2file
    xml="../../env.xml"
    xsl="using/env.xsl"
    filepath="env.xml"
    servername="{$servername}" />
```

 