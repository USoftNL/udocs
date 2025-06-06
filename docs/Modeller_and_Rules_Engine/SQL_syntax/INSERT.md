---
id: INSERT
---

# INSERT



> [!NOTE]
> This article is about the **INSERT** statement as part of the [SQL syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

## **INSERT**

*Syntax 1*

In this syntax, the values expressed in the VALUES clause are added to the table as a new, single record.

```sql
INSERT INTO  *table-name*
(
*column-name*
[,           *column-name* ...]
)           
VALUES (
*expression*
[,           *expression* ...]
)
```

*Syntax 2*

In this syntax, the outcome of the SELECT statement is added to the table. This could result in multiple records being added to the table.

```sql
INSERT INTO  *table-name*
(
*column-name*
[,           *column-name* ...]
)           
SELECT       *expression*
[,           *expression* ...
FROM         ...
)
```

In the INSERT INTO clause, table-name and column-name must be literal table names and column names. SQL functions, aliases, and variable elements are not allowed. As a result, the INSERT INTO clause is completely unrelated to the VALUES (Syntax 1) or SELECT (Syntax 2) clause. First, VALUES or SELECT is evaluated. Then, the outcome is mapped to the column list expressed in the INSERT INTO clause.