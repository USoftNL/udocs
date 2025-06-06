---
id: DdeStartAdvise
---

# DdeStartAdvise()



> [!NOTE]
> This article is about the **DdeStartAdvise** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **DdeStartAdvise()**

Starts an advise loop on the DDE server.

*Syntax*

```
DdeStartAdvise( *service*, *topic*, *item*, *format*, *resource* )
```

*Service* is the name of the DDE server.

*Topic* is the topic of the conversation.

*Item* is the data item for which the resource must be retrieved from the DDE server.

*Format* is the MS Windows data format of the item.

*Resource* is the resource that is set to the retrieved value.

> [!TIP]
> This action will not report that mandatory parameters are missing.