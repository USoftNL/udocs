---
id: WindowMinimize
---

# WindowMinimize()




:::note

This article is about the **WindowMinimize** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowMinimize()**

This action makes a window invisible. The window still exists, including its contents, but it is no longer visible until WindowRestore() is called. Compare with WindowIconize().

If the window was active, Window-Minimize deactivates it. Its window menu is removed and the focus is transferred.

*Syntax*

```
WindowMinimize( *window* )
```

The optional *window* identifies the window be made invisible. If no value is passed for *window*, the window shell of the current control is minimized.