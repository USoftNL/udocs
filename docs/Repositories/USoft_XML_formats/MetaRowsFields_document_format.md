---
id: MetaRowsFields_document_format
---

# Meta-Rows-Fields document format

A **Meta-Rows-Fields XML document** is allowed to contain data from multiple tables.

Unlike [multi-table XML documents](/docs/Repositories/USoft_XML_formats/XML_multitable_document_format.md), this document type can have in the output list not just simple column names, but also compound column expressions, that is, output expressions using operators or literals or both, in addition to actual column names.

A compound column expression must be accompanied by an alias. See the Unique Aliases section later in this article.


:::tip

This document format is produced by calls to [XML.SQLExport](/docs/Extensions/XML_internal_component/XMLSQLExport.md) and [XML.SQLStatementExport](/docs/Extensions/XML_internal_component/XMLSQLStatementExport.md).

:::


:::danger

This document format is not re-importable by calling [XML.Import](/docs/Extensions/XML_internal_component/XMLImport.md).

:::

*Syntax*
 

```xml
<SQLXMLExport>
  <Meta>
    <OutputExpressions>
*output-expression* ...
    </OutputExpressions>
  </Meta>
  <Rows>
    <Row>
      <Field alias="*alias*"> *value* </Field> ...
    </Row>
    ...
  </Rows>
</SQLXMLExport>

*output-expression*  ::=  { <Column ... />  | <Expression ... />}
```

In \<Meta>, each output-expression describes an element of the SELECT output list. As the Example shows, output-expression for a compound expression is an \<Expression> element, and output‑expression for a simple column expression is a \<Column> element; \<Column> provides attribute values taken from the column definition in USoft Definer.

*Example*

The result of this call:

```sql
invoke      xml.sqlexport with
select      concat( concat( t.destination, ' ' ), t.tour_type ) tour_label
,           tp.num_days
from        tour_programme tp
,           tour t
relate      tp "IS FOLLOWED BY" t
where       t.destination = 'AUSTRALIA'
group by    t.destination, t.tour_type, tp.num_days
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

## Unique aliases

Each expression in the SELECT output list must have a unique alias. Unique aliases are required to provide the link between the data and the metadata within the XML document.

If the expression does not simply map to a column but is composite, eg. by involving a SQL function, multiple column references, a string operator or a mathematical operation, then you must supply an alias.

If the expression simply maps to a column and you do not supply an alias, the Rules Engine will use the column name as an alias.

If you use multiple occurrences of the same column name in your SELECT output list, the Rules Engine will generate number suffixes to distinguish between these occurrences:

|**Statement**|**Generated unique aliases**|
|--------|--------|
|SELECT id, id, id FROM emp|ID, ID_2, ID_3|
|SELECT 'Application' id, id FROM emp|ID, ID_2|



If you use different columns with identical column names from different table instances, the Rules Engine will use the table name as a prefix to make the distinction at the alias level. In the case of two instance of the same table, it is ultimately the suffix that ensures alias uniqueness:

|**Statement**|**Generated unique aliasesGenerated unique aliases**|
|--------|--------|
|SELECT e.id, d.id FROM emp e, dept d|EMP_ID, DEPT_ID|
|SELECT t1.id, t2.id, FROM tour t1, tour t2|TOUR_ID, TOUR_ID_2|



If multiple SELECT clauses are connected by one or more set operators ( UNION, MINUS, INTERSECT), the first SELECT statement after the INVOKE keyword provides the alias.