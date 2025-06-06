---
id: RowsetdbCount
tags: [USoft11, USoft10]
---
# Rowset.dbCount()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **dbCount()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

## **Rowset.dbCount()**

Returns the number of records in the row set that were queried from the server. Does NOT take into account any records inserted or deleted on the client.

Contrast with .rowCount().

*Syntax*

```js
*row-set*.dbCount()
```

*Example*

```js
$.udb('EMP').rowSet('current').dbCount();
```

 