---
id: Example_XML_export_with_DTD_name_and_IO_formats
---

# Example: XML export with DTD name and IO formats

Here is an example of an XML export with the DTD name and IO Formats:

```sql
INVOKE     XML.Export
WITH
SELECT     'Orders.dtd' DTDName
,          *
,          'yes'        UseIOFormats
FROM       new_order
WHERE      orderdate > '11-NOV-2000'
AND        orderdate < '14-NOV-2000'
ORDER BY   id

```

This XML export exports all orders between November 11 and November 14. The XML export results in:

```xml
<!DOCTYPE Orders SYSTEM "Orders.dtd">
<New_Orders documentName="New Orders">
    <ORDER ID="000123" ORDER_DATE="2000-11-12" TOTAL_PRICE="1378,34"/>
    <ORDER ID="970137" ORDER_DATE="2000-11-13" TOTAL_PRICE="563,56"/>
</New_Orders>

```

**NOTES:**

- The documentName attribute contains the 'Object Name Plural' of the exported table / view before it is transformed into a string that can be used for an XML element name. This means that the original Object Name Plural can contain spaces and other characters that may not be used within an XML element.
- When importing XML, the value of documentName will be used to find the table / view needed for import.
- If the documentName attribute does not exist, the root element name is used for finding the table / view needed for import.