---
id: udbclosePage
tags: [USoft11, USoft10]
---
# $.udb.closePage()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **closePage()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

## **$.udb.closePage()**

Closes the page and returns to the previous page on the stack.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

> [!CAUTION]
> If you navigate away from a page, asynchronous operations are in risk of being annulled if they do not return a promise (as opposed to just executing with an undefined result). For a full discussion of this risk, click [here]().

*Syntax*

```js
.closePage( *options* )

*options*   ::=  {
    accept:  *accept*,
    check:  *before-function*,
    quiet:  *quiet*,
    steps:  *steps*,
    promise:  *promise*,
    success:  *success-function*,
    error:  *error-function*
}

*accept*    ::=  { true | false }
*check*     ::=  { true | false }
*quiet*     ::=  { true | false }
*promise*   ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Accept* has an effect only if the page being closed is a lookup page. It determines whether the current lookup value is accepted or not. The default is false, meaning that by default, if a lookup page is closed the current value is not accepted as lookup value.

*Check* has an effect only if there are unchecked data manipulations. It determines whether such manipulations are checked. The default is true, meaning that if there are unchecked data manipulations, they are checked by default.

*Quiet* is a boolean determining whether messages are displayed during the operation or not. The default is false, meaning that messages are displayed by default.

*Steps* is an integer determining the number of pages that are closed. The default is 1, meaning that only the current page is closed by default.

*Promise* determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

*Examples*

```js
$.udb.closePage({accept: true, quiet: true});
```

```js
$.udb.closePage()
    .then(function() {
        ...
    });
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[beforenavigate](/docs/Web_and_app_UIs/UDB_Events/beforenavigate.md)|Page objects|Before navigation to a different page takes place|



 