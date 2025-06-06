# Create flat files



> [!NOTE]
> This article is about the **Create flat files**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Create flat files**

For "Application", from "Database account", creates .con, .umg, .smg, .esi flat files in "Destination folder".

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Destination folder|Folder or file|No      |



### Notes

The following (4) flat files are created (the *application*.JOB file is no longer a separate file in USoft 9.1.):

- *application*.CON
- *application*.ESI
- *application*.SMG
- *application*.UMG

This happens regardless of whether a file contains any relevant information. For example, an .ESI file is created even if no paintings were defined in Windows Designer.