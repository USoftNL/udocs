---
id: CommandSystemBackground
---

# CommandSystemBackground()




:::note

This article is about the **CommandSystemBackground** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **CommandSystemBackground()**


:::danger

This action is obsolete.

:::

Executes an operating system command on a Windows or Linux system. The command will be run in the **foreground**. This action is obsolete:

- Use [CommandWindows()](/Task_flow/Action_Language_reference_A-C/CommandWindows.md) to run a system command in the background on Windows.
- Use [CommandSystemForeground()](/Task_flow/Action_Language_reference_A-C/CommandSystemForeground.md) to run a system command in the foreground on Windows or Linux.

*Syntax*

```
CommandSystemBackground( *command* )
```

*Command* is the command string that is sent to the operating system.