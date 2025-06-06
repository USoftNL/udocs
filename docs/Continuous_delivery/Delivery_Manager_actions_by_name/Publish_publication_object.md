---
id: Publish_publication_object
---

# Publish publication object



> [!NOTE]
> This article is about the **Publish publication object**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Publish publication object**

For the application named by "Publication object", publishes either the Application or a specified Page Set against the Publication Configuration defined in "Database account" that is named by "Publication object".

As a preparatory step, checks the validity of "Publication Object" in the same way as the “[Validate publication object](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Validate%20publication%20object.md)” action. During this step, the "Publication folder" of "Publication object" in Delivery Manager is set to the current Publish Folder of the Publication Configuration that will be published against.

Writes the output to the Publication Configuration's Publication folder, as per the standard Web Designer procedure.

To release this output to the release tree, use the “[Release publication](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Release%20publication.md)” action instead.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Database account|Database account|No      |
|Publication object|Publication object|No      |



### Errors

You cannot have a "Publish publication object" task step in a task that also has a " [Validate publication object](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Validate%20publication%20object.md)" task step (for the same Publication Object). The reason is that the "Validate" operation could change the Publish Directory that is essential for the "Publish" operation. UDeliver can propagate this value change when it re-checks the task, but not within one and the same run of the task.