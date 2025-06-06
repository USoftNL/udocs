---
id: The_USoft_component_table_XML_format
---

# The USoft component table XML format

The syntax of the USoft component table XML format is:

```language-xml
<Table>
    <Row>
        <Field Name = "..." Value = "..." Index = "..."/>
        <Field Name = "..." Value = "..." Index = "..."/>
    </Row>
    <Row>
        <Field Name = "..." Value = "..." Index = "..."/>
        <Field Name = "..." Value = "..." Index = "..."/>
    </Row>
...
</Table>
```

 

> [!CAUTION]
> For input parameters, if an Input XSL is applied, the Name attribute is NOT included. The match has to be made on Index.
> This XML format contains ALL table fields, not only the fields on which is queried.
> The Name attribute in the Field element must contain the name of a column in the component table. The Index attribute must be the Position of the column in the table.



 