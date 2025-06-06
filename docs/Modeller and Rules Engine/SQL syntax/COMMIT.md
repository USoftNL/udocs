# COMMIT



> [!NOTE]
> This article is about the **COMMIT** statement as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **COMMIT**

Commits data changes of the current transaction to the RDBMS so that they become visible to other users and can no longer be rolled back. These data changes include any knock-on data changes causes by constraints having been triggered during the current transaction.

*Syntax*

```sql
COMMIT
```

> [!TIP]
> This statement activates table constraints with Deferred = Post Commit (if any).