---
id: Import_appdata
---

# Import appdata




:::note

This article is about the **Import appdata**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Import appdata**

Imports into "Database account" the data for "Application" that are contained in "Source file".

Typically, the source file name is "*application*.xml".

During this import, constraints and relationship checks are deactivated if "Disable rules" = 'Y'.

The input file may have been produced by running any of the following routines: "Export deliverable appdata", "Export all appdata", or "Release deliverable appdata".


:::tip

To understand and fix frequent problems with XML imports, read the Known Problems section for the **XML.Import()** method.

:::

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Source file|Folder or file|No      |
|Disable rules|Option flag|No      |



 