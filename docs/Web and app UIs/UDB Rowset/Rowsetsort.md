# Rowset.sort()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **sort()** function of the [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset/UDB%20Rowset%20object.md).

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

 