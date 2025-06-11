---
id: DML_instruction_tags
---

# DML instruction tags

In a table section, table elements represent database records. A table element is allowed to have an optional DML instruction tag. This is an explicit instruction to XML.Import about what to do with the record on import (See "Meaning of DML instruction tags" later in this article). DML (Data Manipulation Language) is an abbreviation from the SQL specification.

*Syntax*

```
{  <Insert/>

|  <Update column="new-value" column="new-value" ... />

|  <Delete/>  }
```

The element name must be "Insert", "Update", or "Delete". In the case of "Insert" and "Delete", the element must be empty.

To import an XML document with DML instruction tags, you must specify relationship-behaviour="as-reference" in the usoft-xml processing instruction. Otherwise, it's an error.

In the case of "Update":

- The Update element must have one or more attributes in which the attribute name identifies a changed column, and the attribute value the new column value.
- The parent element may optionally contain attributes for non-primary-key values. This way, the document is able to contain the old values of the changed columns.

*Example INSERT*

```xml
<Accredited_Persons documentName="Accredited Persons">
    <PERSON ID="177" FAMILY_NAME="Haynes" FIRST_NAME="Deborah">
      <Insert/>
    </PERSON>
</Accredited_Persons>
```

*Example UPDATE*

The ID attribute of the PERSON element is required. It identifies the record to be updated by its primary key.

```xml
<Accredited_Persons documentName="Accredited Persons">
    <PERSON ID="177">
      <Update FIRST_NAME="Deborah"/>
    </PERSON>
</Accredited_Persons>
```

*Example DELETE*

```xml
<Accredited_Persons documentName="Accredited Persons">
    <PERSON ID="177" FAMILY_NAME="Haynes" FIRST_NAME="Deborah">
      <Delete/>
    </PERSON>
</Accredited_Persons>
```

## Meaning of DML instruction tags

A USoft XML document is allowed to contain a mixture of elements with DML instruction tags and other elements without. On import, each element is considered separately. The sections below describe what happens in each case.

"Primary key" in each case is the primary key described by one or more column values in the parent element. The parent element has the same name as the database table.

|**Element has ...**|**This means ...**|
|--------|--------|
|No DML instruction tag|<p>If no record exists with the primary key, the record must be inserted.</p><p>If a record already exists with the primary key, the record must be updated.</p>|
|`<Insert/>`|<p>The record must be inserted.</p><p>If a record already exists with the primary key, it's an error.</p>|
|`<Update/>`|<p>One or more values in the record must be updated. The columns and values to be updated are specified as attributes of the `<Update/>` element.</p><p>If no record exists with the primary key, it's an error.</p>|
|`<Delete/>`|<p>The record must be deleted.</p><p>If no record exists with the primary key, it's an error.</p>|



 