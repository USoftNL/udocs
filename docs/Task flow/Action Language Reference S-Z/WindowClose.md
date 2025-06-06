# WindowClose()



> [!NOTE]
> This article is about the **WindowClose** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **WindowClose()**

Closes a window.

*Syntax*

```
WindowClose( *mode* )

*mode*  :=  { AFTER_SAVE | IMMEDIATE | }
```

If *mode* is set to AFTER_SAVE, any unsaved data is saved automatically. If *mode* is set to IMMEDIATE, the table is closed without saving any changed data.

If *mode* is not passed, the user is prompted with a dialog to save the data if changes to the data have been made.