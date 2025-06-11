---
id: udbsetTimeOut
tags: [USoft11, USoft10]
---
# $.udb.setTimeOut()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **setTimeOut()** function of the [udb object](/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.setTimeOut()**

Specifies that one or more actions must be performed after a specified idle-time has elapsed. An idle-time is a time interval during which no activity is detected by the server on behalf of the client session.

*Syntax*
 

```js
.setTimeout( *time-out-specification* )

*time-out-specification*  ::= {
      minutes:  *idle-time*,
      func:     *idle-function*
}

*idle-time*      ::=  { 15 | }
*idle-function*  ::=  { $.udb.showLogin() | }
```

The optional *time-out-specification* is a struct that may contain the following items.

*Idle-time* is an integer that is a number of minutes of idle-time. *Idle-time* represents the time interval that must pass before *idle-function* is performed. If *idle-time* is not specified, the default '15' is applied.

*Idle-function* is a  function that must be executed after *idle-time* has elapsed. If *idle-function* is not specified, the $.udb.showLogin function is executed.

*Example*

```js
$.udb.setTimeout({
    minutes: 45,
    func: function(){
        $.udb.executeSQLStatement("login_history", {}, {
            success: function() {
                $.udb.commit({quiet: true});
            },
            error: function() {
                $.udb.rollback({quiet: true});
            }
        });
        $.udb.logout({page: "PoolAppApplicationStartPage"});
    }
);
```

 