---
id: ControlAllowResize
---

# ControlAllowResize()



> [!NOTE]
> This article is about the **ControlAllowResize** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ControlAllowResize()**

Specifies that a specific embedded control (e.g. Tree View, List View, Pie-Chart Display) must resize itself when the user drags an Info Box or Dialog.

Calling this action has an effect only if the Resize Child property of the Info Box or Dialog is set to Yes.

*Syntax*

```
ControlAllowResize( *path* )
```

The required *path* is the path identifying the control that is to resize itself. This is a path of the type that the Object Activator tool helps you find.