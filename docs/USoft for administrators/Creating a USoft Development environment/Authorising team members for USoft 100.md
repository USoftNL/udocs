# Authorising team members for USoft 10.0

> [!TIP]
> This article is about authorising team members in a **USoft 10.0** development environment.
> For the USoft 9.1 situation, click [here](/docs/USoft%20for%20administrators/Creating%20a%20USoft%20Development%20environment/Authorising%20team%20members%20for%20USoft%2091.md).

Team members play typical roles in a project. Think of developers, architects, analysts and administrators.

Developer roles give access to the different USoft tools in Development. USoft has created predefined developer roles for you. All you need to do is to open Authorizer and assign team members to the correct developer roles. The general steps are:

1. In Development, open USoft Authorizer.
2. Find the predefined roles for the tool you want to give access to. Use the “Authorizer names” table below to identify the tool.
3. Assign each team member to the required role.

> [!NOTE]
> Find more on USD roles in the next section.
> Find more on USAUTH, UDELIVER, USERVICE, USTESTER roles at the end of this article.

## Authorizer names for USoft tools

This is what the USoft tools are called in USoft Authorizer:

|**Authorizer name**|**Tool name**|
|--------|--------|
|USD     |<p>USoft Definer</p><p>USoft Web Designer</p><p>USoft Windows Designer</p>|
|USAUTH  |USoft Authorizer|
|UDELIVER|USoft Delivery Manager|
|USERVICE|USoft Service Definer|
|USTESTER|USoft Benchmark|



## Developer roles for USD

There are 7 developer roles for application USD (USoft Definer, USoft Web Designer, USoft Windows Designer). They are listed in the table below.

C-R-U-D stands for Create - Read - Update - Delete. This corresponds to INSERT - SELECT - UPDATE - DELETE access rights. All the access rights listed are foreground rights.

All the roles listed have full Job Rights and Component Rights with "Foreground and background” scope.

To find out what are the "Teamwork objects”, see the table below. "Technical objects” are all the remaining objects.

> [!CAUTION]
> If you are upgrading from a USoft 9.1 situation with predefined access rights, all developers will automatically keep their roles and access rights.
> Most 9.1 teams use predefined access rights only. But if your team *changed* the access rights of a predefined role, something that was possible in 9.1 but no longer in 10.0, then these changes will be lost on upgrade. Instead, 10.0 team members will automatically get the predefined access rights listed below.

### Developer roles for USD, access rights

> [!WARNING]
> The USD_REP_OWNER role is for backward compatibility with USoft 9.x only. Use the ADMIN role instead.

|**Developer role**|**Description**|**Teamwork objects**|**Technical objects**|
|--------|--------|--------|--------|
|ADMIN   |Super user group|CRUD on all|CRUD on all|
|USD_ARCHITECT|Architects|CRU on all|R on all|
|USD_DEVELOPER|Developers with Teamwork|<p>R on:<br/>			Sessions<br/>			Notes<br/>			Business Areas</p><p>CRU on others</p>|CRUD on all|
|USD_DEV_NO_STUDIO|Developers with Teamwork, see section below on NO_STUDIO roles|<p>R on:<br/>			Sessions<br/>			Notes<br/>			Business Areas</p><p>CRU on others</p>|CRUD on all|
|USD_DEVELOPER<br/>			_RULES_ONLY|Developers with Teamwork, Rules only|<p>R on:</p><p>Sessions<br/>			Notes<br/>			Business Areas</p><p>CRU on others</p>|<p>CRUD on:</p><p>Constraints<br/>			Decisions<br/>			GUI objects</p><p>R on others</p>|
|USD_DEV<br/>			_RULES_ONLY<br/>			_NO_STUDIO|Developers with Teamwork, Rules only, see section below on NO_STUDIO roles|<p>R on:</p><p>Sessions<br/>			Notes<br/>			Business Areas</p><p>CRU on others</p>|<p>CRUD on:</p><p>Constraints<br/>			Decisions<br/>			GUI objects</p><p>R on others</p>|
|<p>USD_MAINT<br/>			_NO_TEAMWORK</p>|Developers without Teamwork|R on all|CRUD on all|
|USD_READ_ONLY|Read-only user group|R on all|R on all|
|USD_REP_OWNER|(Same as ADMIN, only for backward compatibility)|(CRUD on all)|(CRUD on all)|
|USD_TWRK|Business experts|<p>RU on:</p><p>Business Objects<br/>			Business Process Steps<br/>			Business Rules<br/>			Design Documents</p><p>CRU on others</p>|R on all|
|USD_TWRK_NO_STUDIO|Business experts, see section below on NO_STUDIO roles|<p>RU on:</p><p>Business Objects<br/>			Business Process Steps<br/>			Business Rules<br/>			Design Documents</p><p>CRU on others</p>|R on all|



### NO_STUDIO developer roles for USD

The roles ending in **..._NO_STUDIO** are relevant if your team is using USoft Studio for specifications that you carry over to USoft Definer via the USoft Studio - USoft Definer import bridge.

In this setting, you want team members to manipulate Business Rules in USoft Studio, not in USoft Definer.

The ...NO_STUDIO Definer roles guarantee that the user does not manipulate, in USoft Definer, Business Rules that come in from USoft Studio.

As you can see from the table above, 3 USD developer roles have "..._NO_STUDIO” variants:

|**USD developer role**|**..._NO_STUDIO variant**|
|--------|--------|
|USD_DEVELOPER|USD_DEV**_NO_STUDIO**|
|USD_DEVELOPER_RULES_ONLY|USD_DEV_RULES_ONLY**_NO_STUDIO**|
|USD_TWRK|USD_TWRK**_NO_STUDIO**|



> [!WARNING]
> If you come from a USoft 10 version earlier than 10.0.1J, you cannot see the ..._NO_STUDIO roles until you execute Fill Authorizer Tables. Do this in Authorizer for Application = USD.

### Developer roles for USD, Teamwork objects

 

|**Database table name**|**Object name plural**|
|--------|--------|
|T_ATT_SESSION|Sessions|
|T_ATT_SET|Note Sets|
|T_ATTENTION|Notes   |
|T_BO_IMPLEMENT_TYPE|Implementation Types|
|T_BUSINESS_AREA|Business Areas|
|T_BUSINESS_OBJECT|Business Objects|
|T_BUSINESS_PROCESS_STEP|Business Process Steps|
|T_BUSINESS_RULE|Business Rules|
|T_BUSINESS_RULE_HISTORY|Business Rule History Entries|
|T_CLASSIFICATION|Classifications|
|T_CURRENT_VERSION|Current version|
|T_DESIGN_DOCUMENT|Design Documents|
|T_EXP_DEF (*)|Export Definitions (*)|
|T_MOTIVATION|Motivations|
|T_REP_DEFINITION|Repository Definitions|
|T_REP_VERSION|Repository Versions|
|T_RULE_SET|Rule Sets|
|T_SOURCE|Sources |



(*) and related tables (table names beginning with “T_EXP_ ...”).

## Developer roles for USAUTH, UDELIVER, USERVICE, USTESTER

Developer roles for these 4 applications follow largely the same pattern, as will be clear from the tables below. USAUTH has 1 special role (USAUTH_USER).

### Developer roles for USAUTH

There are 4 developer roles for application USAUTH (USoft Authorizer).

|**Developer role**|**Description**|**Access rights**|
|--------|--------|--------|
|ADMIN   |Super user group|<p>Full Table Rights on all tables</p><p>Full Job Rights on all jobs</p><p>Full Component Rights on all components</p>|
|USAUTH_BACKGROUND|Background-only access|<p>Background-only Table Rights<br/>			on all tables</p>|
|USAUTH_READ_ONLY|Read-only access|Select rights on all tables|
|USAUTH_USER|Role that allows a user to see and change his properties.|T_AUTH_ROLE_USER: Select rights only.<br/>			T_AUTH_USER: Select and Update rights, but Select only on selected columns, and Update only on columns: DISPLAY_NAME, USERNAME.<br/>			T_AUTH_USER_PROP: Select and Update rights, but Update only on column: VALUE.|



### Developer roles for UDELIVER

There are 3 developer roles for application UDELIVER (USoft Delivery Manager).

|**Developer role**|**Description**|**Access rights**|
|--------|--------|--------|
|ADMIN   |Super user group|<p>Full Table Rights on all tables</p><p>Full Job Rights on all jobs</p><p>Full Component Rights on all components</p>|
|UDELIVER_BACKGROUND|Background-only access|<p>Background-only Table Rights<br/>			on all tables</p>|
|UDELIVER_READ_ONLY|Read-only access|<p>SELECT Table Rights on all tables</p>|



### Developer roles for USERVICE

There are 3 developer roles for application USERVICE (USoft Service Definer).

|**Developer role**|**Description**|**Access rights**|
|--------|--------|--------|
|ADMIN   |Super user group|<p>Full Table Rights on all tables</p><p>Full Job Rights on all jobs</p><p>Full Component Rights on all components</p>|
|USERVICE_BACKGROUND|Background-only access|<p>Background-only Table Rights<br/>			on all tables</p>|
|USERVICE_READ_ONLY|Read-only access|SELECT Table Rights on all tables|



### Developer roles for USTESTER

There are 3 developer roles for application USTESTER (USoft Benchmark).

|**Developer role**|**Description**|**Access rights**|
|--------|--------|--------|
|ADMIN   |Super user group|<p>Full Table Rights on all tables</p><p>Full Job Rights on all jobs</p><p>Full Component Rights on all components</p>|
|USTESTER_BACKGROUND|Background-only access|<p>Background-only Table Rights<br/>			on all tables</p>|
|USTESTER_READ_ONLY|Read-only access|SELECT Table Rights on all tables|