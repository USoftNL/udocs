# Manipulating records in info windows

You can use the buttons on the toolbar or the options from the Record menu to manipulate records. The Record menu only appears in the menu bar when you have a window open.

## Moving to the next record

In an Info Box, to move the cursor to the next record, click the icon

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/8342385d-7ea1-41a6-9ee1-102ca1735e91.png)

or choose Record, Next from the menu. The keyboard shortcut for this option is DOWN ARROW.

## Moving to the Previous Record

In an Info Box, to move the cursor to the previous record, click the icon

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/96f8f58d-3410-43a2-9edd-dd4a984f16f5.png)

or choose Record, Previous from the menu. The keyboard shortcut for this option is UP ARROW.

## Moving to the Next Page

In a multi-record Info Box, to move the cursor to the next page of records, click the icon

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/b6a6346b-53f9-4e7d-989c-87a5075ceb1e.png)

or choose Record, Next Page from the menu. The keyboard shortcut for this option is PAGE DOWN.
In a single-record Info Box, this option moves the cursor to the next record.

## Moving to the Previous Page

In a multi-record Info Box, to move the cursor to the previous page of records, click the icon

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/1a481c4e-ffbb-4986-99b6-1dcda5435645.png)

or choose Record, Previous Page from the menu. The keyboard shortcut for this option is PAGE UP.
In a single-record Info Box, this option moves the cursor to the previous record.

## Inserting a New Record

In an Info box, to insert a new (empty) record at the current cursor position, click the icon

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/89886b07-62d7-4155-88af-9afdd2d33eac.png)

or choose Record, New from the menu. There is no need to use this option if the cursor is already in an empty record. The shortcut key for this action is ALT+INSERT.

## Duplicating a Record

In an Info Box, to copy the values of the previous record into the current record, click the icon

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/540285e0-70a7-4ce9-b506-16bfbd9e20ee.png)

, or choose Record, Duplicate from the menu. After duplicating a record in this way, change the values that are particular to the duplicated record. Of necessity, you must change at least the value(s) of unique key fields because these must be unique across records - unless key values are generated, in which case USoft Developer will generate a unique value automatically them. The shortcut key for this action is F7.

## Duplicating a Field

To duplicate a field, choose Record, Duplicate Field from the menu bar. This copies the field value of the previous record into the same field of the current record. If the field you duplicate is (part of) the key, you must change its value - unless it is automatically generated, in which case USoft Developer will change it. The shortcut key for this action is ALT + R,L.

## Clearing a Field

To clear a field, position the cursor in the field and choose Record, Clear Field from the menu bar. This removes the current field value. The field value is not physically removed from the database, however, until you save your changes.

## Clearing an Info Box

A window may contain one or more info boxes. Clearing an info box means that the data is removed from the screen, not from the database. The values are not removed from the database until you save your changes.
To clear an info box, position the cursor in any field in the box, and choose Box, Clear from the menu bar or press ALT+F5.
If the info box is the highest parent displayed in the window, then all info boxes will be cleared. If the info box is a child, only that info box and any lower info boxes will be cleared.

## Deleting a Record

In an Info Box, to remove the current record, click the icon

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/5a88c573-80cb-4917-8177-5d34ae93e27d.png)

or choose Record, Delete from the menu. The record is not physically removed from the database, however, until you save your changes. The shortcut key for this action is CTRL+D.

## 
Undoing Actions


To undo your last action, click the icon

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/74dc7358-a1ca-4a88-ba56-7a5871d6bc95.png)

or choose Record, Undo from the menu. The shortcut key for this action is CTRL+Z.
Last actions you may undo include a New (record) command, a Duplicate command, but also any text edits you have made before storing the row. You CANNOT undo actions that you have already committed.

## 
Saving Changes Locally

To save your work locally, choose Record, Store Row from the menu bar. This saves your changes in a (local) memory buffer, allowing you to continue without physically committing your changes to the database. You will probably need to do this quite often, in order to make data from one table available to another window.

> [!TIP]
> **NOTE:** Each time that you leave a window in which you have made a change, a local save is automatically made by the Definer.

To actually commit your changes, you must click the Save button on the toolbar or choose File, Save from the menu bar.

 