---
id: Rowsetsort
tags: [USoft11, USoft10]
---
# Rowset.sort()



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

This article is about the **sort()** function of the [Rowset object](/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

:::

## **Rowset.sort()**

Sorts the rows in a rowset.

Returns the 'this' object.

*Syntax*

```js
*row-set*.sort( *target* )

*target*   ::= { client | server | auto }
```

The optional *target* is a string that determines where the sorting should take place. Possible values are 'client', 'server' or 'auto' (the default). The 'auto' value sorts on the server except when, for one of the columns, a user-defined sorting function has been specified. In that case the sorting is done on the client.

*Example*

```js
$.udb('EMP').rowset('current').sort();
```

 