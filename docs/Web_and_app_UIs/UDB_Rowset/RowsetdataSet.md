---
id: RowsetdataSet
---

# Rowset.dataSet()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **dataSet()** function of the [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset/UDB%20Rowset%20object.md).

## **Rowset.dataSet()**

Gets information about a specific data set in a row set. The subdivision into data sets of a row set depends on the value of the data source's "Maximum number of records" property. You can get this value by calling .dataSetIndicator().

Returns an object with static information about this data set. The data set must have been queried already and must exist prior to calling this function, or else the result value is 'undefined'. Whether or not a data set is queried depends on the value of the data source's "Automatically query next data sets" property.

*Syntax*

```js
*row-set*.dataSet( *data-set* )

*data-set*  ::=  { current | first | last | *index* }
```

The required *data-set* is one of the following:

- One of the literal values listed and explained in the table below, or
- An index value that is an integer pointing at a specific data set. The index is 0-based: the first data set has index 0, not 1.

|**Value**|**Meaning**|
|--------|--------|
|current |The data set that is currently selected|
|first   |The first data set in the row set|
|last    |The last data set in the row set|



Output values

The returned object contains the following fields:

|**Value**|**Meaning**|
|--------|--------|
|index   |The data set index value of this data set. The index is 0-based: the first item has index 0, not 1.|
|start   |The index value, relative to the row set, of the first record in the data set.|
|end     |The index value, relative to the row set, of the last record in the data set.|
|isFirst |A boolean stating whether this is the first data set relative to the row set.|
|isLast  |A boolean stating whether this is the last data set relative to the row set.|
|isEmpty |A boolean stating whether this data set is empty (= contains no records).|
|rowCount|An integer indicating the total number of records contained by the row set (including inserted/deleted records).|
|rowsQueried|An integer indicating the number of records in this data set that have been queried from the server.|



*Example*

```js
var dataSetInfo = rowSet.dataSet('current');
if (dataSetInfo.rowCount > 10) {
    var rows = rowSet.rows(dataSetInfo.start, dataSetInfo.start+10);
    …
}

```

 