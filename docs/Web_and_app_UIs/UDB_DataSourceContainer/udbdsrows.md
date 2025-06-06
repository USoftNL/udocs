---
id: udbdsrows
tags: [USoft11, USoft10]
---
# $.udb(ds).rows()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **rows()** function of the [DataSourceContainer object](/docs/Web_and_app_UIs/UDB_DataSourceContainer).

## **$.udb(ds).rows()**

Addresses a record or a set of records of the first data source in the container.

Returns a collection of records.

> [!TIP]
> **Row selectors**
> The optional arguments passed to .rows() in the syntax block below are **row selectors**. They allow you to identify one or more specific records.

*Syntax*

```js
$.udb( *ds* ).rows( *index*, *index* )
$.udb( *ds* ).rows( *keyword*, *indicator* )
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The optional *index, keyword, indicator* are *row selectors*. If you do not pass a row selector, all records in the data source are addressed. If you do pass a row selector, you either pass one or two *index* arguments or you pass a *keyword* argument that possibly requires an *indicator* argument.

## Passing row selectors

*Index* values are integers or arrays used to identify records in the data source:

- If you pass a single integer value, the record that corresponds to that index value is addressed.
- If you pass two integer values, the records corresponding to the first and the second index value are adressed and also all the records in between.
- If you pass an array of integer values, the records corresponding to the elements in the array are adressed.
- The index is 0-based: the first item has index 0, not 1.

*Examples*

This example addresses the 5th record:

```js
$.udb('EMP').rows(4);
```

and is short for:

```js
$.udb('EMP').rowSet('current').rows(4);
```

This example addresses the 5th, 6th and 7th record:

```js
$.udb('EMP').rows(4, 6);
```

This example addresses the records with the specified indices:

```js
$.udb('EMP').rowSet('current').rows([0, 1, 4, 7]);
```

## Passing keyword and indicator values

Each *keyword* value is a string that identifies a predefined option. If the Indicator column is empty, the *indicator* parameter does not apply; otherwise, the indicator stated is required.

|**Keyword**|**Indicator**|**Description**|
|--------|--------|--------|
|current |        |The current record (not the same as 'selected')|
|dataset |data set indicator|The records in the requested data set|
|condition|condition|The record(s) that satisfy the condition|
|first   |        |The first record|
|id      |row ID  |The record with the requested row ID|
|last    |        |The last record|
|marked  |        |All marked records|
|next    |        |The record following the current record|
|previous|        |The record preceding the current record|
|selected|        |All selected records (not the same as 'current')|



*Examples*

This example addresses the record following the current record:

```js
$.udb('EMP').rows('next');
```

This example addresses the records in the first data set:

```js
$.udb('EMP').rows('dataset', 1);
```

This example gets records that satisfy the equality condition EMPNO = 10:

```js
$.udb('EMP').rows( { EMPNO: "10" } );
```

These examples get records that satisfy more complex conditions:

```js
$.udb('EMP').rows('condition', { BIRTH_DATE: ">=01-JAN-1980" } );
```

```js
$.udb('EMP').rows('condition', { BIRTH_DATE: ">=01-JAN-1980&<=01-JAN-2000" } );
```

To get all rows where MANAGER is NULL and SALARY is higher than 35000:

```js
$.udb('EMP').rows('condition', { MANAGER: "NULL", SALARY: ">35000" } );
```

 