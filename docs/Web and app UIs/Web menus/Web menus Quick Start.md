# Web menus Quick Start

In this article, the assumption is that you have not done anything about web menus yet. You have a default application with a default menu.

The next 2 tips apply if you want to do any serious development at all - anything more than just play around with a quick, throw-away-and-start-again prototype application.

### Tip 1: Do NOT customize default pages

The default application only gives access to default info pages - the standard pages offered by USoft.

It is good practice to AVOID customizing default pages, even if Web Designer lets you do that. This is because you never know beforehand if you will need the default again.

So, USoft recommends that you:

- Create your own ("non-default") pages before you start "painting" pages.

### Tip 2: Replace the default menu by a custom menu

If you create your own pages (Tip 1), the default menu will not allow you to navigate to them. It navigates to the default pages only.

So, USoft recommends that you:

- Define your own ("non-default", custom) menu that offers navigation to these non-default pages.
- Replace the default menu by the custom menu early on. The custom menu will allow developers to reach all pages under development.
- When you come to define and test role-based menus, keep this custom menu for developers. Do this by associating both the developers and the developers menu to the ADMIN role.

The remainder of this article explains how you create a custom**menu for developers that (for the time being) is *role-independent.*

You can also create [role-based web menus](/docs/Web%20and%20app%20UIs/Web%20menus/Rolebased%20web%20menus.md).

## Step 1: Defining a custom menu

To define a custom menu:

1. In the Catalog, on the Menus tab, right-click on the MenuPage node, and choose New.

A child node called "Menu Page - New" appears.

2. Right-click the new "Menu Page - New" node and Rename to "MyMenuPage".

3. Right-click the "MyMenuPage" node and choose Open.

The MyMenuPage object opens in the preview pane. An INSERT option appears in the main menu.

4. Using the Insert, Menu Line option from the main menu, insert as many menu options as you like in the menu.

5. For each of these Menu Lines, right-click on the Menu Line option in the preview pane and choose "Property Inspector" to open the Property Inspector for that menu line.

6. In each case, set the **ID**,  **Name**,  **Prompt** and **URI** properties to the name of the non-default info page that you want that menu option to lead to.

For example, to go to a page called "MyReservations", set **ID, Name, Prompt** and **URI** to "MyReservations".

7. Set the **Seqno** property of each menu line to a sequence number, in such a way that the menu lines have the (vertical) order in which you want them to appear in the menu.

8. Save your user-defined menu.

## Step 2: Using your custom menu as a role-independent default menu

To use your custom menu as a role-independent default menu:

1. Choose Publish, Publication Configurations and find out what is the start page of your application. This is the value of the StartPage property of the Publication Configuration that you use to publish your application.

By default, the start page is "ApplicationPage".

2. In the Catalog, on the Pages tab, find this page class, right-click on it and choose Open.

3. In the Object Tree on the right-hand side, find the "ApplicationMenu" MenuControl object, right-click on it and choose "Property Inspector".

The Property Inspector opens for this MenuControl object.

4. For the Menu Name property, replace **PageListMenu** by the name of your menu page (we used "MyMenuPage").

> [!TIP]
> If you want a *role-based* menu, instead of setting Menu Name to a menu page name, set it to the value **Group Menu**, and define role-based menus in Web Designer. Click [here](/docs/Web%20and%20app%20UIs/Web%20menus/Rolebased%20web%20menus.md) for details.

----

![](/api/Web%20and%20app%20UIs/Web%20menus/assets/422f3c41-8f2c-4f1c-9eb8-22ba267c07ce.png)



Prior to USoft 10.0.1K, at this point, you had to rename the Menu File property from **DefaultMenu.xml** to **Menus.xml**. This is no longer necessary. The Menu File property has been dropped.

----

5. Save work.

6. Re-publish the application (in Web Designer, press F8).

7. Browse the application. You should now see your own menu instead of the default menu.