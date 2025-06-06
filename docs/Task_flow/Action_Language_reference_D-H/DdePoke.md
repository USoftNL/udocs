---
id: DdePoke
---

# DdePoke()




:::note

This article is about the **DdePoke** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

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


:::tip

This action will not report that mandatory parameters are missing.

:::
