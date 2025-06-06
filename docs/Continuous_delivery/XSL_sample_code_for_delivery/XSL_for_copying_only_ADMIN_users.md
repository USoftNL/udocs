---
id: XSL_for_copying_only_ADMIN_users
---

# XSL for copying only ADMIN users

This help topic contains XSL sample code that you can use in USoft Delivery manager as added XSL or when calling the Apply custom XSL action.

*Purpose*

A team has decided they want to deliver all Users and ADMIN Role Members from Development to Production, but they do not want to deliver any other Users or Role Members.

In UDeliver, they have marked T_AUTH_USER and T_AUTH_ROLE_USER tables as Deliverable = Yes (not the default), and they use the Added XSL below to filter out only the Users and Role Members they want to deliver to Production.

*Technical notes*

The first added template in this XSL affects Role Members (table: T_AUTH_ROLE_USER).

The second added template in this XSL affects Users (table: T_AUTH_USER).

The default copy template at the end is necessary to copy all the remaining input data to the output data.

*Sample code*

```language-xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="no"/>

  <!-- get only ADMIN role members -->

  <xsl:template match="T_AUTH_ROLE_USER">
  <xsl:if test="@ROLE_NAME='ADMIN'">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
    </xsl:copy>   
  </xsl:if>
  </xsl:template>

  <!-- get only users that are ADMIN role members -->

  <xsl:template match="T_AUTH_USER">
  <xsl:variable name="this" select="@USERNAME"/>
  <xsl:if test="/*/Role_Members/T_AUTH_ROLE_USER[@ROLE_NAME='ADMIN'][@USERNAME=$this]">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
    </xsl:copy>  
  </xsl:if>	
  </xsl:template>

  <!--  default copy template -->

  <xsl:template match="*|@*|comment()|processing-instruction()|text()">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
```

 