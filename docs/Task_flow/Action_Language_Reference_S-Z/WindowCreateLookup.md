---
id: WindowCreateLookup
---

# WindowCreateLookup()




:::note

This article is about the **WindowCreateLookup** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowCreateLookup()**

Opens a lookup window based on the currently selected query column in an info window.

To open a lookup dialog from a dialog,use WindowCreateLookupDialog() instead. To open a specific lookup window, you can also use the Create() action.

*Syntax*

```
WindowCreateLookup( *window* )
```

The optional *window* identifies the lookup window to be opened. If *window* is not specified, WindowCreateLookup() tries to resolve the name from the query column it was called from.

*Exposed by*

- Table controls (Info Boxes)