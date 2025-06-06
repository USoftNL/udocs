# $.udbMeta(ds).sortOrder()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **sortOrder()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).sortOrder()**

Sets or removes a sort definition. A sort definition is a column or a list of columns by which data is sorted as well as (in the case of a list of columns) the hierarchy of these sort columns, i.e., by which column the data is sorted first, second…

Returns the 'this' object.

*Syntax*

```js
$.udbMeta( *ds* ).sortOrder( *options* )

*options*  ::=  {
     order: *order*,
     resetOrder: *reset-order*,
     resetFn: *remove-fn*
}

*reset-order*  ::=  { none | clear | default }
*remove-fn*  ::= { true | false }
```

*Order* is an array of objects or an array of columns that specify the sort definition.

*Reset-order* is a string that specifies what should happen with the existing sort definition. If *reset-order* is set to 'none' (the default), new sort columns are added in front of existing sort columns. If it is set to 'clear', the existing sort definition is removed. If it is set to 'default', the existing sort definition is replaced by the sort definition that was specified by setting the Sort Order property for the data object in Web Designer.

*Remove-fn* is a boolean that determines whether user-defined sorting functions must be removed. The default is false.

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Examples*

If the existing sort order was by NAME, the result of each of the following examples is that data is sorted first by DEPT_NO and then by NAME:

```js
$.udbMeta('EMP').sortOrder({
   order: 'DEPT_NO',
   resetOrder: 'none'
});
```

```js
$.udbMeta('EMP').sortOrder({
   order: ['EMP_NO', 'NAME'],
   resetOrder: 'clear'
});
```

 