---
id: ApplicationExit
---

# ApplicationExit()




:::note

This article is about the **ApplicationExit** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ApplicationExit()**

Closes the application.

*Syntax*

```
ApplicationExit( *mode* )

*mode*  :=  { AFTER_SAVE | IMMEDIATE | '' }
```

If the optional *mode* is AFTER_SAVE, any unsaved data is committed automatically. If it is IMMEDIATE, the application is closed without committing any changed data. If an empty string is passed and there are unsaved data, the user is prompted with a dialog to save the data when changes to the data have been made.

If you do not pass *mode*, the action is ignored.