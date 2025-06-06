---
id: RowsrowRemove
tags: [USoft11, USoft10]
---
# Rows.rowRemove()



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

This article is about the **rowRemove()** function of the [Rows object](/docs/Web_and_app_UIs/UDB_Rows).

:::

## **Rows.rowRemove()**

Removes records from the client browser. Use this function to remove/hide records in the client screen without having to check at the server if this is possible or not.


:::tip

Contrast with Rows.rowDelete() which deletes records from the database.

:::

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
*rows*.rowRemove( *options* )

*options*    ::=  {
     check:  *check-function*,
     promise:  *promise*,
     success: *success-function*,
     error: *error-function*
}

*promise*    ::= { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Check-function* is a function called before the records are deleted. Use the return value of this function to determine whether or not you want the rows to be removed.

*Promise *determines the return value of this function. If *promise* has the value of 'true' (the default), a Promise object is returned. If *promise* has the value of 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the records are successfully removed.

*Error-function* is a function called if an error occurs.