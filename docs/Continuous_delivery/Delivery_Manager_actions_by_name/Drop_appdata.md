---
id: Drop_appdata
---

# Drop appdata



> [!NOTE]
> This article is about the **Drop appdata**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

## **Drop appdata**

Drops, then re-creates application data tables for "Application" in "Database account". The net result is that existing application data (if any) are dropped.

This is equivalent to running Create Tables from the context menu of a Binder item with Drop Existing Tables = Yes.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |



### Notes

You cannot use this action for the USD application (the USoft Definer application).

You cannot use this action for the UDELIVER and USAUTH applications in the current repository, that is, in the repository that you run the Drop Appdata action from.

If "Application" is a user application or a module, the input for the operation is read from repository. If "Application" is one of the USoft applications USAUTH, UDELIVER, USERVICE, or USTESTER, the input is read from flatfile.