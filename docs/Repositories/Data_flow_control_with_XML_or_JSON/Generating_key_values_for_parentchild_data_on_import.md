---
id: Generating_key_values_for_parentchild_data_on_import
---

# Generating key values for parent-child data on import

If you use XML.Import to import into a table for which the receiving repository normally generates unique primary key values:

- If you want this to happen also with the data being imported, make sure you **omit** the primary key column from the XML content.
- If you want the data being imported to keep their own primary key value, make sure you **include** the primary key column in the XML content. In this case you may need to take separate action to ensure that the database sequence or component generating the values does not end up with a current number lower than the highest primary key value imported, otherwise non-unique values will be generated in the future.

If you are importing a multi-table XML document with parent-child data, and the receiving repository normally generates unique primary key values in the parent table:

- If you want this to happen also with the data being imported, use the **RELATE strategy** explained next. This ensures that child records remain connected with their parent even though a new primary key value is generated for the parent during import.
- If you want the parent-child data being imported to keep their own primary key values and foreign key values, again, make sure you **include** all these values in the XML content.

## RELATE strategy

You can import parent records for which new primary key values are generated during import (this is determined by Generate Unique Values for the domain that the parent's primary key column is based on), and have matching foreign key values generated for the child records in the process, so that the parent-child relations are still intact in the end result.

To achieve this, replace each parent primary key attribute in the XML:

```
column="key-value"

```

by an attribute with the special syntax:

```
table.id="key-value"

```

and add to each child element a special RELATE child element with the Parent Role name of the relationship (as defined in USoft Definer) and the attribute

```
href="#key-value"

```

so that the added RELATE element looks like this:

```
<RELATE ROLE="parent-role" href="#key-value"/>

```

During import, children are connected with their parent on the basis of identical *key-value.* It does not matter what *key-value* is, as long as it is the same value in the parent and its children and uniquely identifies the parent in the XML. *Key-values* are only used during the import process and do not appear in the resulting database records.

*Example*

```language-xml
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no" verify-original-values="no" return-corrected-records ="yes"?>
<MultiImport>
  <Companies>
    <COMPANY NAME="Company A" COMPANY.id="C1"/>
  </Companies>
  <Departments>
    <DEPARTMENT NAME="Engineering" DEPARTMENT.id="D1">
      <RELATE ROLE="HAS" href="#C1"/>
    </DEPARTMENT>
    <DEPARTMENT NAME="Support" DEPARTMENT.id="D2">
      <RELATE ROLE="HAS" href="#C1"/>
    </DEPARTMENT>
  </Departments>
  <Employees>
    <EMPLOYEE NAME="Employee1" >
      <RELATE ROLE="HAS" href="#D1"/>
    </EMPLOYEE>
    <EMPLOYEE NAME="Employee2" >
      <RELATE ROLE="HAS" href="#D2"/>
    </EMPLOYEE>
  </Employees>
</MultiImport>

```

*Key-value* can be any value chosen by the user; USoft uses this value only to match the reference from the child record with the parent record.

The RELATE strategy will work with parent records *following* child records only if the foreign key of the child record is not part of the primary key or the foreign key is not mandatory, Placing parents before children improves performance during import.