---
id: udbcancelWindow
---

# $.udb.cancelWindow()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **cancelWindow()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.cancelWindow()**

Rejects the lookup value and close the lookup page or dialog.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

*Syntax*

```js
.cancelWindow( *options* )

*options*  ::=  {
    promise:  *promise*,
    success:  *success-function*,
    error:  *error-function*
}

*promise*  ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Promise *determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

*Example*

```js
$.udb.cancelWindow();
```

> [!TIP]
> This function is called by default on the Cancel button of the default lookup pages.