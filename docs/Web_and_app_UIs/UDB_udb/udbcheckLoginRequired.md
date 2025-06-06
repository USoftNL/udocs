---
id: udbcheckLoginRequired
---

# $.udb.checkLoginRequired()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **checkLoginRequired()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.checkLoginRequired()**

Checks if a login is required for the current page, and shows the login page if necessary.

Returns a boolean value.

*Syntax*

```js
.checkLoginRequired( *show* )

*show*       ::=  { true | false }
```

The optional show determines whether the login page may be displayed if the user is not logged in and the page displayed requires it.

*Example*

```js
if (!$.udb.checkLoginRequired(true))
    return $.udb.showLogin();
```

 