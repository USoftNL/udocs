---
id: acrel
---

# ac-rel()




:::note

This article is about the **ac-rel** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ac-rel()**


:::danger

This action is supported for backward compatibility only.
To refer to an object within the current window, call a action of that object instead of using ac-rel(). To refer to an object outside the current window, collect the information you want to refer to in a user-defined property on startup of the current window, and then refer to that property.

:::

Performs an action on a control other than the current one. The control is specified by a path.

Ac-rel() has the same purpose as action-other-control(), but with**ac-rel(), parameters containing column identifiers or paths are resolved in relation to the calling object. With action-other-control(), they are resolved in relation to the target object.

*Syntax*

```
ac-rel( *path*, *action*, *parameters* )
```

The required *path* identifies the control that the action should be applied to. The required *action* identifies the action you want to perform.

*Parameters* are input parameters expected by *action* (if any). Multiple *parameters* are separated by commas.

*Examples*

```
ac-rel(*tableShell, control-set-values, title, text)
```

```
ac-rel(<-*currentColumn.data, convert-alternative-format, DDMMYY,MMDDYY,DDMM,MONDD)
```

 