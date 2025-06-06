---
id: Obsolete_children_on_import
---

# Obsolete children on import

An **obsolete child** is a child record that is considered to be no longer relevant if new information about the parent and its children is imported.

You can instruct XML.Import and JSON.Import to delete obsolete children when importing new parent-child information. This applies when you pass parent and child records in a USoft multi-table XML or JSON document.

Whether or not XML.Import or JSON.Import deletes obsolete children depends on the Type of Relationship of the Relationship between parent and child.

If Type Of Relationship = **Reference** (the default), child records in the database that do not exist in the XML or JSON are NOT deleted.

If Type Of Relationship = **Composition**,****child records in the database that do not exist in the XML or JSON ARE deleted.

A child record is considered "not to exist" (see Example 2) in the XML or JSON only if both of the following apply:

- The wrapper element with the child table's Object Name Plural is in the XML or JSON
- Inside this wrapper, no record exists with the primary key value(s) of the child record.

There is a processing instruction called "relationship-behaviour" with which you can direct the engine to treat "Composition" relationships as if they were "Reference" relationships. For details, see Example 4 or go to (XML:) " [usoft-xml processing instruction](/docs/Repositories/USoft%20XML%20formats/usoftxml%20processing%20instruction.md) "  or (JSON:) [Meta-instruction properties in JSON](/docs/Repositories/USoft%20JSON%20format/Metainstruction%20properties%20in%20JSON.md).

The following examples are imported into this sample database, where the relationship between EMPLOYEE and EMPLOYEE_LANGUAGE_SKILL has Type Of Relationship = **Composition**:

**Table: EMPLOYEE**

|        |        |
|--------|--------|
|**ID**  |**NAME**|
|101     |CELINE  |
|102     |ANJA    |



**Table: EMPLOYEE_LANGUAGE_SKILL**

|        |        |
|--------|--------|
|**EMP_ID**|**LANG**|
|101     |NL      |
|101     |SP      |
|102     |NL      |
|102     |SP      |



### Example 1: Child records in XML

This example shows how obsolete children are handled when child records are present in the XML import document:

```
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no" verify-original-values="no" return-corrected-records ="yes"?>
<MultiImport>
  <Employees>
    <EMPLOYEE ID="101" NAME="SELINA"/>
    <EMPLOYEE ID="103" NAME="LUCA"/>
  </Employees>
  <Employee_Language_Skills>
    <EMPLOYEE_LANGUAGE_SKILL EMP_ID="101" LANG="NL" />
    <EMPLOYEE_LANGUAGE_SKILL EMP_ID="103" LANG="NL" />
    <EMPLOYEE_LANGUAGE_SKILL EMP_ID="103" LANG="SP" />
  </Employee_Language_Skills>
</MultiImport>

```

The result of importing this document will be:

**Table: EMPLOYEE**

|        |        |        |
|--------|--------|--------|
|**ID**  |**NAME**|**Comments**|
|101     |SELINA  |The NAME is updated.|
|102     |ANJA    |        |
|103     |LUCA    |A new record is inserted.|



**Table: EMPLOYEE_LANGUAGE_SKILL**

|        |        |        |
|--------|--------|--------|
|**EMP_ID**|**LANG**|**Comments**|
|101     |NL      |        |
|        |        |Record 101, SP is deleted.|
|102     |NL      |        |
|102     |SP      |        |
|103     |NL      |A new record is inserted.|
|103     |SP      |A new record is inserted.|



### Example 2: Empty table wrapper element in XML

This example shows how an empty table wrapper in the XML document has the meaning "children do not exist". Obsolete children are deleted. Contrast with Example 3:

```
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no" verify-original-values="no" return-corrected-records ="yes"?>
<MultiImport>
  <Employees>
    <EMPLOYEE ID="101" NAME="SELINA"/>
    <EMPLOYEE ID="103" NAME="LUCA"/>
  </Employees>
  <Employee_Language_Skills/>
</MultiImport>

```

The result of importing this document will be:

**Table: EMPLOYEE**

|        |        |        |
|--------|--------|--------|
|**ID**  |**NAME**|**Comments**|
|101     |SELINA  |The NAME is updated.|
|102     |ANJA    |        |
|103     |LUCA    |A new record is inserted.|



**Table: EMPLOYEE_LANGUAGE_SKILL**

|        |        |        |
|--------|--------|--------|
|**EMP_ID**|**LANG**|**Comments**|
|        |        |Record 101, NL is deleted.|
|        |        |Record 101, SP is deleted.|
|        |        |Record 102, NL is deleted.|
|        |        |Record 102, SP is deleted.|



### Example 3: Table is not referred to in XML

This example how an XML document with NO reference to a table does not affect child records. Existing children are not considered obsolete, and consequently are not dropped. Contrast with Example 2:

```
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no" verify-original-values="no" return-corrected-records ="yes"?>
<MultiImport>
  <Employees>
    <EMPLOYEE ID="101" NAME="SELINA"/>
    <EMPLOYEE ID="103" NAME="LUCA"/>
  </Employees>
</MultiImport>

```

The result of importing this document will be:

**Table: EMPLOYEE**

|        |        |        |
|--------|--------|--------|
|**ID**  |**NAME**|**Comments**|
|101     |SELINA  |The NAME is updated.|
|102     |ANJA    |        |
|103     |LUCA    |A new record is inserted.|



**Table: EMPLOYEE_LANGUAGE_SKILL**

|        |        |        |
|--------|--------|--------|
|**EMP_ID**|**LANG**|**Comments**|
|101     |NL      |Record not in XML, but preserved.|
|101     |SP      |Record not in XML, but preserved.|
|102     |NL      |Record not in XML, but preserved.|
|102     |SP      |Record not in XML, but preserved.|



### Example 4: relationship-behaviour="as-reference"

This example shows how obsolete children in a composition relationship can be preserved by instruction XML.Import, in the **relationship-behaviour** processing instruction at the top, to treat the relationship as a reference relationship during the import. Contrast with Example 1.

```
<?usoft-xml version="1.0" action="multi-tables-import" relationship-behaviour="as-reference"
    use-io-formats="no" verify-original-values="no" return-corrected-records ="yes"?>
<MultiImport>
  <Employees>
    <EMPLOYEE ID="101" NAME="SELINA"/>
    <EMPLOYEE ID="103" NAME="LUCA"/>
  </Employees>
  <Employee_Language_Skills>
    <EMPLOYEE_LANGUAGE_SKILL EMP_ID="101" LANG="NL" />
    <EMPLOYEE_LANGUAGE_SKILL EMP_ID="103" LANG="NL" />
    <EMPLOYEE_LANGUAGE_SKILL EMP_ID="103" LANG="SP" />
  </Employee_Language_Skills>
</MultiImport>

```

The result of importing this document will be:

**Table: EMPLOYEE**

|        |        |        |
|--------|--------|--------|
|**ID**  |**NAME**|**Comments**|
|101     |SELINA  |The NAME is updated|
|102     |ANJA    |        |
|103     |LUCA    |A new record is inserted.|



**Table: EMPLOYEE_LANGUAGE_SKILL**

|        |        |        |
|--------|--------|--------|
|**EMP_ID**|**LANG**|**Comments**|
|101     |NL      |.       |
|101     |SP      |Record not in XML, but preserved.|
|102     |NL      |        |
|102     |SP      |        |
|103     |NL      |        |
|103     |SP      |A new record is inserted.|