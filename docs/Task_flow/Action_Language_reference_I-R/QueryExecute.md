---
id: QueryExecute
---

# QueryExecute()



> [!NOTE]
> This article is about the **QueryExecute** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **QueryExecute()**

Executes a query using query conditions specified by the user (if any).

*Syntax*

```
QueryExecute( *mode* )

*mode* :=  { QUIET | }
```

If you pass the value QUIET for *mode,* when the executed query retrieved no records, no message is displayed.