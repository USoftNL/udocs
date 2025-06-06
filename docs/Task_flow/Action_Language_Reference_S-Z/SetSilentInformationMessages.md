---
id: SetSilentInformationMessages
---

# SetSilentInformationMessages()



> [!NOTE]
> This article is about the **SetSilentInformationMessages** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **SetSilentInformationMessages()**

Specifies whether information messages need to be displayed on screen or not.

*Syntax*

```
SetSilentInformationMessages( *silent* )

*silent*  :=  { Y | N }
```

If information messages are "silent" (ie., *silent* = Y), they do not appear on the screen but they may still, depending on actions and settings, be written to message history, logfiles, etc.

## Scope

The effect of SetSilentInformationMessages() is a *global* setting, meaning that it applies until the end of the session or until revoked by calling SetSilentInformationMessages() with the opposite value.

There are also other settings influencing message display, that have different scope and overrule SetSilentInformationMessages() while in scope. For example:

- The -quiet switch of the BatchRunner internal component allows you to suppress messages for the duration of a job run.
- The showErrorMessages setting in SqlScript() allows you to suppress messages until the end of the script.