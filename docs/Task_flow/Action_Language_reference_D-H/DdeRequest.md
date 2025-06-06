---
id: DdeRequest
---

# DdeRequest()




:::note

This article is about the **DdeRequest** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **DdeRequest()**

Retrieves an item from the DDE server.

*Syntax*

```
DdeRequest( *service*, *topic*, *item*, *format*, *resource* )
```

*Service* is the name of the DDE-server.

*Topic* is the topic of the conversation.

*Item* is the data item for which the resource must be retrieved from the DDE server.

*Format* is the MS Windows data format of the item.

*Resource* is the resource that is set to the retrieved value.


:::tip

This action will not report that mandatory parameters are missing.

:::
