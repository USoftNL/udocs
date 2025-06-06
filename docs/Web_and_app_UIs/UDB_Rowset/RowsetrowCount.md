---
id: RowsetrowCount
tags: [USoft11, USoft10]
---
# Rowset.rowCount()



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

This article is about the **rowCount()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

:::

## **Rowset.rowCount()**

Returns the number of records that a row set currently contains. This is taking into account the records queried from the server, but also any records inserted/deleted on the client.


:::tip

Contrast with .dbCount().

:::

*Syntax*

```js
*row-set*.rowCount()
```

*Example*

```js
var numRows = $.udb('EMP').rowSet('current').rowCount();
```

 