---
id: MenubarMarkItem
---

# MenubarMarkItem()



> [!NOTE]
> This article is about the **MenubarMarkItem** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **MenubarMarkItem()**

Marks with a marker bitmap, or unmarks, a specified menu option. Also gives the "pressed" look to the corresponding button.

A marked menu option is displayed in such a way that the user knows it is active.

The marker bitmap can be chosen from USoft's bitmap directory.

*Syntax*

```
MenubarMarkItem( *menu-page*, *menu-option*, { *bitmap* | '' } )
```

The required *menu-page* is the menu page to which the menu option belongs. The required *menu-option* is the menu option to be marked or unmarked.

If you supply *bitmap* as the third parameter, this identifies the bitmap to be used to mark the menu option. If you pass the empty string as the third parameter, the menu option is unmarked.

*Examples*

This example marks a "View, Objects..." menu option:

```
MenubarMarkItem( 'STD_VIEW', 'Objects...', 'objects.bmp' )
```

This example unmarks that "View, Objects..." menu option:

```
MenubarMarkItem( 'STD_VIEW', 'Objects...', '' )
```

 