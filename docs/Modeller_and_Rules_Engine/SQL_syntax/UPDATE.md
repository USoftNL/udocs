---
id: UPDATE
---

# UPDATE



> [!NOTE]
> This article is about the **UPDATE** statement as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **UPDATE**

Modifies column values in one or more existing records in a table.

*Syntax 1*

```sql
UPDATE       *table-name*
SET          *column-name* = *expression*
[,           * column-name* = *expression* ...]
WHERE        ...
```

*Syntax 2*

```sql
UPDATE       *table-name*
SET
(          
*column-name*
[,   *column-name* ...]
) =
(
*expression*
[,   *expression* ...]
)
WHERE        ...
```

The first SET clause is required. Further SET clauses (introduced by a comma) are optional. There is no point using Syntax 2 if you only have 1 SET clause.

In the UPDATE clause, table-name must be a literal table name. In the SET clause(s), column-name must be a literal column name in that table.SQL functions, aliases, and variable elements are not allowed in these places.

The equal symbol ( = ), or symbols, in the SET clause is NOT a comparison operator but a literal part of the "UPDATE... SET ... =  ... " command. *Expression* is a column expression.

If you omit the optional WHERE clause, ALL columns of *table* are updated. Add a WHERE clause to restrict the operation to one record or a smaller number of records.

*Example*

In this example, each customer who has more assets than allowed in her country will get the status "Overrun":

```sql
UPDATE     customer c
SET        c.status = 'Overrun'
WHERE EXISTS
(
       SELECT   ''
       FROM     asset a
       RELATE   c "HAS" a
       HAVING   COUNT(*) >
       (
               SELECT   b.value
               FROM     boundary b
               WHERE    b.name = 'max_no_of_assets'
               AND      b.country = c.country_of_residence
       )
)
```