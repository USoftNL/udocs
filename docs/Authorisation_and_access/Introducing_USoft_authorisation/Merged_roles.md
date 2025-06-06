---
id: Merged_roles
---

# Merged roles

The roles of a USoft application are either **merged**, or they are not. They are merged if the ROLE_MERGE Rules Engine parameter is set to True. The default is False.

## How to merge roles

To merge roles, follow these steps:
1.    In USoft Definer, from the menu, choose Define, Rules Engine Parameters.
2.    Set the ROLE_MERGE parameter to True.


:::danger

This has an effect on authorisation and the runtime realisation of First Menu Pages across your entire application.

:::

## How to go back to unmerged roles

To go back to unmerged roles, follow these steps:
1.    In USoft Definer, from the menu, choose Define, Rules Engine Parameters.
2.    Set the ROLE_MERGE parameter to False.


:::danger

This has an effect on authorisation and the runtime realisation of First Menu Pages across your entire application.

:::

## What is the effect of merged roles?

Merging roles has an effect when there are users who hold multiple roles. When these users log on, they automatically exercise all the access rights they hold in all of their roles. Another way of saying this is that all the user's roles are considered current roles, and that it makes no difference which has been set as the user's default role.

Roles are merged on a permissive, rather than a restrictive basis: if the user has the right to access something on the basis of at least 1 of her roles, that is sufficient. The role that gives the most access rights overwrites more restrictive roles, not the reverse.

In USoft GUIs of an application with merged roles, when a runtime user logs on, USoft attempts to combine all the First Menu Pages associated with all the user's roles in a single overarching menu structure that contain all the menu items associated with all the roles. In the 2 USoft GUI tools (USoft Windows Designer and USoft Web Designer) you can define that a menu page is the First Menu Page of a role.

## What is the effect of unmerged roles?

In an application WITHOUT merged roles, each runtime user who logs on to the application exercises only the access rights of 1 role. If the user is associated with multiple roles, then only his current role applies.

At login time, that current role is the user's default role for the application. Each combination of user and application must have exactly 1 role that is the default role for that combination. You can set default roles in USoft Authorizer.

It is possible later in the session to switch to a different role. See below in this help topic.

In USoft GUIs of an application WITHOUT merged roles, when a runtime user logs on, the First Menu Page associated with his default role is displayed. If the session later switches to a different current role, this will cause the displayed menu to switch to the First Menu Page of that other role. In the 2 USoft GUI tools (USoft Windows Designer and USoft Web Designer) you can define that a menu page is the First Menu Page of a role.

## Getting the current role

You can get the current role by calling:

```sql
SELECT    ROLE()
```

## Switching the current role of a session

This is relevant only if you do NOT have merged roles. You can switch to a different current role, and thereby change your access rights and your First Menu Page (if in a USoft GUI), by calling:

```sql
SELECT    RulesEngine.SetRole( *role* )
```

For example:

SELECT    RulesEngine.SetRole( 'PLANNER' )

As a developer creating an application that is meant to be run WITHOUT merged roles, you can use this call to create a "switch role" facility for the application users.

As a result of switching to a different current role, the After Role Changed event takes place. In USoft Windows Designer, you can specify (via menu option File, Edit Application) additional actions to be performed when this event occurs.

## Getting the current user

You can get the current user by calling:

```sql
SELECT    USER
```

The USER keyword is a SQL keyword that you can use not only in the select-list but also in WHERE conditions.

## Switching the current user of a session

You can switch to a different *current user*, and thereby (if the user you switch to has a different default role) your access rights and your First Menu Page (if in a USoft GUI), by calling:

SELECT RulesEngine.SetUser( *username, password*, '' )

For example:

SELECT RulesEngine.SetUser( 'USER_1', 'USER_1_PASSWORD', '' )

This makes it easier to test the behaviour of an application for different users.

As a result of switching to a different current user, the After SetUser event takes place. Also, if the application runs WITHOUT merged roles, and if the new current user has a different default role, the After Role Changed event takes place. In USoft Windows Designer, you can specify (via menu option File, Edit Application) additional actions to be performed when these events occur.

 

 

 

 

 

 