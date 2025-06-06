---
id: ControlSetFocus
---

# ControlSetFocus()




:::note

This article is about the **ControlSetFocus** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ControlSetFocus()**

Moves the input focus to a different control.

*Syntax*

```
ControlSetFocus( *option* )

*option*  := { 'cancel' | 'default' | 'next' | 'previous' | }
```

The optional *option* is a string identifying the control that must get the input focus. Alternatively, you can omit *option* and call the ControlSetFocus() action of the control where you want the input focus to move to.

|**Option**|**Action**|
|--------|--------|
|cancel  |The input focus moves to the Cancel button and the function associated with that button is called. The result is as if the user pressed the ESC key.|
|default |The input focus moves to the default button and the function associated with that button is called. The result is as if the user pressed the Enter key.|
|next    |The input focus moves to the next control. The result is as if the user pressed the Tab key.|
|previous|The input focus moves to the previous control. The result is as if the user pressed the Shift + Tab key combination.|



*Examples*

```
ControlSetFocus( 'next' )
```

```
Text_Box_2.ControlSetFocus()
```

 