---
id: ActionDialogApply
---

# ActionDialogApply()



> [!NOTE]
> This article is about the **ActionDialogApply** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ActionDialogApply()**

Performs the action(s) specified if all mandatory fields in a dialog (or in an info box inserted into the dialog) are filled out. Leaves the dialog open.

If not all mandatory fields are filled out, an error message is produced and the specified action is not performed.

*Syntax*

```
ActionDialogApply( *action*, ... )
```

The required *action* is the action you want to perform. You can perform multiple *actions* separated by commas.

*Exposed by*

- Dialogs