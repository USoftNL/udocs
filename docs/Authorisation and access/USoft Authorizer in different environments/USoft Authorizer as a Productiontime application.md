# USoft Authorizer as a Production-time application

When you deliver a USoft solution to Production or to any other non-Development environment, access rules have a different status from other deliverables (application rules, UIs, batches...). Access rules determine

- how users are authenticated,
- which user is associated with which role or roles.

Unlike other deliverables, access rules are created, dropped, or changed in the Production environment, AFTER release time (that is, between two application releases).

To make this possible, USoft Authorizer is always a Production-time application in the same way that it is also a Development-time application. Typically, deliverables are released to Production in flat-file format, except for the content of authorisation tables. While USoft Definer's tables (prefixed T_..., eg. T_TABLE) exist only in Development, USoft Authorizer's tables (prefixed T_AUTH_..., eg., T_AUTH_USER) also exist as physical tables in Production:

![](/api/Authorisation%20and%20access/USoft%20Authorizer%20in%20different%20environments/assets/60e1a366-a0e8-4c8a-aa07-51a7f7c96b27.png)

**USoft Authorizer is a Production-time as well as a Development-time application**

In theory, this arrangement implies that all aspects of authorisation rules can be changed by a runtime administrator independently of application releases. In practice, however, authorisation rules tend to be so closely interrelated with other application functionality that developers usually deliver authorisation rules at release time as an integral part of the application.

In the past, USoft Authorizer as a runtime application was a useful interface for administrators such as helpdesk officers to add or remove application users from the system between releases. Adding and dropping application users between releases is of course still of vital importance, but now that USoft Authorizer is available as a module of your application, and with the growing importance of funneling accounts in web applications, these actions are now typically performed by data manipulation on an application-specific table such as a Person or a Team Member table.

This new arrangement makes it much easier to implement authorisation rules. However, the implication is that you choose a deployment strategy for transferring records in T_AUTH_... tables from Development to Production.

In Production, the USoft Authorizer application has lost much of its purpose, but it is still in most cases the primary interface for creating, changing or dropping runtime administrator access (eg., for helpdesk officers) between application releases. Usually, it is also a useful interface for inspecting and understanding runtime data access generally.

## Setting up authorisation for Production-time users

In Production environments, data access is controlled by USoft Authorizer in the same way as in Development.

However, the procedure for setting up Production authorisation is very different. Almost all production-time authorisation is determined at development time and then deployed as part of an application release.

A good way to deliver authorisation to any non-Development environment is to deliver authorisation data via USoft Delivery Manager routines. See the USoft Delivery Manager Guide for details. The remainder of this help topic just summarises how runtime authorisation is different from development-time authorisation.

Between application releases, authorisation in Production remains typically unchanged, except for:

- The list of **users** that have access to the application. It must typically be possible between releases to add new users, and to drop existing users.

- The **role** or **roles** that users are given to play in the application (the group or groups that they belong to). For example, it is often important between releases to be able to promote a user from read-only access to more extensive access rights.

In Production environments, there are **end users** who perform specific tasks within the application, and there are **administrator users** such as helpdesk officers who have more global privileges:

- The authorisation of **end users** is shaped as a runtime facility by developers and then deployed into Production. The functionality of introducing new users in a specific role is usually part of the application itself. When deploying subsequent releases, it is important that deployment procedures keep existing end user information intact.
- The authorisation of **administrator users** is set up in much the same way as for users in Development environments (see Setting up authorisation for developers). For example, a new helpdesk officer may be given access to the runtime application by being given a USoft Binder file with a password. When administrator users leave the company, USoft Authorizer is typically the runtime interface for changing their password or dropping their name.