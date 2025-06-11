---
id: Export_metadata
---

# Export metadata




:::note

This article is about the **Export metadata**[Delivery Manager action](/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Export metadata**

1. Creates an XML metadata file by exporting all metadata from "Database account" to "Destination folder". Any columns named “CREATED_ON” or “CREATED_BY” are excluded from the export because this prevents problems on re-import if these columns are set to Updatable = No.
The output file name is "application.USD.xml".

The value of "Application" is only used to compose the filename of the destination file.

2. Excludes from the result of Step 1 any columns named “CREATED_ON” or “CREATED_BY”. This prevents problems on re-import in the event that these columns are set to Updatable = No.

3. If a value for the optional "Added XSL" parameter is passed, applies to the result of Step 2 the XSL transformation defined as the Custom XSL of that name.


:::tip

If the metadata is large in volume, it is not convenient to apply XSL via the "Added XSL" input parameter. In this case, consider applying the XSL to the result of "Export metadata" in a separate task step that executes the "Apply custom XSL" action.

:::


:::tip

Make sure you export metadata in such a way that you will not have problems re-importing the metadata later. To understand and fix frequent problems with XML imports, read the Known Problems section for the **XML.Import()** method.

:::

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Destination folder|Folder or file|No      |
|Added XSL|Custom XSL|Yes     |



### Errors

An error is raised if you attempt to apply this action to a USoft application (for example: USAUTH), as opposed to a User application.
 