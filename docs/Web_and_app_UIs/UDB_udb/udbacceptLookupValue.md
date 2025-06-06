---
id: udbacceptLookupValue
tags: [USoft11, USoft10]
---
# $.udb.acceptLookupValue()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **acceptLookupValue()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

## **$.udb.acceptLookupValue()**

Accepts the selected lookup value on a lookup page or dialog. After successful execution, the page is closed and the user is returned to the page that was current before the lookup page was opened.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
.acceptLookupValue( *options* )

*options*  ::=  {
     keepOpen:  *keep-open*,
     promise:  *promise*,
     success:  *success-function*,
     error:  *error-function*
}

*keep-open*  ::=  { true | false }
*promise*    ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Keep-open* has an effect only when applied to a lookup dialog. It specifies whether or not the lookup dialog stays open after accepting the lookup value. The default is false.

*Promise* determines the return value of this function. If promise has the value 'true' (the default), a Promise object is returned. If promise has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the lookup value has successfully been accepted.

*Error-function* is a function called if an error occurs.

*Example*

```js
$.udb.acceptLookupValue();
```

> [!TIP]
> This function is called by default on the Select button of default lookup pages.

 