---
id: Rowsetrange
tags: [USoft11, USoft10]
---
# Rowset.range()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **range()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

## **Rowset.range()**

Gets the range of records string of this Rowset.

Returns a string.

*Syntax*

```js
row-set.range()
```

*Example*

```js
if (options.mode !== "S") {
    var rowSet = dsc.rowSet(pRef);
        this.$control.text(rowSet.exists() ? rowSet.range() : "0-0");
}
```

 