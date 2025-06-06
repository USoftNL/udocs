---
id: Dropping_moving_archiving_a_release_tree_or_starting_over
---

# Dropping, moving, archiving a release tree, or starting over

The intended use of release folders in Delivery Manager is to have them all as children of the same *root folder.* 

Thus, instead of dropping or moving individual release folders, ask yourself what you want to do with the entire contents of the *root folder,* also referred to as *release tree.*

Of course, on the file system, nothing keeps you from making a manual copy of an individual release at any time, if that is a way of archiving that you like.

> [!CAUTION]
> Do not simply *drop* a release tree - all the deliverables will be lost. Ask yourself which situation you are in:
> This article describes these 3 situations.

## Archiving the current release tree

USoft Delivery Manager does not have an archiving function. Simply archive the deliverables that matter to you by moving or copying the files and folders to a secure location on the file system or on a storage disk.

If you want to archive but also you want to keep working with USoft Delivery Manager, be aware that Delivery Manager only uses the current release folder and the previous release folder. Any older release folders you can archive away anywhere you like. Note however that it is possible in the tool to Revert from the current release to the previous release, and if you do that, the next-previous release becomes relevant again. If you do decide to archive, and you continue to work with Delivery Manager, then for clarity, choose UDeliver, View, Objects, Release Frames, and delete all the records that correspond with releases you are archiving away from the root folder (ie., away from Delivery Manager).

----

![](./assets/696e86c2-59ab-4525-82f9-b569cbf36a8a.png)



## Moving the current release tree

Follow these steps to move all the deliverables (the entire current release tree) to a different location on the file system.

These steps apply only if you already have a release tree.

> [!WARNING]
> Delivery Manager has a function to move the release tree as described in the steps below, but you must MANUALLY move all the materials to the new location on the file system.

1. On the file system, move the entire root folder (the folder that contains everything that has so far been output by Delivery Manager) to a new location. Do not otherwise rename or change any folders or files.
2. In Delivery Manager, from the menu, choose Release, Initialize Release Tree.
3. Press the Move Root Folder button.
4. In the Move Root Folder dialog, specify the new location and then press Move.

----

![](./assets/7a59c5ca-99fa-4a0a-aa59-68a9486514bc.png)



## Moving the current release tree

In versions older than 10.0.1C, moving the release tree is not fully supported. Follow these steps:

1. On the file system, move the entire root folder (the folder that contains everything that has so far been output by Delivery Manager) to a new location. Do not otherwise rename or change any folders or files.
2. In Delivery Manager, from the menu, choose Release, Initialize Release Tree. Supply the folderpath to the location on the file system where you want to move the release tree. In the field, make sure you type the name of the current release version, for example, '4.2’.

Working in this way, you cannot Revert to the previous release version. Also, comparisons with the previous version for the purpose of computing scripts and datafiles for upgrade may fail.

----

 

## Starting over with a clean slate

Follow these steps to start over with a clean slate:

1. In the file system, remove the entire release tree. This is the folder indicated as the root folder of your Current Release in Delivery Manager. Current Release is an icon in the ribbon just below the main menu.
2. Exit Delivery Manager. In USoft Binder, right-mouse-click on the Delivery Manager item, choose Create Tables, and set Drop Existing Tables = Yes. Press OK.