---
id: udbdsgetDataSet
---

# $.udb(ds).getDataSet()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **getDataSet()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).getDataSet()**

Fetches records of a data source. These records can then be set in a data set of this data source, or used independently, for example as a list of possible values in an autocompletion input box.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

*Syntax*

```js
$.udb( *ds* ).getDataSet( *options* )
*options*  ::=  {
      colRef:  *columns*,
      doCount: *do-count*,
      beginRec: *begin-record-index*,
      count: *count*,
      withQueryCondition: *with-query-condition*,
      condition: *condition-object*,
      getRows: *get-rows*,
      replace: *replace*,
      process: *process-function*,
      promise:  *promise*,
      success: *success-function*,
      error: *error-function*
}

*do-count*               ::= { true | false }
*with-query-condition*   ::= { true | false }
*get-rows*               ::= { true | false }
*replace*                ::= { true | false }
*promise*                ::= { true | false }
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Options *is a struct that can have the following items, all of which are optional.

*Columns* is a comma-separated list of references to one or more columns of the data source. To refer to a column you can use its name or alias.

*Do-count* determines whether a count query must be performed in addition to the query action.

*Begin-record-index* is the record index number of the first record to be fetched. Its default is 1, which identifies the first record.

*Count* is the maximum amount of records to be queried. Normally, this is limited by the ‘Maximum Number of Records’ property of the data source, but this property allows to override. Specifying the ‘0’ value will fetch all matching records.

*With-query-condition* determines whether the current search values must be included in the query action. The default is ‘true’, but if a query is performed for an autocompletion field for a search condition, *with-query-condition* should be set to ‘false’.

*Condition-object* is a search condition object that identifies the subset of rows that you want to be fetched.

*Get-rows* specifies whether you want the rows delivered as the return value of the .getDataSet() function (either as a direct value, or as the value in a Promise settle function), or whether you want the rows placed in the data source’s row set instead.

*Replace* determines whether rows in a row set need to be completely replaced by the new row set. This setting is ignored when *get-rows* is 'true'.

*Process-function* is an optional function used to transform the records returned by the server. If this function is specified, its results are passed as a return value or, if promises are used, as the .then() function.

*Promise *determines the return value of this function. If *promise* has the value of 'true' (the default), a Promise object is returned. If *promise* has the value of 'false', the ‘this’ object is returned instead. If get-rows has the value of 'true', then the result of the query is passed to the .then() function.

*Success-function *is a function called after the data was processed on the client.

*Error-function* is a function called if an error occurs.

*Example 1*

```js
var cond = {};
cond[col.alias()] = ""; //all values of the column
dsc.getDataSet({
    colRef: col.alias(),
    getRows: true,
    condition: cond,
    replace: false
}).then(function(result) {
    ...
});
```

*Example 2*

```js
var condition = {};
condition[col] = v + "%";

$.udb(d).getDataSet({
    count: $.udb(d).dataSetSize(),
    getRows: true,
    replace: false,
    condition: condition,
    process: function(rows) {
        var values = [];
    ...
        for (var i = 0; i < rows.length; i++) {
            if (rows[i] && !check[rows[i][pkName]]) {
                if (!max || values.length < max)
                    values.push({
                        text: rows[i][colName],
                        value: rows[i][pkName],
                        rowData: rows[i],
                        dsId: d,
                        colName: colName,
                        pkName: pkName});
                check[rows[i][pkName]] = true;
            }
        }
        return values;
    }
}).then(function(result) {
    //publish result
    ...
});
```

 