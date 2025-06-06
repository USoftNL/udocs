---
id: Testing_roles_and_menus
---

# Testing roles and menus

This help topic is an overview of different ways in which you can switch between different users, roles and menus in Development.

This is useful if you want to test the effect of roles and First Menu Pages that you are in the process of defining.

The easiest way to test the effect of roles and menus is by using the default USoft client/server (Windows) application that you can automatically run from repository. To test First Menu Pages defined in USoft Web Designer, you need to set up a web server and test by running a browser-based default application locally.

### Method 1: Varying user-role associations

You can test different roles by having a test user associated with a different role each time. To switch from role A to role B, remove the record in USoft Authorizer that associates the test user with role A, then introduce a record that associates this user with role B.

### Method 2: Varying the user's default role

You can also test different roles by giving a test user multiple roles and then varying the Default flag. A user has exactly 1 default role at any time. To switch from role A to role B, set Default = No in the record that associates the test user with role A, then set the Default = Yes in the record that associates the test user with role B.

### Method 3: Runtime role switch

You can also test different roles by calling the SetUserGroup method of the RulesEngine internal component. To switch to a role called ROLE_B at runtime, call:

```
select     RulesEngine.SetRole( 'ROLE_B' )

```


:::tip

When logged in, you can find out which role currently determines your access rights by executing:

:::

```
select     role()

```

### Method 4: Runtime user switch

You can also test different roles by having a separate test user for each different role, and then switching to a different runtime user by calling:

```
select     RulesEngine.SetUser( 'user', 'password', '' )

```

For example:

```
select     RulesEngine.SetUser( 'ROLE_B_USER', 'ROLE_B_PASSWORD', '' )

```


:::tip

You can find out the user as whom you are currently logged in:

:::

```
select     user

```

 

 