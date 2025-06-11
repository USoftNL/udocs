---
id: HelpOnLastMessage
---

# HelpOnLastMessage()




:::note

This article is about the **HelpOnLastMessage** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **HelpOnLastMessage()**

(Windows only.) This action specifies the file to be used for the help topics associated with user-defined system messages and/or constraint messages. The help topic ID to be called for a particular message is defined in the repository (System Messages, Domain Constraints, Constraints tables).

HelpOnLastMessage() first checks if a file called SYSMSG.HLP exists. This file contains the help topics associated with USD.EXE (the USoft Developer engine). As this executable is used by your end users, you may want (but do not have to) distribute this file as well.

*Syntax*

```
HelpOnLastMessage( *file* )
```

*File***is the name of the help file.