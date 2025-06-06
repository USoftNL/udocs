---
id: udbgenericHostVar
---

# $.udb.genericHostVar()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **genericHostVar()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.genericHostVar()**

Assigns a value to a generic host variable. A generic host variable is a host variable (a name-value pair) that is needed in multiple actions or events. A host variable that is not generic is automatically cleared after the individual Page Engine call (query or manipulation request).

Returns the 'this' object.

*Syntax*

```js
.genericHostVar( *name*, *value* )
```

The required *name* is the name of the variable. The required *value* is the value being assigned to it.

Generic host variables and their values are valid and included in every Page Engine call until they are removed with the $.udb.clearGenericHostVars() function, or until you navigate to another page.

*Examples*

```js
$.udb.genericHostVar("ID","242")
```

```js
$.udb.genericHostVar("NAME","Jones")
```

 