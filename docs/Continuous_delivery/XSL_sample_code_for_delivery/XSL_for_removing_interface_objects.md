---
id: XSL_for_removing_interface_objects
---

# XSL for removing interface objects

This help topic contains XSL sample code that you can use in USoft Delivery manager as added XSL or when calling the Apply custom XSL action.

*Purpose*

This sample removes, from an XML data file, all reference to interface objects. Interface objects are objects obtained by synchronising with a consumed module, as opposed to the application's "own" objects. Removing interface objects is a logical step if you transfer the modules to the target environment by a separate path and then plan to re-synchronise there.

Using a similar technique, you can remove:

- GUI definitions. GUI definitions are in tables named **T_E_...** with the exception of tables named **T_E_DECISION...** . 

- SQL Objects. SQL Objects are in tables named **T_SQL_...** .If you re-import the XML without disabling rules, SQL Objects information is regenerated automatically.

*Technical notes*

The 7 first templates select interface objects. These 7 **xsl:template** elements have no content. This amounts to the instruction of NOT writing these objects to the output.

The 7 object types are enumerated for maximum control. If you feel confident that only these 7 object types have a MODULE attribute, you could code a single match pattern instead:

```
<xsl:template match="*[@MODULE!='']"/>
```

The default copy template at the end is necessary to copy all the remaining input data to the output data.

For the interface objects, the first templates have higher default priority because a match pattern such as **T_TABLE** is more specific than the pattern *****.

*Sample code*

```language-xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="no"/>

  <!--  suppress interface objects -->

  <xsl:template match="T_TABLE[@MODULE!='']"/>
  <xsl:template match="T_COLUMN[@MODULE!='']"/>
  <xsl:template match="T_DOMAIN[@MODULE!='']"/>
  <xsl:template match="T_DOMAIN_ENUM[@MODULE!='']"/>
  <xsl:template match="T_JOB[@MODULE!='']"/>
  <xsl:template match="T_EXT_SET[@MODULE!='']"/>
  <xsl:template match="T_EXT_SETELEMENT[@MODULE!='']"/>

  <!--  default copy template -->

  <xsl:template match="*|@*|comment()|processing-instruction()|text()">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
```

 