---
id: CommandWindows
---

# CommandWindows()



> [!NOTE]
> This article is about the **CommandWindows** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **CommandWindows()**

Executes an operating system command on a Windows or Linux system.

- On **Windows**, the command is executed in the **background** and a DOS box is not used. Because a DOS box is not used, you cannot use this action to execute DOS commands (for example, MKDIR, DEL, DIR, etc.). Use [CommandSystemForeground()](/docs/Task%20flow/Action%20Language%20reference%20A-C/CommandSystemForeground.md) to execute these commands.
- On **Linux**, the command is executed in the **foreground**.

*Syntax*

```
CommandWindows( *command*, *parameter(s)* )
```

*Command* is the command line that is sent to the operating system. On Windows, this can be anything that you can execute by means of Windows' Run option. *Parameter(s)* is (are) the parameter(s) expected by the command.