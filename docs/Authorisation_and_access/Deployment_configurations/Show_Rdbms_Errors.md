---
id: Show_Rdbms_Errors
---

# Show_Rdbms_Errors



> [!NOTE]
> This article is about the **Show_Rdbms_Errors**[deployment configuration parameter](/docs/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

## **Show_Rdbms_Errors**

*Allowed values*

```
{ True | False }
```

The underlined value is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter in the Additional Parameters list at the bottom of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

This is where you can specify whether you wish error messages from the RDBMS to be displayed or not.