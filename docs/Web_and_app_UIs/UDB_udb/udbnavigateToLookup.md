---
id: udbnavigateToLookup
tags: [USoft11, USoft10]
---
# $.udb.navigateToLookup()

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

This article is about the **navigateToLookup()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.navigateToLookup()**

Navigates to a lookup page.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

:::danger

If you navigate away from a page, asynchronous operations are in risk of being annulled if they do not return a promise (as opposed to just executing with an undefined result).

:::

*Syntax*

```js
.navigateToLookup( *page*, *options* )

*options* ::=  {
    mode: *mode*,
    pageTarget: *page-target*,
    title: *title*,
    quiet: *quiet*,
    promise:  *promise*,
    success: *success-function*,
    error: *error-function*
}

*mode*         ::=  { edit | search }
*quiet*        ::=  { true | false }
*page-target*  ::=  { Dialogs | Pages | Current }
*promise*      ::=  { true | false }
```

The required *page* is the name of the lookup page being navigated to.

*Options* is a struct that can have the following items, all of which are optional.

*Mode* is a string that determines the whether the lookup value is copied in edit mode (as a manipulation) or in search mode (as a search value). The default is 'edit'.

*Page-target* is a string specifying whether the lookup page must be displayed in Dialogs mode or in Pages mode. In Dialogs mode, the lookup page appears as a modal dialog. In Pages mode, the current page is replaced by the lookup page. The value 'Dialogs' (the default) denotes Dialogs mode. 'Pages' denotes Pages mode. 'Current' denotes the mode of the current page context, which is either Dialogs mode or Pages mode. 

*Title* has an effect only if page-target is set to 'Dialogs'. *Title* is a string representing the lookup dialog title to be used.

*Quiet* is a boolean that determines whether or not a message is displayed if an error occurs. Default is false, meaning that a message is displayed by default.

*Promise* determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

*Example 1*

```js
$.udb.navigateToLookup('MyLookupPage',{
    quiet:true,
    pageTarget: 'Dialogs',
    title: 'My Lookup Page'
});
```

*Example 2*

In this example, the effect of `{mode:search}` is that the value selected in the lookup page is used as a search condition on return to the calling page, as opposed to a value for data manipulation (a value used in an INSERT or UPDATE operation):

```js
$.udb.navigateToLookup('MyLookupPage',
  {mode:'search'}
).catch(function(){
  alert('Navigation to Lookup failed.');
});
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[lookup](/docs/Web_and_app_UIs/UDB_Events/lookup.md)|Data objects of input controls|When the lookup button at the input control is clicked|
