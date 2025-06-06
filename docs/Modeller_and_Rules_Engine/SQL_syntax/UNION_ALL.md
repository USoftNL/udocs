---
id: UNION_ALL
---

# UNION ALL



> [!NOTE]
> This article is about the **UNION ALL** set operator as part of the [SQL syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

## **UNION ALL**

The UNION ALL operator combines the outcome of 2 distinct SELECT statements into a single result set. Duplicate rows are preserved: the result set is not a true set, but a list of items that could contain identical elements (this is the difference with UNION). The two queries must yield results that exhibit the same structure. ORDER BY is allowed only as a modifier of the entire construct, ie., at the very end, not at the end of each SELECT statement.

With UNION ALL, the result is equivalent independently of which of the SELECT statements appears first.

*Syntax*

```sql
*SELECT-statement*

UNION ALL

*SELECT-statement*
```

In the USoft platform, UNION ALL is supported in:

- the SQL Command tool.
- Logical View SQL.
- Subqueries in constraint SQL.

> [!CAUTION]
> UNION is not supported in the main statement of constraint SQL.