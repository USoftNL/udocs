---
id: ApplicationLogin
---

# ApplicationLogin()



> [!NOTE]
> This article is about the **ApplicationLogin** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ApplicationLogin()**

Establishes a connection with the RDBMS.

*Syntax*

```
ApplicationLogin( *username*, *password* )
```

The optional *username* is the name used for logging on to the RDBMS. If *username* is not passed, an automatic login for the operating system user is assumed.

The optional *password* is the password used for logging on.

You cannot call ApplicationLogin() from a script context in Windows Designer.

You can only call ApplicationLogin() when the application is running from flat files.

To make sure that the ApplicationLogin() action functions correctly, you must provide a value for the Owner field in the USoft Binder project properties for the project concerned. See your USoft Binder Help for more details.