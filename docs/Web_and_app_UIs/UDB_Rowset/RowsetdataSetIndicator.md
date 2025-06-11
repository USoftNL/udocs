---
id: RowsetdataSetIndicator
tags: [USoft11, USoft10]
---
# Rowset.dataSetIndicator()



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

This article is about the **dataSetIndicator()** function of the [Rowset object](/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

:::

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

 