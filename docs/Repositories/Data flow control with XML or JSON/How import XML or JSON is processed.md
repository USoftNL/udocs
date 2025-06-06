# How import XML or JSON is processed

### "UPSERT" default handling

By default, XML or JSON data are imported following the "UPSERT" principle, a mix of INSERT and UPDATE:

|**What?**|**Definition**|**Default handling**|
|--------|--------|--------|
|New record|The record is in the XML or JSON document.A record with the same primary key does not exist in the database.|The record is INSERTed.|
|Changed record|The record is in the XML or JSON document.A record with the same primary key also exists in the database.|The record is UPDATEd.|
|Other record|The record is not in the XML or JSON document.It only exists in the database.|The record is not affected.|



Default handling is overridden if the XML record has a DML instruction tag, or the JSON record a meta-instruction property:

|**What?**|**Definition**|**Handling**|
|--------|--------|--------|
|instruction-tagged record|<p>XML record containing a DML instruction tag, *or:*</p><p>JSON record containing a meta-instruction property.</p>|The instruction is executed.|



*Example*

Given this sample database:

```
EMPLOYEE:                  ID = 101,  NAME = CELINE
                           ID = 102,  NAME = ANJA
EMPLOYEE_LANGUAGE_SKILL:   EMP_ID = 101, LANG = NL
                           EMP_ID = 101, LANG = SP
                           EMP_ID = 102, LANG = NL
                           EMP_ID = 102, LANG = SP

```

and this import document:

```language-xml
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

The result of the import in the database will be:

```
EMPLOYEE:                 ID = 101,  NAME = SELINA    <= The NAME is updated
                          ID = 102,  NAME = ANJA
                          ID = 103,  NAME = LUCA      <= A new record is inserted
EMPLOYEE_LANGUAGE_SKILL:  EMP_ID = 101, LANG = NL     <= The record is not affected
                          EMP_ID = 101, LANG = SP     
                          EMP_ID = 102, LANG = NL
                          EMP_ID = 102, LANG = SP
                          EMP_ID = 103, LANG = NL     <= A new record is inserted
                          EMP_ID = 103, LANG = SP     <= A new record is inserted

```

### Rules Engine is active

When an import document is processed by a call to XML.Import or JSON.Import, the Rules Engine is active. It performs all the actions, corrections and checks defined for it.

### Import is not automatically committed

When you call XML.Import or JSON.Import, the import operation is not automatically committed. It is the programmer or user who decides when to commit. It is therefore possible to:

- Execute an XML or JSON import, consider its result, and then commit the operation or roll it back as a separate action.
- Execute an XML or JSON import in the middle of a transaction.
- Have a transaction that consists of more than one XML or JSON import.

### Relationships: Referential checks

When you use XML.Import to import a multi-table XML document, referential relationship checks are deferred until commit. This allows you to import parent-child record constellations without worrying about the order in which the records appear in the XML or JSON.

This applies to XML.Import as of USoft 9.1. JSON.Import was introduced in USoft 10.1.

### Relationships: Obsolete children

Obsolete children are child records that no longer exist in the import XML or JSON. You can instruct XML.Import and JSON.Import to drop obsolete children by setting Type Of Relationship = Composition for the relationship.

If you are importing an XML document with DML instruction tags, then you must block the "drop obsolete children" behaviour by specifying relationship-behaviour="as-reference" in the **usoft-xml** processing instruction. Otherwise, an error is raised. With DML instruction tags, you can use the **<Delete/>** tag to manually determine exactly which records are to be dropped.

If you are importing an JSON document with meta-instruction properties, then you must block the "drop obsolete children" behaviour by specifying relationship-behaviour="as-reference" in the **@usoft-json** meta-instruction property. Otherwise, an error is raised. With meta-instruction properties, you can use the **@Delete** property to manually determine exactly which records are to be dropped.

USoft Delivery Manager performs standard comparisons of exported XML. In the outcome of each data comparison (as produced in a file with name "... .diff. ..."), it automatically adds relationship-behaviour="as-reference" to the usoft-xml processing instruction. This applies to metadata and application data alike. In summary, importing a Delivery Manager "... .diff. ..." file never causes obsolete children to be dropped automatically.

### Instruction-tagged data and mixed format

In your import document you are allowed to use (XML:) DML instruction tags or (JSON:) meta-instruction properties for some, but not all, records to be imported. This is referred to as "mixed-format" documents.

Mixed-format XML or JSON is imported on a record-by-record basis:

In XML:

- If there is a DML instruction tag, this tag dictates what XML.Import must do with the record.

- If there is no DML instruction tag, the default "UPSERT" behavior applies.

In JSON:

- If there is a meta-instruction property, this property dictates what JSON.Import must do with the record.

- If there is no meta-instruction property, the default "UPSERT" behavior applies.