# Deactivating and Reactivating Checks and Constraints

In some circumstances, you may want to deactivate certain checks or constraints. For example, when you define a job which is to import data , where you know that all the data to be imported is accurate and valid, you might turn off some constraints that check the data. In this way, you can improve the performance of the import task.

To do this, you can use one of the actions described below. The actions that deactivate are only valid for the duration of the job.

To deactivate and reactivate all constraints, you can use the following actions in an action task:

```
DeactivateAllConstraintChecks()
ActivateAllConstraintChecks()

```

> [!NOTE]
> ActivateAllConstraintChecks() will activate all constraints, regardless of how they were deactivated.

> [!NOTE]
> The DeactivateAllConstraintChecks() action also disables the relational checks.

To deactivate and reactivate restrictive relational checks, you can use the following actions in an action task:

```
DeactivateRestrictiveRelationalChecks()
ActivateRestrictiveRelationalChecks()

```

You can use these in jobs where it is not necessary to check relations such as foreign keys, maximum number of children, and so on. You can also check these after the import using USoft BenchMark, if required. For more details see the USoft BenchMark Help.

To deactivate and reactivate domain constraint checks, you can use the following actions in an action task:

```
DeactivateDomainConstraintChecks()
ActivateDomainConstraintChecks()

```

To deactivate and reactivate restrictive constraint checks, you can use the following actions in an action task:

```
DeactivateRestrictiveConstraintChecks()
ActivateRestrictiveConstraintChecks()

```

You can use these actions in jobs where it is not necessary to check restrictive, non-transitional table constraints. You cannot use these actions to deactivate or reactivate transitional constraints.

To deactivate and reactivate productive (= *corrective*) constraint checks, you can use the following actions in an action task:

```
DeactivateCorrectiveConstraintChecks()
ActivateCorrectiveConstraintChecks()

```

To deactivate and reactivate transitional constraint checks, you can use the following actions in an action task:

```
DeactivateTransitionalConstraintChecks()
ActivateTransitionalConstraintChecks()

```

> [!NOTE]
> Although you can deactivate transitional constraints, you must be very careful as records that should have been affected by these constraints can no longer be localized following an import.

To deactivate and activate a specific table constraint, you can use the following actions in an action task:

```
DeactivateConstraint(<constraint_name>)
ActivateConstraint(<constraint_name>)

```

You might use these, for example, to optimize a job where you know in advance that certain constraints need not be executed. You can deactivate and reactivate restrictive and even productive (= corrective) constraints.

> [!NOTE]
> The settings made by DeactivateConstraint() and the actions to deactivate restrictive, transitional or productive (= corrective) constraint checks are cumulative, in that they must both be reactivated in order to make a constraint active again.

To activate all constraints deactivated by DeactivateConstraint(\<constraint_name>) you can use:

```
ActivateAllConstraintsDeactivatedByName()

```

> [!NOTE]
> Only those constraints deactivated by DeactivateConstraint(\<constraint_name>) can be activated using ActivateAllConstraintsDeactivatedByName().