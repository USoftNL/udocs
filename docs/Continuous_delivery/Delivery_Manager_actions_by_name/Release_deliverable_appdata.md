---
id: Release_deliverable_appdata
---

# Release deliverable appdata




:::note

This article is about the **Release deliverable appdata**[Delivery Manager action](/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Release deliverable appdata**

1. Creates a file containing deliverable application data of "Application" by exporting from "Database account" to the \\appdata folder of the current release folder. The resulting file is called "application.xml".

2. If a value for the optional "Added XSL" parameter is passed, applies to the result of Step 1 the XSL transformation defined as the Custom XSL of that name.

3. Creates, in the same \\appdata folder written to in Step 1, a diff file that compares the export file created in Step 1 with the export file of the same name found in the \\appdata folder of the previous release frame. The output file name is "application.diff.xml". For more details on this file, see the "Diff file format" section below.

To read the data, this action automatically opens the application from Repository, except when Application = USERVICE (the Service Definer application delivered by USoft), in which case the application is automatically opened from Flat Files.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Added XSL|Custom XSL|Yes     |



### Initial comparison (Step 3)

If the current release has Initial = Yes, an *initialisation file* is created in addition. The name of this file is "*application*.initial.xml". The initialisation file contains only the following nodes of the XML export file created in step 1:

- the \<MultiExport> document node.
- its immediate child elements. These are elements based on Object Name Plural values. They have a documentName attribute.

If the current release has Initial = Yes, the diff file created in Step 3 is a comparison with the initialisation file rather than with previously released appdata, since no such appdata was previously released.

### Diff file format (Step  3)

The diff file format is the mixed XML format that USoft produces by default for comparison outputs. This format is characterised by the use of \<Delete> elements for DELETEs and for UPDATEs of primary key columns, by the use of \<Update> elements for other UPDATEs, and by the fact that \<Insert> elements do not appear. This format is more fully described in the Knowledge Base on USoft Community (look for the Compare help topic).
The generated usoft-xml processing instruction is given the setting

```
verify-original-values" = "no-check-on-pk"
```

rather than

```
verify-original-values" = "no"
```

This prevents problems with child Deletes already executed as a result of cascading delete rules if you decide to upgrade deliverable appdata in a target repository by using the diff file.

### Attachments and packing slip

When you call this action, if the current release has "Include attachments" = Yes, attachments for the "appdata" section (if any are defined) are copied to the specified subfolder of the "appdata" section folder. This happens only to attachments that have Blocked = No (the default). If an Added XSL transformation is defined for the attachment, this transformation is applied to the output.

If the current release frame has "Include Packing Slip" = Yes:

- Last Used for the current release frame is set to the current date and time,
- a packing slip is compiled and registered for the current release frame,
- a copy of this packing slip (XML file) is placed in the release directory.

### Other similar actions

To export deliverable appdata to a destination folder of your choice, instead of to the release folder, you can call "[Export deliverable appdata](/Continuous_delivery/Delivery_Manager_actions_by_name/Export_deliverable_appdata.md)".

To export all appdata for "Application" and "Database account" to a folder of your choice, you can call "[Export all appdata](/Continuous_delivery/Delivery_Manager_actions_by_name/Export_all_appdata.md)".