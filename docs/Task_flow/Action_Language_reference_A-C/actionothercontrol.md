---
id: actionothercontrol
---

# action-other-control()



> [!NOTE]
> This article is about the **action-other-control** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **action-other-control()**

> [!CAUTION]
> This action is supported for backward compatibility only.
> To refer to an object within the current window, call a action of that object instead of using action-other-control().
> To refer to an object outside the current window, collect the information you want to refer to in a user-defined property on startup of the current window, and then refer to that property.

Performs an action on a control other than the current one. The control is specified by a path.

*Syntax*

```
action-other-control( *path*, *action*... )
```

The required *path* specifies the target control that the action must be applied to. At least one *action* is required, but you can also perform a script of multiple actions separated by whitespace.

*Examples*

```
action-other-control(<-*TextBox1, control-set-values (<property>, <value>))
```

```
action-other-control(<-*currentColumn.data, convert-alternative-format(DDMMYY, MMDDYY, DDMM, MONDD))
```

Make sure that actions and parameters can be interpreted by the target object identified by \<path>. Variable elements must be resolved before they are passed to the target object, and must make sense in the context of the target object, rather than in the context of the *action-other-control()* command. The following example illustrates how variables in a decision definition can be resolved before they are passed to the target object. The purpose is to copy a value from TextBox2 into TextBox1:

(Decision SQL:)

```sql
SELECT '<-*TextBox1', 'control-set-values(<property>,' || :TextBox2 || ')'
```

(Yes Action:)

```
action-other-control(:1, :2)
```

This concatenation can also be performed in-line:

```
action-other-control('<-*TextBox1', 'control-set-values(<property>,' || :TextBox2 || ')')
```

In this last code example, quotes around the first parameter of action-other-control() are necessary only because the second parameter is quoted. If there had been no variable element (in this example, :1), no quotes would have been necessary.

Depending on circumstances, SqlScript() may offer a more readable alternative:

```
SqlScript( SELECT :"<-*TextBox2" TextBox1 )
```

 