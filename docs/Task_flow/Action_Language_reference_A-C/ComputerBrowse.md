---
id: ComputerBrowse
---

# ComputerBrowse()




:::note

This article is about the **ComputerBrowse** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ComputerBrowse()**

Opens a common dialog that allows the user to browse for a computer. You can use this for example if you want the user to specify a target computer.

*Syntax*

```
ComputerBrowse( *title*, *start-point* )
```

*Title* is the text to be shown in the label in the dialog box. *Start-point s*pecifies which computer should be selected when the dialog opens. By default, this is the Network Neighborhood.

You can also use environment variables in this parameter, for example,

```
 %%SYSTEMDIR%%\app
```

or

```
%%TEMP%%\myname
```

The USoft registration database entries are searched first for such variables, and if they are not found, the standard DOS environment is searched.


:::note

References to SystemDir are internally mapped to the version key.

:::
