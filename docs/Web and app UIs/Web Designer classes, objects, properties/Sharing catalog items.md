# Sharing catalog items

All catalog items (with the exception of Page Sets) can be shared by exporting and importing them as XML files. This enables you to:

- Copy an item from one repository to another.

- Copy an item from one web application to another.
- Copy an item under a different name in one and the same application.

To **export** an item, right-click on the item in the catalog and select Export from the context menu.

To **import** a previously exported item, choose Tools, Import from the menu and complete the resulting Import dialog. Before you can import an XML export file for an info page, the following conditions must be satisfied:

- The superclass of the page must exist in the target repository.
- For the tables, columns and relationships, used in the page, the target repository must contain the same conceptual definitions as in the source repository. If the page uses menu pages or refers to decisions, these definitions must also be the same as in the source repository.
- The superclass(es) in the target repository must contain the same members as in the source repository.

- If the page contains an additional info page, this additional info page must also exist in the target repository.

XML export files only contains those Web Designer paintings that are locally set on the page.