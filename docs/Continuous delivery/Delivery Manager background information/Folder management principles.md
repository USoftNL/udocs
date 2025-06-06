# Folder management principles

To make your work easier and less error-prone, at certain times Delivery Manager automatically **refreshes** folders in the file system.

At other times, it automatically **creates** folders for you, so that you do not need to do this manually or call the "Create folder" action.

Finally, in places, Delivery Manager allows you to specify files or folders that must automatically be **blocked**, in the sense that they are excluded from a copy-folder operation each time that operation takes place.

These folder management principles enable best-practice task design.

### Automatic folder refresh

*Refreshing* a folder means that the folder is first cleared of any existing content before new content is written to it. For each section, Delivery Manager has a refresh policy that seems appropriate for that section:

|**Section**|**Refresh policy**|
|--------|--------|
|appdata |The following files are refreshed, ie, removed as a preparatory step:*application*.xml*application*.diff.xml*application*.initial.xmlAny other existing files in the \\appdata folder, such as appdata files belonging to other applications, are not affected.|
|custom  |No existing files are removed.|
|flatfiles|All (5) flatfiles of the application for which you are releasing flatfiles are refreshed.Any other existing files in the \\flatfiles folder, such as flatfiles belonging to other applications or modules, are not affected.|
|metadata|The following files are deleted as a preparatory step:*application*.USD.xml*application*.USD.diff.xml*application*.USD.initial.xmlAny other existing files in the \\metadata folder, such as metadata belonging to other applications, are not affected.|
|publications|A publication is released in its own subfolder. That subfolder is refreshed.Subfolders belonging to other publications are not affected.|
|scripts |The following script files are deleted as a preparatory step:Pre-upgrade scripts for the application you are releasing: *application.*1*.sql create-tables script for the application you are releasing: *application.2*00.upg.rdbms.sql *Post-upgrade scripts for the application you are releasing: *application.3**.sql Added XSL transformations for the application: \\using\\*application*.*xsl* A create-tables script released in a previous run is preserved if your current run does not re-release it, that is, if you are running the "Release scripts" action with "Include physical tables upgrade script" = No.Any other existing files in the \\scripts folder, such as scripts belonging to other applications, are not affected.|
|servers |A server is released in its own subfolder. That subfolder is refreshed.Subfolders belonging to other servers are not affected.|



In summary, when you call Delivery Manager release actions, any existing deliverables of the same type are *overwritten*. The only exception to this rule is the "custom" section.

The advantage of refreshing is that, each time you write new content to the folder, you know that any obsolete content is automatically removed. This also helps to ensure that content found in release sections has been produced by running a predefined Delivery Manager task, and not in any other way, and that related deliverables are always released as a package.

A potential disadvantage of refreshing is that you risk losing content that you placed manually in release sections other than the "custom" section. This content will be automatically removed next time you call a release action that writes to the section.

One way to get around this problem is to define your content as attachments in Delivery Manager. This way, the content is preserved in the Delivery Manager repository and is guaranteed to be output each time you write to the folder.

Delivery Manager only ever refreshes release subfolders other than **\\custom**. It never removes folders elsewhere on the file system, unless you run an Action that is explicitly defined to do this, such as the "Drop folder" action.

### Automatic folder create

Delivery Manager may automatically *create* folders when you run an action that writes to the "custom" subfolder of the current release folder, and when you write an attachment.  

This happens if the specified folder does not already exist.

*"Custom" release section:* If the output folder does not exist, it is automatically created when you call:

- the "Release custom folder" action. This action must be called with a Destination Folder parameter value that starts with **${release}\\custom**.

- the "Apply custom XSL", "Copy file" and "Export to TDF" actions with a Destination File parameter value that starts with **${release}\\custom**.

*Attachments:* If the output folder does not exist, it is automatically created when you call:

- an Attachment. Attachments by definition specify an output folder that is a subfolder (a section) of the current release folder.

> [!NOTE]
> You can also create a folder manually. Call the "Create folder" action.

### Automatic folder and file block

Delivery Manager performs 3 copy-folder operations for which you can specify that certain individual files or subfolders must be *blocked*, ie., excluded from the copy operation:

- Copy all deliverables from the previous release folder to the new release folder as part of the Create New Release routine. This copy operation is only ever performed if the "Copy deliverables to next release" flag is set to Yes. You can specify folders and files to be blocked by choosing Release, Current Release from the menu.
- Copy a Web Designer publication from its Publication Folder to the "publications" release folder using the "Release publication" action. You can specify folders and files to be blocked by choosing Define, Publications and retrieving (querying) the publication object for which you want to block the folders/files.
- Copy a Service Definer server from its Publication File Path to the "servers" release folder using the "Release server" action. You can specify folders and files to be blocked by choosing Define, Extracted Server Objects and retrieving (querying) the publication object for which you want to block the folders/files.