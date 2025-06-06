---
id: Populate_tables_list
---

# Populate tables list



> [!NOTE]
> This article is about the **Populate tables list**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Populate tables list**

In Delivery Manager, in "Application Tables", creates or updates a list of database tables and interface tables defined for "Application".

The list of tables is read from repository if "Database account" is specified. It is read from a metadata file if "Database account" is left empty. For details, see Parameters below.

The purpose of this list is that you can specify :

- which of these application tables are deliverable,
- which must be skipped in create-tables scripts, and
- for which an ALTER TABLE statement must be generated for it in the create-tables script, as opposed to the default CREATE TABLE statement (the Upgrade Hint setting).

If you re-run "Populate tables list", any previous Deliverable, Skipped, and Upgrade Hint settings remain unaffected.

In the case of the USAUTH application, a first-time suggestion for deliverable tables is made by USoft.

To read the table names, the application is automatically opened from repository, except when Application = USERVICE (the Service Definer application delivered by USoft), in which case the application is automatically opened from flat files.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |



### Notes

The "Populate tables list" action lists database tables and interface tables, but not Logical Views and Component Tables.