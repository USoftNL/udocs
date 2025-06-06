---
id: Query_protocol_component_table
---

# Query protocol, component table

## The query protocol

### What is the query protocol?

The **query protocol** is a way of interacting with an RDMI component that involves passing a single row of data to the component and letting it return multiple columns and rows.

The query protocol lets you present data from external sources to the Rules Engine as if it were multi-row data in a relational table.

The typical way to achieve this is to build a **component table**. Your USoft application can use that component table (in constraint SQL, batch SQL, SQL in a GUI layer...) as if it were a normal database table. How the component table handles its data is programmed in the underlying component that uses the query protocol. The component table and the underlying component are linked on a 1:1 basis because they have the same name.

Examples of data that you may want to make available through the query protocol include:

- Information about files in a folder on the file system.
- Data from a file storage, for example, an XML, JSON, CSV file, or an MS Excel spreadsheet.
- Data from a different database.

If you want the end user to perform an external action (such as sending an e-mail) by pressing a push button or clicking a link, then use the standard protocol and not the query protocol.

### How does the query protocol work?

First you need to make sure your RDMI component has one or more associated query protocols. Each protocol designates one method as its EXE method, and another method as its FETCH method.

Next, instead of calling a method of the component directly, you call a query protocol name. An INVOKE ... WITH SELECT ... statement is processed as follows if the INVOKE calls a query protocol name:

The query protocol works by calling one method of the component as the EXE method, and another method as a FETCH method. The operation breaks down into the following steps:

1. Execute the protocol's EXE method. This is the equivalent of executing a SELECT statement in an RDBMS.

2. Execute the protocol's FETCH method and catch the Out parameter(s). Return the record to the caller. This is the equivalent of fetching the first record from an RDBMS query result.

3. Repeat Step 2 until the component returns no further records, that is, until the FETCH method reports that there are no more records.

This operation is executed each time a runtime user, or a program, calls a query protocol name you have defined, as opposed to calling a method directly. This principle is shown in this example.

### Methods

To prepare a component for the query protocol, make sure you offer the following 2 methods in a way similar to the example.

|        |        |
|--------|--------|
|QueryExe()|This method contains input parameters for all columns of the table. The parameters indicate a column restriction. If the value for a column is NULL, there is no restriction. If there is a value, the records with these column values are retrieved.|
|QueryFetch()|This method contains output parameters for all columns of the table. The method returns zero or one record when called. The records returned meet the same condition as stated for the QueryExe method.|



If you want the component table to deal also with INSERT, UPDATE or DELETE, or all three, then you must also implement the following, as required:

|        |        |
|--------|--------|
|InsertRow()|Contains input parameters that correspond with the columns of the table. The method is called on the insert of a record, and inserts the data in the external data source.|
|UpdateRow()|Contains input parameters that correspond with the columns of the table. The method is called on the update of a record. The method updates the data in the external data source. The primary key of the table is not updatable and therefore it is sufficient to pass only the new values to the method.|
|DeleteRow()|Contains input parameters that correspond with the primary key columns of the table. The method is called on the delete of a record. The method deletes the data in the external data source.|



When coding methods for the query protocol (as for the aggregate protocol), you must return the following standard integer values to express that a record is or is not found. See the example.

|        |        |
|--------|--------|
|-1      |Error.  |
|0       |No record returned.|
|1       |Record returned.|



### Query protocol association

The following assumes that your component has a QueryExe and a QueryFetch method.

To associate, for your component, a query protocol name to an EXE and a FETCH method:

1. In the info window where you coded the component, click the Query Protocol Associations tab page.

2. Enter the name 'QUERY' for the protocol. This is the name that the component table will be looking for when queried.

3. Enter the name 'QUERYEXE' in the Execute Method field.

4. Enter the name 'QUERYFETCH' in the Fetch Method field.

5. Save/commit.

### Stateful component

When you call a query protocol name, the USoft implementation is stateful by default, but if you want to combine the component with a component table then you are required to declare the component as being Stateful. Do this in the State tab in the info window where you coded the component.

As is clear from the example, on this tab, you can declare further details about state, such as the component's lifetime, whether the component must be able to participate in a transaction and (if so) whether it must support Commit, Rollback, and Pre-Commit constraint handling, whether it supports a component table, and whether the component table implements INSERT, UPDATE, DELETE operations.

## Component tables

### Component tables, definition

The technology of choice with a component supporting a query protocol is to build a **component table*** "*on top of it" so that you can query an possibly manipulate the data handled by the component *as if* it were an RDBMS table. The component in this construct is a **user-defined table component.** Do not confuse with internal table components.

Create a table component by choosing Define, Tables, Component Tables from the Definer menu. Make sure you give the component table the same name as the user-defined table component that supports it. See the example for details.

### Component tables, extended query conditions

You can enhance the performance of query conditions against a component table by using *extended query conditions.*

How does this work?

By default, when the Rules Engine passes a query to a table component, only simple query conditions with an equality operator are passed to the component:

```
*column* = *value*
```

More involved query conditions, such as the following, are NOT passed to the component. The component first returns *all* *rows.* Then, the Rules Engine processes the query conditions. With large data volumes, this can easily result in bad performance.

```sql
birth_date > '01-JAN-1959'

last_name != 'Hayes'

last_name LIKE 'A%'


```

To solve this problem, you can pass the query conditions in XML format as the CONDITIONS parameter of the QUERYEXE method of the component. This way, the component can evaluate some or all of the extended query conditions itself. This reduces the number of records returned to the Rules Engine.


:::note

The Rules Engine always checks the returned records a second time. Valid records are never rejected.
Only those conditions that the component can safely use to reduce the number of records are added to the XML document.
Conditions that contain a reference to a column of another table are not added.
If a condition is nested with a condition on another table, the Rules Engine examines if the condition can safely be passed to the component or not.

:::

To apply this technique:

1. In Definer, open the appropriate table component.
2. Click the State tab.
3. Select the Extended query conditions check box.
4. Convert the contents of your SQL WHERE clause to an XML document. Follow the instruction below.
5. (Re-)write the QueryExe() method in the component code, so that the XML document is passed as the CONDITIONS parameter of the QUERYEXE method.

To convert your WHERE clause to an XML document, pass your SQL statement to XML.SQL2XML:

```sql
INVOKE XML.SQL2XML WITH
SELECT
    '*sql-statement*' SQLStatement

```

For example:

```sql
INVOKE XML.SQL2XML WITH
SELECT
    'SELECT * FROM TOUR_PROGRAMME WHERE DESTINATION LIKE ''A%''' SQLStatement

```

This reveals, for example, that the XML equivalent of query condition:

```sql
WHERE DESTINATION LIKE 'A%'
```

is:

```language-xml
<Where>
  <Operator name="LIKE" position="1">
    <Column name="DESTINATION" position="1" table_name="TOUR_PROGRAMME"
      table_info_window_name="Tour Programmes"
      type="Column" prompt="Destination" datatype="String" dbtype="VARCHAR2"/>
    <Value datatype="String" position="2">A%</Value>
  </Operator>
</Where>
```

Passing query conditions as XML opens the way to customisation through XSL transformations. For example, you could decide to pass only a specific subset of the query conditions to the component, perhaps only those conditions which do not use functions.

USoft ships a set of pre-defined XSL transformations and XML schemas to get you started in this direction.


:::note

You can find this material in **\<USoft-installation-folder>\\xsl\\ExtendedConditions**.

:::

Here is an explanation of each of these utility files.

For all transformations, if the transformation fails, "0@0" is returned.

|**File**|**Explanation**|
|--------|--------|
|Evaluate.xsl|<p>This transformation sheet can be used to evaluate records returned by the external data source before returning them to the Rules Engine.</p><p>'true' is returned if the record complies with the conditions, and 'false' if it does not.</p><p>This will check whether the record complies with all the conditions in the CONDITIONS XML document.</p><p>This can be useful in situations where the external data source cannot handle some of the conditions, and the connection between the Rules Engine and the component is slow (for example Internet). In this case, trying to reduce the number of records returned may result in a better performance.</p>|
|ExtractHardConditions.xsl|Extracts only the conditions that are an equation. The output is an XML document.|
|SQL2XML.xsd|<p>This XML schema can be used to validate that you pass query parameters in the correct XML format.</p><p>See SchemaPath in :</p><p> for details.</p>|
|TranslateToOdbc.xsl|Converts date values into ODBC format.|
|WithoutFunctions.xsl|Removes conditions in which a function is used. The output is an XML document.|
|WithoutSets.xsl|Removes conditions in which sets are used (for example: col1 in (1,2)). The output is an XML document.|
|<p>XmlToSql.xsl</p>|Transforms the CONDITIONS XML document into a SQL WHERE clause. The output is a string.|



### Component tables, features and limitations

Component tables can be accessed as if they were normal database tables. In all USoft contexts where you can specify a SQL statement, you can refer to a component table. Component tables are allowed in all subqueries (i.e. NOT EXISTS, NOT IN etc).

In addition to querying a component table (SELECT), if the underlying component supports it, you can use INSERT, UPDATE, DELETE statements.

Component tables have the following limitations:

- There is no outer-join support.
- CONNECT BY and START WITH are not allowed.
- Component tables cannot be subtypes or supertype tables.
- Primary key columns of Component Tables are non-updatable. This limitation makes the definition of the UpdateRow method easier: it gets parameters for every column. Without the restriction, the old values for the primary key would also have to be passed to the method.
- Binary data is not supported.
- The STDDEV and VARIANCE functions are not supported for queries on component tables.

### Component tables, error handling

It is possible to let the InsertRow, UpdateRow, and DeleteRow method fail by raising an exception.

As part of this exception, you can provide a message. This message will then be displayed within a USoft environment. NO rollback will be performed. You can translate these messages by using Application Strings.

This is the same transaction behavior as for regular tables in a USoft environment: If the record cannot be stored, no rollback is performed. If the PreCommit method fails, depending on the situation, a rollback is performed or not.