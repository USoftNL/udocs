---
id: udbMetadslookupRefs
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).lookupRefs()



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

This article is about the **lookupRefs()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).lookupRefs()**


:::warning

This technical function is not typically needed. You only need it if you want to access runtime metadata of a Lookup control, in particular, if you need to access which is the runtime data source alias.

:::


:::tip

You can access runtime metadata in the reverse direction (from a given data source to the lookup controls that refer to it) via the [.lookups()](/Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadslookups.md) function.

:::

Accesses runtime metadata of a Lookup control.

Returns an array.

*Syntax*

```js
$.udbMeta( *ds* ).lookupRefs()
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Example*

```js
$.udbMeta('EMP').lookupRefs();
```

 