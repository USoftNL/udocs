---
id: Import_metadata
---

# Import metadata



> [!NOTE]
> This article is about the **Import metadata**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Import metadata**

Imports into "Database account" the metadata that are contained in "Source file".

Typically the source file name is "*application*.USD.xml".

During this import, constraints and relationship checks are deactivated if "Disable rules" = 'Y'.

> [!TIP]
> To understand and fix frequent problems with XML imports, read the [Known Problems section](/docs/Repositories/Data%20flow%20control%20with%20XML%20or%20JSON/XML%20import%20Known%20problems%20and%20workarounds.md) for the **XML.Import()** method.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Database account|Database account|No      |
|Source file|Folder or file|No      |
|Disable rules|Option flag|No      |



 