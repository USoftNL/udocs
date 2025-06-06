# $.udb.getMenu()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **getMenu()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.getMenu()**

Fetches a menu.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

*Syntax*

```js
.getMenu( *options* )

*options*     ::=  {
    menuName:  *menu-name*,
    promise:  *promise*,
    success:  *success-function*,
    error:  *error-function*
}

*menu-file*   ::=  { Menus.xml | }
*dir*         ::=  { ../xml/menus/ | }
*promise*     ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional.

*Menu-name* is a string that is the name of the menu.

*Promise* determines the return value of this function. If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the operation has successfully completed.

*Error-function* is a function called if an error occurs.

*Example*

```js
$.udb.getMenu({
    menuName: menuName,
    success: function() {
        var struc = $.udb.menus.menu(menuName);
        if (struc) {
            ...
        }
    }
});
```

----

![](/api/Web%20and%20app%20UIs/UDB%20udb/assets/9be3e3b0-aec6-450a-a323-058b41bffda3.png)



In versions prior to USoft 10.0.1K, there were 2 additional settings in *options* corresponding to the Menu Directory and Menu File properties of menu controls. These properties have now been dropped.

```js
dir: *menu-directory*,
menuFile: *menu-file*,

```

*Menu-directory* was a relative path to the directory where *menu-file* was located. This path was relative to the \\WebSite directory. The default was '../xml/menus/'.

*Menu-file* was a string that was the name of the file containing the menu definition. The default was 'Menus.xml'.

----

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[aftergetmenu](/docs/Web%20and%20app%20UIs/UDB%20Events/aftergetmenu.md)|Page objects|After each .getMenu() action|
|[beforegetmenu](/docs/Web%20and%20app%20UIs/UDB%20Events/beforegetmenu.md)|Page objects|Before each .getMenu() action|



 