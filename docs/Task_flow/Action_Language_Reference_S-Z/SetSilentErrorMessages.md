---
id: SetSilentErrorMessages
---

# SetSilentErrorMessages()




:::note

This article is about the **SetSilentErrorMessages** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **SetSilentErrorMessages()**

Specifies whether error messages need to be displayed on screen or not.

*Syntax*

```
SetSilentErrorMessages( *silent* )

*silent*  :=  { Y | N }
```

If error messages are "silent" (ie., *silent* = Y), they do not appear on the screen but they may still, depending on actions and settings, be written to message history, logfiles, etc.

## Scope

The effect of **SetSilentErrorMessages()** is a *global* setting, meaning that it applies until the end of the session or until revoked by calling **SetSilentErrorMessages()** with the opposite value.

There are also other settings influencing message display, that have different scope and overrule **SetSilentErrorMessages()** while in scope. For example:

- The **-quiet** switch of the **BatchRunner** internal component allows you to suppress messages for the duration of a job run.
- The **showErrorMessages** setting in SqlScript() allows you to suppress messages until the end of the script.