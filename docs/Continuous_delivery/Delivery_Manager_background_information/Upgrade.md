---
id: Upgrade
---

# Upgrade

*Upgrade* is the operation whereby, on a target machine, the previous release version of your USoft application is replaced by the current (on the target machine, the "next") release version.

To upgrade, you must deploy deliverables associated with the new version one-by-one (section by section).

Most deliverables are easy to upgrade. With flatfiles, for example, all you need to do is to stop any running Rules Services on the target machine, overwrite the existing flatfiles with the new flatfiles, and then restart the Rules Services.

However, because USoft applications are data-intensive, upgrading *application data* can be a delicate procedure, especially if complex data structure changes (metadata changes) have occurred in the new release, in which case you could be at risk of losing production data when moving from the old to the new data structure. To help prevent this, Delivery Manager allows you to register upgrade scripts in a controlled way so that the steps of the upgrade procedure on a target machine are properly signposted.

Upgrading application data in this way is the subject of the "Upgrade scripts" help topic. The sections below describe, in more general terms, how you can upgrade different types of deliverable.

### Upgrading flat files

On a target machine, flat files are required by USoft instances that run from Flat File as opposed to running from Repository. Flat files are also required for any module run by the application.

To upgrade flat files on a target machine:

- Make sure that any running USoft Rules Services and any opened client/server USoft applications are stopped.
- Replace the old flatfiles in the \\APP subfolder of the usoft installation folder by the new flatfiles found in the "flatfiles" section of the release folder.
- Restart the USoft Rules Services.

### Upgrading metadata

On a target machine, metadata ("Definer data") are used by USoft instances that run from Repository.

To upgrade metadata on a target machine:

- Make sure that any running USoft Rules Services and any opened client/server USoft applications are stopped.
- Open USoft Definer and Import the metadata changes delivered in the "metadata" section of the release folder. You can do this by calling XML.IMPORT from SQL Command. If your application is called MYAPP, the metadata changes are delivered in a file named "MYPP.USD.diff.xml".
- If your application is a top-level application that consumes modules, you will need to [replace the module flatfiles](/Continuous_delivery/USoft_Delivery_Manager_by_concept/Modules_in_UDeliver.md) if you are moving to a later version of the module.
- If you run the top-level application from Repository, best practice is NOT to install the flat files of the top-level application. If you choose to do this, take care that local Rules Services do not have the Definitions From = "Automatic" setting, because in that case, a Rules Service will automatically run from Flat Files when it is restarted if flat files are found in the \\APP folder.
- Restart the USoft Rules Services.

### Upgrading authorisation data

Upgrading authorisation data is usually a straightforward procedure that does not require any special upgrade scripts.

To upgrade authorisation data on a target machine:

- Open USoft Authorizer.
- Import authorisation data changes delivered in the "appdata" section of the release folder. You can do this by calling XML.IMPORT from SQL Command. Authorisation changes are delivered in a file named "USAUTH.diff.xml".

### Upgrading application data

To have application data upgraded successfully on target machines, a development team must consider at build time if special procedures are necessary. Details of this decision are described in the "Upgrade scripts" help topic.

If no special procedures are necessary, you will find no deliverables in the "scripts" section. In this case, to upgrade application data on a target machine:

- Import application data changes delivered in the "appdata" section of the release folder. If your top-level application is called "MYAPP", application data changes will be delivered in a file named "MYAPP.diff.xml". You can open a client/server GUI for the top-level application and import by calling XML.IMPORT in SQL Command, or you can let a Rules Service execute this XML.IMPORT statement.

### Upgrading publications

To upgrade, on a target machine, publications developed in USoft Web Designer :

- Make sure that any running USoft Rules Services are stopped.
- Locate the publication deliverables of the previous version and delete them from the file system.
- Copy the new deliverables found in the "publications" section of the release folder to the location where you deleted the previous version. It is possible that multiple publications are delivered in this section; in this case, for details on choosing the correct publication, go to the "Publications section" help topic.
- Restart the Rules Service(s).

### Upgrading servers

To upgrade, on a target machine, a server developed in USoft Service Definer (and known as a server object in Delivery Manager):

- Make sure that any running USoft Rules Services are stopped.
- Stop and uninstall the current server.
- Locate the server deliverables of the previous version and delete them from the file system.
- Copy the new deliverables found in the "servers" section of the release folder to the location where you deleted the previous version. It is possible that multiple servers are delivered in this section; in this case, for details on choosing the correct publication, go to the "Servers section" help topic.
- Install and start the new version of the server.
- Restart the Rules Service(s).

### Upgrading a USoft installation

Delivery Manager does not assist in upgrading to a different USoft version on a target machine. This is a manual operation.

First, find out if the application version you are upgrading to runs against a different USoft version than the previous application version:

- Check if a USoft executable is delivered as part of the release folder that was delivered to the target machine. This works if your team's release strategy is to create, each time a new USoft version is required, a "usoft-install" folder as a sibling folder of the folders for release sections (see the picture in the " Deliverables and sections " topic) and to place the new USoft executable there. This is a recommended strategy because it allows deployers to see immediately that a new USoft version must be installed, and it makes the executable readily available.
- Otherwise, check the information in the packing slip (if it is included in the delivery). Delivery Manager allows releasers to register the USoft version that their application version runs against. This information is also released to the packing slip.

If you must install a new USoft version:

- Make sure that any running USoft Rules Services, any opened client/server USoft applications, and any running instances of USoft Binder are stopped.
- Using the Control Panel, uninstall the current USoft installation.
- Get the executable of the new USoft version.
- Check that you have a valid license file available in a local folder.
- Install the new USoft version by running the executable.

 

 