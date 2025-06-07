---
id: Example_Simple_XML_query
---

# Example: Simple XML query

Here is an example of a simple XML query. This XML query executes the query stored in the xml_query column of the XML_QUERIES table. The SELECT statement may retrieve zero or more records with an XML query document to be executed:

```sql
INVOKE    XML.Query WITH
SELECT    xml_query XmlDocument
FROM      XML_QUERIES

```

For example, suppose a record in the XML_QUERIES table contains this xml_query:

```xml
<Query>
    <Table Name="PERSON">
        <Column Name="FAMILY_NAME" Condition="Jo%"/>
    </Table>
</Query>

```

For this xml_query, the XML query method queries the corresponding PERSON records, and generates XML output that contains the query results. The records are in no specific order:

```xml
<Persons>
    <PERSON ID="377" FAMILY_NAME="Jones" FIRST_NAME="Bill"/>
    <PERSON ID="312" FAMILY_NAME="Johnson" FIRST_NAME="Ann"/>
</Persons>

```

This is equivalent to:

```sql
INVOKE    XML.Export WITH
SELECT    *
FROM      person
WHERE     family_name LIKE 'Jo%'

```