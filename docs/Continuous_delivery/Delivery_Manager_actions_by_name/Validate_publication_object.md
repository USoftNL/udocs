---
id: Validate_publication_object
---

# Validate publication object



> [!NOTE]
> This article is about the **Validate publication object**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

## **Validate publication object**

1. Checks that a publication configuration by the name of the Publication Configuration of "Publication Object" exists in "Database account" for the Application that is the Application of "Publication Object".

2. If "Publication Object" has a specified Page Set, checks that a page set by the name of the Page Set of "Publication Object" exists in "Database Account" for the Application that is the Application of "Publication Object".

If both Step 1 and Step 2 are successful:

3. Sets the "Publication folder" of "Publication object" to the current Publish Directory of the Publication Configuration found in Step 1.

4. Sets the "Alt folder" of "Publication object" to the current Alt Template Folder of the Publication Configuration found in Step 1.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Publication object|Publication object|No      |
|Database account|Database account|No      |



### Errors

You cannot have a "Validate publication object" task step in a task that also has a "[Release publication](/docs/Continuous_delivery/Delivery_Manager_actions_by_name/Release_publication.md)" task step or a "[Publish publication object](/docs/Continuous_delivery/Delivery_Manager_actions_by_name/Publish_publication_object.md)" task step (for the same Publication Object). The reason is that the "Validate" operation could change the Publish Directory that is essential for the "Release" or "Publish" operation. UDeliver can propagate this value change when it re-checks the task, but not within one and the same run of the task.