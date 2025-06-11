---
id: WindowCreateRelated
---

# WindowCreateRelated()




:::note

This article is about the **WindowCreateRelated** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowCreateRelated()**

Opens a menu containing all relations to child tables of the current table. If a relation is specified, the corresponding child table is opened.

If you want to specify the window class to be opened, use the Create() action instead.

Calling WindowCreateRelated() has no effect while the parent is in query mode.

*Syntax*

```
WindowCreateRelated( *window* )
```

The optional *window* identifies the Related Window class you want to open. If no name is specified, a Related Windows List dialog is opened to let the user choose which related window to open. This is also the default behavior of the Related List function (in Box menu and under F9 key).

*Exposed by*

- Table controls (Info Boxes)