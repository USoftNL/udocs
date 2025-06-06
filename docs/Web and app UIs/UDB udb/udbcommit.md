# $.udb.commit()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **commit()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.commit()**

Commits data manipulations (INSERT, UPDATE, DELETE).

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

*Syntax*

```js
.commit( *options* )

*options*       ::=  {
    quiet:  *quiet*,
    waitState:  *wait-state*,
    promise:  *promise*,
    success:  *success-function*,
    error:  *error-function*,

    waitPending: *wait-pending*,
    timeout:     *timeout*
}

*quiet*         ::=  { true | false }
*wait-state*    ::=  { true | false }
*promise*       ::=  { true | false }

*wait-pending*  ::=  { true | false } 
*timeout*       ::=  { 20   | *integer* }
```

*Options* is a struct that can have the following items, all of which are optional.

*Quiet* is a boolean determining whether a message is displayed if an error occurs. The default is false, meaning that an error is displayed by default.

*Wait-state *automatically adds a loading icon to the application window while this function is being executed. This is especially useful if the server needs an unusually long time to complete.

*Promise* determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

For the optional **waitPending** and **timeout** options, see the "Fast dependent commits” section below.

*Example*

```js
$.udb.commit({ quiet: true})
    .then(function(){
             alert('Commit successfully completed.');
      });
```

## Fast dependent commits: waitPending, timeout

> [!TIP]
> This section applies only to *dependent* commits. They are commits that attempt to manipulate the same data.

It is possible that a web page performs commits very closely after one another, as when you have checkboxes in a form and you have scripted that commits must happen as soon as the user changes the checkbox value.

If a web page performs 2 dependent commits with minimal time in between, it can happen that the second commit fails and raises a warning message that the first commit is busy. You can set *wait-pending* to true to cause the second commit to wait until the first has finished, instead of raising this message. You can set *timeout* (in seconds; default is 20) to determine the maximum time that the second commit is allowed to wait. If you set *wait-pending* to false, the second commit will never wait: in this situation, it will always fail if it depends on another earlier commit that has not finished.

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[beforecommit](/docs/Web%20and%20app%20UIs/UDB%20Events/beforecommit.md)|Page objects|Before each commit action|
|[postcommit](/docs/Web%20and%20app%20UIs/UDB%20Events/postcommit.md)|Page objects|After each commit action|



 