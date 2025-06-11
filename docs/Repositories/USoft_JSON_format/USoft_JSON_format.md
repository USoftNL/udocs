---
id: USoft_JSON_format
---

# USoft JSON format

The **USoft JSON format** is a standardised way to represent USoft data in JSON. In this format, a top-level JSON object is allowed to contain data from a single table or from multiple tables.

This format is produced by calls to JSON.Export for data from a single table, and by calls to JSON.MultiExportTables for data from multiple tables. 

Data in this format is re-importable by calling JSON.Import.

*Syntax*

```
{
*   json-table-section*,  ...
}

*json-table-section*   ::=  "*table-name*" : [ *row-section*, ... ]

*row-section*     ::=  { *column-section*, ... }

*column-section*  ::=  { "*column-name*" : *column-value* |
*                       meta-instruction-property   * }

*column-value*  ::=  { "*string-value*" | *number-value* | null | "" }
```

The top-level JSON object contains 1 or multiple comma-separated *json-table-sections.* 

Each *json-table-section* is a property name-value pair. The name refers to a table in the database. The value is an array of *row-sections. * Each *row-section* represents a record in the table.

Each *row-section* is a collection of *column-sections.* 

A *column-section* is a property name-value pair. The name corresponds to a column of the table. The value corresponds to the value stored in that column in the record represented by the *row-section.* A *column-section* can also be a *meta-instruction-property*. See [Meta-instruction properties in JSON](/Repositories/USoft_JSON_format/Metainstruction_properties_in_JSON.md)*.*

*Table-name* and *column-name* are double-quoted as shown in the syntax block.

*Column-value* is double-quoted in the case of a string value or date value, unquoted in the case of a number value, or (in the case of a NULL value) either the JSON **null** keyword or a double-quoted empty value.


:::tip

Because USoft converts incoming empty strings to the NULL value for all datatypes, you can import a double-quoted empty value. This has the same effect as importing the **null** value.

:::

*Example*

This example contains 1 record from parent table TOUR_PROGRAMME and 2 child records for this parent in child table TOUR.

```language-json
{
  "TOUR_PROGRAMME": [
    {
      "DESTINATION":"AUSTRALIA",
      "TOUR_TYPE":"ISLAND SUNTANNER",
      "NUM_DAYS":12,
      "DESCRIPTION":"Exclusive sailing adventure to the Great Barrier Reef."
    }
  ],
  "TOUR": [
    {
      "TOUR_ID":145,
      "DESTINATION":"AUSTRALIA",
      "TOUR_TYPE":"ISLAND SUNTANNER",
      "START_DATE":"2022-07-20T00:00:00",
      "RETURN_DATE":"2022-08-01T00:00:00",
      "PRICE":2450,
      "MAX_PART":25,
      "GUIDE":7
    },	  
    {
      "TOUR_ID":148,
      "DESTINATION":"AUSTRALIA",
      "TOUR_TYPE":"ISLAND SUNTANNER",
      "START_DATE":"2020-10-26T00:00:00",
      "RETURN_DATE":"2020-11-06T00:00:00",
      "PRICE":2500,
      "MAX_PART":25,
      "GUIDE":null
	}
  ]
}
```