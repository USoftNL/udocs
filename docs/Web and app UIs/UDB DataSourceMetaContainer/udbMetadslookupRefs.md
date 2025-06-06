# $.udbMeta(ds).lookupRefs()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **lookupRefs()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).lookupRefs()**

> [!WARNING]
> This technical function is not typically needed. You only need it if you want to access runtime metadata of a Lookup control, in particular, if you need to access which is the runtime data source alias.

> [!TIP]
> You can access runtime metadata in the reverse direction (from a given data source to the lookup controls that refer to it) via the [.lookups()](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/udbMetadslookups.md) function.

Accesses runtime metadata of a Lookup control.

Returns an array.

*Syntax*

```js
$.udbMeta( *ds* ).lookupRefs()
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Example*

```js
$.udbMeta('EMP').lookupRefs();
```

 