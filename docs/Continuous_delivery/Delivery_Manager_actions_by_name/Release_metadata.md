---
id: Release_metadata
---

# Release metadata




:::note

This article is about the **Release metadata**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Release metadata**

1. Places in the \\metadata directory of the current release folder an XML export file that describes the metadata of application "For application".

The output file name is "application.USD.xml" where application is the value of the "For application" parameter.

2. Creates, in the same \\metadata folder, a diff file that compares the XML export file created in step 1 with the XML export file of the same name found in the \\metadata folder of the previous release frame. The output file name is "application.USD.diff.xml". For more details on this file, see the "Diff file format" section below.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|For application|Application|No      |
|Database account|Database account|No      |



### Initial comparison (Step 2)

If the current release has Initial = Yes, an initialization file is created in addition. The name of this file is "application.USD.initial.xml". The initialization file contains only the following nodes of the XML export file created in Step 1:

- the \<MultiExport> document node.
- its immediate child elements. These are elements based on Object Name Plural values. They have a documentName attribute.

If the current release has Initial = Yes, the diff file created in Step 2 is a comparison with the initialization file rather than with previously released metadata, since no such metadata was previously released.

### Diff file format (Step 2)

The diff file format is the mixed XML format that USoft produces by default for comparison outputs. This format is characterised by the use of \<Delete> elements for DELETEs and for UPDATEs of primary key columns, by the use of \<Update> elements for other UPDATEs, and by the fact that \<Insert> elements do not appear. This format is more fully described in the Knowledge Base on USoft Community (look for the Compare help topic).

### Errors

An error is raised if you attempt to apply this action to a USoft application (for example: USAUTH), as opposed to a User application.

### Attachments and packing slip

When you call this action, if the current release has "Include attachments" = Yes, attachments for the "metadata" section (if any are defined) are copied to the specified subfolder of the "metadata" section folder. This happens only to attachments that have Blocked = No (the default).

If the current release frame has "Include Packing Slip" = Yes:

- Last Used for the current release frame is set to the current date and time,
- a packing slip is compiled and registered for the current release frame,
- a copy of this packing slip (XML file) is placed in the release directory.

### Other similar actions

To export metadata to a destination folder of your choice, instead of to the release folder, you can call "[Export metadata](/docs/Continuous_delivery/Delivery_Manager_actions_by_name/Export_metadata.md)".