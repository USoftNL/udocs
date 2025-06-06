---
id: QueryExecute
---

# QueryExecute()



> [!NOTE]
> This article is about the **QueryExecute** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **QueryExecute()**

Executes a query using query conditions specified by the user (if any).

*Syntax*

```
QueryExecute( *mode* )

*mode* :=  { QUIET | }
```

If you pass the value QUIET for *mode,* when the executed query retrieved no records, no message is displayed.