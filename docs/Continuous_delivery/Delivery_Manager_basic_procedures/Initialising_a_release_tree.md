---
id: Initialising_a_release_tree
---

# Initialising a release tree

Follow these steps to initialise a [release tree](/docs/Continuous_delivery/Understanding_USoft_Delivery_Manager/Release_trees.md).

1. Choose Release, Quick Start from the menu. A dialog appears.
2. In this dialog, provide a filepath leading to a Root Folder. This is the location on the file system that Delivery Manager will write all your deliverables to.


:::tip

It is good practice to choose a shared folder location for releases, so that multiple development team members can write to the same release location.
Depending on how the file system is configured, you may be able to achieve this by setting a folderpath that starts with a double backslash, or by using a drive letter that refers to a shared folder.

:::

3. In this dialog, also provide a value for Version. This will be the name of your first release.


:::note

It is usual to choose '1.0’ as the initial version, and then to number the next patches as '1.1’, '1.2’, and major releases as '2.0’, and so on, but none of this is obligatory.

:::

4. Press Next. The Quick Start dialog appears. Fill out the form and choose any appropriate “Include...” options. The “Include” options are all optional and you can always make these inclusions later. Press Start when you are ready.

Delivery Manager will now make a Quick Start for you by creating a default Prepare task and a default Release task.