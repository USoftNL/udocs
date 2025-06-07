---
id: pcXmlImport
---

# pc:XmlImport




:::note

This article is about the **pc:XmlImport**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:XmlImport**

Imports one or more sets of literal appdata or metadata into a USoft repository. To build the data to be imported from executing USoft Blend directives, instead of supplying them as literal data, use pc:XmlImportApply instead.

Returns an XML document. See the "Return document" section below.

*Syntax*

```
<pc:XmlImport
     alias="*name-literal*"
     commit="*commit-mode*"
     source="*file-path*" >

*   data-to-be-imported*

</pc:XmlImport>

*commit-mode*  :=  { commit | rollback }
```

The required **alias** identifies the connection to the Rules Engine that you want to use. For aliases, see pc:RunRulesService.

The optional *commit-mode* determines whether or not the operation is committed after import. Choose the "rollback" option for debugging purposes, in particular to find out if the external data violate any rules. In terms of data change, the net effect of running the operation with "rollback" is null.

To import successfully, you must specify either the source attribute or the data-to-be-imported XML content. If you use source, its value must point to an existing file on the file system that contains the data. Otherwise, the \<pc:XmlImport> element must have exactly 1 child element.

*Example*

This example resets a "Allow_Disable_Constraint" configuration parameter in USoft Authorizer so that, in a next step, data may be imported against a disabled Rules Engine.

```xml
<pc:XmlImport connection="{$authconn}"  commit="commit">
  <Additional_Parameters documentName="Additional Parameters">
    <T_AUTH_OC_PARAMS OC_ID="LAN" SET_TYPE="URE" PARAM_NAME="Allow_Disable_Constraint" PARAM_VALUE="True"/>
  </Additional_Parameters>
</pc:XmlImport>
```

## Import format

The data to be imported must have the USoft [single-table XML format](/docs/Repositories/USoft_XML_formats/XML_singletable_document_format.md) or [multi-table XML format](/docs/Repositories/USoft_XML_formats/XML_multitable_document_format.md). You can produce such a format by calling sql:DataTableSetExport as a Blend call as in:

```
<pc:evaluate select="sql:DataTableSetExport($instance, '.*', 'c:\temp\myoutputfile.xml', '')" />
```

or by calling, from a USoft tool interface:

```sql
INVOKE XML.MultiExportTables WITH SELECT regular-expression …
```

## Return document

If the import is successful, the return document looks something like this.

```xml
<Participants documentName="Participants">
  <PARTICIPANT RES_ID="179" PERSON_ID="144" INSURANCE="Y" DIET="Vegetarian" WITHDRAWAL_DATE="" />
</Participants>
```

This is potentially different from the input data, because the return document is a report of record values as they appear, or would appear, after constraints are applied. For example, if a business rule causes the INSURANCE flag for the imported record to be set to 'Y', the return data has INSURANCE='Y' but the input data has INSURANCE='N'.

If you pass commit="commit", the return document reflects the database state. If you pass commit="rollback" (the default), the return document reflects what the database state would be if you had committed.

## Processing the return document

By specifying the optional assign:variable attribute, you can apply an xpath-expression to the return document and store the result in variable.

```
assign:*variable*="*xpath-expression*"
```

If you have been importing multiple documents successfully, each of the imported results is queued in the variable. The results may be dequeued one-by-one.

 