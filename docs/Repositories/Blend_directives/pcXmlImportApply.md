---
id: pcXmlImportApply
---

# pc:XmlImportApply




:::note

This article is about the **pc:XmlImportApply**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:XmlImportApply**

Builds a set of appdata or metadata from USoft Blend directives, then imports this data into a USoft repository.

"Apply" in the name of this directive refers to the fact that directives in the XML content (if any) are applied before the import itself is executed. To import one or more literal data sets, use pc:XmlImport instead.

Returns an XML document. See the "Return document" section below.

*Syntax*
 

```
<pc:XmlImportApply
     alias="*name-literal*"
     commit="*commit-mode*"
     assign:*variable*="*xpath*"

*directive(s)*

>

*commit-mode*  :=  { commit | rollback }
```

The required **alias** identifies the connection to the Rules Engine that you want to use. For aliases, see pc:RunRulesService.

The optional *commit-mode* determines whether or not the operation is committed after import. Choose the "rollback" option for debugging purposes, in particular to find out if the external data violate any rules. In terms of data change, the net effect of running the operation with "rollback" is null.

*directive(s)* is a section of one or more USoft Blend directives from which the input data is built. This could be, for example, a `<pc:copy-of ... >` directive. It is possible to build and import multiple data sets.

## Import format

The data to be imported must have the USoft single-table or multi-table XML format. This format is specified in USoft Definer Help. You can produce this format by calling sql:DataTableSetExport as a Blend call as in:

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

By specifying the optional assign:variable attribute, you can apply an xpath-expression to the return document and store the result in variable:

```
assign:*variable*="*xpath-expression*"
```

If you have been importing multiple documents successfully, each of the imported results is queued in the variable. The results may be dequeued one-by-one.