---
id: udbwait
tags: [USoft11, USoft10]
---
# $.udb.wait()



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

This article is about the **wait()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.wait()**

Displays a Wait Control affecting the user's entire screen. This prevents the user from performing any additional actions while an operation is running.


:::tip

Several other calls, for example: **$.udb.commit()**, **$.udb.checkData()** and **$.udb.executeSQLStatement**, have a waitState option. This is another way to display a Wait Control. In this case, the Wait Control is displayed when the function starts, and is hidden again when the function finishes.

:::

Returns a Promise object.

*Syntax*

```js
.wait( *activate*, *wait-message* )

.wait( *wait-function*, *wait-message* )

.wait( *wait-function*, *options* )

*activate* :=  { true | false }

*options*  := {
    message: *wait-message*,
    timeout: *wait-timeout*,
    src: *wait-image*,
    alt: *wait-image-description*
}

*wait-timeout* :=  *integer*
```

*Activate* is a mandatory boolean that is used to turn the Wait Control on or off.

- If activate is true, the Wait Control is displayed (with a wait-message, if specified).
- If activate is false, the Wait Control is removed.

*Wait-function* is a function that is called while the Wait Control is displayed. The Wait Control is displayed (with a wait-message, if specified) before the function executes. The Wait Control is removed automatically when the function finishes.

*Options* is a struct that can have the following items, all of which are optional.

*Wait-message* is a message that is displayed for the time that the Wait Control is displayed. This message is also handled by the translation engine. The default is ‘Loading…’ .

*Wait-timeout* is an integer that indicates a time-out period in milliseconds that expires before wait-function executes. The time-out period starts when the Wait Control is displayed. Wait-function executes when the time-out period expires. The Wait Control is removed when the function finishes. The default for wait-timeout is 0, meaning that by default, no time-out period applies.

*Wait-image* is the URI of the image displayed while the Wait Control is displayed. By default this is a ‘Loading’ icon.

*Wait-image-description* is a description provided for the wait image. The default is ‘Loading...’ .

*Examples*

```js
$.udb.wait( true );
```

```js
$.udb.wait( function() {
    //...
}, {
     message: ""Processing results",
     timeout: 2000
});
```