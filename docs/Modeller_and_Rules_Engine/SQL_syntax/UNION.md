---
id: UNION
---

# UNION




:::note

This article is about the **UNION** set operator as part of the [SQL syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

:::

## **UNION**

The UNION operator combines the outcome of 2 distinct SELECT statements into a single result set. Duplicate rows are discarded (this is the difference with UNION ALL). The two queries must yield results that exhibit the same structure. ORDER BY is allowed only as a modifier of the entire construct, ie., at the very end, not at the end of each SELECT statement.

With UNION, the result is equivalent independently of which of the SELECT statements appears first.

*Syntax*

```sql
*SELECT-statement*

UNION

*SELECT-statement*
```

In the USoft platform, UNION is supported in:

- the SQL Command tool.
- Subqueries in constraint SQL.


:::danger

UNION is not supported in the main statement of constraint SQL.
UNION is not supported in Logical View SQL.

:::
