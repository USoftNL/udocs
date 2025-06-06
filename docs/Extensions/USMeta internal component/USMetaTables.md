# USMeta.Tables



> [!NOTE]
> This article is about the **Tables** method of the [USMeta internal component](/docs/Extensions/USMeta%20internal%20component).

## **USMeta.Tables**

At runtime, gets metadata information about tables from the model developed in USoft Definer. This includes Database Tables, Logical Views, and Component Tables. For each retrieved table, this information takes the form of name/value pairs:

|**Name**|**Value**|
|--------|--------|
|TABLE_NAME|Table Name|
|TABLE_TYPE|<p>If the table is a Database Table: DATABASE</p><p>If the table is a Component Table: COMPONENT</p><p>If the table is a Logical View: LOGICAL VIEW</p>|
|MODULE_NAME|<p>If the table is not from a consumed module: the current application name.</p><p>If you are calling from a USoft application, this is the USoft application name, eg., USD for USoft Definer.</p><p>If you are calling from a User Application, this is the User Application name, eg. SALES.</p><p>If the table is from a consumed module: the name of the consumed module.</p>|
|OBJECT_NAME|Object Name|
|OBJECT_NAME_PLURAL|Object Name Plural|
|PHYSICAL_NAME|Name of the physical table in the RDBMS. Always same as TABLE_NAME, except for subtype tables with Create Separate Table = No.|
|SUPERTYPE|Supertype Table|
|SUBTYPE_SEPARATE_TABLE|Create Separate Table (Y or N)|
|DELETE_SUPER_ON_DELETE|Delete Super on Delete (Y or N)|
|USABLE_AS_INTERFACE|<p>Interface (Y/N)</p><p>This attribute has the value stored in the INTERFACE column of T_TABLE.</p><p>For interface tables, this value is 'N’.</p>|
|NR_OF_COLUMNS|<p>If a Datatable Table, the number of columns of type Database in the table.</p><p>If a Logical View, the total number of columns in the Logical View.</p>|
|NR_OF_VR_COLUMNS|<p>If a Database Table, the number of columns of type Virtual in the table.</p><p>If a Logical View, the number 0 (zero).</p>|
|NR_OF_INDEXES|The number of indexes on the table|
|INSERT_ALLOWED|Y if the user calling usmeta.tables() has insert rights on the table, otherwise N.|
|UPDATE_ALLOWED|Y if the user calling usmeta.tables() has update rights on the table, otherwise N.|
|DELETE_ALLOWED|Y if the user calling usmeta.tables() has delete rights on the table, otherwise N.|
|IMPLEMENTING_MODULE|Module  |



If the table is has USABLE_AS_INTERFACE = ‘Y’ AND the Definer environment of an in-scope consumer has synchronised with the module .CON file, so that the table is visible as "Interface Table” in that Definer environment, then that consumer appears in a "Consumed_In_Modules” list of child elements, for example:

```language-xml
<Table TABLE_NAME="C_USVC_HERITAGE" MODULE_NAME="USVC" ...>
  <Consumed_In_Modules>
    <Module MODULE_NAME="USD"/>
  </Consumed_In_Modules>
</Table>
```

*Syntax*

```sql
SELECT USMeta.Tables(
    *table-name-pattern*           Tables
,   *include-database-tables*      IncludeDatabaseTables
,   *include-logical-views*        IncludeViews
,   *include-component-tables*     IncludeComponentTables
,   *interfaces-only*              InterfacesOnly
,   *module-pattern*               Module
,   *mime-type*                    MimeType
)

*include-database-tables*    ::=  { *yes-value* | *no-value* }
*include-logical-views*      ::=  { *yes-value* | *no-value* }
*include-component-tables*   ::=  { *yes-value* | *no-value* }

*interfaces-only*            ::=  { *yes-value* | *no-value* }

*yes-value*                  ::=  { 'yes', 'Y', 'true', '1' }
*no-value*                   ::=  (A value other than a *yes-value*)

*mime-type*                  ::=  {  application/xml
                                ,  xml
                                ,  application/json
                                ,  json  }

```

All parameters are optional. Parameter values that you supply are mapped to parameters by alias name. The 'No' value in the following example is for include-logical-views because of the "IncludeViews" alias:

```sql
SELECT   USMeta.Tables( 'No' IncludeViews )
```

> [!TIP]
> For backward compatibility only, it is possible to supply parameter values by position. Using this syntax, a list of non-aliased values maps to the parameter list in the order stated, with empty values at the end of the list if you supply less than 5 values, and '' (the empty string) as a way of explicitly declaring an empty value.

*Table-name-pattern* is a regular expression that matches zero, one or more table names in the model. The result data is limited to tables matching the pattern. If *table-name-pattern* is omitted, then result data is not limited in this way.

If *include-database-tables* is set to 'yes' (the default), all database tables are included in the result, including interface tables that are database tables in the provider module.

If *include-logical-views* is set to 'yes' (the default), all logical views are included in the result, including interface tables that are logical views in the provider module.

If *include-component-tables* is set to 'yes' (the default), all component tables are included in the result, including interface tables that are component tables in the provider module.

If *interfaces-only* is set to 'yes', only tables that have the Interface = Yes flag are included. Do not confuse this category with the category of tables listed in the Definer Catalog as "Interface Tables", that is, tables provided by other modules. The default of *interfaces-only* is 'no', meaning that tables are included regardless of the value of their Interface flag.

*Module-pattern* is a regular expression that matches zero, one or more module names in the model. The result data is limited to tables within modules matching the pattern. Any tables that are consumed from a different module which is filtered out by the regular expression, will show two additional fields 'INTERFACE_FROM_MODULE', which will be 'Y', and 'IMPLEMENTING_MODULE', which will contain the module name where the table originates from. The 'MODULE_NAME' field will in this case contain the name of the module in which the interface was consumed. If *module-pattern* is omitted, then the result data is not limited in this way.

*Yes-value* is a string value in the set { 'yes’, 'Y’, 'true’, '1’ }, regardless of case. *No-value* is any other value.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example 1*

This example returns table information about the DISCOUNT table.

```sql
SELECT USMeta.Tables( 'DISCOUNT' Tables )
```

The return value of this statement could be:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Tables>
      <Table TABLE_NAME="DISCOUNT" MODULE_NAME="TRAVEL" USABLE_AS_INTERFACE="N" OBJECT_NAME="Discount" OBJECT_NAME_PLURAL="Discounts"
         PHYSICAL_NAME="DISCOUNT" TABLE_TYPE="DATABASE" IS_SUBTYPE="N" NR_OF_COLUMNS="4" NR_OF_VR_COLUMNS="0" NR_OF_INDEXES="0"/>
   </Tables>
</Meta>
```

*Example 2*

This example returns table information about all database tables that have a table name starting with 'P' followed only by other letters, such as 'PERSON' and 'PARTICIPANT' but not 'P_TOTAL'. Logical Views and Component Tables are not included.

```sql
SELECT USMeta.Tables(
       '^P[A-Z]*$'     Tables
,      'yes'           IncludeDatabaseTables
,      'no'            IncludeViews
,      'no'            IncludeComponentTables
)
```

*Example 3*

You can use USMeta.Tables() to determine exactly what type(s) of table you want to export with [XML.MultiExportTables](/docs/Extensions/XML%20internal%20component/XMLMultiExportTables.md).

> [!NOTE]
> For example, you can export only database tables and not other types of table such as component tables and logical views. This is discussed in detail in *Example 3* of [XML.MultiExportTables](/docs/Extensions/XML%20internal%20component/XMLMultiExportTables.md).