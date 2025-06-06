---
id: Release_modules
---

# Release modules



> [!NOTE]
> This article is about the **Release modules**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Release modules**

Given that "Application" is the application being released, for modules consumed by "Application", copies specified versions of module deliverables to the application's release folders.

For this to work, you must first declare module versions manually. The module versions copied are those module versions that you have declared in Delivery Manager for "Application". To declare module versions, from the Delivery Manager menu, choose Define, Applications, and in the record for "Application", click the Modules tab.

This action operates at file system level only. The module deliverables you want to copy must already be present on the file system in their own release directory. The recommended way of working is to produce module deliverables by releasing them through their own instance of Delivery Manager.

This action first removes any copies made by a previous run and then makes fresh copies.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |



### Prerequisites

Each time you run the "Release modules" action, the following prerequisites are checked. If the check fails, then the action fails as a whole, and an error message is produced.

At least 1 module version with Active = Yes must be declared for "Application".

In the folder location on the file system that you specified for the module version, at least the following 2 deliverables must be available:

- A CON flat file called "module.CON",
- A create-tables script called "module.200.upg.rdbms.sql".

To be precise,

- the location where the .CON flat file is expected is the "*root-folder*\\*version*\\flatfiles" folder,
- the location where the create-tables script is expected is the "*root-folder*\\*version*\\scripts" folder,

where *root-folder* and *version* are properties of the module version currently associated with "Application". To see, set or change these properties, from the Delivery Manager menu, choose Define, Applications, Modules.

### Detailed description

The "Release modules" copies module deliverables between locations on the file system. Exactly how this happens is described in the table below by deliverable type.

The copy operation is applied to each releasable module version associated with the "Application". "Releasable module version" is explained in the Prerequisites section above.

The recommended and expected way of working is that all the module deliverables (except those in the \\custom and \\publications folders, if any) have

```
*module*.
```

as a file name prefix. This is a simple and effective way of making sure that module deliverables remain distinct from consumer deliverables and from other module deliverables. If you use Delivery Manager for all your release actions, this way of prefixing deliverables is automatically applied.

In each case, the **source** location for the copy operation is:

```
*root-folder\version*
```

* *where *root-folder* and *version* are properties of the module version currently associated with "Application". To see or change these property settings, from the Delivery Manager menu, choose Define, Applications, Modules.
In each case, the **target** location for the copy operation is:

```
*root-folder*\*release-version*
```

where *root-folder* and *release-version* are properties of the Current Release of the Delivery Manager instance. To see these property settings, from the Delivery Manager menu, choose Release, Current Release, or alternatively, click the Current Release icon:

![](./assets/1d4cfae4-9167-45f9-8f11-ceb943ede704.png)

|**Deliverable type**|**What is copied?**|**Description of copy operation**|
|--------|--------|--------|
|Flat files|Files only, no subfolders|Any files with the *module*. prefix in the \\flatfiles folder in the target location are first cleared. Then, any files found in the \\flatfiles folder in the source location are copied to the \\flatfiles folder in the target location. Subfolders are not copied.|
|Application data|Files only, no subfolders|Any files with the *module*. prefix in the \\appdata folder in the target location are first cleared. Then, any files found in the \\appdata folder in the source location are copied to the \\appdata folder in the target location. Subfolders are not copied.|
|Metadata|Files only, no subfolders|Any files with the *module*. prefix in the \\metadata folder in the target location are first cleared. Then, any files found in the \\metadata folder in the source location are copied to the \\metadata folder in the target location. Subfolders are not copied.|
|Scripts |Files only, no subfolders|Any files with the *module*. prefix in the \\scripts folder in the target location are first cleared. Then, any files found in the \\scripts folder in the source location are copied to the \\scripts folder in the target location. Subfolders are not copied.|
|Custom  |All files and subfolders|If a subdirectory "modules\\*module*\\custom" exists in the target location, this subdirectory is dropped, including any files and folders that it contains. Then, any files and subfolders found in the \\custom folder in the source location are copied to a new subdirectory "modules\\*module*\\custom" in the target location.|
|Publications|All files and subfolders|If a subdirectory "modules\\*module*\\publications" exists in the target location, this subdirectory is dropped, including any files and folders that it contains. Then, any files and subfolders found in the \\publications folder in the source location are copied to a new subdirectory "modules\\*module*\\publications" in the target location.|



 