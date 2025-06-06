# $.udb.showLogin()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **showLogin()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.showLogin()**

Shows the login page, or changes how the login page is displayed.

*Syntax*

```js
.showLogin( *options* )

*options*  ::=  { *struct* | "reset" }

*struct*   ::=  {
    useTopContext:  *use-top-context*,
    reset: *reset-function*,
    show:  *show-function*
}

*use-top-context* ::=  { true | false }
```

Options may be a string with the value “reset” that resets any changes made to the .showLogin() behavior, or a struct that can have the following items, all of which are optional.

Use-top-context is a boolean that defines if the login page must always be displayed in the top-level context, and not e.g. in the ApplicationFrame.

Reset-function is a function that takes one parameter named reason, and is used to reset the login page in case a login has failed.

Show-function is a function that takes one parameter named reason, and is the function used to show the login page.

Omitting the options parameter will log out the user and show the login page.

*Examples*

```js
$.udb.showLogin( {useTopContext: true} );
```

```js
$.udb.showLogin( "reset" );
```

 