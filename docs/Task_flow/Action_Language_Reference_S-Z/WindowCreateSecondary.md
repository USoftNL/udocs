---
id: WindowCreateSecondary
---

# WindowCreateSecondary()




:::note

This article is about the **WindowCreateSecondary** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowCreateSecondary()**

Opens a secondary window.

If you want to specify the window to be opened, use the Create() actiion instead.

WindowCreateSecondary() only creates the window if the master contains all primary key columns.

*Syntax*

```
WindowCreateSecondary( *window* )
```

The optional *window* identifies either the window to be opened or the name of a secondary window style. In the second case, the underlying query for the window opened will be SELECT * FROM \<master_table>. If no value is passed, *window* will be set to the secondary window style "Secondary Window".