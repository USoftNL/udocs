---
id: RowsjoinedVal
tags: [USoft11, USoft10]
---
# Rows.joinedVal()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **joinedVal()** function of the [Rows object](/docs/Web_and_app_UIs/UDB_Rows).

## **Rows.joinedVal()**

Gets the value of a joined column of the first record in the Rows object, if that record has a joined column.

Returns a string.

*Syntax*

```js
*rows*.joinedVal( *joined-column* )
```

The required *joined-column* is a string that is the name of the joined column.

*Example*

```js
if ($.udb(this.dsId).isJoined()) {
    var col = $.udbMeta(this.dsId).cols(this.column).alias();
    return record.joinedVal(col) || "";
}
```

 