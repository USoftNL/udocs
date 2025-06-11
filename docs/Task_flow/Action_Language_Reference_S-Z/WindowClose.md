---
id: WindowClose
---

# WindowClose()




:::note

This article is about the **WindowClose** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowClose()**

Closes a window.

*Syntax*

```
WindowClose( *mode* )

*mode*  :=  { AFTER_SAVE | IMMEDIATE | }
```

If *mode* is set to AFTER_SAVE, any unsaved data is saved automatically. If *mode* is set to IMMEDIATE, the table is closed without saving any changed data.

If *mode* is not passed, the user is prompted with a dialog to save the data if changes to the data have been made.