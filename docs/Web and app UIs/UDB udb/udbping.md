# $.udb.ping()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **ping()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.ping()**

Sends a signal to the server to notify that the connection must be kept alive. This function can also be used to test if the current credentials on the session kept by the server are still valid, and notify the client of this, so that the intended page can be displayed (instead of a login page).

*Syntax*
 

```js
.ping( *options* )

*options*  ::=  {
    checkCredential:  *check-credentials*,
    noPageEngine:  *no-page-engine*,
    success:  *success-function*
}

*check-credentials*  ::=  { true | false }
*no-page-engine*     ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Check-credentials* is a boolean specifying whether or not credentials must be verified. Default is 'false', meaning that credentials are NOT checked by default.

*No-page-engine* is a boolean specifying whether or not this action must always make a connection with the Page Engine (which is mandatory when credentials must be checked). The default is false, meaning that a connection is made with the Page Engine by default.

*Success-function* is a function that is called immediately after executing the ping() action.

*Example*

```js
$.udb.ping({
    checkCredential: true,
    success: function() {
        $.udb.startPage({
            pageName: $.udb.settings.get("startPage")
        });
    }
});
```

 