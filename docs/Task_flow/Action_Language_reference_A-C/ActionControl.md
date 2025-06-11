---
id: ActionControl
---

# ActionControl()




:::note

This article is about the **ActionControl** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ActionControl()**

Changes the mouse pointer to a specified shape until the user clicks on a control, at which point a specified action or list of actions is performed.

This action can be used to call context-sensitive help using the HelpRunWinhelp() action.

*Syntax*

```
ActionControl( *cursor-shape*, *class*, *action*, ... )

*cursor-shape*  := { arrow | ibeam | wait | cross | uparrow | size | sizenwse | sizenesw | sizens | sizeewe | TCHelp } 
```

*Cursor-shape* is required. TCHelp is the pointer shape for context-sensitive help.

The required c*lass* is a filter that determines which object (if any) is the target of the action. For example, if you specify Column here, the action is executed on the nearest Column ancestor of the current object.

The required *action* is the action you want to perform. You can perform multiple *actions* separated by commas.


:::warning

*Actions* must be specified by using deprecated action names.

:::

*Example*

ActionControl( 'TCHelp', 'Core', help-run-winhelp() )