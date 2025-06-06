---
id: Max_Prepared_Checks
---

# Max Prepared Checks



> [!NOTE]
> This article is about the **Max Prepared Checks**[deployment configuration parameter](/docs/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

## **Max Prepared Checks**

*Allowed values*

```
*positive integer*
```

The default value is 500. This is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter by setting the Max Prepared Checks field in the General box at the top of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

The Max Prepared Checks setting is used to specify the maximum number of prepared checks kept in cache, for example, constraints and internal foreign key checks. It is is not related to record fact cache. A higher value for the Max Prepared Checks setting reduces the time required to recalculate checks (CPU time), but increases memory usage.