# First Menu Pages of roles

In the 2 USoft GUI tools (USoft Web Designer and USoft Windows Designer), you can define that a menu page is First Menu Page of a role.

- If the application runs in distinct-role mode, the top-level menu displayed is the First Menu Page of the current role. If the session switches to a different current role, and that role has a different First Menu Page , the top-level menu will change dynamically.
- If the application runs in merged-role mode, the top-level menu displayed is an attempt by USoft to combine all the First Menu Pages of all the current roles*.*

### Setting a First Menu Page for a role

To set a First Menu Page for a role:

1. In the GUI tool, in the catalog on the left, click on the Menus tab.

2. Double-click the RoleMenus class. See that it has a Role entry for each role you defined in USoft Definer.

3. Open the Property Inspector for the role you want to set the First Menu Page of.

4. Set the First Menu Page property to that role (dropdown list.) Save work.

 

![](/api/Authorisation%20and%20access/Roles/assets/e6eee4be-5dad-4cce-a3eb-b79d5fa93ea5.png)

**MAIN_PLANNER is the First Menu Page of role PLANNER**