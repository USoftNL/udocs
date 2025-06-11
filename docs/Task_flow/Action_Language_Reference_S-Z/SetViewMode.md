---
id: SetViewMode
---

# SetViewMode()




:::note

This article is about the **SetViewMode** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **SetViewMode()**

Calls the SetViewMode action of the contained OLE object. See OLE documentation for further explanation.

*Syntax*

```
SetViewMode( *mode*, *scale* )

*mode*   ::=  { "Storage" | "Object" | "Status" | "Class" | "Stretch" }

*scale*  ::=  ( 0..100 ) 
```

*Exposed by*

- OLE containers