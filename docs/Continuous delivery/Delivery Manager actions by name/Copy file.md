# Copy file



> [!NOTE]
> This article is about the **Copy file**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Copy file**

Makes a copy of "Source file" as "Destination file", overwriting any previous file with the name and file path of "Destination file".

If "Destination file" is in the "custom" section of the current release tree, and the folder for "Destination file" does not exist in the file system, it is automatically created.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Source file|Folder or file|No      |
|Destination file|Folder or file|No      |



### Rules

"Source file" must exist as a physical file on the file system.

The folder of "Destination file" must exist as a physical folder, unless it is in the "custom" section of the current release tree, in which case it is automatically created if it does not exist.