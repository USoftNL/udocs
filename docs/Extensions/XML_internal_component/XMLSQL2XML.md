---
id: XMLSQL2XML
---

# XML.SQL2XML



> [!NOTE]
> This article is about the **SQL2XML** method of the [XML internal component](/docs/Extensions/XML%20internal%20component).

## **XML.SQL2XML**

Converts SQL syntax to XML format. The SQL statement must be syntactically and semantically correct. If the SQL statement cannot be parsed, for example if tables or columns used in the SQL statement are not defined, an error is given.

*Syntax*INVOKE XML.SQL2XML WITH 

```sql
SELECT       *sql-statement*     SQLStatement
,            *schema-path*       SchemaPath
,            *xml-declaration*   XmlDeclaration
FROM        ...

*xml-declaration*  ::=  { Yes | No }
```

All parameter names and values are case-insensitive.

The required *sql-statement* is a quoted string which is the SQL statement to be converted to XML. This contrasts with most other implementations in the XML internal component, where unquoted SELECT statements are passed to the main INVOKE statement. Because *sql-statement* is a quoted string, each single quote (') within the SQL statement must be escaped by two consecutive single quotes: '':

```sql
SELECT    'insert into tour( destination, tour_type) values (''AUSTRALIA'',''SUMMER_TRIP'')' SQLStatement
```

The optional schema-path value provides a path to an XML schema definition (XSD) file.

- If schema-path is specified, its value must be a filepath that leads to a valid schema document, and the "SchemaPath" alias is mandatory.
- If schema-path is not specified, no reference to a schema is generated into the XML document.

A schema file with extension .xsd is delivered with the USoft product:

```
*USoft-installation-folder*/xsl/ExtendedConditions/SQL2XML.xsd
```

To validate the generated XML against this schema, schema-path must be specified.

If the optional *xml-declaration* is set to 'Yes' (the default), an XML declaration is included in the result. This XML declaration shows the default Rules Engine encoding. If *xml-declaration* is specified, the "XMLDeclaration" alias is mandatory. If *xml-declaration* is 'No', no XML declaration is returned.

*Example*

```sql
INVOKE XML.SQL2XML WITH
SELECT
    'SELECT * FROM TOUR' SQLStatement,
    'C:\Program Files\USD70\xsl\ExtendedConditions\SQL2XML.xsd'  SchemaPath
```

This results in the following XML output:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<SqlNode version="1.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation=
    "C:\Program Files\USD70\xsl\ExtendedConditions\SQL2XML.xsd">
  <Select>
    <SelectList>
      <SelectListElement position="1">
        <Column name="*" position="1">
          <SelectListElement position="1">
            <Column name="TOUR_ID" position="1" table_name="TOUR" table_info_window_name="Tours" type="Column" prompt="Tour ID" datatype="Numeric" dbtype="DB_NUMBER"/>
          </SelectListElement>
          <SelectListElement position="2">
             <Column name="DESTINATION" position="1" table_name="TOUR" table_info_window_name="Tours" type="Column" prompt="Destination" datatype="String" dbtype="DB_VARCHAR2"/>
          </SelectListElement>
          <SelectListElement position="3">
            <Column name="START_DATE" position="1" table_name="TOUR" table_info_window_name="Tours" type="Column" prompt="Start Date" datatype="DateTime" dbtype="DB_DATE"/>
          </SelectListElement>
          <SelectListElement position="4">
            <Column name="RETURN_DATE" position="1" table_name="TOUR" table_info_window_name="Tours" type="Column" prompt="Return Date" datatype="DateTime" dbtype="DB_DATE"/>
          </SelectListElement>
        </Column>
      </SelectListElement>
    </SelectList>
    <TableList>
      <TableListElement name="TOUR" info_window_name="Tours" position="1"/>
    </TableList>
  </Select>
</SqlNode>

```

## Conversion table

The following table shows SQL constructs and the XML element(s) they convert to. The mapping shown may be exact or it may be approximate: this depends on the case.

|**SQL** |**XML** |
|--------|--------|
|CONNECT BY|\<ConnectBy>|
|CURRVAL, NEXTVAL|\<SequenceColumn>|
|DELETE  |\<Delete>|
|FROM ...|\<TableList>|
|Functions (scalar) (CONCAT, SUBSTR ... )|\<Function>|
|Functions (group) (COUNT, SUM, MIN, MAX, AVG)|\<Function>|
|GROUP BY ...|\<GroupByList>|
|INSERT INTO ... VALUES ...|\<Insert>|
|INSERT … SELECT ...|\<Insert>|
|INTERSECT|\<SetSelect>|
|JOIN|\<Join>|
|INVOKE  |\<OrderByList>|
|MINUS   |\<Function>|
|ORDER BY ...|\<RelateList>|
|Pseudo-columns (\$​\$RDBMSOWNER\$\$, USER, UID, SYSDATE ...)|\<Column name=”ROWID”>|
|RELATE  |\<Select>|
|ROWID   |\<SelectListElement>|
|SELECT ...|\<Select>|
|SELECT *column ...*|\<SelectListElement>|
|SELECT * ...|\<Column name="*">... \<Column>...|
|SELECT :1 ...|\<Host>  |
|SELECT COUNT( DISTINCT ... )|\<Distinct>|
|SELECT DISTINCT ...|\<Distinct>|
|SELECT RECORDS(*x,y*) ...|\<Records>|
|SELECT TOP x ...|\<Top>   |
|START WITH|\<StartWith>|
|UNION, UNION ALL|\<SetSelect>|
|UPDATE ...|\<Update>|
|WHERE ...|\<Where> |



## Description of result XML by element

### AssignmentList

This describes the \<AssignmentList> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<AssignmentList> represents a value assignment or set of value assignments in the context of an INSERT or UPDATE statement, as follows:

|**Parent**|**Children**|
|--------|--------|
|{ \<Select>\|\<Update> }|\<AssignmentListElement> ...|



#### AssignmentListElement

This describes the \<AssignmentListElement> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<AssignmentListElement> represents a value assignment to a column expression in the context of an INSERT or UPDATE statement, as follows:

|**Parent**|**Children**|
|--------|--------|
|\<AssignmentList>|\<Columns>\<Column>...\<Columns>	<br/>	\<Values>\<Value>...\<Values>|



### Column

This describes the \<Column> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Column> represents a column expression in the SELECT output list as follows. In SQL, USoft supports the actual database column names, but also the Prompt values defined for columns, provided that Prompt values that contain spaces are double-quoted.

|**Parent**|**Attributes**|
|--------|--------|
|\<SelectListElement>|**name<br/>			position<br/>table_name<br/>table_info_window_name**<br/>			table_alias<br/>			quoted_table_alias<br/>			inherited_from_table_name<br/>			external_set_element<br/>			outer<br/>			type<br/>			prompt<br/>			datatype<br/>			dbtype|



Attributes: **name, position, table_name** and **table_info_window_name** are required. If a table alias is given, it appears as **table_alias** or, if quoted, as **quoted_table_alias**. If the column is inherited from a supertype, the supertype tablename appears as **inherited_from_table_name**. If the column is an external set element, **external_set_element** appears as Boolean true. **outer** represents the use of the Oracle-style outer join operator: (+), in which case outer has the value of Boolean true.

The Prompt defined for the column appears as **prompt**. All columns have a Prompt value, except the ROWID pseudo-column.

The **datatype** attribute is a generic initcap indication of data type ( 'String', 'Numeric' ). The **dbtype** attribute is the Data Type of the column's domain, prefixed by DB_, for example: DB_VARCHAR2.
\<Column> appears at 2 levels if it is the conversion of SELECT *. The higher level registers the use of the * wildcard and the lower level shows the result of expanding this wildcard. The result XML looks like this:

```language-xml
<SelectListElement>
  <Column name="*">
    <SelectListElement position="1">
      <Column name="COLUMN_1" ... />
    </SelectListElement>
    <SelectListElement position="1">
      <Column name="COLUMN_2" ... />
    </SelectListElement>
    ...
  </Column>
</SelectListElement>
```

### ConnectBy

This describes the \<ConnectBy> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<ConnectBy> represents the use of CONNECT BY in a SELECT statement, as follows:

|**Parent**|**Children**|
|--------|--------|
|\<Select>|<p>{ \<Operator> \| \<LogicalOperator> }</p>|



### Delete

This describes the \<Delete> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.
\<Delete> represents a DELETE statement, as follows:

|**Parent**|**Children**|
|--------|--------|
|\<Select>|{ \<SelectList> \| \<Records> }|



\<Distinct> represents the use of DISTINCT in the construct SELECT COUNT( DISTINCT ... ) as follows:

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<Function name="COUNT">|\<Column>|**position**|



### Function

This describes the \<Function> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Function> represents the use of a SQL function: a scalar function such as CONCAT or SUBSTR, or a group function: COUNT, SUM, MIN, MAX, AVG, STDDEV, or a pseudo-column such as NULL, LEVEL, USER, UID, SYSDATE,$$RDBMSUSER$$..., as follows:

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<SelectListElement>|<p>{ <Column> \| <Value> \| }</p>|**name**|



Children: \<Column> if the function is applied to a column expression, \<Value> if it is applied to a literal. There are no children if \<Function> is for a pseudo-column.

Attributes: **name** specifies the function or pseudo-column: CONCAT, COUNT, USER…

> [!TIP]
> The functions CHARINDEX and LOCATE are converted by XML.SQL2XML to INSTR.

### GroupByList

This describes the \<GroupByList> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<GroupByList> represents the use of GROUP BY in a SELECT statement as follows:

|**Parent**|**Children**|
|--------|--------|
|\<Select>|\<GroupByListElement> ...|



### GroupByListElement

This describes the <GroupByListElement> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

<GroupByListElement> represents a GROUP BY element in a GROUP BY clause as follows:

|**Parent**|**Children**|
|--------|--------|
|\<GroupByList>|\<Column>|



### Host

This describes the <Host> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Host> represents the use of a host variable as in SELECT :1 ..., as follows:

|**Parent**|**Attributes**|
|--------|--------|
|\<SelectListElement>|**{ name   \| quoted_name   }**<br/>			{ prefix \| quoted_prefix }<br/>**position**|



Attributes: **name** (or **quoted_name**, if the host variable placeholder is quoted in the input), has the value of ‘1’ if the input has :1. **name** has the value of ‘myvariable’ if the input has :myvariable.

### Insert

This describes the \<Insert> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Insert> represents an INSERT statement, as follows:

|**Parent**|**Children**|
|--------|--------|
|\<SqlNode>|\<TableList><br/>			\<AssignmentList>|



### Invoke

This describes the \<Invoke> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Invoke> represents a component invocation with the INVOKE syntax. For component invocation with a function call (SELECT ...), see \<Method>.

*Example*

```sql
INVOKE regexp.matches WITH SELECT 'ABC', 'ABC'
```

The result of applying XML.SQL2XML to this statement:

```sql
select xml.sql2xml( 'INVOKE regexp.matches WITH SELECT ''ABC'', ''ABC'' ' )
```

is:

```language-xml
<SqlNode version="1.0">
  <Invoke type_name="REGEXP" method_name="MATCHES">
    <InvokeOutput>
      <InvokeOutputElement position="0" name="result" datatype="Numeric"/>
    </InvokeOutput>
    <Select position="1">
      <SelectList>
        <SelectListElement position="1">
          <Value datatype="String" position="1">ABC</Value>
        </SelectListElement>
        <SelectListElement position="2">
          <Value datatype="String" position="1">ABC</Value>
        </SelectListElement>
      </SelectList>
    </Select>
    </Invoke>
</SqlNode>
```

### Join

This describes the \<Join> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Join> represents the use of a JOIN clause in a SELECT, UPDATE, or DELETE statement. 
Joins are paired with the keywords CROSS, LEFT OUTER, RIGHT OUTER, FULL OUTER, INNER, NATURAL INNER, or UNION. These all combine to the \<Join> element, with the different varieties being indicated with the attribute **joinType**.
A \<Join> will have two children representing the two queries being joined. Typically these will be two tables, and thus two \<TableListElements>, however, joins can be nested, and so either of the two, or both can also be further Joins.
Every \<Join> will also have an \<On> child, which contains the join-clause, which columns need to match.

	
|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<TableList>\|\<Join>|\<TableListElement>... \| \<Join>... \| \<On>|**joinType**|
	
*Example*

```sql
SELECT t_table.table_name
FROM t_table
INNER JOIN t_column
ON t_table.table_name = t_column.table_name'
```

The result of applying XML.SQL2XML to this statement:

```sql
invoke xml.sql2xml
with select
'SELECT t_table.table_name
FROM t_table
INNER JOIN t_column
ON t_table.table_name = t_column.table_name' )
```

is:

```language-xml
<SqlNode version="1.0">
	<Select>
		<SelectList>
			<SelectListElement position="1">
				<Column name="TABLE_NAME" position="1" table_name="T_TABLE" table_info_window_name="Tables" type="Column" prompt="Database Table" datatype="String" dbtype="VARCHAR2"/>
			</SelectListElement>
		</SelectList>
		<TableList>
			<Join joinType="INNER">
				<TableListElement name="T_TABLE" info_window_name="Tables" position="2"/>
				<TableListElement name="T_COLUMN" info_window_name="Columns" position="3"/>
				<On>
					<Operator name="=" position="3">
						<Column name="TABLE_NAME" position="1" table_name="T_TABLE" table_info_window_name="Tables" type="Column" prompt="Database Table" datatype="String" dbtype="VARCHAR2"/>
						<Column name="TABLE_NAME" position="2" table_name="T_COLUMN" table_info_window_name="Columns" type="Column" prompt="Table Name" datatype="String" dbtype="VARCHAR2"/>
					</Operator>
				</On>
			</Join>
		</TableList>
	</Select>
</SqlNode>
```	
	
#### On
This describes the \<On> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<On> represents the ON clause in a join statement and will only be detected in a join statement.
	
|**Parent**|**Children**|
|--------|--------|--------|
|\<Join>|\<Operator>|
	
### Method

This describes the \<Method> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Method> is used in a \<SelectList> representation of a component invocation with the function call (SELECT...) syntax. For component invocation with INVOKE syntax, see \<Invoke>.

*Example*

```sql
SELECT regexp.matches( 'ABC', 'ABC' )
```

The result of applying XML.SQL2XML to this statement:

```sql
select xml.sql2xml( 'SELECT regexp.matches( ''ABC'', ''ABC'' )'
```

is:

```language-xml
<SqlNode version="1.0">
  <Select>
    <SelectList>
      <SelectListElement position="1">
        <Method type_name="REGEXP" method_name="MATCHES" position="1">
          <InvokeOutput>
            <InvokeOutputElement position="0" name="result" datatype="Numeric"/>
          </InvokeOutput>
          <Value datatype="String" position="1">ABC</Value>
            <Value datatype="String" position="2">ABC</Value>
        </Method>
        </SelectListElement>
     </SelectList>
    </Select>
</SqlNode>
```

### LogicalOperator

This describes the \<LogicalOperator> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<LogicalOperator> represents the use of a logical operator: AND, OR, NOT.

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<Where> |{  \<Column>   \|<br/>			   \<Function>   \|<br/>			   \<Operator><br/>			   \<Value><br/>			}|**name**|



Children: If the logical operator is NOT, it applies to a comparison or to a NOT or EXISTS operator; in this case, \<LogicalOperator> has an \<Operator> child element.
Attributes: **name** indicates the logical operator used: AND  OR  NOT .

### Lowerbound

This describes the \<Lowerbound> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Lowerbound> represents the *x* argument in the construct SELECT RECORDS (*x, y*) ...

|**Parent**|**Children**|
|--------|--------|
|\<Records>|{ \<Value> \| \<Host> }|



### MathOperator

This describes the \<MathOperator> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<MathOperator> represents the use of a mathematical operator in a column expression.

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<SelectListElement>|{ \<Column> \|  \<Value> } ...|**name**|



Children: When there are two operands, as in regular addition, subtraction, multiplication and division, there are two children. In the case of minus or plus signs as prefixed to a single value, there is a single child element.

Attributes: name has the value of either '+', '-', '*', '/', or 'PRIOR' (for: CONNECT BY PRIOR constructs).

### Operator

This describes the \<Operator> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Operator> represents the use of a comparison operator or one of the SQL operators EXISTS, IN, LIKE, BETWEEN, ANY, ALL:

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<Where> |{  \<Column>   \|<br/>			   \<Function> \|<br/>			   \<Select><br/>			   \<Set><br/>			   \<Value><br/>			}|**name**|



Children: If the comparison is with the outcome of a subquery, then \<Operator> has a \<Select> child element. If comparison is with a set of values, as is possible with IN, ANY, ALL, one of the child elements of \<Operator> will be \<Set>.

Attributes: name indicates the comparison operator used: =  !=  >  <  >=  <=  ..., or the SQL operator used:  EXISTS   IN   LIKE   BETWEEN   ANY   ALL

For backward compatibility, the *= operator remains supported for ODBC-style outer join syntax.

### OrderByList

This describes the \<OrderByList> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<OrderByList> represents the use of an ORDER BY clause, as follows:

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|{ \<Select> \| \<SetSelect> }|\<OrderByListElement>|position|



Parent: The parent is \<Select> if the ORDER BY clause is of a SELECT statement. The parent is \<SetSelect> if the ORDER BY clause is of a set of multiple SELECT statements connected by set operators (UNION, UNION ALL, MINUS, INTERSECT).

Attributes: **position** is given only if ORDER BY clause is of a set of multiple SELECT statements.

### OrderByListElement

This describes the \<OrderByListElement> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<OrderByListElement> represents an ORDER BY element in an ORDER BY clause as follows:

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<OrderByList>|\<Column>|direction|



Attributes: **direction** may be "ascending" or "descending" and appears only if the input has an explicit ASC or DESC keyword.

### Records

This describes the \<Records> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Records> represents the use of the RECORDS operator.

|**Parent**|**Children**|
|--------|--------|
|{ \<Select> \| \<Distinct> }|\<Lowerbound><br/>			   \<Value datatype="Numeric"><br/>			\</Lowerbound><br/>			\<Upperbound><br/>			   \<Value datatype="Numeric"><br/>			\</Upperbound><br/>			\<SelectList>|



If the input statement is SELECT RECORDS( 1,2 ) then the contents of \<Value> child element of \<Lowerbound> is 1 and the contents of \<Value> child element of \<Upperbound> is 2.

### RelateList

This describes the \<RelateList> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<RelateList> represents a RELATE clause.

|**Parent**|**Children**|
|--------|--------|
|\<Select>|\<RelateListElement role="role"><br/>			  \<RelateListElementTable table_name="table"/><br/>			  \<RelateListElementTable table_name="table"/><br/>			  \<LogicalOperator name="AND"><br/>			    \<Operator name="="><br/>			      \<Column> ...<br/>			    ...<br/>			  \</LogicalOperator><br/>			\</RelateListElement>|



A RELATE clause is represented by a \<RelateList> element containing \<RelateListElementTable>, \<LogicalOperator name="AND"> and \<Operator name="=">, and \<Column> elements. This is best shown in an example.

Consider this RELATE clause:

```sql
SELECT    tp.destination, tp.tour_type, tp.max_age, t.start_date
FROM      tour_programme tp, tour t
RELATE    tp "IS_FOLLOWED_BY" t
```

This is equivalent to:

```sql
SELECT    tp.destination, tp.tour_type, tp.max_age, t.start_date
FROM      tour_programme tp, tour t
WHERE     tp.destination = t.destination
AND       tp.tour_type   = t.tour_type
```

The XML.SQL2XML output for this statement is:

```language-xml
<RelateList>
  <RelateListElement role="IS FOLLOWED BY" position="1">
    <RelateListElementTable name="tp" table_name="TOUR_PROGRAMME" is_parent="true"/>
    <RelateListElementTable name="t" table_name="TOUR" is_child="true"/>
    <LogicalOperator name="AND" position="3">
      <Operator name="=" position="1">
        <Column name="DESTINATION" position="1" table_name="TOUR" table_alias="t" />
        <Column name="DESTINATION" position="2" table_name="TOUR_PROGRAMME" table_alias="tp" />
      </Operator>
      <Operator name="=" position="2">
        <Column name="TOUR_TYPE" position="1" table_name="TOUR" table_alias="t" />
        <Column name="TOUR_TYPE" position="2" table_name="TOUR_PROGRAMME" table_alias="tp"/>
      </Operator>
    </LogicalOperator>
  </RelateListElement>
</RelateList>
```

### RelateListElement

See \<RelateList>.

### RelateListElementTable

See \<RelateList>.

### Select

This describes the \<Select> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|{  \<SQLNode>      \|<br/>			   \<Insert>       \|<br/>			   \<SetSelect>    <br/>			}|<p>{  \<SelectList>              \|<br/>			   \<Distinct>   \<SelectList> \|<br/>			   \<Records>    \<SelectList> \|<br/>			   \<Top>        \<SelectList><br/>			}</p><p>{  \<Where>        \|<br/>			   \<Having>       \|<br/>			   \<GroupByList>  \|<br/>			   \<OrderByList>  \|<br/>			   \<ConnectBy>    \|<br/>			   \<StartWith><br/>			}</p>|position|



Attributes: The **position** attribute does not appear if the SELECT clause is the main (= top-level) query.

### SelectList

This describes the \<SelectList> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

|**Parent**|**Children**|
|--------|--------|
|{  \<Select>      \|<br/>			   \<Distinct>    \|<br/>			   \<Records>     \|<br/>			   \<Top>        <br/>			}|\<SelectListElement> ...|



### SelectListElement

This describes the \<SelectListElement> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<SelectList>|{  \<Column>        \|<br/>			   \<Function>      \|<br/>			   \<MathOperator>  \|<br/>			   \<Value>        <br/>			}|**position**|



### SequenceColumn

This describes the \<SequenceColumn> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<SequenceColumn> represents a call, in Oracle, to the CURRVAL or NEXTVAL pseudo-columns of a database sequence, as follows:

|**Parent**|**Children**|
|--------|--------|
|\<SelectListElement>|**name			sequence_name**|



Attributes: The required **name** is either the CURRVAL or the NEXTVAL pseudo-column. The required **sequence_name** is the name of the database sequence called.

### Set

This describes the \<Set> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Set> represents a set that is subjected to a comparison, as the set ( 1, 2, 3 ) in:

```sql
... WHERE  number IN ( 1, 2, 3 )
```

|**Parent**|**Children**|
|--------|--------|
|\<Operator>|\<Value> ...|



\<Set> appears in the XML.SQL2XML output for statements with IN, ANY, ALL operators.

### SetSelect

This describes the \<SetSelect> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<SetSelect> represents the use of a set operator (UNION, UNION ALL, MINUS, or INTERSECT) applied to 2 or more SELECT statements.

|**Parent**|**Children**|
|--------|--------|
|\<SqlNode>|\<Select> ...|



### SqlNode

This describes the \<SqlNode> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<SqlNode> is the root node of the XML.SQL2XML output document.

|**Parent**|**Children**|
|--------|--------|
|(none)  |{  \<Select>       \|<br/>			   \<SetSelect>  \|<br/>			   \<Insert>        \|<br/>			   \<Update>      \|<br/>			   \<Delete>     <br/>			}|



### StartWith

This describes the \<StartWith> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<StartWith> represents the use of START WITH in a CONNECT BY statement, as follows:

|**Parent**|**Children**|
|--------|--------|
|\<Select>|{  \<Operator>  \|<br/>			   \<LogicalOperator><br/>			}|



### TableList

This describes the \<TableList> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<TableList> represents the FROM clause in a SELECT, UPDATE or DELETE statement, or the INTO clause of an INSERT statement.

|**Parent**|**Children**|
|--------|--------|
|{  \<Select>     \|<br/>			   \<Insert>      \|<br/>			   \<Update>    \|<br/>			   \<Delete>     <br/>			}|\<TableListElement> ...|



### TableListElement

This describes the \<TableListElement> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<TableListElement> represents the occurrence of a table in a FROM clause. To refer to a table in a FROM clause, USoft supports the use of the actual database table name, but also the use of the Object Name Plural defined for the table.

|**Parent**|**Children**|**Attributes**|
|--------|--------|--------|
|\<TableList>|\<TableListElement> ...|**name**<br/>			alias<br/>			quoted_alias<br/>**info_window_name**<br/>			hold_lock<br/>**position**|



Attributes: The optional **alias** contains the table alias if not quoted in the input. The optional **quoted_alias** contains the table alias if quoted. info_window_name contains the table's Object Name Plural. The optional **hold_lock** represents the SQL Server-only HOLD LOCK syntax.

### Top

This describes the \<Top> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Top> represents the use of the TOP operator. The TOP keyword is SQL Server-only. USoft does not convert the TOP operator to the convertible RECORDS operator.

|**Parent**|**Children**|
|--------|--------|
|{  \<Select>  \|<br/>			   \<Distinct><br/>			}|\<TopValue><br/>			   \<Value datatype="Numeric"><br/>			\</TopValue><br/>			\<SelectList>|



If the input statement is SELECT TOP 2 ... then the contents of \<Value> child element of \<TopValue> is 2.

### TopValue

This describes the \<TopValue> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<TopValue> represents the *x* argument in the construct SELECT TOP *x* ... The TOP keyword is SQL Server-only. USoft does not convert the TOP operator to the convertible RECORDS operator.

|**Parent**|**Children**|
|--------|--------|
|\<Top>   |{  \<Value>  \|<br/>			   \<Host><br/>			}|



### Update

This describes the \<Update> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Update> represents an UPDATE statement, as follows:

|**Parent**|**Children**|
|--------|--------|
|\<Records>|{  \<Value>  \|<br/>			   \<Host><br/>			}|



### Where

This describes the \<Where> element in XML.SQL2XML output. Mandatory elements are printed in Bold. An ellipsis symbol (...) following a child element means that multiple child occurrences are possible.

\<Where> represents the use of a WHERE clause in a SELECT, UPDATE or DELETE statement, as follows:

|**Parent**|**Children**|
|--------|--------|
|{  \<Select>      \|<br/>			   \<Update>     \|<br/>			   \<Delete>     <br/>			}|{  \<Operator>  \|<br/>			   \<LogicalOperator><br/>			}|



Attributes: **name** (or **quoted_name**, if the host variable placeholder is quoted in the input), has the value of ‘1’ if the input has :1. **name** has the value of ‘myvariable’ if the input has :myvariable.