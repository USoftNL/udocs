---
id: RowsetkeyValues
tags: [USoft11, USoft10]
---
# Rowset.keyValues()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **keyValues()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

:::

## **Rowset.keyValues()**

Gets the **keys string** of a row set. This keys string represents the parent keys that the row set refers to. If the row set does not refer to parent keys, the result value is undefined.

Returns an object.


:::tip

To get the keys string as a string, use .keysString() instead.

:::

*Syntax*

```js
*row-set*.keyValues()
```

*Example 1*

```js
if (this.activeParentKey === null || this.activeParentKey === dsc.rowSet(pRef).keyValues()) {
    …
}
```

*Example 2*

This example returns the keys string of the parent TOUR record that the current row set refers to:

```js
$.udb("SCHEDTOUR").rowSet('current').keyValues();
```

Assuming that TOUR has a composite primary key spanning 2 columns, an example value for such a keys string is:

```js
{"1.DS59": { "$60" : "AUSTRALIA", "$61" : "ISLAND SUNTANNER" } }
```

 

 