---
id: Authentication_and_USoft
---

# Authentication and USoft

> [!NOTE]
> See also: [Authentication in services](/docs/Services/Authentication_in_services/Authentication_in_services.md)

Authentication is the process of validating the credentials of a user logging on to an application or service. Usually, these credentials are a user name and a password.

In a USoft technology stack, you can set up authentication in a number of ways. This article looks at the different possibilities.

## Authentication by the RDBMS

Users may be authenticated by the RDBMS. Each Application User registered in USoft Authorizer corresponds to an RDBMS database account. USoft delegates authentication requests to the RDBMS. This authentication scheme is practical for quick temporary installations, eg. for demos and tutorials, because it re-uses for end user authentication the login to the database that you always need when running USoft. This authentication scheme is also still used in Production for USoft Client/Server solutions. It is the most traditional authentication scheme.

In this authentication scheme, a separate RDBMS account must be created for each USoft user. When a user logs on, USoft makes a connection to the database using that account.

In USoft Authorizer, users have Validation Agent = RDBMS.

## Windows Authentication with SQL Server: single sign-on

If you use the MS SQL Server RDBMS, you can achieve Windows Authentication: the RDBMS relies on the OS for authentication. This gives you single-sign-on to the RDBMS once you are successfully logged on to the Windows OS.

In USoft, to set up Windows Authentication, leave User, Password and Owner unspecified (empty, NULL). As always with USoft on SQL Server, specify the database you want to log on to in the part of the database connect string after the colon (**:**). This principle applies to logons declared in USoft tool interfaces (USoft Binder, USoft Delivery Manager) and also to USoft command lines (CMD commands such as usd.exe, creapp.exe…, and Blend directives such as \<pc:Creapp>, \<pc:RunRulesService>...).

If you leave User, Password and Owner empty in USoft Binder, Create-Tables will create USoft tables in the SQL Server “dbo” schema (= the full table names will have the "dbo.” prefix). In this scenario, Create-Tables for USoft Authorizer will create an Application User record for the “dbo” user. This allows you to specify authorisation for user "dbo”.

In USoft Authorizer, users have Validation Agent = Single Sign On

## Authentication by USoft

Users may be authenticated by USoft itself. In this scheme, the RDBMS has no knowledge of the different end users: they are registered only in USoft Authorizer, where each user's password is stored and validated.

In USoft Authorizer, users have one of the following Validation Agent options:

|        |        |
|--------|--------|
|USoft   |Human-readable passwords|
|USoft Hashed|Hashed passwords|



If authentication is by USoft, in USoft web applications, access to the web server is anonymous and USoft validates accounts with its own logon dialog. In this case, Web Server secure socket connections are required to avoid readable passwords being sent over the network. To avoid repeated logon dialogs upon each request, user credentials are cached at the server page level. The access right expires when the user does not use the application for some time. The expiration time is the session timeout as set for the application in the virtual directory of the web server.

### Allowing users to change their passwords

If authentication is by USoft, if you want to allow users to change their own password, you must give them the right to read and update records in a number of Authorizer tables. To permit this, you can create a special role for the USoft Authorizer application that contains those users allowed to change their own passwords, or add this right to all the roles that are allowed this.

## Authentication by the web server

In USoft web solutions, the technology stack has always at least 2 distinct tiers: a web server and a USoft tier. The web server handles incoming URL requests and passes them to the USoft tier.

The web server can grant or deny access to an internet user trying to access a web application. These grants are typically file access grants on a per-folder basis.

The web server requires each user to specify credentials unless it grants unrestricted access to all users. Credential checks range from plain password checks to more sophisticated authentication, responding to challenges that require client certificates. Also, a number of additional (third party) security products exist that integrate with the web server authentication, for example identity provisioning (IDP) and RSA security tokens.

Authentication by the web server is completely independent of settings in USoft.

## Authentication by a different external service

Users may be authenticated not by the RDBMS and not by USoft, but by an external service. This may be the web server (previous section) or a different external service, or a combination of both.

Dedicated security servers that implement authentication include identity providers (IDPs) and RSA token servers. For LDAP, see next section.

If required, an RDMI component can be defined to communicate with the external service by adding an application RDMI component. This component must be named **ExternalService** and must support a **validateCredentials** method. This method will be called for each validation request with six arguments:

- the Validation Agent specified in the Authorizer (the string "ExternalService"),
- the role via which the user claims access to the USoft application,
- the password stored for the user,
- the user name,
- the user-specified password,
- an optional parameter for additional credentials-related data such as an IP number.

If authentication is by an external service, USoft maintains the application accounts and generates external accounts, for example: Active Directory accounts, using RDMI components. These external accounts are used by the Web Server (e.g. IIS) for account validation. In such a setup, a USoft password management web application is used. As authentication by the web server is trusted, the USoft logon dialog that can be specified by the Web Designer is bypassed.

In USoft Authorizer, users have Validation Agent = External Service.

## Authentication delegated to a different authenticator

User authentication may be delegated to a different authenticator. This scheme eases maintenance and is userfriendly, because it reduces the number of passwords that a user needs to know.

In USoft Authorizer, users have one of the following Validation Agent options:

|        |        |
|--------|--------|
|LDAP    |Users are authenticated by having the LDAP (Lightweight Directory Access Protocol) RDMI component connect to a Directory Service such as Open LDAP or Microsoft Active Directory.|
|Operating System|USoft validates the supplied user credentials against the Windows operating system.|
|Single Sign On|USoft allows access on the basis of the user having successfully logged on to the Windows operating system.|
|Mapped Account|Other types of [mapped authentication](/docs/Authorisation_and_access/Authentication_and_USoft/User_account_mapping.md). Authentication is delegated to the validation agent that has been specified as the mapped account.|



## Summary: Validation Agents

For an Application User in USoft Authorizer, the **Validation Agent** attribute determines whether and how the user is authenticated:

|        |        |
|--------|--------|
|**Validation Agent**|**Description**|
|No Authentication Required|No attempt is made to authenticate this user.|
|RDBMS   |The Rules Engine attempts a temporary logon to the database to check whether the RDBMS can authenticate this user.|
|USoft   |The Rules Engine reads the password from the Authorizer table, and compares it with the password supplied by the user.|
|USoft Hashed|The password is given a basic level of protection. It is saved in the database as a sha512 hash automatically, instead of you having to build your own password security component.|
|External Service|The Rules Engine validates this user by calling a method named "validateCredentials" from an RDMI component named "ExternalService". The ValidateCredentials method is called with parameters: user name, password supplied by the user, agent information read from the Authorizer table, and the date of the last change of the account. The ExternalService RDMI component is intended to be built and implemented by the application developer.|
|LDAP    |This user is authenticated by having the LDAP (Lightweight Directory Access Protocol) RDMI component connect to a Directory Service such as Open LDAP or Microsoft Active Directory. To make this work, the LDAP RDMI component will have to be specialised with LDAP binding information. NOTE: The "Operating System" option will validate against Active Directory when user accounts are configured in Active Directory.|
|Operating System|The Rules Engine validates the user credentials against the Windows operating system. The nearest domain controller running an active directory service is consulted. The user is allowed access if a bind to Active Directory is successful. The bind uses LDAP_AUTH_NTLM mode to avoid using readable passwords in network transfers. NOTE: Failing authentication requests may cause account locking if so configured in Active Directory.|
|Single Sign On|The Rules Engine allows access to a user without checking credentials only if he already is logged on to the Operating System. If a password is specified, this option is equivalent to the 'Operating System' validation option.|
|Mapped Account|Authentication is delegated to the validation agent of the user specified as the mapped user. Account mapping allows authentication of a USoft account using the credentials of another account. For example, validation of a USoft application user named User1 using the password of an operating system user named User2. Typically, a set of USoft application accounts that serve different application roles might be authenticated by the password of one single account, which could be the password of the user's operating system account.|
|(null)  |The Rules Engine does not allow access to this user.|