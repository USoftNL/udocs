---
id: MenubarSetItem
---

# MenubarSetItem()




:::note

This article is about the **MenubarSetItem** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **MenubarSetItem()**

Makes the specified menu option sensitive or insensitive. The menu option is identified by the prompts shown in the interface.

Use the MenubarSetItem() action only for incidental changes to menu sensitivity. Menu option sensitivity in general can be set in USoft Definer for each menu option. There are separate settings for a number of application states, such as Query Mode. For this reason, the effect of MenubarSetItem() only lasts until the application state changes.

This action can only be used for menu options that:

- Are located in submenus of the main menu shown in the menubar.
- Do not lead to a further submenu.

*Syntax*

```
MenubarSetItem( *menu-page-prompt*, *menu-item-prompt*, *sensitivity* )

*sensitivity*  :=  { 'On' | 'Off' }
```

*Menu-page-prompt* is the name of the menu page as found in the user interface.

*Menu-item-prompt* is the name of the menu item as found in the user interface.

*Sensitivity* specifies whether the menu option must be set to sensitive or to insensitive.

*Example*

```
MenubarSetItem( 'Record', 'Refresh', 'Off' )
```


:::danger

*menu-item-prompt* cannot be used to identify a menu item uniquely. You are therefore advised to use this action only on menu items that have unique prompts.

:::
