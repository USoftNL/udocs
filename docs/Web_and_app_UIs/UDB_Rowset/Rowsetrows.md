---
id: Rowsetrows
tags: [USoft11, USoft10]
---
# Rowset.rows()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **rows()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

:::

## **Rowset.rows()**

Gets a specified subset of records from the row set.

Returns a collection of records.

*Syntax*

```js
*row-set*.rows( *index*, *index* )
*row-set*.rows( *keyword*, *indicator* )
```

Parameters are optional. If you do not pass any parameter, all records in the row set are addressed.

Parameters may be used to address specific records. You either pass one or two *index* parameters or you pass a *keyword* parameter that possibly requires an *indicator* parameter.

## Passing index parameters

Index values are integers or arrays used to identify records in the data source:

- If you pass a single integer value, the record that corresponds to that index value is addressed.
- If you pass two integer values, the records corresponding to the first and the second index value are adressed and also all the records in between.
- If you pass an array of integer values, the records corresponding to the elements in the array are adressed.


:::warning

The index is 0-based: the first item has index 0, not 1.

:::

*Examples*

To get the 5th record:

```js
$.udb('EMP').rowSet('current').rows(4);
```

To get records 5, 6, 7, 8, 9 and 10:

```js
$.udb('EMP').rowSet('current').rows(4, 9);
```

To get an array of indices:

```js
$.udb('EMP').rowSet('current').rows([0, 1, 4, 7]); // rows with indices 0, 1, 4, and 7
```

## Passing keyword and indicator values

Each keyword value is a string that identifies a predefined option. If the Indicator column is empty, it does not apply; otherwise, the indicator stated is required.

|**Keyword**|**Indicator**|**Description**|
|--------|--------|--------|
|current |        |The current record (not the same as 'selected')|
|dataset |data set indicator|The records in the requested data set|
|condition|condition|The records that satisfy the condition|
|first   |        |The first record|
|id      |row ID  |The record with the requested row ID|
|last    |        |The last record|
|marked  |        |All marked records|
|next    |        |The record following the current record|
|previous|        |The record preceding the current record|
|selected|        |All selected records (not the same as 'current')|



*Examples*

To get the records of a dataset:

```js
$.udb('EMP').rowSet('current').rows('dataset'); // current dataset
```

```js
$.udb('EMP').rowSet('current').rows('dataset', 2); // dataset 2
```

To get records that satisfy the equality condition EMPNO = 10:

```js
$.udb('EMP').rowSet('current').rows( { EMPNO: "10" } );
```

To get records that satisfy more complex conditions:

```js
$.udb('EMP').rowSet('current').rows( 'condition', { BIRTH_DATE: ">=01-JAN-1980" } );
```

```js
$.udb('EMP').rowSet('current').rows( 'condition', { BIRTH_DATE: ">=01-JAN-1980&<=01-JAN-2000" } );
```

To get records where MANAGER is NULL and SALARY is higher than 35000:

```js
$.udb('EMP').rowSet('current').rows( 'condition', { MANAGER: "NULL", SALARY: ">35000" } );
```

To get a record by row ID:

```js
$.udb('EMP').rowSet('current').rows('id', 15); // row with id '15'
```


:::tip

In all cases, records have to be queried first, before they can be found by any of these operations. To query, use the executeQuery action of the data source first, and then gotoDataSet of the Rowset after.

:::
