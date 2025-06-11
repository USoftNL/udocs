---
id: Max_Driver_Conditions
---

# Max_Driver_Conditions




:::note

This article is about the **Max_Driver_Conditions**[deployment configuration parameter](/docs/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

:::

## **Max_Driver_Conditions**

*Allowed values*

`{ True \| False }`

The underlined value is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter in the Additional Parameters list at the bottom of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

In constraints where the primary key of the driving table cannot directly be found, the Rules Engine adds joins to the main SELECT statement (key-query or select-for-update) by calculating a path from the changed table to the driving table, to reduce the number of driver keys that are checked. In some situations, it can be useful to add not only the (first) path found to the driver, but also to add as many other conditions as possible. This may again reduce the number of driver keys to be checked. A disadvantage is that the main query becomes more complex and thus may require more time. You can use the Max_Driver_Conditions additional parameter to specify whether or not extra conditions should be added to the main query.
When this parameter is set to 'True', the Rules Engine will add as many conditions as possible to the main query.