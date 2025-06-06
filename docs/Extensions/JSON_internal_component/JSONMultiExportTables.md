---
id: JSONMultiExportTables
---

# JSON.MultiExportTables

![](./assets/ba9b59ee-92c4-42d3-8ee4-4a2d6b784bc2.png)



> [!NOTE]
> This article is about the **MultiExportTables** method of the [JSON internal component](/docs/Extensions/JSON_internal_component).

## **JSON.MultiExportTables**

Exports data from multiple tables to a JSON object on the basis of a regular expression identifying a set of tables.

----

![](./assets/b011ef75-21b5-4ae7-a207-b41495eaf8fa.png)



Exports binary data (of the BLOB data type) to base64 encoding.

----

> [!TIP]
> Subtype indicators are not exported. See also the RestrictiveSupertypeListing parameter in this help topic.

*Syntax*

```sql
INVOKE JSON.MultiExportTables WITH SELECT
*regular-expression*
,   *parameter,    value*
,   ...      ,    …
```

The required *regular-expression* identifies the set of tables from which data is exported.

The optional *parameter-value* pairs specify additional options. See the Parameters section later in this article.

You can append WHERE clauses to restrict the output to records that match WHERE conditions. See the "Appended WHERE clauses" section later in this article.

*Example 1*

This statement, executed in the User Application, returns a JSON object describing the structure and contents of tables TOUR and TOUR_PROGRAMME:

```js
INVOKE JSON.MultiExportTables WITH SELECT
    '(TOUR|TOUR_PROGRAMME)'
```

The output JSON will look something like this:

```language-json
{
		"TOUR": [
			{
				"TOUR": 50,
				"DESTINATION": "PARAGUAY",
				"TOUR_TYPE": "SOUTH AM. SPECIAL",
				"PLANNED": "2022-09-23T11:11:24",
				"STARTED": "2025-05-10T00:00:00",
				"ENDED": "2025-06-03T00:00:00",
				"PRICE": 120,
				"MAX_TRAVELLERS": 10,
				"OVERBOOKING_LIMIT": 20,
				"GUIDE": 5
			},
			{
				"TOUR": 52,
				"DESTINATION": "AUSTRALIA",
				"TOUR_TYPE": "ISLAND SUNTANNER",
				"PLANNED": "2022-09-23T11:11:26",
				"STARTED": "2024-05-26T00:00:00",
				"ENDED": "2024-06-06T00:00:00",
				"PRICE": 118,
				"MAX_TRAVELLERS": 20,
				"OVERBOOKING_LIMIT": 20,
				"GUIDE": 0
			},
			...
		],
		"TOUR_PROGRAMME": [
			{
				"DESTINATION": "AUSTRALIA",
				"TOUR_TYPE": "ISLAND SUNTANNER",
				"NUM_DAYS": 12,
				"MAX_AGE": 0,
				"DESIGNED": "",
				"APPROVED": "",
				"DESCRIPTION": "Exclusive sailing adventure to the Great Barrier Reef Two nights on Fraser Island - the world's largest sand island Hire of 4 wheel drive vehicles on Fraser Island A night at an outback cattle station Two nights on beautiful Great Keppel Island Tjapukai Aboriginal Dance Theatre"
			},
			{
				"DESTINATION": "AUSTRALIA",
				"TOUR_TYPE": "ROCK 'N' ALICE",
				"NUM_DAYS": 12,
				"MAX_AGE": 0,
				"DESIGNED": "",
				"APPROVED": "",
				"DESCRIPTION": "Uluru rock sighting Outback town of Alice Springs Entrance fees to Uluru National Park King's Canyon and the Olgas Western MacDonnell Ranges"
			},
			...
		]
}
```

*Example 2*

This statement, executed in USoft Definer, returns a JSON object describing the structure and contents of tables T_TABLE, T_COLUMN and T_DOMAIN:

```sql
INVOKE JSON.MultiExportTables WITH SELECT
    '(T_TABLE|T_COLUMN|T_DOMAIN)'
```

*Example 3*

This statement returns a JSON object describing the structure and contents of ALL tables of the application you execute this statement in:

```sql
INVOKE JSON.MultiExportTables WITH SELECT
    '(.*)'
```

## Parameters

You can add parameter-value pairs to your statement to specify additional options. This statement exports all data from the TOUR and SCHEDTOUR table, converting whitespaces to entity references, and writing the output to a file named "c:\\temp\\output.json":

```sql
INVOKE JSON.MultiExportTables WITH SELECT
    '(TOUR|TOUR_PROGRAMME)'
,   'WriteOutputTo', 'c:\temp\output.json'
```

Available parameter settings are in the table below. The order in which you specify settings has no effect. The use of each parameter is optional. If you do not refer to a given parameter, and it has a default value associated with it, the result is as if you specified that default. Both the parameter names and the values are case-insensitive strings.

|***parameter***|***value***|**Description**|
|--------|--------|--------|
|AppendToFile|<p>*USFile-alias*</p><p>*output-file-name*</p>|<p>This parameter is used to specify that the output is to be written directly to a file. If the file exists, it will be appended to. To overwrite the existing file, use the WriteOutputTo parameter instead.</p><p>It is possible to use a file which has previously been opened using the [USFile.Open](/docs/Extensions/USFile_internal_component/USFileOpen.md) method. To do this, the alias used in the USFile.Open method must be specified, preceded by 'USFile.'</p>|
|EmptyDocOnZeroRows|{ yes  \| no }|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If set to 'no', if the SELECT statement of the JSON export does not return any rows, USoft returns an empty string.</p><p>If set to ‘yes’ (the default), then the output is always a JSON object. If no rows are returned, this JSON object contains only a wrapper.</p>|
|ProcessingInstruction|{ yes  \| no }|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, a [meta-instruction property](/docs/Repositories/USoft_JSON_format/Metainstruction_properties_in_JSON.md) such as the following is added to the output JSON object:</p><pre><code class="language-language-json">"@usoft-json": {<br/>	"version": "1.0",<br/>	"action": "multi-tables-import",<br/>	"use-io-formats": "No",<br/>	"trim-spaces": "No",<br/>	"verify-original-values": "no",<br/>	"return-corrected-records": "c:\\temp\\json.json",<br/>	"append-to-file": "No",<br/>	"overwrite-non-updatables": "No",<br/>	"relationship-behaviour": "default"<br/>}</code></pre><p>Otherwise, meta-instruction property is added to the output JSON object.</p>|
|RestrictiveSupertypeListing|{ yes  \| no }|<p>*Value* is a string and must be quoted, as in the example earlier in this help topic.</p><p>If you specify 'yes' for this parameter, only supertype records are output that are not also a subtype (or more than 1 subtype). The number of supertype records listed in the supertype section of the export file may be less than the number of records in the supertype table in the database.</p><p>If you specify 'no' for this parameter (the default), these 2 numbers are always equal.</p>|
|WriteOutputTo|<p>*USFile-alias*</p><p>*output-file-name*</p>|<p>This parameter is used to specify that the output is to be written directly to a file. If the file exists, it will be **overwritten**. To prevent this, use the AppendToFile parameter instead.</p><p>It is possible to use a file which has previously been opened using the [USFile.Open](/docs/Extensions/USFile_internal_component/USFileOpen.md) method. To do this, the alias used in the USFile.Open method must be specified, preceded by 'USFile.'</p>|



## Appended WHERE clauses

You can append WHERE clauses to restrict the output to records that match WHERE conditions. Do this by specifying a named group in your regular expression, and then using the group name as a parameter name to bind the WHERE clause to the table(s) matching the regular expression:

*Syntax*

```sql
INVOKE JSON.MultiExportTables WITH SELECT
*named-group-regexp, named-group-regexp ...,   group-name,    appended-where-clause*
,   ...      ,    ...

*named-group-regexp*  ::=  (?*group-name*)*regular-expression*
```

*Group-name* must be an alphanumeric string starting with a letter and not containing whitespace.

*Appended-where-clause* must be a SQL fragment starting with the WHERE keyword that is valid when appended to an imaginary "SELECT * FROM table" query for each table matching regular-expression. If *named-group-regexp* is

```
(?<mycondition>TOUR)
```

and *appended-where-clause* is

```sql
WHERE destination = 'AUSTRALIA'
```

then the output is the result of the implied query:

```sql
SELECT * FROM TOUR WHERE destination = 'AUSTRALIA'
```

*Appended-where-clause* may contain AND and OR operators. It may end in an ORDER BY clause. It may not contain the GROUP BY or HAVING keywords. It may not contain subqueries.

Just like JSON.Export, JSON.MultiExportTables uses only single-table queries. While its result (other than the result of JSON.Export) may contain data from multiple tables, data from each table is obtained by a single-table SELECT statement. The impossibility to specify joins is alleviated by the possibility to use substitution variables to extract joined data by substituted key value. For this option, see the "Substitution variables in appended WHERE" section in this help topic. Use JSON.SQLExport if you want to export data based on multi-table queries, ie., queries containing joins or subqueries.

*Example*

This statement writes TOUR and SCHEDTOUR data with destination AUSTRALIA to a file named "c:\\temp\\tours.json". The result is a JSON object describing Tour and Schedtour information about tours to Australia.

This example illustrates that group-name can be reused for multiple sections of named-group-regexp separated by alternation symbols ( '\|' pipe symbols). This works only if the columns used in *appended-where-clause* exist in each of the referenced tables.

```sql
INVOKE JSON.MultiExportTables WITH SELECT
    '(?<mydestination>TOUR)|(?<mydestination>SCHEDTOUR)'
,   'mydestination', 'where destination = ''AUSTRALIA'''
,   'AppendToFile','c:\temp\tours.json'
```

The output data of this statement is the result of the implied queries:

```sql
SELECT * FROM TOUR WHERE destination = 'AUSTRALIA'
SELECT * FROM SCHEDTOUR WHERE destination = 'AUSTRALIA'
```

## Substitution variables in appended WHERE

You can use the **$** prefix to reference *substitution variables* in appended WHERE clauses. You can then specify a value for a substitution variable by adding a parameter-value pair in which parameter is the variable name and value is the substitution value.

This example exports joined data from multiple tables for a person with person ID 84:

```sql
INVOKE JSON.MultiExportTables WITH SELECT
    '(?<mycondition1>PERSON)|(?<mycondition2>SCHEDTOUR)'
,   'mycondition1', 'where person_id = $PID'
,   'mycondition2', 'where booked_by = $PID'
,   'PID', 84
```

The output data of this statement is the result of the implied queries:

```sql
SELECT * FROM PERSON WHERE person_id = 84
SELECT * FROM SCHEDTOUR WHERE booked_by = 84
```

## Behaviour with subtypes

Subtype indicators are not exported to the result JSON. This is to minimise potential problems with the re-importability of the result JSON.

As a result, information about which supertypes belong to which subtypes may change on re-import if you choose not to include the subtype records in your export.

If you export data with [JSON.Export](/docs/Extensions/JSON_internal_component/JSONExport.md) instead of with JSON.MultiExportTables, then subtype indicators may or may not be exported to the result JSON. A subtype indicator is exported with JSON.Export if it is mentioned in the WITH SELECT ... list, and also if that list contains the "*" wildcard.