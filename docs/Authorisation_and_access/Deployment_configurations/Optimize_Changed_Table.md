---
id: Optimize_Changed_Table
---

# Optimize_Changed_Table




:::note

This article is about the **Optimize_Changed_Table**[deployment configuration parameter](/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

:::

## **Optimize_Changed_Table**

*Allowed values*

```
{ True | False }
```

The underlined value is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter in the Additional Parameters list at the bottom of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

This is where you specify that you want the Rules Engine to add, whenever possible, key conditions to multi-table constraint SQL statements even if it is not possible to find a path from the manipulated table to the driving table using standard join conditions.

*Background*

In order to process constraint SQL statements as fast as possible, the Rules Engine attempts to bind each statement to the constellation of records being manipulated by adding a condition that contains a key value. If the manipulated table is not the driving table, this optimization strategy is applied only if a path can be found from the manipulated table to the driving table via standard join conditions. A standard join condition is a SQL condition that has an is-equal operator ('=') joining columns from related tables (of the type 'table1.col1 = table2.col1'). Otherwise, the Rules Engine is reduced to sending the entire statement to the database without added conditions, which in terms of performance can be unattractive.

This strategy can now be made to be applied more widely by setting the Optimize_Changed_Table additional parameter. If this parameter is set, the Rules Engine will also add extra key conditions in certain other situations where a path is found from the changed table to the driving table but not via standard join conditions, for example, in join conditions with added expressions (eg., of the type 'table1.col1 = table2.col1 + integer').

The optimization strategy is never applied when the manipulated table is under a NOT EXISTS operator, in a GROUP BY clause, or under an aggregation function.

You need to ascertain (by comparing Benchmark profiles) if setting this parameter really gives you better performance. For example, if you have constraint SQL with many conditions connected by OR, separate statements will be construed for each of these conditions. In such cases it may be faster to forget the optimization strategy and send the entire statement to the database as-is.

The effect of the parameter is limited by the fact that it may only be set application-wide, not for individual constraints. However, there are cases where its setting will resolve particular bottlenecks in your application.