---
id: INTERSECT
---

# INTERSECT



> [!NOTE]
> This article is about the **INTERSECT** set operator as part of the [SQL syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

## **INTERSECT**

The INTERSECT operator removes, from the outcomes or result sets of 2 distinct SELECT statements, any rows that are not in both result sets (ie., any rows that are in one result set only). The two queries must yield results that exhibit the same structure. ORDER BY is allowed only as a modifier of the entire construct, ie., at the very end, not at the end of each SELECT statement.

With INTERSECT, the result is equivalent independently of which of the SELECT statements appears first.

*Syntax*

```sql
*SELECT-statement*

INTERSECT

*SELECT-statement*
```

In the USoft platform, INTERSECT is supported in:

- the SQL Command tool.
- Subqueries in constraint SQL.

> [!CAUTION]
> INTERSECT is not supported in the main statement of constraint SQL.
> INTERSECT is not supported in Logical View SQL.