---
id: JSONImport
---

# JSON.Import

![](./assets/ba9b59ee-92c4-42d3-8ee4-4a2d6b784bc2.png)




:::note

This article is about the **Import** method of the [JSON internal component](/docs/Extensions/JSON_internal_component).

:::

## **JSON.Import**

Imports data presented in the [USoft JSON format](/docs/Repositories/USoft_JSON_format/USoft_JSON_format.md).

----

![](./assets/b011ef75-21b5-4ae7-a207-b41495eaf8fa.png)



Imports base64-encoded binary data (of the BLOB data type).

IgnoreGUK parameter has been added.

----

Processes the row elements found in the JSON document one-by-one in document order. The default behaviour is "UPSERT" handling:

- A record is INSERTed if no record with the same primary key is found in the target table.
- No action is taken if a record with the same primary key, and no different values in other columns, is found in the target table.
- A record is UPDATEd if a record with the same primary key, but different values in other columns, is found in the target table.
- No record is DELETEd.

This “UPSERT” handling may be modified by [meta-instruction properties](/docs/Repositories/USoft_JSON_format/Metainstruction_properties_in_JSON.md), namely the **@usoft-json** meta-instruction property supplied at the top of the import document, and **@Insert**, **@Update** and **@Delete** meta-instruction properties supplied inside record entries. It may also be modified by the VerifyOriginalValues and UseIOFormats parameters of JSON.Import itself.

*Syntax*

```sql
INVOKE JSON.Import WITH
SELECT      *value    parameter*
,           *value    parameter* ...
,           *expression* JSONDocument
FROM        *table*
```

The required SELECT output-list is made up of 0 or more *value parameter* pairs and 1 required (SQL) *expression*, which may be named by the optional JSONDocument alias. Possible values for the *value parameter* pairs are listed in the table in the Parameters section below.

*Expression* is usually either a filepath pointing to a file on the file system, in which case the optional FROM clause is typically omitted (Example 1), or an inline JSON document (Example 3 further down in this article). If *expression* refers to a database column (Example 2), the possible values for *expression* are:

```
*column*
OLD( *column* )
```

Other SQL functions than OLD() are not supported. OLD() is not typical in this context.

It is customary, but not mandatory, to mention *value parameter* pairs before *expression*.

*Example 1*

```sql
INVOKE  JSON.Import WITH
SELECT  'c:\temp\tours.json'
```

*Example 2*

```sql
INVOKE    JSON.Import WITH
SELECT    'yes'          UseIOFormats
,         description    JSONDocument
FROM      tour
```

## Parameters

This table lists *value parameter* pairs supported in the SELECT output lists passed to JSON.Import. Possible *values* are listed by *parameter*; the default *value* (if any) is underlined. The use of each parameter is optional. If you do not specify a given parameter and it has a default value associated with it, that is the value applied.

Both *value* and *parameter* are case-insensitive.

|***value***|***parameter***|**Description**|
|--------|--------|--------|
`{ yes \| no }`|IgnoreGUK|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'no' for this parameter, if the external file contains [G_U_K](/docs/Repositories/Introducing_repositories/Globally_Unique_Keys_G_U_Ks.md) attributes, these are heeded as identifiers of the records instead of the record's primary key values. This replaces [default import handling](/docs/Repositories/Data_flow_control_with_XML_or_JSON/How_import_XML_or_JSON_is_processed.md) by the handling on the basis of G_U_Ks.</p>|
`{ yes \| no }`|UseIOFormats|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, the imported column values are checked against the IO format of the corresponding domain. Otherwise, they must use the format described in "JSON Representation of Date Values".</p>|
|`{ No \| ChangedColumns \|  AllColumns \|  NoCheckOnPk }`|VerifyOriginalValues|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>For row elements with an Update or Delete instruction tag, this parameter specifies whether values in the JSON data must be compared with values currently in the database before an attempt is made to execute the instruction.<br/>			See the "VerifyOriginalValues" section below for the meaning of each possible value.</p>|



## VerifyOriginalValues

Setting the VerifyOriginalValues parameter allows optimistic locking mechanisms and prevents lost updates if different client applications change the same information concurrently.

The VerifyOriginalValues parameter has an effect only on records in the JSON data that contain an Update or Delete instruction tag. It determines whether or not the Rules Engine will perform 2 types of check before attempting the import instructions:

- A check whether a record with the **primary key value** mentioned in the JSON actually exists in the database.
- A check that **old values** mentioned in the JSON are the same as the old values in the database record.

If any of these checks is performed and fails, a blocking error is raised, causing the import operation to be unsuccessful.

**Old values** are non-primary-key values mentioned in the JSON or found in the database *before* the Update or Delete. In the USoft JSON format, old values are optional. By default, in an Update instruction, the old values are mentioned for each of the columns that are to be updated.

The values of the VerifyOriginalValues parameter have the following meaning:

|***value***|**Description**|
|--------|--------|
|No (the default)|<p>If a record with the primary key value does not exist, an error is raised.</p><p>If a record with the primary key value does exist, old values in the JSON (if any) are not checked against old values in the database.</p>|
|NoCheckOnPk|<p>If a record with the primary key value does not exist, the instruction is **silently ignored**.</p><p>If a record with the primary key value does exist, old values in the JSON (if any) are not checked against old values.</p>|
|AllColumns|<p>If a record with the primary key value does not exist, an error is raised.</p><p>If a record with the primary key value does exist, old values in the JSON (if any) **are** checked against old values in the database. An error is raised if the values are not the same.</p>|
|ChangedColumns|<p>If a record with the primary key value does not exist, an error is raised.</p><p>If a record with the primary key value does exist, old values in the JSON (if any) **are** checked against old values in the database but only for **changed columns**. An error is raised if the values are not the same.</p><p>A **changed column** is a column for which the instruction is to replace the old value by a different new value.</p><p>With an Update instruction tag, only columns mentioned in the `<Update>` child element are changed columns.</p><p>With a Delete instruction tag, all columns are changed columns.</p>|



*Example 3*

In this example, a blocking error is raised if one or more of the following apply:

- There is no PERSON database record with ID = 112.
- There is no PERSON database record with ID = 203.
- There is a PERSON database record with ID = 112, but either its FAMILY_NAME value is other than "Smith" or its FIRST_NAME value is other than "John" (or both).
- There is a PERSON database record with ID = 203, but either its FAMILY_NAME value is other than "Sutcliff" or its FIRST_NAME value is other than "Bill" (or both).

```sql
INVOKE    JSON.Import WITH
SELECT    '{ "PERSON":[
                "ID":112
             ,  "FAMILY_NAME":"Smith"
             ,  "FIRST_NAME":"John"
             ,  "@Update":{
                   "FIRST_NAME":"Johnny"
                }
             ],
             "PERSON":[
                "ID":203
             ,  "FAMILY_NAME":"Sutcliff"
             ,  "FIRST_NAME":"Bill"
             ,  "@Delete":{}
             ]
          }' JSONDocument
,         'AllColumns' VerifyOriginalValues
```

## The returning JSON object

The JSON.Import method returns a result JSON object.

This object contains an entry for each record that has been inserted or updated directly by the import. Column values shown in the result JSON are those that apply after the record has been processed:

- Sequence numbers have been calculated.
- Productive single-record and multi-record constraints have executed.

Since only records inserted or updated directly by the import are included, any effects that productive multi-record constraints may have had on other records are not visible in the result document.

If the import has not caused any record to be inserted or updated, the result document contains only a root element.