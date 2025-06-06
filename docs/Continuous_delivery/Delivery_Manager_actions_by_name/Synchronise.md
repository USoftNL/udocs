---
id: Synchronise
---

# Synchronise




:::note

This article is about the **Synchronise**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Synchronise**

Performs the standard "synchronise Internal Interfaces" routine of USoft Definer for consumer "Application" as defined in "Database account", with special behavior in 2 respects:

1. Part of this routine is detecting any objects not interface objects before, that will be overwritten by the routine. If such objects exist, instead of presenting an interactive overview (the default synchronise behavior), a blocking error is raised ("Cannot synchronise. There are objects currently not interfaces that would be overwritten on synchronise.")

2. Raises an error ("Cannot proceed. There are incorrect interfaces after synchronise.") if incorrect interfaces exist as a result of synchronise. If this error is raised, Step 1 is not undone.


:::warning

This action is available in Delivery Manager only for completeness. Synchronisation is normally a design-time, not a release-time activity. This activity is normally carried out manually after discussion. It is NOT usually good practice to execute this action as part of a UDeliver task that has the purpose to release deliverables.

:::

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |



 