---
id: Template_default_Relationships
---

# Template default: Relationships




:::note

This article describes **Relationship** instructions for achieving a [ template default](/docs/Web_and_app_UIs/Your_own_template_default/Template_default_creating_and_reapplying_your_own_defaults.md).
**See also**
[Template default: Dictionary](/docs/Web_and_app_UIs/Your_own_template_default/Template_default_Dictionary.md)
[Template default: Domain Allowed Values](/docs/Web_and_app_UIs/Your_own_template_default/Template_default_Domain_allowed_values.md)
[Template default: Roles](/docs/Web_and_app_UIs/Your_own_template_default/Template_default_Roles.md)
[Template default: Tables, Table Columns](/docs/Web_and_app_UIs/Your_own_template_default/Template_default_Tables.md)

:::

## Relationships

### Methods

|**Method**|**Explanation**|
|--------|--------|
|`getChildObjectName()`|Object Name of the child table|
|`getChildObjectNamePlural()`|Object Name Plural of the child table|
|`getChildRole() `|Value of the child role|
|`getChildTableName()`|Table Name of the child table|
|`getMenuLine() `|Value of the menu line|
|`getName() `|Name of the relationship (*parent-table parent-role child-table*)|
|`getParentAndSubtypeTableNames()`|<p>List of all tables in a supertype-subtype constellation, separated by newlines and prefixed by '../', eg.:</p><pre><code>../SUPERTYPE<br/>../SUBTYPE1<br/>../SUBTYPE2</code></pre>|
|`getParentObjectName()`|Object Name of the parent table|
|`getParentObjectNamePlural()`|Object Name Plural of the parent table|
|`getParentRole() `|Value of the parent role|
|`getParentTableName()`|Table Name of the parent table|
|`getReverseMenuLine() `|Value of the reverse menu line|



### Conditional expression

This expression can be used in an **e-if** instruction at Relationship level:

|**Expression**|**Explanation**|
|--------|--------|
|`isDropDown()`|Returns true if the lookup type of the relationship is RADIO or DROPDOWN and the child column is displayed.|



### Iteration methods

These methods can be used in an **e-for** instruction at Relationship level:

|**Method**|**Explanation**|
|--------|--------|
|`getColumns()`|Iterates the list of column pairs of the relationship.|
|`getChildTable().getColumns()`|Iterates the list of columns of the child table.|
|`getChildTable().getRefsAsParent()`|Calls getRefsAsParent() on the child table (see Tables).|
|`getChildColumns()`|Iterates the list of child columns of the relationship.|
|`getParentTable().getColumns()`|Iterates the list of columns of the parent table.|
|`getParentColumns()`|Iterates the list of parent columns of the relationship.|



## Relationship columns

### Methods

|**Method**|**Explanation**|
|--------|--------|
|`getChildName() `|Name of the child column|
|`getChildTableName() `|Name of the child table|
|`getChildRole()`|Name of the child role|
|`getMenuLine() `|Value of the menu line|
|`getParentName() `|Name of the parent column|
|`getParentTableName())`|Name of the parent table|
|`getParentRole() `|Value of the parent role|
|`getReverseMenuLine() `|Value of the reverse menu line|