---
id: XMLCreateDTD
---

# XML.CreateDTD




:::note

This article is about the **CreateDTD** method of the [XML internal component](/docs/Extensions/XML_internal_component).

:::

## **XML.CreateDTD**

Generates DTD output based on a SELECT statement. The content of the DTD document is directly deduced from the table definitions in the repository.

The resulting DTD output is a string. Only one document is generated, even if the SELECT retrieves more than one record. The structure of the DTD output is described in "Document Type Definition (DTD) Specification".

This XML Create DTD method can for example be used in a productive constraint, to fill or update a database column with the result of the DTD output.

*Syntax*

```sql
INVOKE    XML.CreateDTD WITH
SELECT    *expression, expression*...
FROM      *table*

*expression*  ::=  
  {    *column*        |
       OLD( *column* ) |
       *             |
       OLD( * )      }
```

Only the selected columns are generated in the DTD output.

The FROM clause may only contains a single table or logical view.

*Example 1*

Here is an example of a simple DTD creation:

```sql
INVOKE      XML.CreateDTD WITH
SELECT      id
,           family_name
,           first_name
FROM        person
```

This results in:

```xml
<!ELEMENT PERSON ((Person|QUERY)*)>
<!ELEMENT Person ((INSERT|UPDATE|DELETE)?)>
<!ELEMENT INSERT (EMPTY)>
<!ELEMENT UPDATE (EMPTY)>
<!ELEMENT DELETE (EMPTY)>
<!ELEMENT QUERY (EMPTY)>
<!ATTLIST QUERY PERSON_ID CDATA #IMPLIED>
<!ATTLIST UPDATE PERSON_ID CDATA #IMPLIED>
<!ATTLIST Person PERSON_ID CDATA #REQUIRED>
<!ATTLIST QUERY FAMILY_NAME CDATA #IMPLIED>
<!ATTLIST UPDATE FAMILY_NAME CDATA #IMPLIED>
<!ATTLIST Person FAMILY_NAME CDATA #REQUIRED>
<!ATTLIST QUERY FIRST_NAME CDATA #IMPLIED>
<!ATTLIST UPDATE FIRST_NAME CDATA #IMPLIED>
<!ATTLIST Person FIRST_NAME CDATA #REQUIRED>
```

*Example 2*

Here is a more involved example that shows how USoft data integrity rules translate into DTD rules. The remainder of this article shows some rules for tables and columns translated into DTD checks.

You can validate against such a DTD the content of an XML file to be imported into USoft. However, a USoft repository can check many more aspects of data integrity. The number of possible checks that can be generated into a DTD is more limited.

```xml
<!ELEMENT employees ((employee | query)*)>
<!ELEMENT employee (insert | update | delete)?>
<!ATTLIST employee ID #CDATA #REQUIRED>
<!ATTLIST employee lastname #CDATA # #REQUIRED>
<!ATTLIST employee name #CDATA #IMPLIED>
<!ATTLIST employee insertion #CDATA ("den" | "van der" | "van") "">
<!ELEMENT insert (EMPTY)>
<!ELEMENT delete (EMPTY)>
<!ELEMENT update (EMPTY)>
<!ATTLIST update lastname #CDATA #IMPLIED>
<!ATTLIST update name #CDATA #IMPLIED>
<!ATTLIST update insertion #CDATA ("den" | "van der" | "van") "">
<!ELEMENT query (EMPTY)>
<!ATTLIST query lastname #CDATA #IMPLIED>
<!ATTLIST query name #CDATA #IMPLIED>
<!ATTLIST query insertion #CDATA #IMPLIED>
```

## Tables

The following DTD line indicates that the XML may contain the employees element, which many have zero or more employee elements:

```xml
<!ELEMENT employees (employee*)>
```

The following indicates that an employee element may contain zero or one insert, update or delete element. This maps to whether the table is insertable, updatable, deletable.

```xml
<!ELEMENT employee (insert | update | delete)?>
```

The following specifies that there can be empty insert, update, and delete elements.

```xml
<!ELEMENT insert (EMPTY)>
<!ELEMENT delete (EMPTY)>
<!ELEMENT update (EMPTY)>
```

## Columns

The following indicates that the employee element has a 'lastname' attribute with character data. This attribute is REQUIRED.

It also has a ‘name’ attribute. This attribute is NOT required. (IMPLIED).

```xml
<!ATTLIST employee lastname #CDATA #REQUIRED>
<!ATTLIST employee name CDATA #IMPLIED>
```

The following indicates allowed values for the domain that a column is based on.

The employee element has an insertion attribute of type character. The values are restricted to an enumerated set.

The values represented in XML correspond with the allowed values (the exact data in the database), not with the prompts for the allowed values.

```xml
<!ATTLIST employee insertion #CDATA ("den" | "van der" | "van") "">
```

If a column is not updateable, there will be no attribute for it in the update element. Update attributes are non mandatory (IMPLIED). No measures have been taken to prevent the update of a primary key value. This should be defined by making the column non-updatable. The insertion attribute can only be updated to an allowed value:

```xml
<!ATTLIST update lastname #CDATA #IMPLIED>
<!ATTLIST update name #CDATA #IMPLIED>
<!ATTLIST update insertion CDATA ("den" | "van der" | "van") "">
```

 