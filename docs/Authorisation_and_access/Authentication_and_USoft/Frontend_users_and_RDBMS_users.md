---
id: Frontend_users_and_RDBMS_users
tags: [USoft11]
---
# Front-end users and RDBMS users

`USoft 11``{.vs_11}`

This article is for USoft 11 only. For USoft 10, go to [Account Funneling](/Authorisation_and_access/Authentication_and_USoft/Account_funneling.md).

In USoft web solutions, in Production, authentication of end users is typically performed by USoft. On behalf of end users, under the hood, USoft accesses the RDBMS using an RDBMS username/password combination. This has 2 distinct purposes:

- Enhanced security. Web users do not connect to the database directly. It is much harder to hack the application by SQL injection strategies.
- Ease of administration. DBAs need to grant and facilitate only a single RDBMS user.

USoft 11 features a complete separation between, on the one hand, the RDBMS user responsible for database access, and on the other hand, **front-end users**. This distinction has been implemented for all applications: USoft applications: usd, creapp, runbatch, sqlscript, usclock, as well as user applications and batches built in USoft. It has been implemented from access via USoft Binder and also access via the command line.

In USoft 11, the concept of "funnel” and "funneling” has been dropped completely. In USoft Authorizer, a user no longer has an Account Type but only a Validation Agent.

## RDBMS user

To use a USoft application, you must prove that you are authorised to log on to the underlying RDBMS account.

If you access from USoft Binder, you do this by typing the RDBMS username/password combination in the Database tab.

If you access from the command line, you do this by typing the RDBMS username/password combination at the **-u** and **-pw** switches.

If you access a USoft web solution (whether page-based or service-based), RDBMS login will be transparant. You will be given a developed interface that makes a correct RDBMS connection on your behalf.

The RDBMS username/password combination need not be registered in USoft Authorizer, except if you want application end users authenticated directly by the RDBMS under that RDBMS account.

## Front-end users

### Authenticated by USoft

Register the username/password for the user in USoft Authorizer as an Application User.

Set Validation Agent to one of these options:

|**Validation Agent**|**Description**|
|--------|--------|
|USoft   |Human-readable passwords|
|USoft Hashed|Hashed passwords|



If you access a (page-based or service-based) USoft web solution, you will be provided with a Login dialog or other interface where you can specify username/password.

If you access from USoft Binder, you log on by filling out the Front-End User and Front-End Password fields in the Database tab.

If you access from the command line, you log on by providing the username/password combination at the **-fu** and **-fpw** switches. For successful access, you also need to specify the RDBMS username/password at the -**u** and **-pw** switches.


:::note

Prefer USoft Hashed for security reasons, except when you are in a secure internal (testing, debugging) environment and you benefit from having human-readable passwords.

:::

### Authenticated by the OS: Single sign-on (Windows Authentication)

Register the Windows username, but not the password, for the user in USoft Authorizer as an Application User.

Set Validation Agent to:

|**Validation Agent**|**Description**|
|--------|--------|
|Single Sign On|Password was already provided on OS entry|



If you access a (page-based or service-based) USoft web solution, the solution is provided in such a way that you do not need to take special action since you have already been authenticated by the Windows OS.

If you access from USoft Binder, you log on by setting the Front-End User name to your Windows user name and leaving the Front-End Password field empty.

If you access from the command line, you log on by omitting the **-fu** and **-fpw** switches. You do need to provide the **-u** and **-pw** switches for database access. If this database **-u/-pw** combination is registered in Authorizer, this database user will be set as the active application user. Otherwise, the application will check if the Windows user is available as a SSO (Single Sign-On) user. If so, it will set this SSO user as the active application user.


:::warning

If you access by specifying RDBMS user and password, and that user is registered in USoft Authorizer as RDBMS user, then you will be logged on as the RDBMS user, even if Windows authentication has also been set for you.

:::

### Authenticated by the RDBMS

Register the RDBMS username and password for the user in USoft Authorizer as an Application User.

Set Validation Agent to:

|**Validation Agent**|**Description**|
|--------|--------|
|RDBMS   |RDBMS password|



 If you access a (page-based or service-based) USoft web solution, you will be provided with a Login dialog or other interface where you can specify username/password. This username/password combination must be known to the RDBMS.

If you access from USoft Binder, you log on by typing the User and Password in the Database tab and leaving the Front-End User and Front-End Password fields empty.

If you access from the command line, you do this by providing username and password at the **-u** and **-pw** switches and leaving -**fu** and **-fpw** empty.


:::tip

This RDBMS account may be the underlying account that your USoft application uses for all database access, or it may be the RDBMS account of some RDBMS user other than the owner of the USoft tables. In the latter case, this other RDBMS user has access to the USoft tables through explicit GRANT statements having been made.

:::

### Disabling front-end user access

To disable the access that a front-end user has, set Active = No in the Application User record for the user in USoft Authorizer.