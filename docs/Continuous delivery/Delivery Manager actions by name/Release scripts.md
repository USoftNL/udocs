# Release scripts



> [!NOTE]
> This article is about the **Release scripts**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Release scripts**

1.    (Re-)checks all upgrade scripts (if any) that are associated with the current release version of "Application".
2.    If Step 1. is successful, copies the scripts to the "scripts" subfolder of the current release folder.
3.    If "Include physical tables upgrade script" = Yes, the [Release create-tables script](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Release%20createtables%20script.md) action is called as part of the routine. This causes the create-tables script to be (re-)compiled and written to the \\scripts folder. The create-tables script is named "*application*.200.upg.rdbms.sql".

In Step 3, data for this create-tables script is read from the Database Account that is set as the "Source for Post-upgrade Check" property of "Application".

> [!CAUTION]
> In Step 3, the set of tables included in the create-tables script depends on the list of Application Tables in Delivery Manager with Skip = No (the default). But this list is not automatically brought up-to-date. To bring it up-to-date, you must call [Populate tables list](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Populate%20tables%20list.md). See [Release create-tables script](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Release%20createtables%20script.md) for details.

If you have previously released scripts for this version of this application other than the create-tables script, they are now overwritten.

If you have previously released the create-tables script for this version of this application, and you now run with "Include physical tables upgrade script" = No, that create-tables script is NOT overwritten.

When you call this action, if the current release has "Include attachments" = Yes, attachments for the "scripts" section (if any are defined) are copied to the specified subfolder of the "scripts" subfolder. This happens only to attachments that have Blocked = No (the default).

To release only the create-tables script, run the "Release create-tables script" action instead.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Include physical tables upgrade script|Option flag|No      |



### Errors

**“Duplicate column in subtype constellation or merged tablist. Count: count. First: table.column.”**

*Explanation:* It appears that in the list of tables to be generated in the create-tables script, the same column (combination of table name and column name) occurs more than once.

One reason could be that the same column name is used in multiple subtypes of a subtype constellation, although this is now excluded in USoft Definer by a constraint with message "Duplicate column in subtype constellation".

*How to solve:* Using the example in the error message, determine why the column appears multiple times.