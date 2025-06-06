---
id: Export_to_TDF
---

# Export to TDF



> [!NOTE]
> This article is about the **Export to TDF**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

## **Export to TDF**

Runs the USoft Benchmark Export routine in "Database account" for "Application".

The output file name is "Destination file". If "Destination file" is in the "custom" section of the current release tree, and the folder for "Destination file" does not exist in the file system, it is automatically created.

If the optional "Run from repository" flag is set to Y, then "Application" (in the context of which USoft Benchmark is run) is run from repository. Otherwise, "Application" is run from flatfiles.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Destination file|Folder or file|No      |
|Run from repository|Option flag|Yes     |



### Errors

The predefined USoft applications cannot be run from repository. If you set "Run from repository" = Y and "Application" to 'USD', 'USAUTH', 'USTESTER', 'USERVICE' or 'UDELIVER', it's an error.