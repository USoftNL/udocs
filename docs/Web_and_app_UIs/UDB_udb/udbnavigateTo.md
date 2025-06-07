---
id: udbnavigateTo
tags: [USoft11, USoft10]
---
# $.udb.navigateTo()



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

This article is about the **navigateTo()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.navigateTo()**

Navigates to a different page.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

:::danger

If you navigate away from a page, asynchronous operations are in risk of being annulled if they do not return a promise (as opposed to just executing with an undefined result).

:::

*Syntax*

```js
.navigateTo( *page*, *options* )

*options*        ::=  {
    targetFrame:  *target-frame*,
    applyChanges:  *apply-changes*,
    newPage:  *new-page*,
    quiet:  *quiet*,
    promise:  *promise*,
    success:  *success-function*,
    error:  *error-function*
}

*apply-changes*  ::=  { true | false }
*new-page*       ::=  { true | false }
*quiet*          ::=  { true | false }
*promise*        ::=  { true | false }
```

The required *page* is a string that identifies the page being navigated to.

*Options* is a struct that can have the following items, all of which are optional.

*Target-frame* is a string identifying the target frame in which page is to be opened. If not specified, the page is opened in the current context.

*Apply-changes* is a boolean that defines whether changes must be applied. The default is true.

*New-page* determines if the record data on the previous page must replace the initial data on the target page or not.

- If *new-page* is false (the default), all data from the previous page are merged with the new data sources that exist on both pages. Data sources that do not exist on the new page are discarded.
- If *new-page* is true, all data of the previous page are discarded and re-queried where requested. This is also the case with page navigation using the Menu Control, which has this option set to true by default.

*Quiet* is a boolean that determines whether or not a message is displayed if an error occurs. Default is false, meaning that a message is displayed by default.

*Promise* determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

*Example*

```js
$.udb.navigateTo('MyNextPage',{quiet:true});
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[beforenavigate](/docs/Web_and_app_UIs/UDB_Events/beforenavigate.md)|Page objects|Before navigation to a different page takes place|
