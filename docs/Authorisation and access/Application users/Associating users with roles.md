# Associating users with roles

To give a user access to data, jobs and components associated with a role, you need to associate the user with the role.

Roles belong to applications. You must identify the application that you want the user to access.

A user may be associated with 1 or with multiple roles of the application, or with no roles at all. If a user has multiple roles:

- If the application runs WITHOUT the "merged roles" arrangement, the role that the user is given on login is the user's *default role* for the application. Under this arrangement, there will be some application-specific feature that allows the user to switch to a different role. Without such a feature, there is no point in giving the user other roles than the default role.

- If the application runs WITH the "merged roles" arrangement, the user has access to the combination of all the resources of all the roles on login, regardless of which of the roles is the *default role* for that user and that application.

If the role you want to associate a user with is not listed in the Authorizer, you must **import** the role first.

You can associate a user with a role by looking from the point of view of the **user** (2nd section below), or from the point of view of the **application** (3rd section below).

### Importing roles

To get into USoft Authorizer the latest listing of roles for an application:

1. In USoft Authorizer, choose Tools, Fill Authorizer Tables from the menu.

2. Specify the application.

3. Specify whether you want to read role definitions from repository or from flatfile. In the latter case, check the "From conceptual file" checkbox and specify the filepath.

4. Specify whether or not you want obsolete entries removed from USoft Authorizer. Obsolete entries are roles listed in Authorizer that are no longer listed in Definer.

5. Press OK or Apply.

### For a user, associating the user with a role

To associate a user with a role, looking at this task from the point of view of the **user**:

1. In USoft Authorizer, double-click on the user in the catalog on the left-hand side.

The Application Users window opens for the user. The user's roles are displayed on the Roles tab.

2. On the Roles tab, on an empty line, identify the application and role you want to associate the user with. In the Default Role column, indicate whether or not the role is the Default Role (for the application and the user). A user must have exactly 1 Default Role for each application.

### For an application, associating a user with a role

To associate a user with a role, looking at this task from the point of view of the **application**:

1. In USoft Authorizer, double-click on the application in the catalog on the left-hand side.

The Applications window opens for the application. The application's roles are displayed on the Roles tab. The associated Users are displayed on the Users tab at the bottom of the window.

2. On the Roles tab, click on the Role you want to associate the user with.

3. On the Users tab, on an empty line, identify the user. In the Default Role column, indicate whether or not the role is the Default Role (for the application and the user). A user must have exactly 1 Default Role for each application.

###  