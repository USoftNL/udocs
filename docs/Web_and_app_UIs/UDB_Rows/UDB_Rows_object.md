---
id: UDB_Rows_object
tags: [USoft11, USoft10]
---
# UDB Rows object



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

This article is about the **Rows** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
This model is built around the [udb](/Web_and_app_UIs/UDB_udb), [DataSourceMetaContainer](/Web_and_app_UIs/UDB_DataSourceMetaContainer), [DataSourceContainer](/Web_and_app_UIs/UDB_DataSourceContainer), [Rowset](/Web_and_app_UIs/UDB_Rowset), Rows, [ColsMeta](/Web_and_app_UIs/UDB_ColsMeta), and [Cols](/Web_and_app_UIs/UDB_Cols) object types. See also [UDB events](/Web_and_app_UIs/UDB_Events).

:::

A **Rows** object contains a collection of records.

To address such a collection, you can call the .rows() function of a DataSourceContainer object. This addresses one or more records of the first data source in the container.

This example addresses the first row of the EMP data source:

```js
$.udb('EMP').rows(0);
```

You can also address one or more records from a specified rowset. Call the .rows() function of a Rowset object.

This example addresses the first row of the current row set of the EMP data source:

```js
$.udb('EMP').rowSet('current').rows(0);
```

 