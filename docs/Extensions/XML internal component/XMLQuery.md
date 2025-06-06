# XML.Query



> [!NOTE]
> This article is about the **Query** method of the [XML internal component](/docs/Extensions/XML%20internal%20component).

## **XML.Query**

Executes a query that is defined in an input XML document. The structure of this XML document must comply with the Query By Form (QBF) specification described in [XML Representation of Queries](/docs/Repositories/USoft%20XML%20formats/XML%20representation%20of%20queries.md).

Returns XML output that contains the query results. The structure of this XML output is described here. This XML output contains ALL column values of the records exported.

*Syntax*

```sql
INVOKE XML.Query WITH
SELECT      *header-line-name*    DTDName
,           *use-io-formats*      UseIOFormats
,           *document*            XMLDocument
FROM        *table*

*use-io-formats*  :=  { No | Yes }
```

where *document* is the only required output column.

The optional *header-line-name* specifies a header line in the XML output with a DOCTYPE declaration containing this DTD Name as reference.

The optional *use-io-formats* determines whether the column values in the resulting XML document must be formatted according to the IO Format of the corresponding domain or not. This happens only if *use-io-formats* is passed with the 'Yes' value. Otherwise, date columns must obey to the format explained in help topic "XML representation of date values".

These optional output columns are case-insensitive. So are the associated pseudo-column names (DTDName, UseIOFormats).

The required *document* contains the input XML document compliant with the QBF specification.

If the SELECT query has an empty result set (= no rows are retrieved), there is no XML output. Otherwise, each record retrieved by the SELECT query returns an XML document.

If the query condition specified in the input XML document results in no records, then the resulting XML output contains only the root element and no row elements.

## Conditions

The SELECT statement must comply with the following conditions:

- For each parameter value, the parameter name must be specified.
- Parameters have constant values.
- If the SELECT results in no row, there is no XML output.
- Every record retrieved by the SELECT results in an XML output document.
- If the query condition specified in the input XML document results in no records, then the resulting XML output contains only the root element and no row elements.