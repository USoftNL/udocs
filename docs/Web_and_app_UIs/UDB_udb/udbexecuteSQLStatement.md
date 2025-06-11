---
id: udbexecuteSQLStatement
tags: [USoft11, USoft10]
---
# $.udb.executeSQLStatement()

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

This article is about the **executeSQLStatement()** function of the [udb object](/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.executeSQLStatement()**

Executes a SQL statement.

:::warning

On USoft 10, do not use this technique for queries. For queries, prefer a [SQLDataSource](/Web_and_app_UIs/Data_sources/SQLDataSources.md) object that you access like so:

:::

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

In the case of queries, does not return record result values. You can "catch” the result values in a [SQLDataSource ](/Web_and_app_UIs/Data_sources/SQLDataSources.md)(USoft 10) or in a VariableSetDataSource (USoft 9).

:::danger

Make sure this function *returns* the promise instead of just *executing* with an undefined result. Otherwise, further operations may not wait until it completes.

:::

*Syntax*

```js
.executeSQLStatement( *sql-statement*, *options* )

options  ::=  {
    hostvars:  *hostvars*,
    waitState:  *wait-state*,
    promise:  *promise*,
    success:  *success-function*,
    error:  *error-function*
}

*wait-state*   ::=  { true | false }
*promise*      ::=  { true | false }
```

The required *sql-statement* identifies the SQL statement to be executed.

*Options* is a struct that can have the following items, all of which are optional.

*Hostvars* is a struct containing name-value pairs that specify input values for the SQL statement.

*Wait-state* automatically adds a loading icon to the application window while the query is being executed. This is especially useful if the server needs an unusually long time to complete.

*Promise* determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

*Example*

```js
$.udb.executeSQLStatement( 'MySQL', {hostvars: {ID:'NL01234'} } )
   .then(function() {
            ...
});
```
