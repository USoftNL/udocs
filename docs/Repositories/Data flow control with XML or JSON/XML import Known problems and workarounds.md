# XML import: Known problems and workarounds

This help topic discusses typical problems with XML.Import(). Some of these problems are inherent in the USoft product and require workarounds. Others are mistakes that developers often make in practice.

### Parents and children must stay together but with newly generated values

*Problem*

If you import a multi-table XML document that contains generated parent primary key values, and also child foreign keys values referring to these primary key values, then parents and children will remain correctly related to each other in the end result.

But if you import a multi-table XML document that contains parents and children, and you do NOT supply values for the parent primary key, the receiving repository will generate its own values for the incoming records. This may be intended, but you must make sure that matching foreign key values are generated on import. If you don't, children will no longer refer to the correct parent after import.

*Solution*

Follow the RELATE strategy.

 

### Non-supplied mandatory subtype columns without default

*Problem*

The import of a record that has a subtype indicator for a subtype S with value 'Y' automatically causes the Rules Engine to insert also a record for S itself. This second insert fails if S has a mandatory column without default, since the value for that column is required but not supplied at the time the record is created. A column is "without default" if its Default Value attribute is empty, and the Default Value attribute of its Domain is also empty, and there is also no constraint that allows the Rules Engine to supply a default value.

This problem occurs if the supertype record appears earlier in the import document than the record for S, or if the document contains no record for S at all. It also occurs if S has a sibling subtype and a record for this sibling subtype appears earlier in the document than the record for S. If S and the sibling subtype *each* have a mandatory column without default, then the problem occurs regardless of document order.

The problem occurs independently of whether the "Create Separate Table" attribute of S is set to Yes or to No.

*Solution 1*

This solution works only if the receiving repository does NOT have 'Y' as the default value for the subtype indicator.

Make sure that the import document does not contain subtype indicators. The Rules Engine in the receiving repository will not set the 'Y' indicator until the subtype record comes in, at which time the mandatory value is supplied.

To strip subtype indicators, you can call the XML.MultiExportTables export method. It automatically suppresses all subtype indicators from the document. In USoft Delivery Manager, you can execute the "Export metadata" action. It has the same effect.

*Solution 2*

Make sure that supertype sections in the import document list only supertype records for instances that are not also a subtype (or more than one subtype).

To suppress supertype records for instances that are also a subtype, you can call the XML.MultiExportTables export method with the RestrictiveSupertypeListing parameter set to 'yes'.

 

### "Double insert" conflict with <Insert/> tags for subtypes

* Problem*

**<Insert/>** instruction tags for the import of a new subtype constellation can lead to a unique-key error if the engine is instructed to insert the same primary key twice, once for the supertype and once for the subtype.

*Solution*

Strip the <Insert/> tags. The record(s) where you removed the <Insert/> tag will still be inserted as per the default "UPSERT" behavior.

You can strip <Insert/> tags by applying an XSLT transformation to the document that has the following template or a similar template. To make XSLT operations optimally traceable, use USoft Delivery Manager, for example its "Added XSL" feature.

```language-xml
<xsl:template match="Insert"/>

```

 

###  

### "Double delete" conflict with <Delete/> tags for cascading deletes

* Problem*

A **<Delete/>** instruction tag can lead to an error if a parent delete with Delete Rule = Cascading appears earlier in XML document order than the corresponding child delete. When the child delete is processed, the error is that the child cannot be found.

*Solution*

Make sure that the Rules Engine does not check whether the record to be deleted actually exists. One way to achieve this is to call XML.Import with the VerifyOriginalValues parameter set to NoCheckOnPk. Alternatively, make sure that your import document has the setting **verify-original-values="no-check-on-pk"** in its usoft-xml processing instruction.

You can reset an usoft-xml processing instruction by applying an XSLT transformation that has the following template or a like template. To make XSLT operations optimally traceable, use USoft Delivery Manager, for example its "Added XSL" feature.

```language-xml
<xsl:template match="processing-instruction()[local-name()='usoft-xml']">
  <xsl:processing-instruction name="usoft-xml">
    <xsl:text>
      version="1.0" action="multi-tables-import" use-io-formats="no" 
      verify-original-values="no-check-on-pk" return-corrected-records ="yes"
    </xsl:text>
  </xsl:processing-instruction>
</xsl:template>

```

 

### Unwanted drop of obsolete children

*Problem*

Importing a parent record and a new set of child records can cause existing children, so-called obsolete children, in the receiving repository to be automatically dropped if the relation has Type Of Relationship = Composition. This is especially confusing if the import document specifies **<Insert/>** instruction tags for the children, because this wrongly suggests that the new children will be *added* to the existing children.

*Solution*

Disable the effect of Type Of Relationship = Composition during import. Do this by making sure that the import document has the setting **relationship-behaviour="as-reference"** in its usoft-xml processing instruction. You can reset an usoft-xml processing instruction by applying an XSLT transformation that has the following template or a similar template. To make XSLT operations optimally traceable, use USoft Delivery Manager, for example its "Added XSL" feature.

```language-xml
<xsl:template match="processing-instruction()[local-name()='usoft-xml']">
  <xsl:processing-instruction name="usoft-xml">
    <xsl:text>
      version="1.0" action="multi-tables-import" use-io-formats="no" 
      relationship-behaviour="as-reference" return-corrected-records ="yes"
    </xsl:text>
  </xsl:processing-instruction>
</xsl:template>

```

 