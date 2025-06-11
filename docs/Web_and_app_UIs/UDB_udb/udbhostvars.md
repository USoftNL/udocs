---
id: udbhostvars
tags: [USoft11, USoft10]
---
# $.udb.hostvars



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **hostvars** property of the [udb object](/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.hostvars**


:::warning

This property is **old use**. One-time hostvars are mostly appropriate in executeQuery and executeSQLStatement calls. These two functions now have their own **hostvars** options, which you should prefer:
[$udb(ds).executeQuery()](/Web_and_app_UIs/UDB_DataSourceContainer/udbdsexecuteQuery.md)
[$.udb.executeSqlStatement()](/Web_and_app_UIs/UDB_udb/udbexecuteSQLStatement.md)
Otherwise, you generally need [generic hostvars](/Web_and_app_UIs/UDB_udb/udbgenericHostVar.md) rather than one-time hostvars.

:::

This object may be used to store one-time (ie., temporary) host variables.

One-time host variables are valid for the time of a single Page Engine call (query or manipulation request). After this call, they are removed.