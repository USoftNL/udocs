---
id: WindowIconize
---

# WindowIconize()




:::note

This article is about the **WindowIconize** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowIconize()**

This action minimizes a window (shrinks the window to an icon). The result is the same as clicking the Minimize button on the right corner of its title bar.

If the window was active, it remains active. In this case, its window menu and accelerators remain functional.

*Syntax*

```
WindowIconize( *window* )
```

The optional *window* identifies the window to be minimized. If no value is passed for *window*, the window shell of the current control is minimized.