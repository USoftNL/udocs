# Rowset.keyValues()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **keyValues()** function of the [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset/UDB%20Rowset%20object.md).

## **Rowset.keyValues()**

Gets the **keys string** of a row set. This keys string represents the parent keys that the row set refers to. If the row set does not refer to parent keys, the result value is undefined.

Returns an object.

> [!TIP]
> To get the keys string as a string, use .keysString() instead.

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

 

 