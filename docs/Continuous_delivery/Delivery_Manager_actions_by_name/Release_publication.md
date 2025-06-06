---
id: Release_publication
---

# Release publication



> [!NOTE]
> This article is about the **Release publication**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Release publication**

You can only call this action for the "Database account" that is the database account of the "Publication Object".

1.Validates "Publication object". For details of this step, see the description for the “[Validate publication object](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Validate%20publication%20object.md)” action.

2.For the application named by "Publication object", publishes either the Application or a specified Page Set against the Publication Configuration defined in "Database account" that is named by "Publication object".

This step is the same as the “[Publish publication object](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Publish%20publication%20object.md)” action. Its output is written to the Publication Configuration's Publication folder.


3.Releases the result of Step 2 to the \\publications section of the current release folder, in a subfolder by the name of "Publication object", excluding any folders and files marked as Blocked at the level of the Publication Object.

When you call this action, if the current release has "Include attachments" = Yes, attachments for the "publications" section (if any are defined) are copied to the specified subfolder of the "publications" section folder. This happens only to attachments that have Blocked = No (the default). If a Custom XSL transformation is defined for the attachment, this transformation is applied to the output.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Database account|Database account|No      |
|Publication object|Publication object|No      |



### Errors

You cannot run "Release publication" against a Publication Object that has never been validated in Delivery Manager and therefore does not have a value for "Publication Object". Solution: Run “[Validate publication object](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Validate%20publication%20object.md)” for the Publication Object first. This must be done in a different Task, see next alinea.

You cannot have a "Release publication" task step in a task that also has a " Validate publication object" task step (for the same Publication Object). The reason is that the "Validate" operation could change the Publish Directory that is essential for the "Release" operation. UDeliver can propagate this value change when it re-checks the task, but not within one and the same run of the task.