---
id: Template_default_Relationships
---

# Template default: Relationships



> [!NOTE]
> This article describes **Relationship** instructions for achieving a [ template default](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20creating%20and%20reapplying%20your%20own%20defaults.md).
> **See also**
> [Template default: Dictionary](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Dictionary.md)
> [Template default: Domain Allowed Values](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Domain%20allowed%20values.md)
> [Template default: Roles](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Roles.md)
> [Template default: Tables, Table Columns](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Tables.md)

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