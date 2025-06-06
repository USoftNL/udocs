---
id: Release_createtables_script
---

# Release create-tables script

![](./assets/27a96a80-cdcb-4c79-9b7e-d3ff256e0040.png)



> [!NOTE]
> This article is about the **Release create-tables script**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

## **Release create-tables script**

Releases the create-tables script for changes in physical tables of "Application", as defined in "Database account", since the previous release.

The output file name is "*application*.200.upg.rdbms.sql".
The output file is placed in the **\\scripts** directory of the current release folder.

> [!CAUTION]
> The set of tables included in the create-tables script depends on the list of Application Tables in Delivery Manager. See "Which tables are included?" below for details.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |



### Which tables are included?

**Only changed tables**
The resulting script refers only to tables that have changed compared to the previous release. If there is no previous release (ie., if the current release is initial), then all tables are considered "changed".

**Only consumer tables, not consumed module tables**

The list of tables for a consumer application does NOT include tables provided by consumed modules.

**Only tables registered as Application Table in Delivery Manager**

The resulting script refers only to tables registered as Application Table in Delivery Manager. You can bring the list(s) of Application Tables up-to-date by running the " Populate tables list " action for the application.

**Only tables that are not skipped**

The resulting script refers only to tables registered as Application Table with the Skipped = No setting (the default).

### Which SQL statements are generated in the script?

For each table in scope, and depending on the exact syntax required by the RDBMS, Delivery Manager automatically generates all DDL statements (CREATE TABLE, ALTER TABLE...) and DML statements (INSERT, UPDATE) required to bring the database state from the previous release to the current release. Indexes are dropped and re-created.

Outside Delivery Manager, depending on context, USoft tools automatically generate either CREATE TABLE or ALTER TABLE statements. In Delivery Manager, you can use upgrade hints to choose, on a per‑table basis, whether you want to generate a CREATE TABLE or an ALTER TABLE statement.

### Errors

**“Duplicate column in subtype constellation or merged tablist. Count: count. First: table.column.”**

*Explanation:* It appears that in the list of tables to be generated in the create-tables script, the same column (combination of table name and column name) occurs more than once.

One reason could be that the same column name is used in multiple subtypes of a subtype constellation, although this is now excluded in USoft Definer by a constraint with message "Duplicate column in subtype constellation".

*How to fix:* Using the example in the error message, determine why the column appears multiple times.

**"Release is non-initial but XML repository file for previous version is not found at folder."**

*Explanation:* It is not possible to determine what are the database changes in this release because information on the database state in the previous release is not, or no longer, available.

*How to fix:* If you have a backup of the application state at the time of the previous release, perhaps on a target machine that you have copied the deliverables of the previous release to, then copy that backup file to the \\metadata directory of the previous release folder, making sure you use "application.USD.xml" as the filename. To set the previous state to the current state, run the "Export metadata" action for the application, making sure you export to the \\metadata folder of the previous release.

### Customising the create-tables script

You can customise the create-tables script that Delivery Manager releases. This is possible because Delivery Manager writes to the release folder all the XML input files used for the script generation, as well as the XSLT transformation used to generate the SQL script.

To customise, you need to understand the different steps that Delivery Manager takes to generate a create-tables script.

### Other similar actions

Calling "Release create-tables script" is different from calling USoft's standard "Create Physical Tables" option, as executed by the "[Generate create-tables script](/docs/Continuous_delivery/Delivery_Manager_actions_by_name/Generate_createtables_script.md)" action, because :

- "Release create-tables script" is based on a comparison with metadata as defined for the PREVIOUS release and registered in Delivery Manager's previous release folder, whereas
- USoft's standard "Create Physical Tables" option is based on whatever database state is found on the local machine where the option is run. To execute this standard option from Delivery Manager, if you want changes to apply immediately to the repository, call “[Create tables](/docs/Continuous_delivery/Delivery_Manager_actions_by_name/Create_tables.md)" with “Run from repository” = Yes. If you want to write the changes to a script file, call "[Generate create-tables script](/docs/Continuous_delivery/Delivery_Manager_actions_by_name/Generate_createtables_script.md)".

Instead of calling "Release create-tables script", you can alternatively call "[Release scripts](/docs/Continuous_delivery/Delivery_Manager_actions_by_name/Release_scripts.md)" with "Include physical tables upgrade script" = Yes. The result is identical.
The only difference between "Release create-tables script" and "Release scripts" is that "Release scripts" also releases other upgrade scripts (if any exist for the current version of "Application").