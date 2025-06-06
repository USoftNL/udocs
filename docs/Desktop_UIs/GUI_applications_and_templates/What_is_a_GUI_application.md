---
id: What_is_a_GUI_application
---

# What is a GUI application?

A **GUI application** is a set of GUI classes (windows, dialogs, and controls) that together define a user interface of your USoft application. This may be a Windows interface developed in USoft Windows Designer or a browser-based interface developed in USoft Web Designer.

By default, USoft promotes repository-based development with a single, repository-wide Windows application (if used) and a single, repository-wide browser-based application (if used). This recommended way of working is described in the first section below.

With a single Windows application, you automatically use a single GUI application.

### Single Windows application (recommended)

Unless you have special reasons for a different architecture, USoft recommends that you develop a single Windows application for a repository. Say the overall application name for your solution is MYAPP:

- Define data structures and rules in USoft Definer. From USoft Definer, generate a flatfile named "MYAPP.con".

- In USoft Binder, add a Windows Designer item and set Application = MYAPP for it.

- In Windows Designer, create a Windows interface. From Windows Designer, generate a flatfile named "MYAPP.esi".

You will have specified a GUI application name for the Windows Designer item in USoft Binder. Once you have finished the interface definition, you (re)create an ESI flat file for distribution. This flat file will have the name of the GUI application followed by the .ESI extension.

### Windows application as template

In USoft Windows Designer, you can create a new application and base it on an existing application. The existing application is the **template** of the new application.

If you specify an existing GUI application as a template, all the initial specifications of the re-used GUI classes are read from the ESI flat file of that GUI application.

You can continue developing both the template and the GUI application(s) based on it:

- If you change the template, the changes will not cascade to the application based on it until you generate a new template file.
- Once a template file is re-generated, all changes made to the template necessarily cascade to the application based on it unless the GUI classes concerned were not selected for re-use. This merge behaviour can cause onforeseen effects. To help manage this, it is possible to limit the subset of GUI classes that are re-used from the template.

Do not consider using a template other than in the following situations:

- You want to develop a number of USoft applications with the same general look and feel. For example, in all your applications you want the same yellow color as a background for all windows. Another example would be that you want certain standard navigational behavior on all Lookup Windows across your projects.
- You want to keep a library of foundation classes that you are likely to re-use across applications. Typical candidates for such foundation classes are classes not related to the conceptual model, such as customized ActiveX control subclasses or dialogs.

> [!CAUTION]
> By using templates, you could create an entire tree of GUI applications based on each other. This can get needlessly complicated and is not generally recommended. Remember that a more straightforward way to re-use definitions is to take advantage, within a single Windows application, of the many style guide and inheritance capabilities of Windows Designer of generic GUI classes. Also remember that you can carry individual GUI classes from one project to another through external schema XML export files.

To base a new Windows application MYAPP on an existing template Windows application MYTEMP:

1.In USoft Binder, create a Windows Designer item and set Application = MYTEMP.

2.Open the item and define the template's GUI classes.

3.If you only want to offer for re-use a limited selection of the GUI classes, make or change the template's re-use selection.

4.Choose Tools, Generate Flat File from the Windows Designer main menu and generate a file called "MYTEMP.esi".

5.Choose File, New Application from the menu. Specify Application = MYAPP and Template = MYTEMP. (Use the Browse button to point at the file you have created in Step 4.)

You are now ready to develop your Windows application based on the template. If you deploy MYAPP on different machines, you must distribute both a "MYTEMP.esi" and a "MYAPP.esi" flat file.

### Single data model, multiple Windows applications

You can create multiple separate, "parallel" Windows applications based on a single data model.

Do not consider this unless you want to deploy multiple unrelated Windows applications with the same Rules Engine. If the GUI applications are related, parallel applications are unappealing since any GUI changes that you want make in both applications must be specified twice.

To create 2 parallel, unrelated Windows applications MYAPP1 and MYAPP2 on the same data model and rules:

1.In the USoft Binder file, add an item for Windows Designer and set Application = MYAPP1 for it.

2.In the same USoft Binder file, add a second item for Windows Designer and set Application = MYAPP2 for it.

3.(Recommended:) Edit the names of both items, so that the application name appears in the item name itself and therefore is displayed in the Windows title bar when you open Windows Designer.

4.Open the first item to create Windows Application MYAPP1 and the second item to create Windows Application MYAPP2.

 

 