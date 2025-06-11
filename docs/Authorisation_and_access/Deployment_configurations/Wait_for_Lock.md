---
id: Wait_for_Lock
---

# Wait_for_Lock




:::note

This article is about the **Wait_for_Lock**[deployment configuration parameter](/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

:::

## **Wait_for_Lock**

*Allowed values*

```
{ True | False }
```

The underlined value is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter in the Additional Parameters list at the bottom of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

You can use this parameter to specify whether or not your application is to wait for locks in the database to be obtained.

If this parameter is set to True, every locking attempt will wait until it obtains the lock (or is timed out by the database).

If it is set to False, every locking attempt will return immediately when it fails.