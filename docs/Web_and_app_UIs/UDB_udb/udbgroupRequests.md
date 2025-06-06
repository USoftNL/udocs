---
id: udbgroupRequests
tags: [USoft11, USoft10]
---
# $.udb.groupRequests()



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

This article is about the **groupRequests()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.groupRequests()**

Groups a set of requests and sends them to the server as a single request. Using this function can speed up processing by reducing the total number of separate calls to the server. Possible calls within the handler that are asynchronous are ignored and sent synchronously.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
.groupRequests( *handler*, *options* )

*options*     ::=  {
    caller:  *caller*,
    showdata:  *show-data*,
    promise:  *promise*,
    success:  *success-function*,
    error:  *error-function*
}

*show-data*   ::=  { true | false }
*promise*     ::=  { true | false }
```

The required *handler* is a function to call for which all the request are grouped into a single request.

*Options* is a struct that can have the following items, all of which are optional.

*Caller* is the calling object of the request. This is the object in the context of which the request must be executed.

*Show-data* is a boolean that determines whether or not any showdata events may be executed during the group request. The default is true.   

*Promise* determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.


:::tip

All actions are gathered and executed using a single Page Engine call. This means that you cannot use groupRequests() if one action depends on the result of a previous action.

:::


:::tip

To group $.udb().executeQuery() calls, you do not need to use groupRequests(). The same effect is achieved by calling the $.udb() function with the list of data sources to be queried:

:::
$.udb(["DEPT", "EMP"]).executeQuery();

With the arrival of promises and the usage of multi-threading in the web API, the advantages of using groupRequests() have become limited. It is now recommended to use them only to group requests that cannot be normally grouped in one server call and that may take long to complete. A good example of this is the $.udb.executeSQLStatement() action.

*Example*

```js
$.udb.groupRequests(function(){
    $.udb.executeSQLStatement('MySQL');
  $.udb.executeSQLStatement('MySQLTwo');
})
  .then(function() {
        $.udb.commit();
  });
```

 