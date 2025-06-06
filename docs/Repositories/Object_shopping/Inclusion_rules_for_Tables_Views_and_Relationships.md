---
id: Inclusion_rules_for_Tables_Views_and_Relationships
---

# Inclusion rules for Tables, Views and Relationships

This help topic shows which objects, in an export, are automatically included when you include a Table, Logical View or Relationship.

For example, the first two lines mean that if a Table is included in an export, its Columns are also included:

```
Table
. . Column
. . . . Index Column
. . . . . . Index
. . (supertype) Table
. . . . (etc.)
Logical View
. . Column
Relationship
. . Table (= parent table)
. . . . Column
. . . . . . Index Column
. . . . . . . . Index
. . . . (supertype) Table
. . . . . . (etc.)
. . Table (= child table)
. . . . Column
. . . . . . Index Column
. . . . . . . . Index
. . . . (supertype) Table
. . . . . . (etc.)

```

> [!NOTE]
> Domains and Datatypes are NOT automatically included with Columns, but you can have Domains included by setting the Include Domains = Yes flag if you explicitly include the Table or Logical View in the Tables tab of the Export Definitions window.

> [!NOTE]
> Only database columns are included, not joined columns.

 