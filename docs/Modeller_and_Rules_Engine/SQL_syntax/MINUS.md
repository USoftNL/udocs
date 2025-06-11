---
id: MINUS
---

# MINUS




:::note

This article is about the **MINUS** set operator as part of the [SQL syntax](/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

:::

## **MINUS**

The MINUS operator removes, from the outcome of the SELECT statement appearing before it, any rows that are also in the outcome of a second SELECT statement appearing after it. The two queries must yield results that exhibit the same structure. ORDER BY is allowed only as a modifier of the entire construct, ie., at the very end, not at the end of each SELECT statement.

With MINUS, the result is **different** depending on whether the first or the second SELECT statement appears first.


:::tip

In USoft SQL syntax, MINUS is a synonym of [EXCEPT](/Modeller_and_Rules_Engine/SQL_syntax/EXCEPT.md).

:::

*Syntax*

```sql
*SELECT-statement-1*

MINUS

*SELECT-statement-2*
```

In the USoft platform, MINUS is supported in:

- the SQL Command tool.
- Subqueries in constraint SQL.


:::danger

MINUS is not supported in the main statement of constraint SQL.
MINUS is not supported in Logical View SQL.

:::
