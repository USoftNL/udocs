---
id: Account_funneling
tags: [USoft10]
---
# Account funneling

`USoft 10``{.vs_10}`

This article is for USoft 10 only. For USoft 11, go to [Front-end users and RDBMS users](/Authorisation_and_access/Authentication_and_USoft/Frontend_users_and_RDBMS_users.md).

In USoft web solutions, in Production, authentication of end users is typically performed by USoft. On behalf of end users, under the hood, USoft accesses the RDBMS using an RDBMS username/password combination. This has 2 distinct purposes:

- Enhanced security. Web users do not connect to the database directly. It is much harder to hack the application by SQL injection strategies.
- Ease of administration. DBAs need to grant and facilitate only a single RDBMS user.

In USoft 10.x, the end user was referred to as a **funneling user** and the RDBMS user was referred to as the **funnel user**. The desired authentication was achieved in USoft Authorizer by setting Account Type and Validation Agent for individual username/password combinations.

In USoft 11, the concept of "funnel” has been replaced by a distinction between **front-end user** and **RDBMS user.**

In USoft 10.x, in USoft Authorizer, the funnel user had Account Type = Funnel and Validation Agent = RDBMS. The funneling users had Account Type = Funneling and a Validation Agent other than RDBMS.


:::warning

USoft Authorizer prevents users with Account Type = Funnel from connecting with a Rules Engine through a Rules Service or other web-based service.
This is why you should set Account Type = Funnel for the funnel user who accesses the database, and Account Type = Funneling for runtime end users.

:::

Account funneling was applied to USoft URL-based applications built with Web Designer and Service Definer. Rules Engine requests are handled by a Rules Service, which is a server process and not, as in Client/Server, a user process.


:::note

Account funneling could also be applied to USoft C/S applications, in order to gain advantage of other Validation Agents such as the operating system:

:::

### Summary: Account Type (USoft 10)

Here are possible USoft 10 settings for Account Type and associated settings for Validation Agent:

|**Account Type**|**Description**|**Validation Agent**|
|--------|--------|--------|
|RDBMS   |User corresponds to an RDBMS user and accesses database tables directly, in schemes *other* than account funneling.|RDBMS   |
|Funnel  |User corresponds to an RDBMS user and accesses database tables directly on behalf of Funneling users.|RDBMS   |
|Funneling|User is shielded from direct database access. Database access is via the Funnel user who configured the service (eg., Rules Service) or API. Intended for end users connecting to Rules Services, REST APIs and other web services.|(Other) |



 