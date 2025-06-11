---
id: WindowCloseAll
---

# WindowCloseAll()




:::note

This article is about the **WindowCloseAll** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowCloseAll()**

Closes all open windows.

*Syntax*

```
WindowCloseAll( *mode*, { CLEAR_CACHE | } )

*mode*  :=  { AFTER_SAVE | IMMEDIATE | }
```

If *mode* is set to AFTER_SAVE, any unsaved data is saved automatically. If *mode* is set to IMMEDIATE, the windows are closed without saving any changed data.

If *mode* is not passed, the user is prompted with a dialog to save the data if changes to the data have been made.

If the CLEAR_CACHE switch is passed, the windows are deleted from the window cache. This is useful if, for example, the user is changed to a user with different rights. If this switch is not passed, the windows are not removed from the cache.