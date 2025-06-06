# Export all appdata



> [!NOTE]
> This article is about the **Export all appdata**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Export all appdata**

1. Creates an export file containing all appdata for "Application" in "Destination folder".
The output file name is "application.xml".

2. If a value for the optional "Added XSL" parameter is passed, applies to the result of Step 1 the XSL transformation defined as the Custom XSL of that name.

The list of "all" appdata is determined by querying dynamically in "Database account". Information (or the lack of it) in Application Tables in Delivery Manager is ignored when this action runs.

> [!TIP]
> Make sure you export appdata in such a way that you will not have problems re-importing the appdata later. To understand and fix frequent problems with XML imports, read the Known Problems section for the **XML.Import()** method.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Destination folder|Folder or file|No      |
|Added XSL|Custom XSL|Yes     |



### Other similar actions

To limit the result to tables that are marked as "Deliverable = Yes", you can call "[Export deliverable appdata](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Export%20deliverable%20appdata.md)" instead.