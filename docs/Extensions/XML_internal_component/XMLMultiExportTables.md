---
id: XMLMultiExportTables
---

# XML.MultiExportTables



> [!NOTE]
> This article is about the **MultiExportTables** method of the [XML internal component](/docs/Extensions/XML_internal_component).
> See also the [Data flow control with XML or JSON](/docs/Repositories/Data_flow_control_with_XML_or_JSON) section.

## **XML.MultiExportTables**

Exports data to the [USoft XML multi-table format](/docs/Repositories/USoft_XML_formats/XML_multitable_document_format.md) on the basis of a regular expression identifying a set of tables.

----

![](./assets/b011ef75-21b5-4ae7-a207-b41495eaf8fa.png)



Exports binary data (of the BLOB data type) to base64 encoding.

----

> [!TIP]
> Subtype indicators are not exported. See also the RestrictiveSupertypeListing parameter in this help topic.

Using this method, you can create an output file with data from multiple tables. You can use [XML.Import](/docs/Extensions/XML_internal_component/XMLImport.md) to re-import this result set into a target repository where each of the tables is present.

*Syntax*

```sql
INVOKE XML.MultiExportTables WITH SELECT
*regular-expression*
,   *parameter,    value*
,   ...      ,    …
```

The required *regular-expression* identifies the set of tables from which data is exported.

The optional *parameter-value* pairs specify additional options. See the Parameters section later in this article.

You can append WHERE clauses to restrict the output to records that match WHERE conditions. See the "Appended WHERE clauses" section later in this article.

*Example 1*

This statement, executed in USoft Definer, returns an XML document describing the structure and contents of tables T_TABLE, T_COLUMN and T_DOMAIN:

```sql
INVOKE XML.MultiExportTables WITH SELECT
    '(T_TABLE|T_COLUMN|T_DOMAIN)'
```

*Example 2*

This statement, if executed in your User Application, or in any USoft application such as Definer or Authorizer, returns an XML document describing the structure and contents of ALL tables. This may run into errors if the output includes component tables; see Example 3 for a solution.

```sql
INVOKE XML.MultiExportTables WITH SELECT
    '(.*)'
```

*Example 3*

This example is a solution to problems you may run into if the following statement raises an error when attempting to query a component table:

```sql
INVOKE XML.MultiExportTables WITH SELECT
    '(.*)'
```

To get around this error, you can call [USMeta.Tables](/docs/Extensions/USMeta_internal_component/USMetaTables.md). The following example exports database tables, but not other types of table:

```sql
INVOKE XML.MultiExportTables WITH
SELECT usxsl.apply
   (
      usmeta.tables()
   ,   '<?xml version="1.0" encoding="windows-1252"?>
        <xsl:stylesheet  version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
          <xsl:output method="text" encoding="UTF-8" omit-xml-declaration="no"/>

          <xsl:template match="/">
            <xsl:for-each select="*/*/*[@TABLE_TYPE=''DATABASE'']">
               <xsl:if test="position() > 1">|</xsl:if>
               <xsl:value-of select="@TABLE_NAME"/>                
             </xsl:for-each>
           </xsl:template>

         </xsl:stylesheet>'
   )
,   'ConvertWhiteSpaces', 'yes'
,   'ProcessingInstruction', 'yes'
,   'WriteOutputTo', 'c:\temp\mydatabasetables.xml'
```

## Parameters

You can add parameter-value pairs to your statement to specify additional options. This statement exports all data from the TOUR and SCHEDTOUR table, converting whitespaces to entity references, and writing the output to a file named "c:\\temp\\output.xml":

```sql
INVOKE XML.MultiExportTables WITH SELECT
    '(TOUR|SCHEDTOUR)'
,   'ConvertWhiteSpaces', 'yes'
,   'WriteOutputTo', 'c:\temp\output.xml'
```

Available parameter settings are in the table below. The order in which you specify settings has no effect. The use of each parameter is optional. If you do not refer to a given parameter, and it has a default value associated with it, the result is as if you specified that default. Both the parameter names and the values are case-insensitive strings.

 

### AppendToFile

|***parameter***|***value***|
|--------|--------|
|AppendToFile|<p>*USFile-alias*</p><p>*output-file-name*</p>|



This parameter is used to specify that the output is to be written directly to a file. If the file exists, it will be appended to. To overwrite the existing file, use the WriteOutputTo parameter instead.

It is possible to use a file which has previously been opened using the [USFile.Open](/docs/Extensions/USFile_internal_component/USFileOpen.md) method. To do this, the alias used in the USFile.Open method must be specified, preceded by 'USFile.'

 

### ConvertWhiteSpaces

|***parameter***|***value***|
|--------|--------|
|ConvertWhiteSpaces|{ yes  \| no }|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

If you specify 'yes' for this parameter, then tab characters, spaces, newline characters and carriage returns/line feeds are converted to &#x9; &#x20; &#xA; and &#xD respectively. When the resulting XML document is imported using XML Import, the converted values are switched back into tab characters, spaces, newline characters and

 

### EmptyDocOnZeroRows

|***parameter***|***value***|
|--------|--------|
|EmptyDocOnZeroRows|{ yes  \| no }|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

If set to 'no', if the SELECT statement of the XML export does not return any rows, USoft returns an empty string. This makes it difficult to apply any transformation on the result of the XML export.

If set to ‘yes’ (the default), then the output is always an XML document. If no rows are returned, this XML document contains only a root tag with the same name as the info window name.

 

### LOBAsCData

![](./assets/f9d87906-aca6-42c9-9466-73cccd5835ae.png)



|***parameter***|***value***|
|--------|--------|
|LOBAsCDATA|{ yes  \| no }|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

This parameter affects large-object (LOB) columns. They are columns with datatype CLOB, NCLOB, or BLOB.

If set to ‘yes’, LOB columns appear as a child XML element containing the column value as a CDATA section. This has the advantage that the content remains readable even if special characters are used:

```language-xml
<TABLE_1 KEY_COLUMN="101">
  <LOB_COLUMN><![CDATA[This is raw data with special <> && characters.]]></LOB_COLUMN>
</TABLE_1>
```

If set to ‘no’ (the default), LOB columns appear as per normal as an XML attribute. Special characters in the attribute value are escaped by entity referencing:

```language-xml
<TABLE_1 KEY_COLUMN="101" LOB_COLUMN="This is raw data with special <> && characters."/>
```

 

### ProcessingInstruction

|***parameter***|***value***|
|--------|--------|
|ProcessingInstruction|{ yes  \| no }|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

If you specify 'yes' for this parameter, the following top-level processing-instruction is added to the output XML document:

```
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no"
   verify-original-values="no" return-corrected-records ="yes"?>
```

Otherwise no encoding processing instruction is added to the returned XML document.

 

### RestrictiveSupertypeListing

|***parameter***|***value***|
|--------|--------|
|RestrictiveSupertypeListing|{ yes  \| no }|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

If you specify 'yes' for this parameter, only supertype records are output that are not also a subtype (or more than 1 subtype). The number of supertype records listed in the supertype section of the export file may be less than the number of records in the supertype table in the database.

If you specify 'no' for this parameter (the default), these 2 numbers are always equal.

 

### WriteOutputTo

|***parameter***|***value***|
|--------|--------|
|WriteOutputTo|<p>*USFile-alias*</p><p>*output-file-name*</p>|



This parameter is used to specify that the output is to be written directly to a file. If the file exists, it will be **overwritten**. To prevent this, use the AppendToFile parameter instead.

It is possible to use a file which has previously been opened using the [USFile.Open](/docs/Extensions/USFile_internal_component/USFileOpen.md) method. To do this, the alias used in the USFile.Open method must be specified, preceded by 'USFile.'

 

### XmlDeclaration

|***parameter***|***value***|
|--------|
|{ yes  \| no }|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

If you specify 'yes' for this parameter, the default Rules Engine encoding is returned in XML processing instructions. Otherwise no encoding processing instruction is added to the returned XML document.

## Appended WHERE clauses

You can append WHERE clauses to restrict the output to records that match WHERE conditions. Do this by specifying a named group in your regular expression, and then using the group name as a parameter name to bind the WHERE clause to the table(s) matching the regular expression:

*Syntax*

```sql
INVOKE XML.MultiExportTables WITH SELECT
*named-group-regexp, named-group-regexp ...,   group-name,    appended-where-clause*
,   ...      ,    ...

*named-group-regexp*  ::=  (?*group-name*)*regular-expression*
```

*Group-name* must be an alphanumeric string starting with a letter and not containing whitespace.

*Appended-where-clause* must be a SQL fragment starting with the WHERE keyword that is valid when appended to an imaginary "SELECT * FROM table" query for each table matching regular-expression. If *named-group-regexp* is

```
(?<mycondition>TOUR)
```

and *appended-where-clause* is

```sql
WHERE destination = 'AUSTRALIA'
```

then the output is the result of the implied query:

```sql
SELECT * FROM TOUR WHERE destination = 'AUSTRALIA'
```

*Appended-where-clause* may contain AND and OR operators. It may end in an ORDER BY clause. It may not contain the GROUP BY or HAVING keywords. It may not contain subqueries.

Just like XML.Export, XML.MultiExportTables uses only single-table queries. While its result (other than the result of XML.Export) may contain data from multiple tables, data from each table is obtained by a single-table SELECT statement. The impossibility to specify joins is alleviated by the possibility to use substitution variables to extract joined data by substituted key value. For this option, see the "Substitution variables in appended WHERE" section in this help topic. Use XML.SQLExport if you want to export data based on multi-table queries, ie., queries containing joins or subqueries.

*Example*

This statement writes TOUR and SCHEDTOUR data with destination AUSTRALIA to a file named "c:\\temp\\tours.xml". The result is an XML document describing Tour and Schedtour information about tours to Australia.

This example illustrates that group-name can be reused for multiple sections of named-group-regexp separated by alternation symbols ( '\|' pipe symbols). This works only if the columns used in appended-where-clause exist in each of the referenced tables.

```sql
INVOKE XML.MultiExportTables WITH SELECT
    '(?<mydestination>TOUR)|(?<mydestination>SCHEDTOUR)'
,   'mydestination', 'where destination = ''AUSTRALIA'''
,   'ConvertWhiteSpaces', 'no'
,   'AppendToFile','c:\temp\tours.xml'
```

The output data of this statement is the result of the implied queries:

```sql
SELECT * FROM TOUR WHERE destination = 'AUSTRALIA'
SELECT * FROM SCHEDTOUR WHERE destination = 'AUSTRALIA'
```

## Substitution variables in appended WHERE

You can use the **$** prefix to reference *substitution variables* in appended WHERE clauses. You can then specify a value for a substitution variable by adding a parameter-value pair in which parameter is the variable name and value is the substitution value.

This example exports joined data from multiple tables for a person with person ID 84:

```sql
INVOKE XML.MultiExportTables WITH SELECT
    '(?<mycondition1>PERSON)|(?<mycondition2>SCHEDTOUR)'
,   'mycondition1', 'where person_id = $PID'
,   'mycondition2', 'where booked_by = $PID'
,   'PID', 84
```

The output data of this statement is the result of the implied queries:

```sql
SELECT * FROM PERSON WHERE person_id = 84
SELECT * FROM SCHEDTOUR WHERE booked_by = 84
```

## Behaviour with subtypes

Subtype indicators are not exported to the XML document. This is to minimise potential problems with the re-importability of the export document.

As a result, information about which supertypes belong to which subtypes may change on re-import if you choose not to include the subtype records in your export.

If you export data with [XML.Export](/docs/Extensions/XML_internal_component/XMLExport.md) instead of with XML.MultiExportTables, then subtype indicators may or may not be exported to the XML document. A subtype indicator is exported with XML.Export if it is mentioned in the WITH SELECT ... list, and also if that list contains the "*" wildcard.

For details on the re-importability of subtypes, see [XML.Import: Known problems and workarounds](/docs/Repositories/Data_flow_control_with_XML_or_JSON/XML_import_Known_problems_and_workarounds.md).