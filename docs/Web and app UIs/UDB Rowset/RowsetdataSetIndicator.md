# Rowset.dataSetIndicator()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **dataSetIndicator()** function of the [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset/UDB%20Rowset%20object.md).

## **Rowset.dataSetIndicator()**

Gets the current data set indicator of the row set. For a given row set in a data source, a data set indicator is used to refer to the subset of the records (the data set) that is currently selected. If the Maximum Number of Records property of a data source is set to 5, the data set indicator '1' refers to records 1-5, the data set indicator '2' refers to records 6-10, and so on.

Returns an integer.

*Syntax*

```js
*row-set*.dataSetIndicator()
```

*Example*

```js
...
if ($this.hasClass("previous"))
    dsi = $.udb(this.dsId).rowSet(pRef).dataSetIndicator() - 1;
...
```

 