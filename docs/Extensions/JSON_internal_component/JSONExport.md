---
id: JSONExport
---

# JSON.Export

![](./assets/ba9b59ee-92c4-42d3-8ee4-4a2d6b784bc2.png)



> [!NOTE]
> This article is about the **Export** method of the [JSON internal component](/docs/Extensions/JSON_internal_component).

## **JSON.Export**

Exports data to the USoft JSON format on the basis of a SELECT statement.

----

![](./assets/b011ef75-21b5-4ae7-a207-b41495eaf8fa.png)



Exports binary data (of the BLOB data type) to base64 encoding.

----

*Syntax*

```sql
INVOKE JSON.Export WITH
SELECT      { *parameter-assignment* | *column-expression* } ...
FROM        *table*
ORDER BY    *order-by-list*

*parameter-assignment*  ::=  *value  parameter*

*column-expression*     ::=

  {    *column*        |
       OLD( *column* ) |
       *             |
       OLD( * )      }
```

The required SELECT clause must contain at least 1 item. Each item in this clause is either a *parameter-assignment* or a *column-expression*.

Each *parameter-assignment* is a value-name pair. The SECOND element is the name of a parameter. The FIRST element is the value assigned to that parameter. Please find *values* and *parameters* in the table below.

Each *column-expression* is either a literal column name or the SQL * (asterisk) wildcard. Column aliases are not supported. Other SQL functions than OLD() are NOT supported. The OLD() function is supported only if you call JSON.Export from constraint SQL. Even in constraint SQL, you cannot export both old value and new value for a column: you cannot use *column* and OLD( *column* ) for the same column in the same SELECT list.

It is customary, but not mandatory, to list value parameter pairs before column expressions. The order of the items in the SELECT clause determines the order of the attributes in the XML output. The optional ORDER BY clause determines the document order of the records in the JSON output.

The required FROM clause must contain the name of exactly 1 table or logical view.

*Example*

```sql
INVOKE    JSON.Export WITH
SELECT    'c:\travel\tours.json'  WriteOutputTo
,         *
FROM      tour
```

## Parameters

This table is sorted by *parameter* and lists all value-parameter pairs supported in the SELECT output-lists passed to JSON.Export. The use of each parameter is optional. If you do not specify a given *parameter* and it has a default *value* corresponding to it, this is the value applied.

Both *value* and *parameter* are case-insensitive.

|***value***|***parameter***|**Description**|
|--------|--------|--------|
|{ yes \| no }|AppendToFile|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>This parameter is used with the "WriteOutputTo" parameter. If you specify 'yes' for this parameter, the file is appended to. Otherwise, it is overwritten.</p>|
|{ yes \| no }|EmptyDocOnZeroRows|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If set to 'no' (the default), if the SELECT statement of the JSON export does not return any rows, USoft returns an empty string. This makes it difficult to apply any transformation to the result of the JSON export.</p><p>If set to ‘yes’, then the output is always a JSON object. If no rows are returned, this JSON object contains only a root tag with the same name as the info window name.</p>|
|<p>{ Array \|<br/>			  Object<br/>			}</p>|Encapsulation|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>This parameter determines how the data is modelled (formatted) in JSON.</p><p>If set to ‘Array’, data is modelled as an unnamed array of objects. Each object contains column names and column values of a retrieved record.</p><p>If set to 'Object’ (the default), these objects are encapsulated in a wrapper that contains the table name.</p><p>For examples, see the [Encapsulation](#encapsulation) section below.</p>|
|{ Insert \| Delete \| Update }|ExecutionType|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>Specifies a [JSON meta-instruction property](/docs/Repositories/USoft_JSON_format/Metainstruction_properties_in_JSON.md) that will be generated for each resulting row element.</p><p>A Delete instruction property is necessary if you want to delete the exported data from a target repository. Otherwise, ExecutionType has limited applicability. An Update tag is necessary if you want to identify records where a primary key value must be updated in a target repository, but you cannot use the ExecutionType parameter for this, because JSON.Export does not let you export old and new values of the same (primary key) column in 1 operation. Otherwise, the Update tag is only useful as a comment. The Insert tag is only ever useful as a comment.</p>|
|{ yes \| no }|LeadingZeroForDecimal|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, numeric values returned from the database without a leading zero, such as '.30', will appear in your JSON result with a leading zero, as in '0.30'.<br/>			If you specify 'no', they will appear without leading zero, as in '.30'.</p>|
|<p>{ Compact \|<br/>			  Indent \|<br/>			  Newline<br/>			}</p>|PrettyPrint|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>This parameter determines how whitespace is added to the JSON result data.</p><p>If set to ‘Compact’, the result JSON is returned without whitespace formatting. This ensures minimal size.</p><p>If set to ‘Indent’, the result JSON contains inserted newline and indentation characters. This ensures an optimal level of readibility for humans. The indentation characters visualise how the JSON elements are nested. See the examples in the [Encapsulation ](#encapsulation)section below.</p><p>If set to 'Newline’ (the default), the result JSON contains inserted newline characters, but not indentation characters. This ensures a limited level of readability for humans.</p>|
|{ yes \| no }|TrimSpaces|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If set to ‘yes’, any trailing whitespace characters will be removed from the JSON result.</p>|
|{ yes \| no }|UseIOFormats|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, column values in the resulting XML output get the IO format of the corresponding domain. Otherwise they are written as they are retrieved from the database.</p>|
|<p>*USFile-alias*</p><p>*output-file-name*</p>|WriteOutputTo|This parameter is used to specify that the output is to be written directly to a file. It is possible to use a file which has previously been opened using the [USFile.Open](/docs/Extensions/USFile_internal_component/USFileOpen.md) method. To do this, the alias used in the USFile.Open method must be specified, preceded by 'USFile.' If no USFile alias is specified, the JSON will be written directly to the file specified. If the file exists, it will be overwritten. To prevent this, use the 'AppendToFile' parameter. If specified, the method will return the file name.|



## Encapsulation

This statement uses **Array** encapsulation:

```sql
INVOKE JSON.Export WITH SELECT
	'Array' Encapsulation,
	'Indent' PrettyPrint,
	* FROM tour_programme
```

and returns the following result:

```language-json
[
	{
		"DESTINATION":"AUSTRALIA",
		"TOUR_TYPE":"ISLAND SUNTANNER",
		"NUM_DAYS":12,
		"MAX_AGE":65,
		"DESCRIPTION":"Exclusive sailing adventure to the Great Barrier Reef Two nights on Fraser Island - the world's largest sand island Hire of 4 wheel drive vehicles on Fraser Island A night at an outback cattle station Two nights on beautiful Great Keppel Island Tjapukai Aboriginal Dance Theatre"
	},
	{
		"DESTINATION":"AUSTRALIA",
		"TOUR_TYPE":"ROCK 'N' ALICE",
		"NUM_DAYS":12,
		"MAX_AGE":0,
		"DESCRIPTION":"Uluru rock sighting Outback town of Alice Springs Entrance fees to Uluru National Park King's Canyon and the Olgas Western MacDonnell Ranges"
	}
]
```

> [!WARNING]
> This result data does not contain the name of the table that the records are exported from.

This statement uses **Object** encapsulation:

```sql
INVOKE JSON.Export WITH SELECT
	'Object' Encapsulation,
	'Indent' PrettyPrint,
	* FROM tour_programme
```

and returns the following result:

```language-json
{
	"TOUR_PROGRAMME": [
		{
			"DESTINATION":"AUSTRALIA",
			"TOUR_TYPE":"ISLAND SUNTANNER",
			"NUM_DAYS":12,
			"MAX_AGE":65,
			"DESCRIPTION":"Exclusive sailing adventure to the Great Barrier Reef Two nights on Fraser Island - the world's largest sand island Hire of 4 wheel drive vehicles on Fraser Island A night at an outback cattle station Two nights on beautiful Great Keppel Island Tjapukai Aboriginal Dance Theatre"
		},
		{
			"DESTINATION":"AUSTRALIA",
			"TOUR_TYPE":"ROCK 'N' ALICE",
			"NUM_DAYS":12,
			"MAX_AGE":0,
			"DESCRIPTION":"Uluru rock sighting Outback town of Alice Springs Entrace fees to Uluru National Park King's Canyon and the Olgas Western MacDonnell Ranges"
		}
	]
}
```

> [!TIP]
> The latter format (with Encapsulation set to **Object** or left unspecified) is also the [default USoft JSON format](/docs/Repositories/USoft_JSON_format/USoft_JSON_format.md). This is also the format output by [JSON.MultiExportTables()](/docs/Extensions/JSON_internal_component/JSONMultiExportTables.md).