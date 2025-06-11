---
id: Application_tables_in_UDeliver
---

# Application tables in UDeliver


:::note

This article is about the **application table** concept of USoft Delivery Manager ("UDeliver”).

:::

In USoft Delivery Manager, you can keep a list of the application tables of your user application. To create this list, and update it after changes, run the [Populate table list](/Continuous_delivery/Delivery_Manager_actions_by_name/Populate_tables_list.md) action for the application.

Why keep this list if you already have a list of these tables in USoft Definer? This list allows you to set Deliverable, Skip, and “Upgrade hint” flags.

### Deliverable

In the list, you can set for each table that it is **deliverable.** Deliverable tables are "technical tables" that contain data that you want to deliver to Production and other target machines. UDeliver's Export deliverable appdata action automates  the delivery of the data content of these tables.

### Skip

**Skip** influences how UDeliver will produce a create-tables script for release to Production and other target machines.

If you set the **Skip** flag for a table, UDeliver will not mention the table in the create-tables script.


:::danger

When you move to the next release by running the Create New Release routine, all Skip settings for all application tables are automatically undone. Accordingly, upgrade scripts are also automatically linked to the current release only: they do not automatically apply to the next release.

:::

In the list, **Skipped in previous release** flags the tables that you skipped in the previous release. If you decide to revert to that release (Revert button in Current Release window), those Skipped settings will be re-applied. This works only 1 level deep: Skipped settings for the previous release are remembered, but Skipped settings for all the earlier releases are forgotten.

### Upgrade hint

**Upgrade hint** influences how UDeliver will produce a create-tables script for release to Production and other target machines.

By setting **Upgrade hint**, you can decide per table whether you want UDeliver to choose between a CREATE TABLE and ALTER TABLE statement, or whether you want to force a CREATE TABLE statement. In the former case, ALTER TABLE is given precedence unless there is a logical reason to fall back on a CREATE TABLE strategy.