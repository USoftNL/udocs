# $.udb.rollback()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **rollback()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.rollback()**

Rolls back manipulated data.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

Syntax

```js
.rollback( *options* )

*options*          ::=  {
    keepSelections: *keep-selections*,
    quiet: *quiet*,
    promise:  *promise*,
    success: *success-function*,
    error: *error-function*
}

*keep-selections*  ::=  { true | false }
*quiet*            ::=  { true | false }
*promise*          ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Keep-selections* is a boolean that specifies whether the current record remains the same after rollback:

|**Value**|**Description**|
|--------|--------|
|true (the default)|The current record is guaranteed to be the same record as before the rollback, in the sense of "the same data": the record with the same primary key values.|
|false   |The current record after rollback is guaranteed to be the record that has the same position in the row set as the current record had before the rollback.|



*Quiet* is a boolean that determines whether or not a message is displayed when the rollback is completed. The default is false, meaning that a message is displayed by default.

*Promise *determines the return value of this function. If promise has the value 'true' (the default), a Promise object is returned. If promise has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called when the rollback is completed.

*Error-function* is a function called if the rollback fails.

*Example*

```js
$.udb.rollback({
    success: function(event,state){
        if(state.msg=='')alert('Succeeded!');
    }
);
```

 