---
id: CommandSystemBackground
---

# CommandSystemBackground()



> [!NOTE]
> This article is about the **CommandSystemBackground** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **CommandSystemBackground()**

> [!CAUTION]
> This action is obsolete.

Executes an operating system command on a Windows or Linux system. The command will be run in the **foreground**. This action is obsolete:

- Use [CommandWindows()](/docs/Task%20flow/Action%20Language%20reference%20A-C/CommandWindows.md) to run a system command in the background on Windows.
- Use [CommandSystemForeground()](/docs/Task%20flow/Action%20Language%20reference%20A-C/CommandSystemForeground.md) to run a system command in the foreground on Windows or Linux.

*Syntax*

```
CommandSystemBackground( *command* )
```

*Command* is the command string that is sent to the operating system.