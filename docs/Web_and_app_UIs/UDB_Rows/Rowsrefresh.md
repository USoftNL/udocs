---
id: Rowsrefresh
tags: [USoft11, USoft10]
---
# Rows.refresh()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **refresh()** function of the [Rows object](/docs/Web_and_app_UIs/UDB_Rows).

## **Rows.refresh()**

Refreshes the record.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
*rows*.refresh( *options* )

*options*  ::=  {
     promise:  *promise*,
     success:  *success-function*,
     error:  *error-function*
}

*promise*  ::= { true | false }
```

*Options* is a struct that can contain the following items, all of which are optional.

*Promise *determines the return value of this function. If *promise* has the value of 'true' (the default), a Promise object is returned. If *promise* has the value of 'false', the ‘this’ object is returned instead.

*Success-function* is a function that is executed after the records are successfully refreshed.

*Error-function* is a function that is executed if an error occurred.

*Example 1*

```js
$.udb('EMP').rows('current').refresh();
```

*Example 2*

To refresh all rows where MANAGER is NULL and SALARY is higher than 35000:

```js
$.udb('EMP').rows('condition', { MANAGER: "NULL", SALARY: ">35000" } ).refresh();
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[rowprerefresh](/docs/Web_and_app_UIs/UDB_Events/rowprerefresh.md)|Data source objects|Before a record is refreshed|
|[rowpostrefresh](/docs/Web_and_app_UIs/UDB_Events/rowpostrefresh.md)|Data source objects|After a record is refreshed|



 