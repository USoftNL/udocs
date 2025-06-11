---
id: Module
---

# Module()




:::note

This article is about the **Module** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **Module()**

Returns a reference to a module object. This can be used as part of a statement to open a window from another module.

*Syntax*

```
Module( *module* )
```

The optional *module* is the name of the module. If you omit *module,* the application module is returned.

You can use a normal WindowCreate() statement following the Module() action to open the required window:

```
Module( ... ).WindowCreate( window )
```

```
Module( ... ).window.Window.Create( ... )
```

 