---
id: Rowsetexecute
tags: [USoft11, USoft10]
---
# Rowset.execute()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **execute()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

## **Rowset.execute()**

Executes a function in the context of this row set, even if this row set is not the selected one. This allows e.g. operations on records of this Rowset without disturbing the current (actual) selection of a row set.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
*row-set*.execute( *function*, *promise* )

*promise*    ::= { true | false }
```

The required *function* is the function executed.

If the optional *promise* has the value of 'true' (the default), a Promise object is returned. The .then() clause for this Promise is executed once all Promises created by the function passed to .execute() have been settled. If *promise* has the value of 'false', the ‘this’ object is returned instead.

*Example*

```js
var rowSet = $.udb(this.dsId).rowSet(pRef);
rowSet.execute(
    function(){
        if ($this.hasClass("previous"))
            dsi = rowSet.dataSetIndicator - 1;
        else
        if ($this.hasClass("next"))
            dsi = rowSet.dataSetIndicator + 1;
        else
            dsi = $this.prop("count");
            if (dsi)
                rowSet.gotoDataSet(dsi);
    }
);
```

 