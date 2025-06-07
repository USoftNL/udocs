---
id: Example_XML_query_with_Orderby_attributes
---

# Example: XML query with Order-by attributes

Here is an example of an XML query document with several Order-by attributes specified:

```xml
<Query>
    <Table Name="PERSON">
        <Column Name="FAMILY_NAME" Condition="Jo%"
            Order-by-seqno="1"
            Order-by-direction="DESCENDING"/>
        <Column name="FIRST_NAME"
            Order-by-seqno ="2"/>
        <Column name="ADDRESS" Condition="%STREET%"/>
    </Table>
</Query>

```

This results in an XML output document that contains all columns of all records where FAMILY_NAME starts with 'Jo' and ADDRESS contains 'STREET':

```xml
<Persons>
    <PERSON ID="377" FAMILY_NAME="Jones" FIRST_NAME="Bill"
        ADDRESS="HIGHSTREET 501"/>
    <PERSON ID="377" FAMILY_NAME="Jones" FIRST_NAME="Patricia"
        ADDRESS="HIGHSTREET 501"/>
    <PERSON ID="312" FAMILY_NAME="Johnson" FIRST_NAME="Ann"
        ADDRESS="ELM STREET 105"/>
</Persons>

```

The records are sorted in descending order on FAMILY_NAME, and in ascending order on FIRST_NAME, which is only used for the ordering.

This is equivalent to:

```sql
INVOKE    XML.Export WITH
SELECT    *
FROM      person
WHERE     family_name   LIKE 'Jo%'
AND       address       LIKE '%STREET%'
ORDER BY  family_name   DESC
,         first_name    ASC

```