---
id: Template_default_Tables
---

# Template default: Tables




:::note

This article describes **Tables** instructions for achieving a [ template default](/Web_and_app_UIs/Your_own_template_default/Template_default_creating_and_reapplying_your_own_defaults.md).
**See also**
[Template default: Dictionary](/Web_and_app_UIs/Your_own_template_default/Template_default_Dictionary.md)
[Template default: Domain Allowed Values](/Web_and_app_UIs/Your_own_template_default/Template_default_Domain_allowed_values.md)
[Template default: Relationships, Relationship Columns](/Web_and_app_UIs/Your_own_template_default/Template_default_Relationships.md)
[Template default: Roles](/Web_and_app_UIs/Your_own_template_default/Template_default_Roles.md)

:::

## Tables

### Tables, Methods

|**Method**|**Explanation**|
|--------|--------|
|`getName() `|Name of the table|
|`getObjectName()`|Object Name of the table|
|`getObjectNamePlural() `|Object Name Plural of the table|



### Tables, Conditional expressions

This expression can be used in an **e-if** instruction at Table level:

|**Expression**|**Explanation**|
|--------|--------|
|`isDeleteAllowed() `|Returns true it is allowed to delete records from the table.|
|`isInsertAllowed() `|Returns true it is allowed to insert records into the table.|
|`isUpdateAllowed() `|Returns true it is allowed to update records in the table.|



### Tables, Iteration methods

These methods can be used in an **e-for** instruction at Table level:

|**Method**|**Explanation**|
|--------|--------|
|`getColumns() `|Iterates the list of columns of the table.|
|`getRefsAsChild() `|Iterates the list of relationships where the table is the child table.|
|`getRefsAsParent() `|Iterates the list of relationships where the table is the parent table.|



## Columns

### Columns, Methods

|**Method**|**Explanation**|
|--------|--------|
|`getName() `|Name of the column|
|`getTableName() `|Name of the table|
|`getAlternateInputFormat ()`|All alternative IO formats, concatenated by newlines|
|`getColumnClass()`|Control class name that corresponds with the display type|
|`getDataType()`| RDBMS data type (e.g. VARCHAR2, NCLOB, etc.)|
|`getDataLength()`|Data length|
|`getDefaultValue() `|Default value|
|`getDisplayLength()`|Display length|
|`getDisplaySeqno()`|Display seqno|
|`getFKParentColName()`|Name of the first parent column of the first relationship where the column is a foreign key|
|`getFKRefName()`|Name of the first relationship where the column is a foreign key|
|`getHelpText()`|Help text|
|`getIOFormat()`|IO format of the column’s domain|
|`getLookupPage()`|Reverse menu line of the first relationship where the column is a foreign key|
|`getLookupSeqno()`|Lookup seqno if available, otherwise display seqno|
|`getMaxValue()`|Max value of the column’s domain|
|`getMinValue()`|Min value of the column’s domain|
|`getPrompt()`|Prompt  |
|`getRegExp()`|Regular expression for the column’s domain|
|`getType()`|Type property of an InputControl|
|`getUpdatable()`|Updatable property of an InputControl (true, ifNull, or false)|



### Columns, Conditional expressions

These expressions can be used in an **e-if** instruction at Column level:

|**Expression**|**Explanation**|
|--------|--------|
|`isDisplayed(['Related'])`|<p>Returns true if the column is displayed.</p><p>If the optional ‘Related’ is passed as a parameter, this method returns false if the column is foreign key in a relationship.</p>|
|`isDropDown()`|Returns true if the column is displayed and is a foreign key. The lookup type of the relationship must be RADIO or DROPDOWN.|
|`isFirstDisplayed()`|Returns true if the column is the first displayed column, in other words, the displayed column with the lowest Position setting.|
|`isGridColumn (['Related'])`|<p>Returns true if the column is displayed and a Lookup Seqno has been set.</p><p>If no Lookup Seqnos have been set for the table, this method returns true if the column is part of the primary key.</p><p>If the optional ‘Related’ is passed as a parameter, this method returns false if the column is foreign key in a relationship.</p>|
|`isInputAllowed()`|Returns true if the column has Input Allowed = Yes and is not a sequence column or a foreign key column.|
|`isFKColumn()`|Returns true if the column is a foreign key.|
|`isMandatory()`|<p>Returns true if the column is displayed and has Query Allowed = Yes, and a Lookup Seqno has been set.</p><p>If no Lookup Seqnos have been set for the table, this method returns true if the column is part of the primary key.</p><p>If the optional ‘Related’ is passed as a parameter, this method returns false if the column is foreign key in a relationship.</p>|
|`isQueryAllowed()`|Returns true if the column has Query Allowed = Yes.|
|`isPKColumn()`|Returns true if the column is a primary key.|
|`isSearchColumn (['Related'])`|<p>Returns true if the column is displayed, has Query Allowed = Yes, and a Lookup Seqno has been set.</p><p>If no Lookup Seqnos have been set for the table, this method returns true if the column is part of the primary key.</p><p>If the optional ‘Related’ is passed as a parameter, this method returns false if the column is foreign key in a relationship.</p>|
|`isSingleEditColumn (['Related'])`|<p>Returns true if the column is displayed but **isSearchColumn (['Related'])** for the column returns false.</p><p>If the optional ‘Related’ is passed as a parameter, this method returns false if the column is foreign key in a relationship.</p>|
|`isUpdatable()`|Returns true if the column is updatable|
|`isUppercase()`|Returns true if the column has Uppercase = Yes|



### Columns, Iteration method

This method can be used in an **e-for** instruction at Column level:

|**Method**|**Explanation**|
|--------|--------|
|`getAllowedValues() `|Iterates the list of allowed values|