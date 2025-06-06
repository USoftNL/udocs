---
id: UDB_Rows_object
---

# UDB Rows object



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **Rows** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
> This model is built around the [udb](/docs/Web%20and%20app%20UIs/UDB%20udb), [DataSourceMetaContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer), [DataSourceContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer), [Rowset](/docs/Web%20and%20app%20UIs/UDB%20Rowset), Rows, [ColsMeta](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta), and [Cols](/docs/Web%20and%20app%20UIs/UDB%20Cols) object types. See also [UDB events](/docs/Web%20and%20app%20UIs/UDB%20Events).

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

 