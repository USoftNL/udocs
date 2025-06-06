---
id: Special_folders
---

# Special folders

Delivery Manager distinguishes a number of folders that have a special purpose. This applies only after you initialise a release tree.

### Previous release folder

The *previous release folder* is the folder where deliverables of the most recent release prior to the current release were written to. As long as you only have 1 release (the *initial* release), it is the folder where deliverables of the current release are being written to, ie., it equals the *release folder* (see next section).

When inputting values of Task Step Parameters of types "File or folder" and "SQL Command", you can refer to the previous release folder by using the **${previous}** predefined source variable once you have initialised a release tree.

You can view the previous release folder by choosing Define, Source Variables, Predefined, and viewing the value of **${previous}**.

The previous release folder changes each time you create a new release. It also changes when you revert to the previous release.

### Release folder

The *release folder* is the folder where deliverables are currently written to.

When inputting values of Task Step Parameters of types "File or folder" and "SQL Command", you can refer to the release folder by using the **${release}** predefined source variable once you have initialised a release tree.

You can view the release folder by choosing Release, Current Release from the menu. You can also choose Define, Source Variables, Predefined, and view the value of **${release}**.

The previous release folder changes each time you create a new release. It also changes when you revert to the previous release.

### Root folder

The *root folder* is the parent folder where deliverables of the current release and all the past releases are found. The root folder identifies the release tree.  

When inputting values of Task Step Parameters of types "File or folder" and "SQL Command", you can refer to the root folder by using the **${root}** predefined source variable once you have initialised a release tree.

You can view the root folder by choosing Release, Current Release from the menu. You can also choose Define, Source Variables, Predefined, and view the value of **${root}**.

###  

###  

###  

###  

 