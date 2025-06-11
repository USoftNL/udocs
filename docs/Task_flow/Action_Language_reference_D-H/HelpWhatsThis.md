---
id: HelpWhatsThis
---

# HelpWhatsThis()




:::note

This article is about the **HelpWhatsThis** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **HelpWhatsThis()**

(Windows only.) Calls the help system, with the filename and help topic as specified by the Help File, and Help Topic properties of the object from which the action is called (e.g. a button). The Help Popup property determines whether the help text will be displayed as popup text (What's This help), or in the normal help window.

By embedding this action in ActionControl(), you can enable end users to drop the special help cursor on the object on which they want help (see the example below).

*Syntax*

```
HelpWhatsThis()
```

*Example*

```
ActionControl( 'TCHelp', 'Core', HelpWhatsThis() )
```

 