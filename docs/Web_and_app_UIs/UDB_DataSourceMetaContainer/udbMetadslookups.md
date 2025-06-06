---
id: udbMetadslookups
---

# $.udbMeta(ds).lookups()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **lookups()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).lookups()**

> [!WARNING]
> This technical function is not typically needed. You only need it if you want to access runtime meta data of referrer Lookup controls, in particular, if you need to access their runtime data source alias.

> [!TIP]
> You can access runtime metadata in the reverse direction (from given Lookup controls to the data sources they refer to) via the [.lookupRefs()](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/udbMetadslookupRefs.md) function.

Accesses runtime metadata of referrer Lookup controls.

Returns an array.

*Syntax*

```js
$.udbMeta( *ds* ).lookups()
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Example*

```js
$.udbMeta('EMP').lookups();
```

 