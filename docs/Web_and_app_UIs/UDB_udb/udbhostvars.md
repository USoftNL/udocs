---
id: udbhostvars
---

# $.udb.hostvars



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **hostvars** property of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.hostvars**

> [!WARNING]
> This property is **old use**. One-time hostvars are mostly appropriate in executeQuery and executeSQLStatement calls. These two functions now have their own **hostvars** options, which you should prefer:
> [$udb(ds).executeQuery()](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer/udbdsexecuteQuery.md)
> [$.udb.executeSqlStatement()](/docs/Web%20and%20app%20UIs/UDB%20udb/udbexecuteSQLStatement.md)
> Otherwise, you generally need [generic hostvars](/docs/Web%20and%20app%20UIs/UDB%20udb/udbgenericHostVar.md) rather than one-time hostvars.

This object may be used to store one-time (ie., temporary) host variables.

One-time host variables are valid for the time of a single Page Engine call (query or manipulation request). After this call, they are removed.