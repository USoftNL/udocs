---
id: RulesEngineSetUser
tags: [USoft10]
---
# RulesEngine.SetUser



> [!NOTE]
> This article is about the **SetUser** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

## **RulesEngine.SetUser**

Changes the user connected to the Rules Engine from the current user to the user specified by the username value.

Calling this method is effective only if the Deployment Configuration parameter 'RdbmsConnect' has been set to 'auto'.

----

`USoft 10``{.vs_10}`

Authorisation data for the current user is cached. This information is NOT replaced by data about the newly specified user until the Rules Engine cacheRefreshPeriod has expired. This applies if the cacheRefreshPeriod setting is other than -1 or 0.

----

*Syntax*

```sql
SELECT RulesEngine.SetUser (
    *username,   password,   key*
)
```

The required *username* is the database user name of the user that must be connected instead of the current user.

The required *password* is this new user's password.

The required *key* value must be the empty string ( '' ). This option is currently not used but will serve in the future to allow logging or extra user authentication checks. For web applications, for example, the IP number could be passed using this option.

*Example*

```sql
SELECT RulesEngine.SetUser (
        'SMITH_JK'
,       'Fpc45xhwy'
,       ''
)
```

 