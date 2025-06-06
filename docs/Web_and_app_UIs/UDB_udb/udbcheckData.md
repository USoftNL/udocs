---
id: udbcheckData
tags: [USoft11, USoft10]
---
# $.udb.checkData()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **checkData()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

## **$.udb.checkData()**

Checks those data manipulations against the database that are currently unchecked.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
.checkData( *options* )

options  ::=  {
    quiet:  *quiet*,
    waitState:  *wait-state*,
    precommit:  *precommit*,
    promise:  *promise*,
    success:  *success-function*,
    error:  *error-function*
}

*quiet*       ::=  { true | false }
*wait-state*  ::=  { true | false }
*precommit*   ::=  { true | false }
*promise*     ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Quiet* is a boolean that determines whether or not a message is displayed when an error occurs. The default is false, meaning that a message is displayed by default.

*Wait-state* automatically adds a loading icon to the application window while this function is being executed. This is especially useful if the server needs an unusually long time to complete.

*Precommit* performs a pre-commit query automatically after all manipulations have been successfully executed, to determine if these queries are also committable. In that case, these manipulations are flagged as ‘checked’. The default is false, which means that this pre-commit query is not automatically performed, and this flag is not set.

*Promise* determines the return value of this function. If promise has the value 'true' (the default), a Promise object is returned. If promise has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

*Examples*

```js
$.udb.checkData({quiet:true});
```

```js
udb.checkData({precommit:true, quiet:true}).then(function() { alert('All manipulations are correct.'); });
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[beforecheckdata](/docs/Web_and_app_UIs/UDB_Events/beforecheckdata.md)|Page objects|Before each data check action|



 