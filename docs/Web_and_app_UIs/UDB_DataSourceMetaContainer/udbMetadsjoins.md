---
id: udbMetadsjoins
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).joins()



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

This article is about the **joins()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).joins()**

Gets a list of joined child data sources (if any) of the first data source in the container.

Returns an array of data source IDs.

*Syntax*

```js
$.udbMeta( *ds* ).joins()
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

A joined child data source of a given data source A is a data source that have a Relate control linked to A, and has its 'Joined' property set to 'Yes'. Such data sources are typically used in grid controls of their parent data source. They show their related record data as (read-only) fields in these grids.

With the possibility of using embedded data sources (i.e. making these data sources an embedded member of their parent data sources), the usage of this feature is somewhat limited; however, if only a few fields of a joined child data source are required and the table is much smaller than the parent table, then this feature may still be somewhat faster and easier than using embedded data sources.

*Example*

```js
$.udbMeta('EMP').joins();
```

 