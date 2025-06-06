# $.udb(ds).searchCols()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **searchCols()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).searchCols()**

Gets a collection of search conditions (in the form of column values) that is current for the data source. There is at most 1 current search condition value for each column at any one time.

Returns a Cols object.

*Syntax*

```js
$.udb( *ds* ).searchCols( *columns* )
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The optional *columns* is a string value or an array of string values in which each value is a column name. If columns is omitted, all the columns in the data source are returned.

*Examples*

```js
$.udb('EMP').searchCols().clear();
```

```js
$.udb('EMP').searchCols('EMPNO').val('10');
```

## Notes

When you navigate to a different page using page chaining, for example by calling .navigateTo(), then unlike Edit values, Search values are not automatically transferred to the target page. To make them available in the target page, you must loop over them:

```js
$.udb('TOUR').executeQuery().then(function(dsc){
  var searchCols = {};  
  dsc.searchCols().each(function(index,col){
      searchCols[col.name()] = col.val();
  });
  $.udb.executeInContext( dsc.context, function(){
    $.udb.navigateTo("Tours Info 1.2 Results").then(function(){
      $.udb('TOUR').searchCols().each(function(index,col){
        col.val(searchCols[col.name()]);
      });
    });
  });
});
```

 