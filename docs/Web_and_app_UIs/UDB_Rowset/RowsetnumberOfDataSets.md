---
id: RowsetnumberOfDataSets
---

# Rowset.numberOfDataSets()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **numberOfDataSets()** function of the [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset/UDB%20Rowset%20object.md).

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

 