# MenubarAddItem()



> [!NOTE]
> This article is about the **MenubarAddItem** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **MenubarAddItem()**

Adds a menu option to a menu page dynamically.

*Syntax*

```
MenubarAddItem( *menu-page*, *new-menu-option*, *action* )
```

All parameters are required. *Menu-page* is the menu page that the new menu option is to be added to. *New-menu-option* is the name of the new menu option. *Action* is the action to be called by the new menu option.

This action can be called in the Yes Action or No Action of a decision, in combination with MenubarDeleteItem().