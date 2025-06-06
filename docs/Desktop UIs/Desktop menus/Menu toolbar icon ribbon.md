# Menu toolbar (icon ribbon)

In USoft Windows GUIs, a menu toolbar or icon ribbon is displayed immediately below the application menu. The picture below shows the default icon ribbon for USoft applications on application entry, when no info windows are open. The icons offered correspond to menu options available in the user's standard menu. Each menu line in a menu can optionally have a corresponding icon.

When the user clicks an icon, the same action is performed as when he selects the corresponding menu line.

![](/api/Desktop%20UIs/Desktop%20menus/assets/430d2c9a-191f-4647-89a2-c8651857bc19.png)

**Default USoft menu toolbar when no info window is open**

The picture below shows the default icon ribbon for USoft applications when an info window is open and active. The added icons correspond to options of the info window's context menu, which is added to the standard menu if and when the info window is open:

![](/api/Desktop%20UIs/Desktop%20menus/assets/c7fa449a-03f5-4185-965b-a52d2d1cdede.png)

**Default USoft menu toolbar for an info window**

## How to create

To determine what the menu toolbar for a user must look like, first design and build the menu structure (standard menu, context menus). Then, for menu options that you want to make available from the toolbar, define the menu option's Toolbar properties:

1. Open the menu page.

2. Right-mouse-click on the menu option. Choose Properties.

3. In the Property Inspector, set the **Bitmap** property to the name of the image file that contains the icon image. This file must be found in the \\BITMAPS subdirectory of the USoft installation directory.

4. Determine the order in which icons must appear on the toolbar by setting the **On Toolbar Position** property**.**

5. Determine the pop-up text that must appear when the user hovers the icon. Do this by setting the **Toolbar Tooltip** property.

 