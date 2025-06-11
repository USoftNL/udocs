---
id: XMLExport
---

# XML.Export




:::note

This article is about the **Export** method of the [XML internal component](/Extensions/XML_internal_component).
See also the [Data flow control with XML or JSON](/Repositories/Data_flow_control_with_XML_or_JSON) section.

:::

## **XML.Export**

Exports data to the [USoft XML single-table format](/Repositories/USoft_XML_formats/XML_singletable_document_format.md) on the basis of a SELECT statement.

----

![](./assets/b011ef75-21b5-4ae7-a207-b41495eaf8fa.png)



Exports binary data (of the BLOB data type) to base64 encoding.

----

*Syntax*

```sql
INVOKE XML.Export WITH
SELECT      { *parameter-assignment* | *column-expression* } ...
FROM        *table*
ORDER BY    *order-by-list*

*parameter-assignment*  ::=  *value  parameter*

*column-expression*     ::=

  {    *column*        |
       OLD( *column* ) |
       *             |
       OLD( * )      }
```

The required SELECT clause must contain at least 1 item. Each item in this clause is either a *parameter-assignment* or a *column-expression*.

Each *parameter-assignment* is a value-name pair. The SECOND element is the name of a parameter. The FIRST element is the value assigned to that parameter. Please find *values* and *parameters* in the table below.

Each *column-expression* is either a literal column name or the SQL * (asterisk) wildcard. Column aliases are not supported. Other SQL functions than OLD() are NOT supported. The OLD() function is supported only if you call XML.Export from constraint SQL. Even in constraint SQL, you cannot export both old value and new value for a column: you cannot use *column* and OLD( *column* ) for the same column in the same SELECT list.

It is customary, but not mandatory, to list value parameter pairs before column expressions. The order of the items in the SELECT clause determines the order of the attributes in the XML output. The optional ORDER BY clause determines the document order of the records in the XML output.

The required FROM clause must contain the name of exactly 1 table or logical view.

*Example*

```sql
INVOKE    XML.Export WITH
SELECT    'yes'  UseIOFormats
,         *
FROM      tour
```

## Parameters

This section is sorted by *parameter* and lists all *value-parameter* pairs supported in the SELECT output-lists passed to XML.Export. The use of each parameter is optional. If you do not specify a given *parameter* and it has a default *value* corresponding to it, then this is the value applied.

Both *value* and *parameter* are case-insensitive.

### AppendToFile

|***value***|***parameter***|
|--------|--------|
| ` { yes  \| no }`|AppendToFile|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

This parameter is used with the "WriteOutputTo" parameter. If you specify 'yes' for this parameter, the file is appended to. Otherwise, it is overwritten.

 

### ConvertWhiteSpaces

|***value***|***parameter***|
|--------|--------|
| ` { yes  \| no }`|ConvertWhiteSpaces|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

If you specify 'yes' for this parameter, then tab characters, spaces, newline characters and carriage returns/line feeds are converted to &#x9; &#x20; &#xA; and &#xD respectively. When the resulting XML document is imported using XML Import, the converted values are switched back into tab characters, spaces, newline characters and CR/LFs.

 

### DTDName

|***value***|***parameter***|
|--------|--------|
|* header-line-name*|DTDName |



This parameter is used to specify a header line in the XML output with a DOCTYPE declaration containing the DTD Name as reference.

 

### EmptyDocOnZeroRows

|***value***|***parameter***|
|--------|--------|
| ` { yes  \| no }`|EmptyDocOnZeroRows|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

If set to 'no' (the default), if the SELECT statement of the XML export does not return any rows, USoft returns an empty string. This makes it difficult to apply any transformation on the result of the XML export.

If set to ‘yes’, then the output is always an XML document. If no rows are returned, this XML document contains only a root tag with the same name as the info window name.

 

### ExecutionType

|***value***|***parameter***|
|--------|--------|
|`{ Insert \| Update \| Delete }`|ExecutionType|

*Value* is a string and must be quoted, as in the example earlier in this help topic.

Specifies a [DML instruction tag](/Repositories/USoft_XML_formats/DML_instruction_tags.md) that will be generated for each resulting row element.

A Delete tag is necessary if you want to use the export result to delete data from a target repository.


:::tip

Otherwise, ExecutionType has limited applicability because XML.Import already has a default way of handling Insert and Update which is usually the handling you want.
The Insert tag is only useful if you want to enforce that a version of the record presented is not already present.
The Update tag is necessary if you want to identify records where a primary key value must be updated in a target repository, but you cannot use the ExecutionType parameter for this, because XML.Export does not let you export old and new values of the same (primary key) column in 1 operation.

:::

 

### LeadingZeroForDecimal

|***value***|***parameter***|
|--------|--------|
| ` { yes  \| no }`|LeadingZeroForDecimal|



If set to ‘yes’, numeric values returned from the database without a leading zero, such as '.30', will appear in your XML result with a leading zero, as in '0.30'.

If set to ‘no’, they will appear without leading zero, as in '.30'.

 

### LobAsCData

![](./assets/e13d7e31-0567-42c0-9e44-f242701a4b30.png)



|***value***|***parameter***|
|--------|--------|
| ` { yes  \| no }`|LobAsCData|



*Value* is a string and must be quoted, as in the example earlier in this help topic.

This parameter affects large-object (LOB) columns. They are columns with datatype CLOB, NCLOB, or BLOB.

If set to ‘yes’, LOB columns appear as a child XML element containing the column value as a CDATA section. This has the advantage that the content remains readable even if special characters are used:

```xml
<TABLE_1 KEY_COLUMN="101">
  <LOB_COLUMN><![CDATA[This is raw data with special <> && characters.]]></LOB_COLUMN>
</TABLE_1>
```

If set to ‘no’ (the default), LOB columns appear as per normal as an XML attribute. Special characters in the attribute value are escaped by entity referencing:

```xml
<TABLE_1 KEY_COLUMN="101" LOB_COLUMN="This is raw data with special <> && characters."/>
```

### PrettyPrint

|***value***|***parameter***|
|--------|--------|
|`{ Compact \| Indent \| Newline }`|PrettyPrint|

*Value* is a string and must be quoted, as in the example earlier in this help topic.

If set to ‘Compact’, the result XML is returned without whitespace formatting. This ensures minimal size.

If set to ‘Indent’, the result XML contains inserted newline and indentation characters. This ensures an optimal level of readibility for humans. The indentation characters visualise how the XML elements are nested.

If set to 'Newline’ (the default), the result XML contains inserted newline characters, but not indentation characters. This ensures a limited level of readability for humans.

### TrimSpaces

|***value***|***parameter***|
|--------|--------|
| ` { yes  \| no }`|TrimSpaces|

*Value* is a string and must be quoted, as in the example earlier in this help topic.

If set to ‘yes’, any trailing whitespace characters will be removed from the XML result.

### UseIOFormats

|***value***|***parameter***|
|--------|--------|
| ` { yes  \| no }`|TrimSpaces|

*Value* is a string and must be quoted, as in the example earlier in this help topic.

If you specify 'yes' for this parameter, column values in the resulting XML output get the IO format of the corresponding domain. Otherwise they are written as they are retrieved from the database.

### WriteOutputTo

|***value***|***parameter***|
|--------|--------|
|<p>*USFile-alias*</p><p>*output-file-name*</p>|WriteOutputTo|

This parameter is used to specify that the output is to be written directly to a file. It is possible to use a file which has previously been opened using the [USFile.Open](/Extensions/USFile_internal_component/USFileOpen.md) method. To do this, the alias used in the USFile.Open method must be specified, preceded by 'USFile.' If no USFile alias is specified, the XML will be written directly to the file specified. If the file exists, it will be overwritten. To prevent this, use the 'AppendToFile' parameter. If specified, the method will return the file name.

### XmlDeclaration

|***value***|***parameter***|
|--------|--------|
| `{ yes  \| no }`|XmlDeclaration|

*Value* is a string and must be quoted, as in the example earlier in this help topic.

If you specify 'yes' for this parameter, the default Rules Engine encoding is returned in XML processing instructions. Otherwise no encoding processing instruction is added to the returned XML document.