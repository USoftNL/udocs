---
id: setvalues
---

# set-values()



> [!NOTE]
> This article is about the **set-values** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **set-values()**

> [!CAUTION]
> This action is supported for backward compatibility only. Instead of using set-values()¸to set a property to a value, refer to that property as a action call, providing the (new) property value as a parameter to the action call.

Sets the value of a property of the current object or a specified target object.

*Syntax*

```
set-values( *property*, *value* )
```

*Property* names the property to be (re)set. Refer to the property by using its internal name. To find the property's internal name, please refer to [Property Reference](/docs/Task_flow/Action_Language_reference/Property_reference.md) section.

*Value* is the value that the property is to have.

*Examples*

```
set-values(background, green)
```

```
action-other-control(<-student, set-values(background, blue))
```

> [!TIP]
> This action changes property settings for the current window instance only. The window class or object class is not affected. The effect of set-values() therefore ends with the user session, or when the window is removed from the workspace cache.

> [!TIP]
> If a target object is specified, it must exist within the current window or another window currently in the workspace (i.e. opened on-screen).