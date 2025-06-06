# Desktop menus and menu options

This help topic is about **standard menus.** A standard menu may be enriched with extra options from a **context menu** that appear only in certain contexts. The standard options appear in all situations.

A menu as presented to the user of a USoft Windows application is made up of a required **First Menu Page** of options displayed across, and optional **submenus** that display in a vertical list dropping down from the First Menu Page options. Please find details on First Menu Pages later in this article.

You can have submenus any level deep. A submenu of a submenu displays to the right of its parent. The existence of the submenu is signalled by a small arrow pointing to the right:

![](/api/Desktop%20UIs/Desktop%20menus/assets/4deb81b8-791e-4d78-808e-08cb6fcd9cb6.png)

A First Menu Page with a Define submenu, containing itself a Tour Programmes submenuThe last section in this help topic explains how you determine which menu page is the First Menu Page.

## How to define a menu structure

In the Windows Designer, you define menus as an object structure of **menu pages** and **menu lines.** 

You can find menu pages on the Menus tab of the Windows Designer catalog:

![](/api/Desktop%20UIs/Desktop%20menus/assets/b0dc86b5-3b61-42f0-b4f1-004e0eb0b775.png)

The Menus catalogYou can **create** a new menu page by right-mouse-clicking on any node in this hierarchy and then choosing New.

This New option is available not only on the top-level MenuPage node, but also at the level of each existing menu page. This makes it easy to create a menu page that is a variation on an already existing menu page.

You can **open** a menu page by dragging it onto the design area in the middle of the screen, or by double-clicking it, or by right-mouse-clicking it and then choosing Open:

![](/api/Desktop%20UIs/Desktop%20menus/assets/a054c70b-145b-490a-ba73-05d0f1181be1.png)

An opened Menu Page: STD_DEF_PLANNERThe picture above shows an opened menu page called STD_DEF_PLANNER. This menu page has 2 options: 1 Menu Page, followed by 2 Menu Lines. The Menu Page option leads to a submenu page. The 2 Menu Lines will do something else than leading to a submenu.

The easiest way to **insert a menu page** into a menu page is by dragging it onto the opened menu page.

The easiest way to **insert a menu line** into a menu page is by choosing Insert, Menu Line from the Windows Designer main menu.

To **determine what a menu line does**, right-mouse-click on it and then choose Properties. The Property Sheet opens for the menu line. Specify what the menu line does by writing an action script in the **Script** property, for example:

```
WindowCreate( Tour Programmes )
```

Visit the [USoft 9.1 section of developer.usoft.com](https://developer.usoft.com/documentation/91doc/dr_usoft_action_language.htm) to find out details about the USoft Action Language that you can write here.

In practice, the minimal set of properties for which you need to supply a value are Name, Position, Prompt and Script. Position determines the order in which options are shown in the menu page:

![](/api/Desktop%20UIs/Desktop%20menus/assets/6b46f913-1ff8-4153-9958-39bdc1b26705.png)

## First Menu Page

Each time a runtime user opens a USoft Windows application, she is associated either with a single *current role* (if the ROLE_MERGE Rules Engine parameter for the application has the value of False), or with a collection of 1 or more *merged roles* (if ROLE_MERGE = True).

In the case of a single *current role,* the First Menu Page depends on the Menu Page that you defined as the First Menu Page for the user's role. You define this mapping between Menu Pages and roles in the RoleMenus object. You can find this object in the Menus catalog of Windows Designer.

In the case of merged roles, USoft will automatically generate a combination of the menus associated with all the roles that a user has.

In the example below, a user associated with the PLANNER role gets US_MAIN_PLANNER as First Menu Page if the application runs with ROLE_MERGE = False.

![](/api/Desktop%20UIs/Desktop%20menus/assets/0b7746ce-0065-4d58-aa7a-b963cb7bb655.png)

 

 