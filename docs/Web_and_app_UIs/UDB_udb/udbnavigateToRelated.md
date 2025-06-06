---
id: udbnavigateToRelated
---

# $.udb.navigateToRelated()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **navigateToRelated()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.navigateToRelated()**

Navigates to a related page.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

> [!CAUTION]
> If you navigate away from a page, asynchronous operations are in risk of being annulled if they do not return a promise (as opposed to just executing with an undefined result).

*Syntax*

```js
.navigateToRelated( *page*, *options* )

*options*      ::=  {
    pageTarget: *page-target*,
    title: *title*,
    quiet: *quiet*,
    promise:  *promise*,
    success: *success-function*,
    error: *error-function*
}

*page-target*  ::=  { Dialogs | Pages | Current }
*quiet*        ::=  { true | false }
*promise*      ::=  { true | false }
```

The required *page* identifies the related page to be navigated to.

*Options* is a struct that can have the following items, all of which are optional.

*Page-target* is a string specifying whether the related page must be displayed in Dialogs mode or in Pages mode. In Dialogs mode, the related page appears as a modal dialog. In Pages mode, the current page is replaced by the related page. The value 'Dialogs' denotes Dialogs mode. 'Pages' (the default) denotes Pages mode. 'Current' denotes the mode of the current page context, which is either Dialogs mode or Pages mode. 

*Title* has an effect only if page-target is set to 'Dialogs'. *Title* is a string representing the related page dialog title to be used.

*Quiet* is a boolean that determines whether or not a message is displayed if an error occurs. Default is false, meaning that a message is displayed by default.

*Promise *determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

*Example*

```js
$.udb.navigateToRelated('MyRelatedPage',{quiet:true});
```

 