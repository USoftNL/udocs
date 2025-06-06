---
id: Actions_in_UDeliver
---

# Actions in UDeliver


:::note

This article is about the** action** concept in USoft Delivery Manager ("UDeliver”).

:::

An **action****is an operation that you can define and run as a task step in a Delivery Manager task.

The actions that you can choose from are listed in the Actions catalog on the left-hand side of the screen. If this catalog is not in view, choose View, Catalog from the main menu.

For practical and detailed reference information about each individual action, please go to [Delivery Manager actions by name](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

- **Release actions****are used to release deliverables, or to prepare for releasing deliverables.
- **USoft routines****mimic existing routines that are offered by one of the USoft tools.
- **Utilities****perform some general action such as copying or dropping a folder in the file system. Delivery Manager offers *data management* utilities in particular.

### Release actions

A release action is designed to release a deliverable, such as a set of flatfiles or a Web Designer publication, in an effective way that is minimally error-prone.

The output of a release action is a file, or a set of files or folders. This output is automatically placed in a section of the current release folder.

The release action refreshes this section (if it is not the "custom" section). This ensures that obsolete files and folders are removed. It also helps enforce that output in this location is produced only by Delivery Manager.

There are also release actions that *prepare* for releasing deliverables. They are mainly of 2 kinds:

- Actions where Delivery Manager gets information from the Development environment that it needs for release, such as an updated list of table names or Web Designer publication names.
- Actions that check or validate correctness of input before it is output as a deliverable.

Release actions that release deliverables are in the "Release" context and have a name that starts with the verb "Release". Many release actions that prepare for releasing deliverables are in the "Prepare" context.

### USoft routines

A USoft routine is a Delivery Manager action that mimics a routine as it is offered by one of the USoft tools. The main difference is that the routine is started indirectly from Delivery Manager, not directly from the tool that offers it. This allows you to run the routine as a task step that is part of a larger Delivery Manager task.

Examples of USoft routines include:

- Performing a Create Physical Tables script as offered by USoft Definer;
- Synchronising a module as offered by USoft Definer;
- Creating a TDF export file as offered by USoft Benchmark Data Management;
- Running the Fill authorizer Tables routine as offered by USoft Authorizer.

The design of the Delivery Manager action is to stay as close as possible to the original routine, and to offer the same options for running it if this is appropriate and technically possible. However, certain aspects may differ. Occasionally, Deliver Manager offers new or additional options, or it is based on a slightly different principle. An important example of this is that "Create Physical Tables" run from Delivery Manager is based on the database state that was defined as the *previously released version* of your application, whereas the "Create Physical Tables" offered by USoft Binder or USoft Definer is based on the database state that is physically encountered when you run it on a target machine.

### Utilities

A utility is an operation that is not specific to Delivery Manager and that you could easily perform outside it, for example, the operation of copying or dropping a folder in the file system. The main added value of having it available as a Delivery Manager action is that you can execute it as a task step that is part of a larger task.

An exception to this are utilities that Delivery Manager offers in the area of *data management.* Many of these utilities are offered only by Delivery Manager and include new functionality, such as the ability to export metadata and appdata to an .XML file and the ability to compare such files and re-import the comparison.