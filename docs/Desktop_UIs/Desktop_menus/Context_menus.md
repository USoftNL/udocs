---
id: Context_menus
---

# Context menus

A  **context menu** is a menu page with options that are only displayed to the runtime users in certain situations. This contrasts with the **standard menu** for the user, which is available in all situations.

## Context menus for info windows

The options in a context menu page for an **info window** are added to the standard menu when the user has opened the info window as the current window, but not otherwise.

If and when the context menus are added, the associated bitmaps/icons (if any) are added to the menu toolbar / icon ribbon.

To set a menu page as the context menu page of an info window:

1. Open the info window class.

2. From the object tree on the right, right-mouse-click on the Info Window object. This is the immediate child object of the top-level Window object. Choose Properties.

3. In the Property Inspector, set the **Menu Page** property to the name of the Menu Page.

## Context menus for catalog nodes

The options in a context menu page for a **catalog node** appear when the user right-mouse-clicks on the catalog node.

To set a menu page as the context menu page of a catalog node:

1. Open the catalog class from the Dialog tab of the USoft Window Designer catalog.

2. Right-mouse-click on the catalog node. Choose Properties.

3. In the Property Inspector, set the **Popup Menu Page** property to the name of the Menu Page.

##  