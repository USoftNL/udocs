---
id: Example_XML_or_JSON_export_in_combination_with_USFile
---

# Example: XML or JSON export in combination with USFile

Here is an example that writes an XML export to a file opened by USFile:

```sql
INVOKE USFile.Open WITH SELECT 'Tours', '%TEMP%\tours.xml', 'WRITE';
INVOKE XML.Export WITH SELECT 'USFile.Tours' WriteOutputTo, * FROM tours;
INVOKE USFile.Close WITH SELECT 'Tours';

```

 Here is an example that writes a JSON export to a file opened by USFile:

```sql
INVOKE USFile.Open WITH SELECT 'Tours', '%TEMP%\tours.json', 'WRITE';
INVOKE JSON.Export WITH SELECT 'USFile.Tours' WriteOutputTo, * FROM tours;
INVOKE USFile.Close WITH SELECT 'Tours';

```

 