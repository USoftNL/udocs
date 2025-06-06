# XML.SQLExport



> [!NOTE]
> This article is about the **SQLExport** method of the [XML internal component](/docs/Extensions/XML%20internal%20component).

## **XML.SQLExport**

Exports data to the [Meta-Rows-Fields document format](/docs/Repositories/USoft%20XML%20formats/MetaRowsFields%20document%20format.md) on the basis of a SELECT statement.

This export method has the drawback that the result is NOT re-importable with **XML.Import**.

This export method has the advantage that it can deal with compound column expressions provided they are aliased. Also, the result contains metadata information. In summary, the result contains data but also information about how this data was queried.

*Syntax*

```sql
INVOKE      XML.SQLExport WITH
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
INVOKE    XML.SQLExport WITH
SELECT    'yes' UseIOFormats
,         *
FROM      tour
```

*Example 2*

The result of this call:

```sql
INVOKE      xml.sqlexport with
SELECT      concat( concat( t.destination, ' ' ), t.tour_type ) tour_label
,           tp.num_days
FROM        tour_programme tp
,           tour t
RELATE      tp "IS FOLLOWED BY" t
WHERE       t.destination = 'AUSTRALIA'
GROUP BY    t.destination, t.tour_type, tp.num_days
```

is this Meta-Rows-Fields document:

```language-xml
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

## Parameters

All parameters are optional, and the parameter names and values are not case-sensitive.

|***value***|***parameter***|**Description**|
|--------|--------|--------|
|{ yes \| no }|AppendToFile|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, the file is appended to. Otherwise, the file is overwritten.</p>|
|{ yes \| no }|TrimSpaces|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, any space characters produced during export because of an IO format will be stripped. Otherwise, the spaces remain. This parameter changes the output of:</p><pre><code class="language-sql">INVOKE XML.SqlExport with<br/>SELECT USFormat.DoubleToChar( 123.22, 'ZZ,ZZZ,ZZ9.99' ) COL1</code></pre>|
|{ yes \| no }|UseIOFormats|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, column values in the resulting XML output get the IO format of the corresponding domain. Otherwise, they are written as they are retrieved from the database.</p>|
|*output-file-name*|WriteOutputTo|Specifies whether the output is to be written directly to a file. It is possible to use a file which has previously been opened using the USFile.Open method. To do this, the alias used in the [USFile.Open](/docs/Extensions/USFile%20internal%20component/USFileOpen.md) method must be specified, preceded by 'USFile.' If no USFile alias is specified, the XML will be written directly to the file specified. If the file exists, it will be overwritten. To prevent this, use the 'Append' parameter. If specified, the method will return the file name.|
|{ yes \| no }|XmlDeclaration|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, the default Rules Engine encoding is returned in XML processing instructions. Otherwise, no encoding processing instruction is added to the returned XML document.</p>|



 