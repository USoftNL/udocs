# USMeta.Languages



> [!NOTE]
> This article is about the **Languages** method of the [USMeta internal component](/docs/Extensions/USMeta%20internal%20component).

## **USMeta.Languages**

At runtime, gets metadata information about system languages from the model developed in USoft Definer. 

|**Name**|**Value**|
|--------|--------|
|LANGUAGE_CODE|language code|

*Syntax*

```sql
SELECT USMeta.Languages(
   *mime-type*                    MimeType
)

*mime-type*                  ::=  {  application/xml
                                ,  xml
                                ,  application/json
                                ,  json  }

```

All parameters are optional. Parameter values that you supply are mapped to parameters by alias name. 

```sql
SELECT   USMeta.Languages()
```

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example 1*

This example returns languages information in xml format.

```sql
SELECT USMeta.Languages()
```

The return value of this statement could be:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
	<Languages>
		<Language LANGUAGE_CODE="nl"/>
		<Language LANGUAGE_CODE="default"/>
		<Language LANGUAGE_CODE="en"/>
	</Languages>
</Meta>
```

*Example 2*

This example returns languages information in json format. 

```sql
SELECT USMeta.Languages(
       'json'     MimeType
)
```

The return value of this statement could be:

```language-json
{
	"Meta": {
		"Language": [
			{
				"LANGUAGE_CODE":"nl"
			},
			{
				"LANGUAGE_CODE":"default"
			},
			{
				"LANGUAGE_CODE":"en"
			}
		]
	}
}
```
