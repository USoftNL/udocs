---
id: Allow_Disable_Constraint
---

# Allow_Disable_Constraint




:::note

This article is about the **Allow_Disable_Constraint**[deployment configuration parameter](/docs/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

:::

## **Allow_Disable_Constraint**

*Allowed values*

```
{ True | False }
```

The underlined value is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.
You can set this parameter in the Additional Parameters list at the bottom of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

By default, deactivation actions such as :

```
DeactivateAllConstraintChecks()
```

```sql
SELECT RulesEngine.SetProperty( 'ConstraintsActive', 'No' )
```

only have an effect if they are part of a USoft batch job that is started in batch mode, that is, with runbatch.exe.

The Allow_Disable_Constraint additional parameter is used to specify whether a call to such a deactivation action is (exceptionally) allowed to have any effect ALSO when called interactively in SQL Command and when called as part of a USoft batch job that is called interactively, for example, by including a statement of the following type in a script started in the SQL Command window:

```sql
INVOKE BATCHRUNNER.job WITH SELECT ...
```

If the Allow_Disable_Constraint parameter is set to True, depending on the Embedded Type (GUI, Batch, Rules Engine) this causes deactivation actions to be effective, in other words, they cause the Rules Engine to be disabled.


:::danger

Disabling a Rules Engine may lead to data that do not comply with defined rules. There is usually no good reason to allow deactivation except if you are handling very large data volumes and you find the Rules Engine checks slow down performance inacceptably. In this case, it is highly recommended to check the result of deactivation. Do this by running USoft Benchmark violation reports after the action has completed.

:::

- If you set Allow_Disable_Constraint to True, re-activation depends on how you called the deactivation action:
- If the deactivation action is in an interactively called batch job, deactivation is automatically terminated (ie., the Rules Engine becomes active again).
- If the deactivation action is in a script called from the SQL Command window that does not involve a job construct (as when INVOKE BATCHRUNNER is part of the script), deactivation remains in force until you terminate the application or call a re-activation action such as

ActivateAllConstraintChecks()