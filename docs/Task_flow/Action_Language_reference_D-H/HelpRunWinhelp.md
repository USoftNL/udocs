---
id: HelpRunWinhelp
---

# HelpRunWinhelp()




:::note

This article is about the **HelpRunWinhelp** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **HelpRunWinhelp()**

(Windows only). Starts the help system with the information in the specified file. If a unique keyword is supplied,  You can have a great deal of control over the level of help to be displayed, ranging from displaying the initial overall help screen, to context-sensitive help screens for a particular topic or keyword.

*Syntax*

```
HelpRunWinhelp( *file*, *keyword* )
```

The required *file* is the name of the help file. If the optional *keyword* is specified, the topic containing that keyword will be displayed. If the keyword is not unique, the Index tab page will be displayed for the end user to choose the topic they want. If no keyword is supplied, the help tab pages will be displayed, with the last one used on top: if this is the first time the help is opened in this session, the Contents tab will be on top.