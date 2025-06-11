---
id: Release_custom_folder
---

# Release custom folder




:::note

This article is about the **Release custom folder**[Delivery Manager action](/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Release custom folder**

Copies all files and, recursively, folders contained in "Source folder" to "Destination folder" which is a location in the "custom" section of the release tree.

If "Overwrite" = 'Y', any existing contents of "Destination folder" are first removed.

When you call this action, if the current release has "Include attachments" = Yes, attachments for the "custom" section (if any are defined) are copied to the specified subfolder of the "custom" section folder. This happens only to attachments that have Blocked = No (the default) and only to attachments associated with "Destination folder" or with a descendant folder of "Destination Folder". If a Custom XSL transformation is defined for the attachment, this transformation is applied to the output.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Source folder|Folder or file|No      |
|Destination folder|Folder or file|No      |
|Overwrite|Option flag|No      |



### Errors

The input value for "Destination folder" (the value that you specify in the "Folder or file" column) must start with:

```
${release}\custom
```

Otherwise, it's an error.