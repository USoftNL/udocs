# UDB Rowset object



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **Rowset** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
> This model is built around the [udb](/docs/Web%20and%20app%20UIs/UDB%20udb), [DataSourceMetaContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer), [DataSourceContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer), Rowset, [Rows](/docs/Web%20and%20app%20UIs/UDB%20Rows), [ColsMeta](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta), and [Cols](/docs/Web%20and%20app%20UIs/UDB%20Cols) object types. See also [UDB events](/docs/Web%20and%20app%20UIs/UDB%20Events).

A **Rowset** object contains a collection of references to one or more row sets and so-called keys strings containing key values (if any) that these row sets refer to. A Rowset object containing multiple row sets comes into play when you offer multiple controls based on the same data in the same interface.

## Current row set

To refer to the currently selected row set, you can use 'current' as a value when invoking the Rowset object.

*Example*

This example returns the keys string of the current PERSON record:

```js
$.udb("PERSON").rowSet('current').keysString();
```

## Keys string

A Rowset object may simply refer to the main collection of records of a data source, in which case its keys string will be equal to "" (the empty string). It may also refer to a set of records linked to a record of another data source, most commonly to a parent record connected to the row set by a parent-child relation established through a Relate control object of a data source. The row set's keys string is composed in this case of all the parent records the row set is linked to, although most commonly this is a single parent data source and a single parent record in that data source.

You can call

- .keysString() (Example 1 below) to get the keys string as a string.
- .keyValues() (Example 2 below) to get the keys string as an object.

*Example 1*

This example returns a keys string as a object. This keys string identifies the parent keys of a TOUR record referenced by a current row set of the SCHEDTOUR child table. In this case, the key spans two columns:

```js
$.udb("PERSON").rowSet('current').keyValues();
```

An example return value is:

```js
{"1.DS59": { "$60" : "AUSTRALIA", "$61" : "ISLAND SUNTANNER" } }
```

*Example 2*

This example is the same as Example 1, but the return value is a string instead of an object:

```js
$.udb("PERSON").rowSet('current').keysString();
```

An example return value is:

```js
"1.DS59=$60:AUSTRALIA;$61:ISLAND%20SUNTANNER"
```

 