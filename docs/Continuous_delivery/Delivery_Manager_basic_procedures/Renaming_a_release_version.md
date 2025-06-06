---
id: Renaming_a_release_version
---

# Renaming a release version

Delivery Manager does not allow you to rename a release version directly.

However, if you are really unhappy about the name of the current release, you can change it via the Revert function, as explained below.

## Renaming the current release

Follow these steps to rename the current release version.

1. On the file system, make a backup copy of all the files and folders (if any) output by Delivery Manager as part of your current release. Do this in some secure backup location away from Delivery Manager.
2. From the Delivery Manager menu, choose Release, Current Release.
3. In the Current Release window, press the button next to the "Previous release version” field.
4. From the Delivery Manager menu, choose Release, Create New Release. In the "New version” field, type the name you wanted, then press Create.
5. Copy the materials you backed up in Step 1 from the backup folder to the current release folder.

## Renaming an archived release

Once you have archived a release or an entire release tree [as explained here](/docs/Continuous%20delivery/Delivery%20Manager%20basic%20procedures/Dropping%20moving%20archiving%20a%20release%20tree%20or%20starting%20over.md), that release no longer has any connection with the Delivery Manager tool. You can simply rename at file system level by renaming folders and files.

## Renaming a past release referenced by Delivery Manager

Delivery Manager does not offer a straightforward way of renaming a past release that is still under Delivery Manager's root folder.

This is because Delivery Manager keeps track of past release names for 2 purposes.

First, it uses the *previous* release name (the release that preceded the current release) to perform automatic comparisons when generating datafiles and scripts. This use is limited to the *previous* release.

Second, it uses information about past releases when you request to **Revert** to the previous release. You are allowed to perform this Revert function multiple times. Each time, the next-previous release becomes relevant again.

Internally, release names are stored in the Release Frames table that you can inspect via View, Objects in Delivery Manager.