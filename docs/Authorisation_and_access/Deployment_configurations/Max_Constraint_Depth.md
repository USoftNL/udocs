---
id: Max_Constraint_Depth
---

# Max_Constraint_Depth




:::note

This article is about the **Max_Constraint_Depth**[deployment configuration parameter](/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

:::

## **Max_Constraint_Depth**

*Allowed values*

```
*positive integer*
```

The default value is 50. This is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter in the Additional Parameters list at the bottom of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

This is where you specify the maximum number of recursions that may occur when constraints are checked. If the number is exceeded, processing is blocked and an error message is passed.