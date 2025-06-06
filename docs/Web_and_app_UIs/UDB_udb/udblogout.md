---
id: udblogout
---

# $.udb.logout()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **logout()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.logout()**

Logs out.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

*Syntax*
 

```js
.logout( *options* )

*options*  ::=  {
    page:  *page*,
    promise:  *promise*,
    success:  *success-function*
}

*promise*    ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Page* is a string that defines the page to jump to or a function to call on success.

*Promise *determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed. This function is executed on the next page, if such a page is specified.

*Examples*

```js
$.udb.logout();
```

```js
$.udb.logout({page:'MyGoodbyePage'});
```

```js
$.udb.logout()
    .then(function(){
        alert('Goodbye!');
    });
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[logout](/docs/Web%20and%20app%20UIs/UDB%20Events/logout.md)|Page objects|After each logout action|
|[timeout](/docs/Web%20and%20app%20UIs/UDB%20Events/timeout.md)|<body> DOM element|User is idle for a longer period than the time-out period|



 