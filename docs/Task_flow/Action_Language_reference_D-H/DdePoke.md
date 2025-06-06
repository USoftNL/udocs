---
id: DdePoke
---

# DdePoke()



> [!NOTE]
> This article is about the **DdePoke** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **DdePoke()**

Sends an item to the DDE server.

*Syntax*

```
DdePoke( *service*, *topic*, *item*, *format*, *resource* )

*resource*  ::=  'value'
```

*Service is* the name of the DDE server.

*Topic* is the topic of the conversation.

*Item* is the item that must be sent to the DDE server.

*Format* is the Windows data format of the item.

*Resource* is the resource that is sent. Only "value" is supported.

> [!TIP]
> This action will not report that mandatory parameters are missing.