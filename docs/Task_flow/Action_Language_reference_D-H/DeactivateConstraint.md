---
id: DeactivateConstraint
---

# DeactivateConstraint()



> [!NOTE]
> This article is about the **DeactivateConstraint** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **DeactivateConstraint()**

Dynamically sets a constraint to Active = No. The result is that, temporarily, the Rules Engine will **ignore** the constraint.

> [!WARNING]
> This action is effective only if you have set the [Allow_Disable_Constraint](/docs/Authorisation_and_access/Deployment_configurations/Allow_Disable_Constraint.md) deployment configuration parameter for the runtime environment.

> [!CAUTION]
> Deactivating constraints goes counter to the general purpose of USoft Rules Engines.
> It removes the guarantee that application data are conformant with the data integrity defined for the Rules Engine.

 *Syntax*

```
DeactivateConstraint( *constraint-name* )
```

The required *constraint-name* is the Constraint Name as defined in USoft Definer.

A common context for this action is an Action Task in a Job.

> [!NOTE]
> In addition to **DeactivateConstraint()**, there exist further actions for re-activating a de-activated constraint, for activating and de-activating all constraints in one go, for deactivating and re-activating relational checks, and more. Go to
>  