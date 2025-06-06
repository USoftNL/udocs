---
id: xslutilapplyTemplate
---

# xslutil:applyTemplate




:::note

This article is about the **xslutil:applyTemplate**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **xslutil:applyTemplate**

Applies the identity transformation to some XML input, taking into account a set of extra XSLT templates. The identity transformation causes the input XML to be returned as output XML. The extra templates cause certain nodes of the XML content to be processed in a special way.

Returns XML content.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:xslutil="USoft:XslUtil"
```

*Function call*

```
xslutil:applyTemplate( *expression*, *extra-templates* )

*extra-templates*  := <xsl:template match="*match-pattern*"> *content* </xsl:template> …
```

The required *expression* must be an XPath expression pointing to an XML node set, or a literal XML fragment, or a path leading to an XML file.

The optional *extra-templates* is an unordered list containing any number of regular XSLT 1.0 templates in the form of \<xsl:template> instructions. If you omit *extra-templates*, the return XML content is identical to the input XML content.

In *extra-templates*, each *match-pattern* must be a relative match pattern, that is, a match pattern that does NOT begin with a forward slash ( / ).

*Example*

In the last line, xslutil:applyTemplate() applies two XSLT templates to an XML document stored in a file.

```language-xml
<authdata xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:pc="Processing.Command">
...
<pc:defs>
  <xsl:template match="T_AUTH_USER[@USERNAME='adminuser']"/>
  <xsl:template match="T_AUTH_OC_PARAMS[@OC_ID='LAN' and @SET_TYPE='URE' and @PARAM_NAME='Allow_Disable_Constraint']"/>
</pc:defs>

<pc:assign-string
    usauth_filepath="{path:Combine($workingdir, 'USAUTH.xml')}"/>
<pc:assign-nodeset
    usauth_data = "{xslutil:applyTemplate($usauth_filepath, /*/pc:defs/xsl:template)}"/>
```

The effect of this is equivalent to applying this regular XSLT 1.0 stylesheet:

```language-xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="no"/>

<xsl:template match="*|@*|comment()|processing-instruction()|text()">
  <xsl:copy>
    <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
  </xsl:copy>
</xsl:template>

  <xsl:template match="T_AUTH_USER[@USERNAME='adminuser']"/>
  <xsl:template match="T_AUTH_OC_PARAMS[@OC_ID='LAN' and @SET_TYPE='URE' and @PARAM_NAME='Allow_Disable_Constraint']"/>

</xsl:stylesheet>
```

 