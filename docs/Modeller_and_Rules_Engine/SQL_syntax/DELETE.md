---
id: DELETE
---

# DELETE



> [!NOTE]
> This article is about the **DELETE** statement as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **DELETE**

Removes existing records from a table.

*Syntax*

```sql
DELETE   { FROM | }  *table*
WHERE    ...
```

If you omit the optional WHERE clause, ALL the records in the table are removed. Use one or more WHERE clauses to restrict the DELETE action to a smaller number of records, or to 1 specific record.