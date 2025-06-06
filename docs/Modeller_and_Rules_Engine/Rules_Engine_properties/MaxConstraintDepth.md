---
id: MaxConstraintDepth
---

# MaxConstraintDepth



> [!NOTE]
> This article is about the **MaxConstraintDepth**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

## **MaxConstraintDepth**

The **MaxConstraintDepth** Rules Engine property can be used to override the [Max_Constraint_Depth](/docs/Authorisation_and_access/Deployment_configurations/Max_Constraint_Depth.md) deployment configuration parameter setting for the current deployment context and for the duration of the current session.

> [!TIP]
> You can set deployment configuration parameters in USoft Authorizer for 3 different deployment contexts: Client/Server, RunBatch, and Rules Service.

This setting determines the maximum number of recursions allowed to occur when constraints execute.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty(
    'MaxConstraintDepth'
,   '*constraint-depth*' )
```

where the required *constraint-depth* is a positive integer. The USoft factory default is 50.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'MaxConstraintDepth' )
```

The statements are case-insensitive, including the property name.