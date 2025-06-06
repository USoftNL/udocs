---
id: RecordStore
---

# RecordStore()



> [!NOTE]
> This article is about the **RecordStore** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **RecordStore()**

Stores the record internally and, if specified, displays a message about this.

The result of this is that the (new version of) the record becomes known to other objects.

> [!TIP]
> RecordStore() does not commit the transaction. Use DataCommit() to commit the transaction.

*Syntax*

```
RecordStore( *mode* )

*mode*  :=  { QUIET | }
```

If you pass the value QUIET for *mode,* the message is not displayed.