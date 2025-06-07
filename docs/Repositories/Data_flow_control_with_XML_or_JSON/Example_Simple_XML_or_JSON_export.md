---
id: Example_Simple_XML_or_JSON_export
---

# Example: Simple XML or JSON export

## Simple XML export

Here is an example of a simple XML export:

```sql
INVOKE    XML.Export
WITH
SELECT    person_id
,         family_name
,         first_name
FROM      person
ORDER BY  person_id DESC

```

This results in:

```xml
<Persons documentName="Persons">
    <PERSON ID="177" FAMILY_NAME="Haynes" FIRST_NAME="Deborah"/>
    <PERSON ID="112" FAMILY_NAME="Smith" FIRST_NAME="John"/>
</Persons>

```

## Simple JSON export

Here is an example of a simple JSON export:

```language-json
INVOKE    JSON.Export
WITH
SELECT    person_id
,         family_name
,         first_name
FROM      person
ORDER BY  person_id DESC

```

This results in:

```language-json
{
	"PERSON": [
		{
			"PERSON_ID": 177,
			"FAMILY_NAME": "Haynes",
			"FIRST_NAME": "Deborah"
		},
		{
			"PERSON_ID": 112,
			"FAMILY_NAME": "Smith",
			"FIRST_NAME": "John"
		}
	]
}

```