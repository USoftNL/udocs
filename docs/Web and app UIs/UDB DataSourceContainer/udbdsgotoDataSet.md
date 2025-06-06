# $.udb(ds).gotoDataSet()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **gotoDataSet()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).gotoDataSet()**

Moves the processing flow to a specific data set in the data source.

Each data set consist of *n* records, where n is determined by the [dataSetSize()](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/udbMetadsdataSetSize.md) function of the DataSourceMetaContainer object. The number of available data sets is the total number of records divided by *n*.

A new data set is queried only if the data is not already available on the client, or not anymore, possibly because the lifeTime() function has caused it to expire.

When you call this function, it is executed for all data sources in the container object. To move between data sets on a single data source's Rowset, use rowSet.gotoDataSet() instead.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

*Syntax*

```js
.$.udb( *ds* ).gotoDataSet( *index*, *options* )

*index*     ::=  { first | next | previous | *index* }

*options*   ::=  {
     pKeys:  *key-string*,
     promise:  *promise*,
     success:  *success-function*,
     error:  *error-function*
}

*promise*    ::= { true | false }
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The required *index* is a string or an integer that identifies the data set that must become the active data set, using values as follows:

|**Value**|**Meaning**|
|--------|--------|
|first   |Move processing to the first data set relative to the current|
|next    |Move processing to the next data set relative to the current|
|previous|Move processing to the previous data set relative to the current|
|*index* |<p>Move processing to the data set that has index as its index.</p>> [!WARNING]
> The index is 1-based. The first item has index 1, not 0.

|



The optional *options* is a struct that can have the following items, all of which are optional.

*Key-string* is a keys string that identifies a rowset. If key-string is passed, the gotoDataSet action is performed on this specific rowset.

*Promise* determines the return value of this function. If *promise* has the value of 'true' (the default), a Promise object is returned. If *promise* has the value of 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the data was processed on the client.

*Error-function* is a function called when an error occurs.

*Examples*

```js
$.udb('EMP').gotoDataSet('next');
```

```js
$.udb('EMP').gotoDataSet('previous');
```

```js
$.udb('EMP').gotoDataSet(3);
```

> [!TIP]
> The last of these Examples is equivalent to:

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[beforegotodataset](/docs/Web%20and%20app%20UIs/UDB%20Events/beforegotodataset.md)|Data source objects|Before navigation to a different data set takes place|



 