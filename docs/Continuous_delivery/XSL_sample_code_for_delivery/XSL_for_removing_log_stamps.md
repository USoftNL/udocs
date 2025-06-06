---
id: XSL_for_removing_log_stamps
---

# XSL for removing log stamps

This help topic contains XSL sample code that you can use in USoft Delivery manager as added XSL or when calling the Apply custom XSL action.

*Purpose*

This sample removes, from an XML data file, all log stamp information stored in columns named CREATED_BY, CREATED_ON, CHANGED_BY, CHANGED_ON.

A functional reason for this may be that on re-import of the XML, you want log stamps that represent the user and time of the re-import event, rather than the log information from the source. You can achieve this by importing data without log stamps if the target repository has default values at domain or column level that cause new log stamps to be generated.

Also, there are times when you compare 2 XML data sets and you are only interested in differences *other* than log stamps.

A more technical reason for removing log stamps is that they may block re-import of the XML if their data is in non-Updatable columns.

*Technical notes*

The 4 first templates select log stamp attributes. These 4 **xsl:template** elements have no content. This amounts to the instruction of NOT writing these log stamp attributes to the output.

The default copy template at the end is necessary to copy all the remaining input data to the output data.

For the log stamp attributes, the first templates have higher default priority because a match pattern such as **@CREATED_BY** is more specific than the pattern **@***.

*Sample code*

```language-xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="no"/>

  <!--  suppress log stamps -->

  <xsl:template match="@CREATED_BY"/>
  <xsl:template match="@CREATED_ON"/>
  <xsl:template match="@CHANGED_BY"/>
  <xsl:template match="@CHANGED_ON"/>

  <!--  default copy template -->

  <xsl:template match="*|@*|comment()|processing-instruction()|text()">
    <xsl:copy>
      <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
```