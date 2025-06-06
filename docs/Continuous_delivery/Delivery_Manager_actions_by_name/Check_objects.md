---
id: Check_objects
---

# Check objects



> [!NOTE]
> This article is about the **Check objects**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

## **Check objects**

Checks the validity of objects for application "Application" in database account "Database account" depending on option flags:

- if "Check views" = 'Y', all Logical Views are checked;
- if "Check table constraints" = 'Y', all Table Constraints are checked;

and so on.

The "Check..." option flags are all optional. If you do not specify 'Y' or 'N' for a flag, that flag is set to 'Y'. To perform all the checks (recommended), you can leave all the flags unspecified.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Check views Y/N|Option flag|Yes     |
|Check jobs Y/N|Option flag|Yes     |
|Check domain constraints Y/N|Option flag|Yes     |
|Check RDMI component constructors Y/N|Option flag|Yes     |
|Check decisions Y/N|Option flag|Yes     |
|Check web service provider methods Y/N|Option flag|Yes     |
|Check .NET source code Y/N|Option flag|Yes     |
|Check roles Y/N|Option flag|Yes     |



### Notes

This action is equivalent to using the Tools, Check Repository options in USoft Definer, and to pressing Check buttons offered in various windows, such as the Check button in the Logical View window.

Only objects that do not have Correct = Yes are (re)checked.

For objects that have an Active Y/N flag (such as Table Constraints), only objects that have Active = Yes are checked.