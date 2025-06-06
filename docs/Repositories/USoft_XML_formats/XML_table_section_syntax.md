---
id: XML_table_section_syntax
---

# XML table section syntax

An XML table section is an XML fragment that describes a set of records from the same table. Table sections are used in [XML single-table documents](/docs/Repositories/USoft%20XML%20formats/XML%20singletable%20document%20format.md) and [XML multi-table documents](/docs/Repositories/USoft%20XML%20formats/XML%20multitable%20document%20format.md). An XML table section may contain any number of elements corresponding to records in the table.

*Syntax*

```language-xml
<*underscored-object-name-plural* documentName="*object-name-plural*">
  { <*table column="value" column="value"* ... />  |
    <*table column="value" column="value"* ... > <*dml-instruction-tag*/> </*table*> }
    ...
</*underscored-object-name-plural*>
```

*Underscored-object-name-plural* is the table's Object Name Plural with spaces (if any) replaced by underscores ( _ ) and underscores (if any) replaced by a sequence of 2 underscores (__). *Object-name-plural* is the table's Object Name Plural with spaces (if any) unreplaced by underscores.

*Table* and *column* are database table names and database column names as defined in USoft Definer. If you want [XML.Import](/docs/Extensions/XML%20internal%20component/XMLImport.md) to import a table element, the element MUST contain a primary key value, or multiple values if the parent key spans multiple columns. Otherwise it's an error.

*Table* elements have *column* attributes but are otherwise empty: they do not contain child elements or other contents. The only exception to this is that a table element can contain an optional [dml-instruction-tag](/docs/Repositories/USoft%20XML%20formats/DML%20instruction%20tags.md), which is either an \<Insert>, \<Update>, or \<Delete> element.

*Example*

```language-xml
<Accredited_Persons documentName="Accredited Persons">
    <PERSON ID="177" FAMILY_NAME="Haynes" FIRST_NAME="Deborah"/>
    <PERSON ID="112" FAMILY_NAME="Smith" FIRST_NAME="John"/>
</Accredited_Persons>
```

 