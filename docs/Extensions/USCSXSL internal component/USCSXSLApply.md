# USCSXSL.Apply



> [!NOTE]
> This article is about the **Apply** method of the [USCSXSL internal component](/docs/Extensions/USCSXSL%20internal%20component).

## **USCSXSL.Apply**

Applies a specific, non-default transformation to an XML input document and returns the result.
The input document may contain calls to USCSXSL extension functions (this is an added possibility compared to calling **USXSL.Apply2File**).

If you use USCSXSL to process a USoft Blend script, then you apply to this script the default Batch.1.0.xsl transformation. Do this not by calling USCSXSL.Apply() but rather by calling **USCSXSL.Blend()**.

*Syntax*

```sql
select uscsxsl.apply( *xml*, *xsl*  [ , *variable-name*, *variable-value* ... ] )

*xml*  :=  { *xml-filepath* | *xml-document* }
*xsl*  :=  ( *xsl-filepath* | *xsl-document* }
```

All arguments are single-quoted string values.

The required *xml* must be a valid XML document. This document may contain calls to USCSXSL extension functions.  You can submit this XML document either as a file on the file system that you reference by *xml-filepath* or inline as a literal *xml-document* string.

The required *xsl* must be a valid XSLT 1.0 transformation. You can submit this transformation either as a file on the file system that you reference by *xsl-filepath* or inline as a literal *xsl-document* string.

Optionally, you can pass any number of Blend input parameters as *variable-name=variable-value* pairs.

*Example*

```sql
select uscsxsl.apply( '<MyClipboardNow/>', 'c:\temp\PrintClipboard.xsl' )
```

If the file content of the "c:\\temp\\PrintClipboard.xsl" file is:

```language-xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:clipboard="USoft:ClipBoard"
>
<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="yes"/>

<xsl:template match="*|@*|comment()|processing-instruction()|text()">
  <xsl:copy>
    <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="MyClipboardNow">
  <xsl:copy>
    <xsl:value-of select="clipboard:GetText()"/>
  </xsl:copy>
</xsl:template>

</xsl:stylesheet>
```

and your clipboard currently contains "Hello World", then the result of the transformation is:

```language-xml
<MyClipboardNow>Hello World</MyClipboardNow>
```

 