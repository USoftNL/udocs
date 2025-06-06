---
id: USMetaDomains
---

# USMeta.Domains



> [!NOTE]
> This article is about the **Domains** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

## **USMeta.Domains**

At runtime, outputs metadata information about domains, data types and allowed values from the model developed in USoft Definer.

Returns an XML document of the form demonstrated in Example at the end of this article.

## Output

### Domains

For each retrieved domain, the output takes the form of name/value pairs:

|**Name**|**Value**|
|--------|--------|
|NAME    |Domain Name|
|MODULE_NAME|The current application or module, which is potentially consuming other modules (cf. IMPLEMENTING_MODULE below).|
|DATABASE_TYPE|RDBMS datatype. This is not the name of the domain's data type in USoft Definer, but the datatype generated for the column when USoft generates the table in the database.|
|TOTAL_LENGTH|Column Width|
|LENGTH_AFTER_PERIOD|Decimals|
|DISPLAY_DATATYPE|Display Type. Values map to prompts as in the "Display types” table below.|
|DISPLAY_LENGTH|Display Length|
|DISPLAY_LENGTH_AFTER_PERIOD|Decimals Displ.|
|UPPERCASE|Uppercase|
|TEMPLATE_DOMAIN|Template Domain|
|REGEX   |Pattern (Regexp). This is not the **name** of the regexp pattern but the actual **pattern**, eg., ‘.+\\@.+\\..+’ for an e-mail address.|
|HELP_TEXT|Help Text|
|SUPER_DOMAIN|Help Text|
|FIXED_LENGTH|Fixed Length|
|DEFAULT_VALUE|Default Value|
|MIN_VALUE|Min. Value|
|MAX_VALUE|Max. Value|
|SEQNO_TYPE|<p>Generate Unique Values:</p><p>'NO SEQNO’ if No;</p><p>'RDMBS’ if Database;</p><p>'COMPONENT’ if Component;</p><p>'GUID’ if GUID.</p>|
|COMPONENT|Name of the RDMI component responsible for generating unique values; applies when Generate Unique Values = Component.|
|IO_FORMAT|IO Format|
|USABLE_AS_INTERFACE|<p>Interface (Y/N)</p>|
|IMPLEMENTING_MODULE|Module  |



### Allowed values

If the domain has allowed values, these are listed in an "Allowed Values” child element, in the following format (example):

```language-xml
<Domain NAME="BOOLEAN" ... >
    <Allowed_Values>
        <Allowed_Value VALUE="N" PROMPT="No"/>
        <Allowed_Value VALUE="Y" PROMPT="Yes"/>
    </Allowed_Values>
</Domain>
```

### Consumers

If the table is from a consumed module, the consumers are listed in a "Consumed_In_Modules” child element, for example:

```language-xml
<Domain NAME="USVC_NAME_60" MODULE_NAME="USVC" ...>
  <Consumed_In_Modules>
    <Module MODULE_NAME="USD"/>
  </Consumed_In_Modules>
</Domain>
```

### Display Types

DISPLAY_DATATYPE values map to prompts in the Domain info window of USoft Definer as follows:

|**Value**|**Prompt**|
|--------|--------|
|EXT_PIXMAP|Bitmap Image|
|CHECK   |Check Box|
|OPTION  |Dropdown List Box|
|LONG    |Multi-line Text Box|
|CLOB    |Multi-line Text Box (CLOB)|
|EXT_OLE |OLE Container|
|RADIO   |Option Buttons|
|SCALE   |Slider  |
|ALPHA   |Text Box (Alpha)|
|CHAR    |Text Box (Character)|
|DATE    |Text Box (Date)|
|DATETIME|Text Box (Date and Time)|
|EDATE   |Text  Box (European Date)|
|INT     |Text Box (Integer)|
|JDATE   |Text Box (Julian Date)|
|MONEY   |Text Box (Money)|
|NUMBER  |Text Box (Number)|
|RINT    |Text Box (R Integer)|
|RMONEY  |Text Box (R Money)|
|RNUMBER |Text Box (R Number)|
|TIME    |Text Box (Time)|
|EXT_TEXT|Text Document|
|DB_TEXT |Text Editor|



## Syntax

```sql
SELECT USMeta.Domains(
    *domain-name-pattern*      Domains
,   *type-pattern*             Type
,   *interfaces-only*          InterfacesOnly
,   *module-pattern*           Module
,   *mime-type*                MimeType
)

*mime-type*   :=  {  application/xml
                ,  xml
                ,  application/json
                ,  json  }
```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The '.*ID.*' value in the following example is for domain-name-pattern because of the "Domains" alias:

```sql
SELECT   USMeta.Domains( '.*ID.*' Domains )
```

> [!TIP]
> For backward compatibility only, it is possible to supply parameter values by position. Using this syntax, a list of non-aliased values maps to the parameter list in the order stated, with empty values at the end of the list if you supply less than 4 values, and '' (the empty string) as a way of explicitly declaring an empty value.

*Domain-name-pattern* is a regular expression that matches zero, one or more domain names in the model. The result data is limited to domains matching the pattern. If *domain-name-pattern* is omitted, then result data is not limited in this way.

*Type-pattern* is a regular expression that matches zero, one or more data types of domains in the model. The result data is limited to domains with a data type matching the pattern. If *type-pattern* is omitted, then result data is not limited in this way. The following are valid data types in USoft:

|        |        |        |        |
|--------|--------|--------|--------|
|BINARY  |IMAGE   |NTEXT   |TEXT    |
|BIT     |INT     |NUMBER  |TIME    |
|BLOB    |INTEGER |NUMERIC |TIMESTAMP|
|CHAR    |LONG    |NVARCHAR|TINYINT |
|CLOB    |LONGRAW |NVARCHAR2|VARBINARY|
|DATE    |LONG VARBINARY|RAW     |VARCHAR |
|DATETIME|LONG VARCHAR|REAL    |VARCHAR2|
|DECIMAL |MONEY   |SMALLDATETIME|WCHAR   |
|DOUBLE PRECISION|NCHAR   |SMALLINT|WLONGVARCHAR|
|FLOAT   |NCLOB   |SMALLMONEY|WVARCHAR|



If *interfaces-only* is set to 'yes', only columns that have Interface = Yes are included. The default of *interfaces-only* is 'no', meaning that domains are in scope regardless of the value of their Interface attribute.

*Module-pattern* is a regular expression that matches zero, one or more module names in the model. The result data is limited to domains within modules matching the pattern. Any domains that are consumed from a different module which is filtered out by the regular expression, will show two additional fields 'INTERFACE_FROM_MODULE', which will be 'Y', and 'IMPLEMENTING_MODULE', which will contain the module name where the domain originates from. The 'MODULE_NAME' field will in this case contain the name of the module in which the interface was consumed. If *module-pattern* is omitted, then the result data is not limited in this way.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

## Example

This example returns domain information about any domains in the model that have a name containing the letters 'ID', and a 'NUMBER' data type:

```sql
SELECT USMeta.Domains(
   '.*ID.*'     Domains
,  'NUMBER'     Type
)
```

The return value of this statement could be:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
	<Domains>
		<Domain NAME="BOAT_ID" MODULE_NAME="TRAVEL" DATABASE_TYPE="NUMBER" TOTAL_LENGTH="8" LENGTH_AFTER_PERIOD="" DISPLAY_DATATYPE="NUMBER" DISPLAY_LENGTH="" DISPLAY_LENGTH_AFTER_PERIOD="" UPPERCASE="N" TEMPLATE_DOMAIN="INTEGER" REGEX="" HELP_TEXT="" SUPER_DOMAIN="" FIXED_LENGTH="N" DEFAULT_VALUE="" MIN_VALUE="" MAX_VALUE="" SEQNO_TYPE="RDMBS" COMPONENT="" IO_FORMAT="" USABLE_AS_INTERFACE="N" IMPLEMENTING_MODULE="BOATS"/>
		<Domain NAME="DISCOUNT_ID" MODULE_NAME="TRAVEL" DATABASE_TYPE="NUMBER" TOTAL_LENGTH="2" LENGTH_AFTER_PERIOD="" DISPLAY_DATATYPE="NUMBER" DISPLAY_LENGTH="" DISPLAY_LENGTH_AFTER_PERIOD="" UPPERCASE="N" TEMPLATE_DOMAIN="INTEGER" REGEX="" HELP_TEXT="" SUPER_DOMAIN="" FIXED_LENGTH="N" DEFAULT_VALUE="" MIN_VALUE="" MAX_VALUE="" SEQNO_TYPE="RDMBS" COMPONENT="" IO_FORMAT="" USABLE_AS_INTERFACE="Y" IMPLEMENTING_MODULE=""/>
		<Domain NAME="PERSON_ID" MODULE_NAME="TRAVEL" DATABASE_TYPE="NUMBER" TOTAL_LENGTH="5" LENGTH_AFTER_PERIOD="" DISPLAY_DATATYPE="INT" DISPLAY_LENGTH="" DISPLAY_LENGTH_AFTER_PERIOD="" UPPERCASE="N" TEMPLATE_DOMAIN="INTEGER" REGEX="" HELP_TEXT="" SUPER_DOMAIN="" FIXED_LENGTH="N" DEFAULT_VALUE="" MIN_VALUE="" MAX_VALUE="" SEQNO_TYPE="RDMBS" COMPONENT="" IO_FORMAT="" USABLE_AS_INTERFACE="Y" IMPLEMENTING_MODULE=""/>
		<Domain NAME="RES_ID" MODULE_NAME="TRAVEL" DATABASE_TYPE="NUMBER" TOTAL_LENGTH="5" LENGTH_AFTER_PERIOD="" DISPLAY_DATATYPE="INT" DISPLAY_LENGTH="" DISPLAY_LENGTH_AFTER_PERIOD="" UPPERCASE="N" TEMPLATE_DOMAIN="INTEGER" REGEX="" HELP_TEXT="" SUPER_DOMAIN="" FIXED_LENGTH="N" DEFAULT_VALUE="" MIN_VALUE="" MAX_VALUE="" SEQNO_TYPE="RDMBS" COMPONENT="" IO_FORMAT="" USABLE_AS_INTERFACE="N" IMPLEMENTING_MODULE=""/>
		<Domain NAME="TOUR_ID" MODULE_NAME="TRAVEL" DATABASE_TYPE="NUMBER" TOTAL_LENGTH="4" LENGTH_AFTER_PERIOD="" DISPLAY_DATATYPE="INT" DISPLAY_LENGTH="" DISPLAY_LENGTH_AFTER_PERIOD="" UPPERCASE="N" TEMPLATE_DOMAIN="INTEGER" REGEX="" HELP_TEXT="" SUPER_DOMAIN="" FIXED_LENGTH="N" DEFAULT_VALUE="" MIN_VALUE="" MAX_VALUE="" SEQNO_TYPE="RDMBS" COMPONENT="" IO_FORMAT="" USABLE_AS_INTERFACE="N" IMPLEMENTING_MODULE=""/>
	</Domains>
</Meta>
```

 