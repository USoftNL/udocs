---
id: CurrentField
---

# CurrentField()




:::note

This article is about the **CurrentField** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **CurrentField()**

Returns the field belonging to the conceptual column that is currently in focus.

This action is used to define action calls (or calls to get/set a property) that are to act on the field that is presently in focus.

*Syntax*

```
CurrentField()
```

*Example*

This example changes the background color of the current field to red:

```
query.myColumn.CurrentField.background(red)
```

 