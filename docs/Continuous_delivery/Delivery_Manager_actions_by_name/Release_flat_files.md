---
id: Release_flat_files
---

# Release flat files



> [!NOTE]
> This article is about the **Release flat files**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Release flat files**

If "Database account" is specified, creates flatfiles for "Application" from "Database account"  in the \\flatfiles subdirectory of the current release folder.

If "Database account" is left empty, copies an already existing set of flatfiles to the \\flatfiles subdirectory of the current release folder.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |



### Notes

The output file names are application.file extension, for example, "MYAPP.CON". A flatfile is produced for "Application" for each of the following file extensions: .CON, .ESI, .SMG, .UMG. Any files/folders in the \\flatfiles subdirectory other than these output files remain unaffected.

When you call this action, if the current release has "Include attachments" = Yes, attachments for the "flatfiles" section (if any are defined) are copied to the specified subfolder of the "flatfiles" section folder. This happens only to attachments that have Blocked = No (the default). If a Custom XSL transformation is defined for the attachment, this transformation is applied to the output.

If the current release frame has "Include Packing Slip" = Yes:

- Last Used for the current release frame is set to the current date and time,
- a packing slip is compiled and registered for the current release frame,
- a copy of this packing slip (XML file) is placed in the release directory.