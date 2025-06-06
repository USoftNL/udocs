---
id: USoft_Authorizer_as_a_module
---

# USoft Authorizer as a module

USoft recommends that in USoft 10, you declare the USoft Authorizer application as a module in your Development environment by following these steps:

1. Open Definer in your Development environment.

2. In the Application Modules window (accessible from the menu via Tools, Manage Internal Interfaces, Modules), declare USoft Authorizer as a module:

- Module Name: USAUTH

- Load Module: Yes
- Description: the USoft Authorizer

3. In the Internal Interface Consumers window (accessible from the menu via Tools, Manage Internal Interfaces, Consumed Interfaces), declare the USAUTH module as a consumed module:

- Module Name: USAUTH
- File to be used in the synchronization process: \<USoft installation directory>\\APP\\USAUTH.con

4. Press the "Synchronize Internal Interfaces" button.

The remainder of this help topic helps you understand the implications of declaring USoft Authorizer as a module. For more general information about modules, please go to USoft Definer Help.

## The "classic" view of USoft Authorizer as a separate application

The layer of authorisation rules is always checked by the runtime Rules Engine. The "classic" or default view of authorisation rules in USoft is as a separate layer defined in a separate application (USoft Authorizer). In this setup, the application rules (the Rules Engine) defined in USoft Definer and the authorisation rules defined in USoft Authorizer are in different metamodels:

- The Rules Engine has no knowledge of authorisation rules. It only knows about roles and what each role gives access to.
- USoft Authorizer has no knowledge of application rules other than a list of tables and columns (obtained through USoft Authorizer's Fill Authorizer Tables routine).

*Example*

A user application may have Projects, Persons, and Project Team Members, with Project Team Member as an intersection table between the Project and Person tables. Content in these (3) tables must determine which projects a given person has access to. In the "classic" USoft Authorizer setup, the only way to achieve this is to run the Fill Authorizer Tables routine, define a Table Right on the Project table, and append an authorisation Condition to that Table Right of the following type:

```
project_id in (
	   select    ''
	   from      project_team_member ptm
	   ,         person p
	   where     ptm.person_id = p.person_id
	   and       p.login_name = USER
	)

```

This arrangement is cumbersome. As the example shows, data access is often controlled by a combination of content in application tables and content in authorizer tables. But the application has no knowledge of the authorisation layer.

## Workaround: declared authorisation tables

For this reason, in the past, many USoft teams declared authorisation tables (T_AUTH_... prefixed tables delivered by USoft) AS IF they were part of the user application. This is possible because in the USoft architecture, T_AUTH_... tables are always present. Moreover, the "T_AUTH_..." prefix guarantees that there is no confusion between USoft Authorizer and the user application.

This workaround, however, is suboptimal. It implies illegal use of the USoft Authorizer tables. The workaround does not guarantee that restrictions implemented by domains, relationships and constraints within the USoft Authorizer application (as delivered by USoft in the "USAUTH.con" binary file) are enforced at data manipulation time. Violations could surface at a later time.

## Optimal solution: authorisation as a module

USoft is now able to deliver modular development. To be a module of your application at development time is the ideal status for USoft Authorizer, because this enables the combination of two desirable things:

- The restrictions laid down in "USAUTH.con", and thereby the authorisation data quality, is automatically enforced.

- The data structure of USoft Authorizer tables is available to developers of your application. For example, they can write constraints directly against the T_AUTH_USER table.