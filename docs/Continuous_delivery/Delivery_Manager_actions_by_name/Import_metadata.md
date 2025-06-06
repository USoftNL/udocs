---
id: Import_metadata
---

# Import metadata



> [!NOTE]
> This article is about the **Import metadata**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

## **Import metadata**

Imports into "Database account" the metadata that are contained in "Source file".

Typically the source file name is "*application*.USD.xml".

During this import, constraints and relationship checks are deactivated if "Disable rules" = 'Y'.

> [!TIP]
> To understand and fix frequent problems with XML imports, read the [Known Problems section](/docs/Repositories/Data_flow_control_with_XML_or_JSON/XML_import_Known_problems_and_workarounds.md) for the **XML.Import()** method.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Database account|Database account|No      |
|Source file|Folder or file|No      |
|Disable rules|Option flag|No      |



 