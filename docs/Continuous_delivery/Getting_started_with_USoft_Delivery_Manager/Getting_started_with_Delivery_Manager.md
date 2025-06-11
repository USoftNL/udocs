---
id: Getting_started_with_Delivery_Manager
---

# Getting started with Delivery Manager

Follow these steps to get started with Delivery Manager.


:::note

In this article, we will assume you plan to use Delivery Manager to release a product (Delivery Manager has many [additional purposes](/Continuous_delivery/Understanding_USoft_Delivery_Manager/Introducing_USoft_Delivery_Manager.md)). We will assume you already have a USoft application that you want to release. You already have a database account with USoft set up. You already have a USoft Binder file for access.

:::

### Step 1. Create a Delivery Manager repository

Follow these steps to create a Delivery Manager repository. This is a set of database tables with prefix T_DL_… .

1. In the USoft Binder menu, choose Item, New, check Delivery Manager, press the Add button.

2. Right-mouse-click the new Delivery Manager item in the list, choose Create Tables, press OK.

### Step 2. Quick Start


:::tip

This step is only possible if you have not been using Delivery Manager before. If you want to start over, repeat Step 1.2 above, but in the Create-Tables dialog, set "Drop Existing Tables” = Yes. CAUTION: Any existing Delivery Manager work will be lost.

:::

1. Open Delivery Manager by double-clicking on the "Delivery Manager" item in the Binder file.

2. Choose Release, Quick Start from the menu.

3. Enter a Root Folder. This is a folderpath that points to a location on the file system where you want Delivery Manager to release your application deliverables. If multiple team members are responsible for releases and you want each to release from her own machine, make sure you choose a shared folder. If you are not concerned with releases at all, just with Delivery Manager in general, then you can enter any folderpath.


:::warning

The folder must not already exist in the file system. Delivery Manager insists it wants to create the folder itself.

:::

4. Enter a Version. This is a label that describes the first application version you want to deliver, for example, '1.0' or '9.0 Beta'.

5. Press OK. A new dialog appears.

6. Enter the following details about your application:

- Application
- Username
- Password
- Database platform
- Database connect string
- Owner

"Application" must be the application name as it is known in USoft Authorizer in your development environment. This is also the name that you use when creating flat files, for example, in the filename "*application.*con". The remaining details describe the database location where the sources of your top-level application are: the Development repository.


:::tip

This may or may not be the location that you are currently connected to. If you don't know or don't care, just enter the same details as you have entered earlier on the File, Project Properties, Database tab in your Binder file.

:::

7. Quick Start gives you the option to quickly create tasks for also delivering 1 **server**, as defined in USoft Service Definer, by way of example. You can later add further servers by following the same patterns as created by Quick Start for this first server.

If you want to use this option, check the "Include server" checkbox and enter the Server name. Make sure this is the name of an existing Server in Service Definer in the same Database Account that you referred to in Step 6.

8. Quick Start gives you the option to quickly create tasks for also delivering 1 **publication**, as defined in USoft Web Designer, by way of example. You can later add further publications by following the same patterns as created by Quick Start for this first publication.

If you want to use this option, check the "Include publication" checkbox and enter the following details:

- Publication Configuration
- Page Set

"Publication Configuration" is required. Make sure this is the name of an existing Publication Configuration defined in Web Designer in the same Database Account that you referred to in Step 6, for the same Application that you referred to in Step 6.

"Page Set" is optional. If you leave this field empty, the entire Application is published. Otherwise, only the identified page set is published. Make sure that "Page Set" exists as a Page Set in Web Designer in the same Database Account that you referred to in Step 3, for the same Application that you referred to in Step 3.

9. Press the Start button.

### Step 3. Run Prepare task

1. In the Tasks catalog, right-click on the "**Prepare** *application*" task created by Quick Start in Step 7. From the context menu, choose "Run". The Run Task window opens.

2. Set all the steps in the task to Active. Do this by choosing Run, Set All Active from the menu or by clicking the Set All Active icon in the icon ribbon.

3. Press the Run Next button at the bottom of the Run Task window repeatedly to execute the steps one-by-one. For each step, wait for the Done = Yes flag before pressing Run Next again.

### Step 4. Run Release task

Repeat Steps 3 for the "**Release** *application*" task.

### Step 5. Inspect the release

You are now ready to inspect the deliverables in the release folder on the file system. You can view the folderpath leading to the release folder**at any time: choose Current Release from the Release menu or from the icon bar.