# XML multi-table document format

A **USoft XML multi-table document** is allowed to contain data from multiple tables.

This document format is produced by calls to [XML.MultiExportTables](/docs/Extensions/XML%20internal%20component/XMLMultiExportTables.md) (except for the [usoft-xml processing instruction](/docs/Repositories/USoft%20XML%20formats/usoftxml%20processing%20instruction.md) at the top), and is re-importable by calling [XML.Import](/docs/Extensions/XML%20internal%20component/XMLImport.md).

*Syntax*

```
<? *usoft-xml-processing-instruction* ?>
<*root-element*>
*xml-table-section*  ...
</*root-element*>

*root-element*  ::=  { MultiExport | MultiImport }
```

The format begins with a required usoft-xml-processing-instruction. The required root element name is either "MultiExport" or "MultiImport". The root element may contain any number of table sections.

*Example*

```language-xml
<?usoft-xml version="1.0" action="multi-tables-import"?>
<MultiExport>
  <Accredited_Persons>
      <PERSON ID="177" FAMILY_NAME="Haynes" FIRST_NAME="Deborah"/>
      <PERSON ID="112" FAMILY_NAME="Smith" FIRST_NAME="John"/>
  </Accredited_Persons>
  <Employees>
      <EMPLOYEE ID="50" FAMILY_NAME="Mbouna" DEPT="Sales"/>
      <EMPLOYEE ID="112" FAMILY_NAME="Patel" DEPT="Sales"/>
  </Employees>
</MultiExport>
```