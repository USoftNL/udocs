# Page states

All pages have a Page State property that determines if the page can be published. Pages with the Enabled Page State are published. You can exclude pages from a publication by setting the Page State property from Enabled to Disabled or to Style.

To change the Page State property, click the right-mouse button on a page in the Pages tab of the catalog, and choose Properties. At the bottom of the Page Class properties window, the Page State property is shown.

Pages with state Style or Disabled are automatically ignored by the publication process, even if they are included in a page set that is being published. In a default web application, all pages are Enabled, except some generic Page classes that have the Style state.

USoft uses the Style page state by default for generic classes. Their only aim is to enable developers to make generic settings. These settings are inherited by classes lower in the inheritance tree that are intended for publication.

There are likely to be non-generic pages that are not used by the development team for publication. For example, a development team may decide to create various user-defined subclasses of a default "Departments" page, and have the strategy to only publish these subclasses and not the "Departments" page itself. In this case, the page state of the "Departments" page should be set to Disabled. You are advised to set pages that are not intended for publication to Disabled. This will remind team members that the page is not intended for publication in the runtime environment. This in turn will help keep the runtime environment clean of XML files that are never used by end users.

You are free to change the page state of any page within an application to any Page State value. However, it is recommended not to change the default generated set of pages with the Style state.