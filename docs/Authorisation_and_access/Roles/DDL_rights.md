---
id: DDL_rights
---

# DDL rights

![](./assets/b590da31-e9d3-48b2-a36a-69ca98d5b001.png)



**DDL rights** are the rights to Create, Alter and Drop database tables, that is, tables known to the RDBMS.

In USoft, you need DDL rights in order to run the "Create Table” routine for any application, eg. Authorizer, Definer, or the User Application that you are developing.

You  grant or revoke DDL rights by setting the **DDL Scope** attribute.

DDL rights are (for a given application) all-or-nothing, across-the-board rights. For an application, a role either has all DDL rights on all tables, or it does not have any DDL rights on any table. This makes “DDL Scope” an attribute of the role itself.

If you run with [merged roles](/docs/Authorisation%20and%20access/Introducing%20USoft%20authorisation/Merged%20roles.md), a user has DDL rights if-and-only-if he or she is assigned any role that has DDL Scope = Foreground-and-Background.

If you do not run with merged roles, a user has DDL rights if his or her current role has DDL Scope = Foreground-and-background.

A bootstrap problem would occur if nobody had the right to create tables in which to store the right to create tables. To prevent this bootstrap problem, a user has DDL rights by default if all of the following apply:

- No tables prefixed T_AUTH_… exist in the RDBMS, and:
- The application is not registered in T_AUTH_APPLICATION, and:
- There is no user with DDL rights.

> [!NOTE]
> In USoft 10 and earlier, all users always have all DDL rights.
> In USoft 11, the default ADMIN role has DDL rights.
> In USoft 11, you can no longer change the rights of the default ADMIN role itself. You can revoke DDL rights from users by creating new roles that do not have DDL rights and then assigning users to them.

## DDL Foreground scope

In DDL rights, **foreground scope** has the following meaning:

|**Access Type**|**Meaning of DDL Foreground Scope**|
|--------|--------|
|DDL     |<p>The right to run a USoft "Create Tables” routine directly, "from the surface”. This applies for example when a user:</p><p>- Chooses "Create Tables” from a context menu in USoft Binder.<br/>- Chooses “Create Physical Tables” from the Tools menu in USoft Definer.<br/>- Runs the "creapp.exe” command line.<br/></p>|



## DDL Background scope

> [!WARNING]
> Do not set DDL Scope to "Background only”. Prefer DDL Scope = None. Because running "Create Tables” in the background is currently not an option in USoft, the two settings amount to the same thing.

In DDL rights, **background scope** has the following meaning:

|**Access Type**|**Meaning of DDL Background Scope**|
|--------|--------|
|DDL     |<p>The right to run a USoft "Create Tables” routine **indirectly**, as the implied consequence of some surface action. Currently this is not an option in the USoft toolset.</p>|



## How to grant DDL rights to a role

To grant DDL rights to a role:

1. Choose Define, Roles from the Definer menu and retrieve the role for which you want to grant or remoke DDL rights.
2. In the top area of the window, set DDL Scope = . Save work.

## How to revoke DDL rights from a role

To revoke DDL rights from a role:

1. Choose Define, Roles from the Definer menu and retrieve the role for which you want to revoke DDL rights.
2. In the top area of the window, set DDL Scope = . Save work.