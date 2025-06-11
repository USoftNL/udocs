---
id: Compare_data_files
---

# Compare data files




:::note

This article is about the **Compare data files**[Delivery Manager action](/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Compare data files**

Writes a comparison of metadata or appdata contained in "Left file" and "Right file" to "Output file".

If there are differences, the output contains DML instruction tags. These tags are instructions about how to upgrade the repository from which "Right file" was drawn to the repository from which "Left file" was drawn. In other words, "Left file" represents the target repository.

Performs the comparison by logging on to "Application" in "Database account". Logging on is necessary because there must be a basis for comparing records. That basis is each record's primary key column value, or combination of primary key column values. This key information is retrieved by logging on.

- If Application = USD, "Compare data files" will log on to the Definer application. This is for comparing metadata.
- If Application = UDELIVER, USAUTH, USERVICE, or USTESTER, "Compare data files" will log on to the corresponding USoft application, running from flat files.
- If Application = (other), "Compare data files" will log on to the corresponding User Application, running from repository.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Left file|Folder or  file|No      |
|Right file|Folder or  file|No      |
|Output file|Folder or  file|No      |



### 
Input files

"Left file" and "Right file" may contain metadata or appdata. They must be XML files produced by running one of the following Delivery Manager actions:

- Export metadata
- [Export all appdata](/Continuous_delivery/Delivery_Manager_actions_by_name/Export_all_appdata.md)
- [Export deliverable appdata](/Continuous_delivery/Delivery_Manager_actions_by_name/Export_deliverable_appdata.md)

You can also apply the "Compare data files" action to files produced by the "Release metadata" and "Release deliverable appdata" actions. Note, however, also that these two release actions already perform a comparison as part of their standard procedure. That comparison is equivalent to what "Compare data files" would produce.