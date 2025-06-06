---
id: Allow_disable_constraints
---

# Allow disable constraints



> [!NOTE]
> This article is about the **Allow disable constraints**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

## **Allow disable constraints**

In "Database account", in USoft Authorizer, sets the "Allow_Disable_Constraint" deployment configuration parameter for the LAN deployment configuration to:

- True if "Allow disable constraint" = 'Y',
- False if "Allow disable constraint" = 'N'.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Database account|Database account|No      |
|Allow disable constraint|Option flag|No      |



### Notes

The setting is effectuated for each of the 3 contexts, ie., C/S, Runbatch, and RulesService.