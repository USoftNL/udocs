---
id: RowsetnumberOfDataSets
tags: [USoft11, USoft10]
---
# Rowset.numberOfDataSets()



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

This article is about the **numberOfDataSets()** function of the [Rowset object](/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

:::

## **Rowset.numberOfDataSets()**

Returns the total number of data sets that the row set has.

Returns an integer.

*Syntax*

```js
*row-set*.numberOfDataSets()
```

*Example*

```js
...
var nofSets = (rowSet ? rowSet.numberOfDataSets() : 0);

if (nofSets === 0) {
    this.$control.addClass('hide');
    return false;
}
...
```

 