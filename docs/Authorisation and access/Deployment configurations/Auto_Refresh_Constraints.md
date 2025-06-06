# Auto_Refresh_Constraints



> [!NOTE]
> This article is about the **Auto_Refresh_Constraints**[deployment configuration parameter](/docs/Authorisation%20and%20access/Deployment%20configurations/Deployment%20configuration%20parameters.md).

## **Auto_Refresh_Constraints**

*Allowed values*

```
{ True | False }
```

The underlined value is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter in the Additional Parameters list at the bottom of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

It is often useful to be able to use or test new or changed constraints without having to restart your application, especially during development. This applies only, of course, if the application runs from Repository. If it runs from Flat Files, you must generate a new .CON file, replace the old .CON file by it, and restart the application.

In a client-server application, this can be accomplished by manually running the RefreshConstraints() method. In a web environment, Rules Service engines must be restarted.

An alternative is to use the Auto_Refresh_Constraints deployment parameter. If this parameter is set to True, at the beginning of each new transaction the Rules Engine will check if there have been any changes made to the constraint definitions since the last time they were read. If so, all current constraints are cleared from memory and a new set of constraints are loaded before continuing with the transaction.

An example of where this feature would be useful is in combination with the modules functionality. You could add a special separate module to your application where all your ‘dynamic’ or temporary constraints are stored. This module would only be used for as long as it was needed. For example, a special extra discount for certain customers for a limited period.

> [!NOTE]
> The Auto_Refresh_Constraints parameter and the RefreshConstraints() method only apply to changes in constraints, not to changes in the data model. If an additional table is created, and it is used in a constraint, this will result in errors.