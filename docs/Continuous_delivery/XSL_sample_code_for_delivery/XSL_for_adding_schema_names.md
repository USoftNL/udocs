---
id: XSL_for_adding_schema_names
---

# XSL for adding schema names

This help topic contains XSL sample code that you can use in USoft Delivery manager as added XSL or when calling the Apply custom XSL action.

*Purpose*

This sample adds, to values of attributes referring to database tables, the placeholder **$$schema** as a placeholder for a database schema name. This placeholder is prefixed to the table name and separated from it by a full stop (**.**). The target attributes in scope are called in this case **T_TABLE** and **T_SUBT_SUPERTYPE**.  

The former is affected in each case. The latter is affected only if it has a non-empty value.

*Technical notes*

The first template matches the attributes that must be prefixed. They replace these attributes by attributes with the same name but a different (prefixed) value.

The default copy template at the end is necessary to copy all the remaining input data to the output data.

For the attributes affected, the first template has higher default priority because the match patterns  **@TABLE_NAME** and **@T_SUBT_SUPERTYPE** are more specific than the pattern **@***.

*Sample code*

```language-xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="no"/>

  <!--  prefix $$schema placeholder -->

  <xsl:template match="@TABLE_NAME|@T_SUBT_SUPERTYPE[.!='']">
    <xsl:attribute name="{local-name()}">
      <xsl:value-of select="concat('$$schema.',.)"/>
    </xsl:attribute>
  </xsl:template>

  <!--  default copy template -->

  <xsl:template match="*|@*|comment()|processing-instruction()|text()">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
```

 