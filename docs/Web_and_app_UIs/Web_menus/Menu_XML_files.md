---
id: Menu_XML_files
---

# Menu XML files

As an internal process, USoft publishes all the menu information that has been defined in, or can be derived from your Web Designer repository, so that this information becomes available to the runtime web site. This happens each time you publish one or more web pages.

This menu information is published to menu XML files:

```
*publication-folder*\xml\menus\DefaultMenu.xml
*publication-folder*\xml\menus\DefaultMenuModule.xml
*publication-folder*\xml\menus\Menus.xml
```

The DefaultMenu.xml file contains the system default menu - if there are multiple modules, this is a list of all the info pages of all the modules combined. The DefaultMenuModule.xml file contains a list of all the info pages for a specific module that are in the module publication sub-directory - if there is no module structure (only the application itself) then this file has the same contents as the DefaultMenu.xml file. The Menus.xml file contains information about custom-defined menus.


:::warning

Do not edit these files. As with the webpage XML files published to the \\xml subdirectory of the publication folder, these files are reserved for USoft. They contain generated, duplicated data that you should only change by changing repository definitions in Web Designer.

:::

 