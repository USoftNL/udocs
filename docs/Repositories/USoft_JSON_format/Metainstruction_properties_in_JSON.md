---
id: Metainstruction_properties_in_JSON
---

# Meta-instruction properties in JSON

A **meta-instruction property** in a USoft JSON object is an entry that is not part of the JSON data proper. Rather, it gives an instruction about how to view or handle the surrounding data.

Meta-instruction properties stand out because their names start with an at sign (@). This is a suitable distinguishing mark, because it is untypical or impossible in a USoft application to have database column names that start with an at sign.

*Syntax*

```
"@*key*" : *value*

*key*    ::=  { usoft-json    |
              Insert | Update | Delete  }

```

In the property name, '@’ is a literal and *‘key*’**is one of the reserved names 'usoft-json’, 'Insert’, 'Update’, 'Delete’. *Value* is any valid value that a property can be given in JSON. As per normal, if *value* is a literal, it is double-quoted (not shown) if a string or date value, and unquoted if a number value.

*Example 1*

In this example, the **@usoft-json** meta-instruction property is a top-level element that contains directives on how to treat the data in the remainder of the JSON document. For details on these directives, go to [usoft-xml processing instruction](/docs/Repositories/USoft%20XML%20formats/usoftxml%20processing%20instruction.md), which is the XML counterpart of the @usoft-json property.

```language-json
{
	"@usoft-json": {
		"version": "1.0",
		"action": "multi-tables-import",
		"use-io-formats": "No",
		"trim-spaces": "No",
		"verify-original-values": "no",
		"return-corrected-records": "c:\\temp\\json.json",
		"append-to-file": "No",
		"overwrite-non-updatables": "No",
		"relationship-behaviour": "default"
	},
	"TOUR": [
	    {
		    "TOUR_ID": 50,
		    "DESTINATION": "PARAGUAY",
		    "TOUR_TYPE": "SOUTH AM. SPECIAL",
		    "START_DATE": "2020-05-11T00:00:00",
		    "RETURN_DATE": "2020-06-04T00:00:00",
		    "PLAN_DATE": "2019-08-05T16:10:33",
		    "PRICE": 120,
		    "MAX_PART": 10,
		    "GUIDE": 11
	    },
        ...
    ]
}
```

*Example 2*

In this example, the **@Update** and **@Delete** meta-instruction properties allow you to be specific about what operation to apply to the data. These are JSON counterparts of \<Update> and \<Delete> DML instruction tags in the USoft XML format.

```language-json
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

 