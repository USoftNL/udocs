# CurrentField()



> [!NOTE]
> This article is about the **CurrentField** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

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

 