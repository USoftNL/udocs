---
id: XMLJSON2XML
---

# XML.JSON2XML




:::note

This article is about the **JSON2XML** method of the [XML internal component](/docs/Extensions/XML_internal_component).
See also the [Data flow control with XML or JSON](/docs/Repositories/Data_flow_control_with_XML_or_JSON) section.

:::

## **XML.JSON2XML**

Converts JSON to XML. Describes the structure and content of a JSON object as an XML document.

Returns the XML document.

*Syntax*

```sql
INVOKE  XML.JSON2XML WITH
SELECT  *json-object*
,       *mode*
...

*mode*  ::=  { '' | 'COMPACT' | 'FULL' }


```

The required *json-object* must be a valid JSON object.


:::tip

You can pass *json-object* as a string literal (as in the Examples).
You can alternatively select *json-object* from a database column, in which case you need a FROM clause.
You can also read from file and write to file. For an example, see the "Interaction with file system” section below.

:::

The required *mode* is either a quoted empty string, or the quoted string value 'COMPACT', or the quoted string value 'FULL'. The empty string '' is equivalent to 'COMPACT':

- For the empty-string or 'COMPACT' mode, see Example 1.
- For the 'FULL' mode, which yields a slightly more verbose result, see Example 2.

*Example input data*

The 2 Examples below use this *input-data:*

```language-json
{
  "TOUR": [
    {
      "TOUR_ID": 50,
      "DESTINATION": "PARAGUAY",
      "TOUR_TYPE": "SOUTH AM. SPECIAL",
      "START_DATE": "2020-05-11T00:00:00",
      "RETURN_DATE": "2020-06-04T00:00:00",
      "PRICE": 120,
      "MAX_PART": 10,
      "GUIDE": 5
    },
    {
      "TOUR_ID": 51,
      "DESTINATION": "AUSTRALIA",
      "TOUR_TYPE": "ISLAND SUNTANNER",
      "START_DATE": "2019-05-14T00:00:00",
      "RETURN_DATE": "2019-05-25T00:00:00",
      "PRICE": 122,
      "MAX_PART": 10,
      "GUIDE": null
    }
  ]
}
```

*Example 1*

This example calls the empty-string or 'COMPACT' *mode* (the default):

```sql
INVOKE  XML.JSON2XML WITH
SELECT  '*input-data*'
,       ''
```

If the input is in the USoft JSON format, table names and column names appear as XML **element** names:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<root type="object">
  <TOUR type="array">
    <element type="object">
      <TOUR_ID type="number">50</TOUR_ID>
      <DESTINATION type="string">PARAGUAY</DESTINATION>
      <TOUR_TYPE type="string">SOUTH AM. SPECIAL</TOUR_TYPE>
      <START_DATE type="string">2020-05-11T00:00:00</START_DATE>
      <RETURN_DATE type="string">2020-06-04T00:00:00</RETURN_DATE>
      <PRICE type="number">120</PRICE>
      <MAX_PART type="number">10</MAX_PART>
      <GUIDE type="number">5</GUIDE>
    </element>
    <element type="object">
      <TOUR_ID type="number">51</TOUR_ID>
      <DESTINATION type="string">AUSTRALIA</DESTINATION>
      <TOUR_TYPE type="string">ISLAND SUNTANNER</TOUR_TYPE>
      <START_DATE type="string">2019-05-14T00:00:00</START_DATE>
      <RETURN_DATE type="string">2019-05-25T00:00:00</RETURN_DATE>
      <PRICE type="number">122</PRICE>
      <MAX_PART type="number">10</MAX_PART>
      <GUIDE type="null"/>
    </element>
  </TOUR>
</root>


```

*Example 2*

This example calls the 'FULL' *mode*:

```sql
INVOKE  XML.JSON2XML WITH
SELECT  '*input-data*'
,       'FULL'
```

If the input is in the USoft JSON format, table names and column names appear as XML **attribute** names:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<root type="object">
  <item name="TOUR" type="array">
    <element type="object">
      <item name="TOUR_ID" type="number">50</item>
      <item name="DESTINATION" type="string">PARAGUAY</item>
      <item name="TOUR_TYPE" type="string">SOUTH AM. SPECIAL</item>
      <item name="START_DATE" type="string">2020-05-11T00:00:00</item>
      <item name="RETURN_DATE" type="string">2020-06-04T00:00:00</item>
      <item name="PRICE" type="number">120</item>
      <item name="MAX_PART" type="number">10</item>
      <item name="GUIDE" type="number">5</item>
    </element>
    <element type="object">
      <item name="TOUR_ID" type="number">51</item>
      <item name="DESTINATION" type="string">AUSTRALIA</item>
      <item name="TOUR_TYPE" type="string">ISLAND SUNTANNER</item>
      <item name="START_DATE" type="string">2019-05-14T00:00:00</item>
      <item name="RETURN_DATE" type="string">2019-05-25T00:00:00</item>
      <item name="PRICE" type="number">122</item>
      <item name="MAX_PART" type="number">10</item>
      <item name="GUIDE" type="null"/>
    </element>
  </item>
</root>


```

## Interaction with file system

The following example script reads the JSON input from file and writes the XML result back to file.

```sql
INVOKE   USFile.Open WITH 
SELECT   'ToursXML'
,        'c:\temp\tours.xml'
,        'WRITE'
;

INVOKE USFile.Write WITH
SELECT	'USFile.ToursXML'
,  (
     INVOKE  XML.JSON2XML WITH
     SELECT
       (  INVOKE USFile.ReadTextFile WITH
          SELECT 'c:\temp\tours.json' 
       )
     , '' 
    )
;

INVOKE   USFile.Close WITH 
SELECT   'ToursXML'
;
```

 