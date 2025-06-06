---
id: How_USoft_displays_web_menus
---

# How USoft displays web menus

This article helps you understand the general mechanism by which USoft displays menus in your web pages. If you want more immediately practical information:

- Click [here](/docs/Web_and_app_UIs/Web_menus/Web_menus_Quick_Start.md) for step-by-step instructions for creating a custom, **role-independent** initial web menu.
- Click [here](/docs/Web_and_app_UIs/Web_menus/Rolebased_web_menus.md) for step-by-step instructions for creating a custom, **role-based** initial web menu.

Menus in your web pages are displayed by **MenuControls**. When the user browses a page that has one or more MenuControls, the properties of this (these) MenuControls are interpreted and this results in a menu (the menus) being displayed:

- If the MenuControl’s **Menu Name** property has a value other than **Group Menu**, then the menu with that name is displayed.
- If the MenuControl’s **Menu Name** property has the value of **Group Menu** or the empty value, then USoft looks at the RoleMenus class and the current user-role associations to decide which role-based menu to display for the runtime user.

> [!TIP]
> **Tying menus to pages: Easy drag-and-drop**
> Experienced users of Web Designer can easily tie menus to pages, and pages to menus:
> These easy-to-use options are for developers who understand the class hierarchies and object hierarchies they have been creating. Beginners should prefer the step-by-step instructions in [Web Menus: Quick Start](/docs/Web_and_app_UIs/Web_menus/Web_menus_Quick_Start.md).

### Freedom of design

You have full control over the number of menus displayed at any one time. For example, you can create a display where, simulataneously, one left-hand menu runs vertically, and another menu runs across the top of the page from left to right.

### Initial menu

If the publication’s StartPage has a MenuControl, which is common practice, then this menu is referred to as the *initial menu* because this will be the menu displayed initially, when the user logs on.

### System default web menu

Initially, a MenuControl has its **Menu Name** property set to **PageListMenu.** If you leave this default in place, USoft will create a simple default menu that has a menu line for each table defined in your application. This menu is simply based on the list of tables defined in USoft Definer. Unlike the more sophisticated default menu in Windows Designer, this web menu has entries even for tables that the current user has no access rights to.

The system default web menu is very useful as a first start or for a quick prototype situation.

### Role-independent custom web menu

Most development teams switch to a role-independent custom menu early on in the development process, because this allows them to determine menu content. In early stages, the custom menu is often role-independent. Because roles and their associated menus, pages and access rights are an integral part of application design, you will soon need role-based menus (next section).

To create a role-independent custom menu:

Sset the MenuControl’s **Menu Name** property to the name of the menu.

### Role-based custom web menus

It is easy to have role-based menus that do not make life difficult for you as a developer. Simply make sure developers have their own role (for example, the default ADMIN role) and their own role-based menu contains everything they need access to in Development. This way, as a developer, you can normally log on as yourself and have full access. You switch roles only to develop and test role-specific behaviour.

To create role-based custom web menus:

- Set the MenuControl’s **Menu Name** property to either **Group Menu** or erase its value (so that the property has the empty string as a value).

Now, create an appropriate initial menu for each role. Map each role to its menu by setting the **First Menu Page** property for the role object in the RoleMenus class. You find the RoleMenus class at the top of the Menus tab in the Web Designer catalog.

Consider that if you run with merged roles, role merge will influence the initial menu. USoft will automatically attempt to compose a suitable menu for users who hold multiple roles.

> [!NOTE]
> Click [here](/docs/Web_and_app_UIs/Web_menus/Menu_XML_files.md) for more explanation about menu XML files.