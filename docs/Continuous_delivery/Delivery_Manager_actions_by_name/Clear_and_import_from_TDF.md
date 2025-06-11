---
id: Clear_and_import_from_TDF
---

# Clear and import from TDF




:::note

This article is about the **Clear and import from TDF**[Delivery Manager action](/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Clear and import from TDF**

For "Application", in "Database account", runs the USoft Benchmark Clear Tables routine, then performs the USoft Benchmark Import routine using "Source file" as the TDF import file.

If the optional "Run from repository" flag is set to Y, then "Application" (in the context of which USoft Benchmark is run) is run from repository. Otherwise, "Application" is run from flatfiles.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Source file|Folder or file|No      |
|Run from repository|Option flag|Yes     |



### Errors

The predefined USoft applications cannot be run from repository. If you set "Run from repository" = Y and "Application" to 'USD', 'USAUTH', 'USTESTER', 'USERVICE' or 'UDELIVER', it's an error.

You cannot run TDF imports against a version-controlled repository. Attempting this results in an error.