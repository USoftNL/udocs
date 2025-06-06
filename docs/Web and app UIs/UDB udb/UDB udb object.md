# UDB udb object



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **udb** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
> This model is built around the udb, [DataSourceMetaContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer), [DataSourceContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer), [Rowset](/docs/Web%20and%20app%20UIs/UDB%20Rowset), [Rows](/docs/Web%20and%20app%20UIs/UDB%20Rows), [ColsMeta](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta), and [Cols](/docs/Web%20and%20app%20UIs/UDB%20Cols) object types. See also [UDB events](/docs/Web%20and%20app%20UIs/UDB%20Events).

The **udb** object is the top-level object of the UDB library, a library of JavaScript extensions for customising web pages built in USoft Web Designer. This library is an extension of jQuery. The runtime implementation of the UDB layer is in a file named "usoft.db.js".

The udb object provides a global entrypoint for programming against Web Designer solutions. This object is accessed for resources (functions, properties) that are independent of specific data sources. It may be referred to by:

```js
$.udb
```

This establishes the library as a jQuery-like plug-in, since the $ sign identifies the jQuery library and offers access to it.

> [!TIP]
> In addition to the functions listed specifically for the **udb** object, the object equally exposes all the functions listed for the udbMeta object

*Examples*

```js
$.udb.login('ABC','DEF');
```

```js
$.udb.settings.browser
```