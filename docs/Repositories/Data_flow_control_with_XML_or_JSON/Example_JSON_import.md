---
id: Example_JSON_import
---

# Example: JSON import

## Example: default JSON import

Here is an example of a default JSON import. This is "default” in the sense that the input is a literal data set, as opposed to data accompanied by JSON meta-instruction properties (next section).

```sql
INVOKE    JSON.Import WITH
SELECT    '{
	"PERSON": [
		{
			"ID": 112,
			"FAMILY_NAME": "Smith",
			"FIRST_NAME": "John"

		},
		{
			"ID": 203,
			"FAMILY_NAME": "Sutcliff",
			"FIRST_NAME": "Bill"
		}
	]
}' JSONDocument

```

### How this import is handled

A default JSON import is handled using the "UPSERT” principle:

- If a record with the input primary key values does not exist, the import record is INSERTed.
- If a record with the input primary key values already exists, then any non-primary-key column values that are different in the import record are UPDATEd.
- No records are DELETEd.

Assuming "ID” is by itself the primary key of table PERSON,

- If there is no person with ID = 112 or ID = 203, the import records are INSERTed. The import will fail If the PERSON table has columns other than ID, FAMILY_NAME, FIRST_NAME that have Mandatory = Yes and Default Value = (empty), where Default Value can be set at column level or at domain level or both.
- If persons with ID = 112 and ID = 203 already exist, the records are UPDATEd. The current values for FAMILY_NAME and FIRST_NAME will be replaced by the import values.

> [!TIP]
> A successful import can still be rolled back. To consolidate, you need to commit.

## Example: JSON import with JSON meta-instruction properties

Here is an example of a JSON import instruction with [JSON meta-instruction properties](/docs/Repositories/USoft_JSON_format/Metainstruction_properties_in_JSON.md).

If the import is successful, the FIRST_NAME value of one person is changed, and another person is DELETEd.

```sql
INVOKE    JSON.Import WITH
SELECT    '{ "PERSON":[
                "ID":112
             ,  "FAMILY_NAME":"Smith"
             ,  "FIRST_NAME":"John"
             ,  "@Update":{
                   "FIRST_NAME":"Johnny"
                }
             ],
             "PERSON":[
                "ID":203
             ,  "FAMILY_NAME":"Sutcliff"
             ,  "FIRST_NAME":"Bill"
             ,  "@Delete":{}
             ]
          }' JSONDocument
,         'AllColumns' VerifyOriginalValues
```

### How this import is handled

This import is handled by following the \<Update> and \<Delete> instructions.

A blocking error is raised if one or more of the following apply:

- There is no PERSON database record with ID = 112.
- There is no PERSON database record with ID = 203.
- There is a PERSON database record with ID = 112, but either its FAMILY_NAME value is other than "Smith" or its FIRST_NAME value is other than "John" (or both).
- There is a PERSON database record with ID = 203, but either its FAMILY_NAME value is other than "Sutcliff" or its FIRST_NAME value is other than "Bill" (or both).