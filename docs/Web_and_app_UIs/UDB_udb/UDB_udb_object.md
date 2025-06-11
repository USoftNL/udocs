---
id: UDB_udb_object
tags: [USoft11, USoft10]
---
# UDB udb object



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

This article is about the **udb** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
This model is built around the udb, [DataSourceMetaContainer](/Web_and_app_UIs/UDB_DataSourceMetaContainer), [DataSourceContainer](/Web_and_app_UIs/UDB_DataSourceContainer), [Rowset](/Web_and_app_UIs/UDB_Rowset), [Rows](/Web_and_app_UIs/UDB_Rows), [ColsMeta](/Web_and_app_UIs/UDB_ColsMeta), and [Cols](/Web_and_app_UIs/UDB_Cols) object types. See also [UDB events](/Web_and_app_UIs/UDB_Events).

:::

The **udb** object is the top-level object of the UDB library, a library of JavaScript extensions for customising web pages built in USoft Web Designer. This library is an extension of jQuery. The runtime implementation of the UDB layer is in a file named "usoft.db.js".

The udb object provides a global entrypoint for programming against Web Designer solutions. This object is accessed for resources (functions, properties) that are independent of specific data sources. It may be referred to by:

```js
$.udb
```

This establishes the library as a jQuery-like plug-in, since the $ sign identifies the jQuery library and offers access to it.


:::tip

In addition to the functions listed specifically for the **udb** object, the object equally exposes all the functions listed for the udbMeta object

:::

*Examples*

```js
$.udb.login('ABC','DEF');
```

```js
$.udb.settings.browser
```