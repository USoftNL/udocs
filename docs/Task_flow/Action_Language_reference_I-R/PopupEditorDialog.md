---
id: PopupEditorDialog
---

# PopupEditorDialog()




:::note

This article is about the **PopupEditorDialog** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **PopupEditorDialog()**

Opens the popup text editor. This action is called by default if a user clicks the Edit button of a text editor control that has an empty Edit action property.

*Syntax*

```
PopupEditorDialog()
```

*Example*

```
PopupEditorDialog(CurrentColumn()).Window.Create()
```

*Exposed by*

- Column controls (Fields)