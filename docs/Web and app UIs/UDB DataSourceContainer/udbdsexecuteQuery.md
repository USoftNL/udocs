# $.udb(ds).executeQuery()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **executeQuery()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).executeQuery()**

Executes a query. Existing queried data (if any) is cleared before the query is executed. The data that is retrieved by the query is always the first data set of the data source, which has its boundaries defined by the [dataSetSize()](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/udbMetadsdataSetSize.md) function of the DataSourceMetaContainer object.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

*Syntax*

```js
$.udb( *ds* ).executeQuery( *options* )

*options*  ::=  {
     hostvars:  *hostvars*,
     nocheck:  *nocheck*,
     orderBy:  *order-by*,
     before:  *before-function*,
     promise:  *promise*,
     success:  *success-function*,
     error:  *error-function*
}

*hostvars*        ::=  { *name* : *value*, ... }

*nocheck*         ::=  { true | false }

*order-by*        ::=  *order-col*, ...
*order-col*       ::=  { *col-name* | *col-sort-order* }
*col-sort-order*  ::=  { *col-name* : *sort-order* }
*sort-order*      ::=  { ASC | DESC }

*promise*         ::=  { true | false }
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Options* is a struct that can contain the following items, all of which are optional.

The optional *hostvars* is a set of (temporary) name-value pairs that are passed to the query as variables. By default, *hostvars* is the empty set.

*Nocheck* is a boolean that specifies whether unhandled manipulations are checked first before the query is executed. This happens only if nocheck is set to false. By default, *nocheck* is false.

*Order-by* is an array of instructions that determine how the queried data is sorted. Each element in this array is either a column name or a struct combining a column name with an 'ASC' or 'DESC' instruction, as in the Example below. Column names not accompanied by 'DESC' are automatically result in sorting in ascending order (‘ASC’ is the default). If you specify *order-by*, any existing sort order settings defined in Web Designer are overwritten.

*Before-function* is a function that is executed before the query is executed.

*Promise *determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function that is executed after the query is executed and the data is processes successfully on the client.

*Error-function* is a function that is executed if the query fails.

*Example*

```js
$.udb('EMP').executeQuery({
   hostvars: { 'ID' : '5' },
   orderBy: ['NAME', {DEPT: 'DESC'}]
}).then(function() {
  ...
});

```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[beforeexecutequery](/docs/Web%20and%20app%20UIs/UDB%20Events/beforeexecutequery.md)|Data source objects|Before the data source is queried|



 