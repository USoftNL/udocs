---
id: XML_representation_of_queries
---

# XML representation of queries

XML documents can contain query instructions with conditions for the records to be retrieved. In this case, the XML document complies with the Query By Form (QBF) definition.

*Syntax*

```language-xml
<Query>
    <Table Name="value">
        <Column Name="value" Condition="value"
        Order-by-seqno="value" Order-by-direction="value"/>
        <Column Name="value" Order-by-seqno="value"/>
        <Column Name="value" Condition="value"/>
    </Table>
</Query>
```

- Underscores are replaced by two underscores.
- Table names and column names are always in uppercase.

Furthermore:

- The root element of the XML document is \<Query>.
- The \<Table> element has a Name attribute that specifies the table to be queried. An XML document can only query data from one table.
- The \<Column> elements contain the query conditions. You can only query those columns for which the Query Allowed attribute has been set to Yes.
- By specifying Order-by-seqno and Order-by-direction attributes, the order of the records retrieved from the database can be determined. Order-by-seqno must have a numeric value.
- The columns are added to the ORDER BY clause of the query in the order of the Order-by-seqno. The Order-by-direction attribute can have value "Ascending" (default) or "Descending".

*Example*

```language-xml
<Query>
    <Table Name="value">
        <Column Name="value" Condition="value"
        Order-by-seqno="value" Order-by-direction="value"/>
        <Column Name="value" Order-by-seqno="value"/>
        <Column Name="value" Condition="value"/>
    </Table>
</Query>
<Query>
    <Table Name="PERSON">
        <Column Name="FAMILY_NAME" Condition="Jo%"/>
    </Table>
</Query>
```

 