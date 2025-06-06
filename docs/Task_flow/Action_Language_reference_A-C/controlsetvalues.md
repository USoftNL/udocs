---
id: controlsetvalues
---

# control-set-values()



> [!NOTE]
> This article is about the **control-set-values** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **control-set-values()**

> [!CAUTION]
> This action is supported for backward compatibility only. Instead of using control-set-values()¸to set a property to a value, refer to that property as a action call, providing the (new) property value as a parameter to the action call.

Sets the value of a property of the current object or of a specified target object.

*Syntax*

```
control-set-values( *property*, *value* )
```

*Property* names the property to be (re)set. Refer to the property by using its internal name. To find the property's internal name, please refer to the [Property Reference](/docs/Task_flow/Action_Language_reference/Property_reference.md) section.

*Value* is the value that you want to set the property to. In some cases you need to know the internal representation of the allowed values that certain properties have. The prompt displayed in the Property Inspector may not be the value that is actually stored. For a list of these internal resource values,  please refer to the USoft 9.1 Property Reference section on developer.usoft.com.

If a target object is specified, it must exist within the current window or another window currently in the workspace (i.e., opened on-screen).

You can use the control-set-values() action for a specific property if:

- This property exists in the Property Inspector for the specific object.
- This property is included in the Property Names vs Internal Names list in the the USoft 9.1 Property Reference section on developer.usoft.com.

*Examples*

```
control-set-values(background, green)
```

```
action-other-control(<-student, control-set-values(background, blue))
```

This action changes property settings for the current window instance only. The window class or object class is not affected. The effect of control-set-values() therefore ends with the user session, or when the window is removed from the workspace cache.

To insert a date value into a field associated with a DATE data type, you need to use the date format YYYY/MMDDHH24MISS, for example:

```
control-set-values(<property>, to_char(SYSDATE, 'YYYY/MMDDHH24MISS'))
```

 