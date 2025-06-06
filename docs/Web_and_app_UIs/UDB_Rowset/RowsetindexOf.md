---
id: RowsetindexOf
tags: [USoft11, USoft10]
---
# Rowset.indexOf()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **indexOf()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

## **Rowset.indexOf()**

Gets the index position of a specified target row set if this target row set exists in the collection of row sets contained in the Rowset object. Use this function also to find out if a specified row set exists.

Returns an integer. The index is 0-based: the first item has index 0, not 1.

Syntax

```js
*row-set*.indexOf( *target-row-set*, *data-source* )
```

The required *target-row-set* may be specified using a string or an object.

> [!TIP]
> For details on how to reference a row set, go to [UDB Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

If the collection contains row sets of multiple data sources, the optional *data-source* may be used to narrow down the search to one specific data source.

Example

```js
if (rowSet.indexOf(rowSet.keysString()) === -1)
    return false;
```

 