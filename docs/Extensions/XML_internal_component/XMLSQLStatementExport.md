---
id: XMLSQLStatementExport
---

# XML.SQLStatementExport




:::note

This article is about the **SQLStatementExport** method of the [XML internal component](/docs/Extensions/XML_internal_component).

:::

## **XML.SQLStatementExport**

Exports data to the [Meta-Rows-Fields document format](/docs/Repositories/USoft_XML_formats/MetaRowsFields_document_format.md) on the basis of a SELECT statement.

This export method is the same as XML.SQLExport, except that the entire SELECT statement is passed as a variable element, which allows you to build or store a SELECT statement dynamically and then pass it to the export command.

In the same way as **XML.SQLExport**, this export method has the drawback that the result is NOT re-importable with **XML.Import**.

In the same way as XML.SQLExport, this export method has the advantage that it can deal with compound column expressions provided they are aliased. Also, the result contains metadata information. In summary, the result contains data but also information about how this data was queried.

*Syntax*

```sql
INVOKE     XML.SqlStatementExport WITH
SELECT     sql-statement

sql-statement  ::=

  SELECT      value    parameter-name
  ,           ...
  ,           expression   alias
  ,           ...
  FROM        ...
  WHERE       ...
  GROUP BY    ...
  ORDER BY    …
```

In the SELECT output list, value  parameter-name pairs and expressions may appear in any order. For possible parameter-names see the Parameters section later in this help topic.

*Example 1*

```sql
INVOKE     XML.SQLStatementExport WITH
SELECT     'select ''yes'' UseIOFormats, * from employee'
```

*Example 2*

```sql
INVOKE     XML.SQLStatementExport WITH
SELECT     sql-statement
FROM       my-report-table
```

*Example 3*

The result of this call:

```sql
INVOKE     XML.SQLStatementExport WITH
SELECT     'select concat( 
               concat( t.destination, '' '' )
            ,  t.tour_type 
            ) tour_label, tp.num_days
            from tour_programme tp, tour t
            relate tp "IS FOLLOWED BY" t
            where t.destination = ''AUSTRALIA''
            group by t.destination, t.tour_type, tp.num_days'
```

is this Meta-Rows-Fields document:

```xml
<SQLXMLExport>
  <Meta>
    <OutputExpressions>
      <Expression alias="tour_label">CONCAT(CONCAT(t.DESTINATION, '; ';), t.TOUR_TYPE)</Expression>
      <Column tableName="TOUR_PROGRAMME" tableAlias="tp" name="NUM_DAYS" alias="NUM_DAYS" objectNamePlural="Tour Programmes" prompt="Number of Days"/>
    </OutputExpressions>
  </Meta>
  <Rows>
    <Row>
      <Field alias="tour_label">AUSTRALIA ISLAND SUNTANNER</Field>
      <Field alias="NUM_DAYS">12</Field>
    </Row>
    <Row>
      <Field alias="tour_label">AUSTRALIA UP OR DOWN THE TRACK</Field>
      <Field alias="NUM_DAYS">10</Field>
    </Row>
  </Rows>
</SQLXMLExport>
```

 