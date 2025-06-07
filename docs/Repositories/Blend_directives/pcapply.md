---
id: pcapply
---

# pc:apply




:::note

This article is about the **pc:apply** [Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:apply**

Applies an XSLT transformation to a specified XML document and writes the result to the standard output.

*Syntax*

```
<pc:apply
     xml = "*expr >> path*"
     xsl = "*expr >> path*"
     [ *variable* = "*value*" ... ]/>
```

The required **xml** and **xsl** are filepaths identifying (respectively) the input XML file and the XSLT stylesheet.
Optional variable-value pairs may be passed as input parameters to the XSLT stylesheet corresponding to \<xsl:param> entries within the stylesheet.

**xml** and **xsl** must be absolute filepaths or filepaths relative to the location of the script file. The example illustrates the latter.

*Example*

```xml
<pc:apply
   xml="../../env.xml"
   xsl="using/env.xsl"
   servername="{$servername}"/>
```

 