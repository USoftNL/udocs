---
id: USMetaRelationships
---

# USMeta.Relationships



> [!NOTE]
> This article is about the **Relationships** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

## **USMeta.Relationships**

At runtime, gets metadata information about relationships and relationship columns from the model developed in USoft Definer. For each retrieved relationship, this information takes the form of name/value pairs:

|**Name**|**Value**|
|--------|--------|
|PARENT_TABLE|Parent Object|
|CHILD_TABLE|Child Object|
|PARENT_ROLE|Parent Role|
|MODULE_NAME|<p>If the relationship is not from a consumed module: the current application name.</p><p>If you are calling from a USoft application, this is the USoft application name, eg., USD for USoft Definer.</p><p>If you are calling from a User Application, this is the User Application name, eg. SALES.</p><p>If the relationship is from a consumed module: the name of the consumed module.</p>> [!TIP]
> The relationship is from a consumed module if it is in the .CON file that that module provides.
> If the parent table and child table are both usable as interface, it is also possible for the current application to define the relationship itself.

|
|CHILD_ROLE|Child Role|
|ALIAS_PARENT|Alias Parent|
|REV_MENU_LINE|Lookup Window Name|
|MENU_LINE|Related Window Name|
|FK_MANDATORY|Foreign Key Mandatory|
|FK_CHECK_PARTIAL|Check Partial Foreign Key|
|LOCK_ON_FK_CHECK|Lock Foreign Key on Check|
|FK_UPDATABLE|<p>Foreign Key Updatable:</p><p>‘Y’ if Yes;</p><p>'ONLY_IF_NULL’ if “Only If Null”;</p><p>'N’ if No.</p>|
|CHILD_MANDATORY|Child Must Exist|
|MIN_NO_OF_CHILDREN|Minimum Children|
|MAX_NO_OF_CHILDREN|Maximum Children|
|LOOKUP_METHOD|<p>Lookup Method:</p><p>'WINDOW PAGE’ if "Lookup Window or Page” (the default);</p><p>'DROPDOWN’ if "Dropdown List”;</p><p>'RADIO’ if "Radio”.</p>|
|DELETE_RULE|<p>Delete Rule:</p><p>'RESTRICTED’, ‘CASCADING’, or 'NULLIFY’.</p>|
|UPDATE_RULE|<p>Update Rule:</p><p>'RESTRICTED’, ‘CASCADING’, or 'NULLIFY’.</p>|
|TYPE_OF_RELATIONSHIP|<p>Type Of Relationship:</p><p>'REFERENCE’ or 'COMPOSITION’.</p>|



Relationship columns are shown in a child element, for example:

```language-xml
<Relationship PARENT_TABLE="PERSON" CHILD_TABLE="ORDER" ... >
    <Relationship_Columns>
        <Column PARENT="PERSON_ID" CHILD="ORDER_ID"/>
    </Relationship_Columns>
</Relationship>
```

Returns an XML document of the form demonstrated in Example 1 below.

*Syntax*

```sql
SELECT USMeta.Relationships(
    *parent-table-name-pattern*   Parents
,   *child-table-name-pattern*    Children
,   *role-name-pattern*           Roles
,   *mime-type*                   MimeType
)

*mime-type*   ::=  {  application/xml
                 ,  xml
                 ,  application/json
                 ,  json  }
```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The 'PERSON' value in the following example is for *parent-table-name-pattern* because of the "Parents" alias:

```sql
SELECT   USMeta.Relationships( 'PERSON' Parents )
```

> [!TIP]
> For backward compatibility only, it is possible to supply parameter values by position. Using this syntax, a list of non-aliased values maps to the parameter list in the order stated, with empty values at the end of the list if you supply  less than 3 values, and '' (the empty string) as a way of explicitly declaring an empty value.

*Parent-table-name-pattern* is a regular expression that matches zero, one or more parent tables in the model. The result data is limited to relationships that have a parent table matching the pattern. If *parent-table-name-pattern* is omitted, then result data is not limited in this way.

*Child-table-name-pattern* is a regular expression that matches zero, one or more child tables in the model. The result data is limited to relationships that have a child table matching the pattern. If *child-table-name-pattern* is omitted, then result data is not limited in this way.

*Role-name-pattern* is a regular expression that matches zero, one or more role names in the model. The result data is limited to relationships that have a Parent Role name matching the pattern. If *role-name-pattern* is omitted, then result data is not limited in this way.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example 1*

This example returns relationship information on all relationships that have the TOUR table als their child table:

```sql
SELECT USMeta.Relationships( 'TOUR' Children )
```

The return value of this statement could be:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
	<Relationships>
		<Relationship PARENT_TABLE="GUIDE" CHILD_TABLE="TOUR" PARENT_ROLE="GUIDES" MODULE_NAME="TRAVEL" CHILD_ROLE="are guided by" ALIAS_PARENT="" REV_MENU_LINE="Persons guiding Tours" MENU_LINE="Tours guided by this Person" FK_MANDATORY="N" FK_CHECK_PARTIAL="Y" LOCK_ON_FK_CHECK="Y" FK_UPDATABLE="Y" CHILD_MANDATORY="N" MIN_NO_OF_CHILDREN="0" MAX_NO_OF_CHILDREN="0" LOOKUP_METHOD="WINDOW PAGE" DELETE_RULE="RESTRICTED" UPDATE_RULE="RESTRICTED" TYPE_OF_RELATIONSHIP="REFERENCE">
			<Relationship_Columns>
				<Column PARENT="PERSON_ID" CHILD="GUIDE"/>
			</Relationship_Columns>
		</Relationship>
		<Relationship PARENT_TABLE="TOUR_PROGRAMME" CHILD_TABLE="TOUR" PARENT_ROLE="IS FOLLOWED BY" MODULE_NAME="TRAVEL" CHILD_ROLE="follows" ALIAS_PARENT="" REV_MENU_LINE="Tour_programmes is followed by tour" MENU_LINE="Tours is followed by tour_programme" FK_MANDATORY="Y" FK_CHECK_PARTIAL="Y" LOCK_ON_FK_CHECK="Y" FK_UPDATABLE="Y" CHILD_MANDATORY="N" MIN_NO_OF_CHILDREN="0" MAX_NO_OF_CHILDREN="0" LOOKUP_METHOD="WINDOW PAGE" DELETE_RULE="RESTRICTED" UPDATE_RULE="CASCADING" TYPE_OF_RELATIONSHIP="REFERENCE">
			<Relationship_Columns>
				<Column PARENT="DESTINATION" CHILD="DESTINATION"/>
				<Column PARENT="TOUR_TYPE" CHILD="TOUR_TYPE"/>
			</Relationship_Columns>
		</Relationship>
	</Relationships>
</Meta>
```

*Example 2*

This example returns relationship information about all relationships that have as their child table name an alphanumeric uppercase string that contains 'TOUR':

```sql
SELECT USMeta.Relationships( '^[A-Z]*TOUR[A-Z]*$' Children )
```

 