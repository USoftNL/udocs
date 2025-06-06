# EXCEPT



> [!NOTE]
> This article is about the EXCEPT set operator as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **EXCEPT**

The EXCEPT operator removes, from the outcome of the SELECT statement appearing before it, any rows that are also in the outcome of a second SELECT statement appearing after it. The two queries must yield results that exhibit the same structure. ORDER BY is allowed only as a modifier of the entire construct, ie., at the very end, not at the end of each SELECT statement.

With EXCEPT, the result is **different** depending on whether the first or the second SELECT statement appears first.

> [!TIP]
> In USoft SQL syntax, EXCEPT is a synonym of [MINUS](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax/MINUS.md).

*Syntax*

```sql
*SELECT-statement-1*

EXCEPT

*SELECT-statement-2*
```

In the USoft platform, EXCEPT is supported in:

- the SQL Command tool.
- Subqueries in constraint SQL.

> [!CAUTION]
> EXCEPT is not supported in the main statement of constraint SQL.
> EXCEPT is not supported in Logical View SQL.