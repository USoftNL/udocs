---
id: udbMetadslookups
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).lookups()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **lookups()** function of the [DataSourceMetaContainer object](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).lookups()**


:::warning

This technical function is not typically needed. You only need it if you want to access runtime meta data of referrer Lookup controls, in particular, if you need to access their runtime data source alias.

:::


:::tip

You can access runtime metadata in the reverse direction (from given Lookup controls to the data sources they refer to) via the [.lookupRefs()](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadslookupRefs.md) function.

:::

Accesses runtime metadata of referrer Lookup controls.

Returns an array.

*Syntax*

```js
$.udbMeta( *ds* ).lookups()
```

The required *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
$.udbMeta('EMP').lookups();
```

 