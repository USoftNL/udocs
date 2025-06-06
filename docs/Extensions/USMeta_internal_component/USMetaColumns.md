---
id: USMetaColumns
---

# USMeta.Columns




:::note

This article is about the **Columns** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

:::

## **USMeta.Columns**

At runtime, gets metadata information about columns from the model developed in USoft Definer. For each retrieved table, this information takes the form of name/value pairs listed in the table below.

In addition, as a nested child XML element, this method also delivers domain information as described in [USMeta.Domains](/docs/Extensions/USMeta_internal_component/USMetaDomains.md). This domain information takes the form of nested child XML elements,

Returns an XML document as demonstrated in Example 1 below.

|**Name**|**Value**|
|--------|--------|
|TABLE_NAME|Table Name|
|COLUMN_NAME|Column Name|
|MODULE_NAME|<p>If the column is not in a table from a consumed module: the current application name.</p><p>If you are calling from a USoft application, this is the USoft application name, eg., USD for USoft Definer.</p><p>If you are calling from a User Application, this is the User Application name, eg., SALES.</p><p>If the column is in a table from a consumed module: the name of the consumed module.</p>|
|PROMPT  |Prompt  |
|KEY_NUMBER|<p>This output attribute is new in USoft 11.</p><p>'N’ if the column has Key = No. Otherwise, the integer that Key is set to ('1’ for the first or primary key, and so on).</p>|
|MANDATORY|Mandatory|
|INPUT_ALLOWED|Input Allowed|
|UPDATABLE|<p>‘Y’ if the column has Updatable = Yes.</p><p>'ONLY_IF_NULL’ if the column has Updatable = Only If Null.</p><p>'N’ if the column has Updatable = No.</p>|
|QUERY_ALLOWED|Query Allowed|
|COLUMN_TYPE|<p>'DATABASE’ if the column has Type = Database.</p><p>'VIRTUAL’ if the column has Type = Virtual.</p>|
|DISPLAYED|Displayed|
|DEF_VALUE|Default Value|
|COLUMN_HELP_TEXT|Help Text|
|USABLE_AS_INTERFACE|Interface|
|FOREIGN_KEY|‘Y’ If the column is foreign key in at least one Relationship, otherwise ‘N’.|
|IMPLEMENTING_MODULE|Module  |



If the column is in a table is from a consumed module, the consumers are listed in a "Consumed_In_Modules” child element, for example:

```language-xml
<Column TABLE_NAME="BOAT" COLUMN_NAME="BOAT_ID" MODULE_NAME="BOATS" PROMPT="Boat ID" KEY_NUMBER="1" MANDATORY="Y" INPUT_ALLOWED="Y" UPDATABLE="Y" QUERY_ALLOWED="Y" COLUMN_TYPE="DATABASE" DISPLAYED="Y" DEF_VALUE="" COLUMN_HELP_TEXT="" USABLE_AS_INTERFACE="N" FOREIGN_KEY="N" IMPLEMENTING_MODULE=""  >
  <Domain NAME="BOAT_ID" MODULE_NAME="BOATS" DATABASE_TYPE="NVARCHAR" DISPLAY_DATATYPE="CHAR" UPPERCASE="N" TOTAL_LENGTH="254" LENGTH_AFTER_PERIOD="0" DISPLAY_LENGTH="0" DISPLAY_LENGTH_AFTER_PERIOD="0" FIXED_LENGTH="N" DEFAULT_VALUE="" MIN_VALUE="" MAX_VALUE="" HELP_TEXT="" SEQNO_TYPE="NO SEQNO" Component="" IO_FORMAT="" INTERFACE_FROM_MODULE="Y" IMPLEMENTING_MODULE="BOATS"/>
  <Consumed_In_Modules>
    <Module MODULE_NAME="TRAVEL"/>
  </Consumed_In_Modules>
</Column>
```

*Syntax*

```sql
SELECT USMeta.Columns(
*       table-name-pattern*     Tables
,      *column-name-pattern*    Columns
,      *interfaces-only*        InterfacesOnly
,      *module-pattern*         Module
,      *mime-type*              MimeType
)

*interfaces-only*  :=  { *yes-value* | *no-value* }

*yes-value*        :=  { 'yes', 'Y', 'true', '1' }
*no-value*         :=  Any value other than a *yes-value*

*mime-type*        :=  {  application/xml
                     ,  xml
                     ,  application/json
                     ,  json  }
```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The 'ID' value in the following example is for *column-name-pattern* because of the "Columns" alias:

```sql
SELECT   USMeta.Columns( 'ID' Columns )
```


:::tip

For backward compatibility only, it is possible to supply parameter values by position. Using this syntax, a list of non-aliased values maps to the parameter list in the order stated, with empty values at the end of the list if you supply less than 4 values, and '' (the empty string) as a way of explicitly declaring an empty value.

:::

*Table-name-pattern* is a regular expression that matches zero, one or more table names in the model. The result data is limited to tables matching the pattern. If *table-name-pattern* is omitted, then result data is not limited in this way.

*Column-name-pattern* is a regular expression that matches zero, one or more column names in the model. The result data is limited to columns matching the pattern. If *column-name-pattern* is omitted, then result data is not limited in this way.

If *interfaces-only* is set to 'yes', only columns that have Interface = Yes are included. The default of *interfaces-only* is 'no', meaning that columns are in scope regardless of the value of their Interface attribute.

*Module-pattern* is a regular expression that matches zero, one or more module names in the model. The result data is limited to columns within modules matching the pattern. Any columns that are consumed from a different module which is filtered out by the regular expression, will show two additional fields 'INTERFACE_FROM_MODULE', which will be 'Y', and 'IMPLEMENTING_MODULE', which will contain the module name where the column originates from. The 'MODULE_NAME' field will in this case contain the name of the module in which the interface was consumed. If *module-pattern* is omitted, then the result data is not limited in this way.

*Yes-value* is a string value from the set { 'yes’, 'Y’, 'true’, '1’ }, regardless of case. *No-value* is any other value.

*Example 1*

This example returns column information about any columns in table 'GUIDE' that have a Column Name containing the letters 'ID':

```sql
SELECT USMeta.Columns(
   'GUIDE'     Tables
,  '.*ID.*'    Columns
)
```

The return value of this statement could be:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
	<Columns>
		<Column TABLE_NAME="GUIDE" COLUMN_NAME="PERSON_ID" MODULE_NAME="TRAVEL" PROMPT="Person No" KEY_NUMBER="1" MANDATORY="Y" INPUT_ALLOWED="N" UPDATABLE="Y" QUERY_ALLOWED="Y" COLUMN_TYPE="DATABASE" DISPLAYED="Y" DEF_VALUE="" COLUMN_HELP_TEXT="" USABLE_AS_INTERFACE="Y" FOREIGN_KEY="N" IMPLEMENTING_MODULE="">
			<Domain NAME="PERSON_ID" MODULE_NAME="TRAVEL" DATABASE_TYPE="NUMBER" TOTAL_LENGTH="5" LENGTH_AFTER_PERIOD="" DISPLAY_DATATYPE="INT" DISPLAY_LENGTH="" DISPLAY_LENGTH_AFTER_PERIOD="" UPPERCASE="N" TEMPLATE_DOMAIN="INTEGER" REGEX="" HELP_TEXT="" SUPER_DOMAIN="" FIXED_LENGTH="N" DEFAULT_VALUE="" MIN_VALUE="" MAX_VALUE="" SEQNO_TYPE="RDMBS" COMPONENT="" IO_FORMAT="" USABLE_AS_INTERFACE="Y" IMPLEMENTING_MODULE=""/>
		</Column>
	</Columns>
</Meta>
```

Example 2

This example returns column information about all DATE interface columns in table RESERVATION (for example, BOOK_DATE, START_DATE, END_DATE and CANCEL_DATE) that have Interface = Yes:

```sql
SELECT USMeta.Columns(
    'RESERVATION'       Tables
,   '^[A-Z|_]*DATE$'    Columns
,   'yes                InterfacesOnly
)
```

 