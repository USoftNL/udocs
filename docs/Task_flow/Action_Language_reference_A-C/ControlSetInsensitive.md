---
id: ControlSetInsensitive
---

# ControlSetInsensitive()



> [!NOTE]
> This article is about the **ControlSetInsensitive** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ControlSetInsensitive()**

Makes (a) specified display object(s) insensitive to input from keyboard or mouse.

*Syntax*

```
ControlSetInsensitive( *object*, ... )
```

or

```
*object*.ControlSetInsensitive()
```

The optional *object* identifies the display object that you want to make insensitive. If using the first syntax, you can name multiple objects separated by commas. If you do not pass an *object*, the current object is made insensitive.

The change of sensitivity is not cascaded downwards to other controls. For example, making an Info Window insensitive does not make its children insensitive. However:

- Making a **window shell** insensitive disables access to the entire window.
- Making a **column display** insensitive cascades downward to the data fields and to lookup buttons and subtype buttons.

*Examples*

```
query.myColumn.esd_char.ControlSetInsensitive()
```

```
ControlSetInsensitive(columnBox.myColumn)
```

 