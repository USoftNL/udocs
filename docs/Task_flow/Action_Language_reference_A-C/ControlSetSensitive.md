---
id: ControlSetSensitive
---

# ControlSetSensitive()




:::note

This article is about the **ControlSetSensitive** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ControlSetSensitive()**

Makes (a) specified display object(s) sensitive to input from keyboard and mouse.

*Syntax*

```
ControlSetSensitive( *object*, ... )
```

or

```
*object*.ControlSetSensitive()
```

The optional *object* identifies the display object that you want to make sensitive. If using the first syntax, you can name multiple objects separated by commas. If you do not pass an *object*, the current object is made sensitive.

The change of sensitivity is not cascaded downwards to other controls. For example, making an Info Window sensitive does not make its children sensitive. However:

- Making a **window shell** sensitive enables access to the entire window.
- Making a **column display** sensitive cascades downward to the data fields and to lookup buttons and subtype buttons.

*Examples*

```
query.myColumn.esd_char.ControlSetSensitive()
```

```
ControlSetSensitive(columnBox.myColumn)
```

 