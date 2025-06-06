---
id: udbapplyCurrentContext
---

# $.udb.applyCurrentContext()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **applyCurrentContext()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.applyCurrentContext()**

Switches the default context of the function to the context of the preceding promise, or the promise specified instead.

*Syntax*

```js
.applyCurrentContext( *promise-func*, *context* )
```

*Promise-func* is the function passed to one of the outcome functions of a Promise, typically a .then(), a .catch() or a .finally() clause.

The optional *context* overrides the current context directly with its value, e.g. “” or “ApplicationFrame”.

Omitting *context* will just execute the promise function with the context of its preceding promise.

*Example*

```js
set.refresh()
    .then($.udb.applyCurrentContext(function() {
            success();
       }, set.context));
```

 