# Rows.rowRemove()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **rowRemove()** function of the [Rows object](/docs/Web%20and%20app%20UIs/UDB%20Rows).

## **Rows.rowRemove()**

Removes records from the client browser. Use this function to remove/hide records in the client screen without having to check at the server if this is possible or not.

> [!TIP]
> Contrast with Rows.rowDelete() which deletes records from the database.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

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