---
id: Self
---

# Self()




:::note

This article is about the **Self** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **Self()**

Returns a handle to the designed class. Used to pass this handle to a action parameter, or a class argument of a window you create.

*Syntax*

```
Self()
```

*Example*

```
MyLookup(Self()).Window.Create()
```

*Exposed by*

- Table controls (Info Boxes)
- Dialog controls