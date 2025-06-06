# Export deliverable appdata



> [!NOTE]
> This article is about the **Export deliverable appdata**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Export deliverable appdata**

1. From "Database account", creates an export file containing deliverable appdata for "Application" in "Destination folder".

The output file name is "application.xml".

2. If a value for the optional "Added XSL" parameter is passed, applies to the result of Step 1 the XSL transformation defined as the Custom XSL of that name.

Deliverable appdata is data in tables marked as Deliverable in the Application Tables list for "Application" and "Database account". To view Application Tables lists, choose Define, Application Tables.

To read the data, the application is automatically opened from Repository, except when Application = USERVICE (the Service Definer application delivered by USoft), in which case the application is automatically opened from Flat Files.

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

This action is identical to "[Release deliverable appdata](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Release%20deliverable%20appdata.md)", except that:

- you specify the destination folder manually instead of writing to a predefined release folder, and
- no comparison with appdata from the previous release is made.

This action is identical to "[Export all appdata](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Export%20all%20appdata.md)" except that the result is limited to application tables marked as "Deliverable = Yes".

To get or refresh the list of Application Tables for "Application" and "Database account", run "[Populate tables list](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Populate%20tables%20list.md)".