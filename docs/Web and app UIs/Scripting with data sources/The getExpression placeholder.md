# The getExpression placeholder

![](/api/Web%20and%20app%20UIs/Scripting%20with%20data%20sources/assets/c29894ef-9824-498a-9b23-e1cd94c27a76.png)



> [!CAUTION]
> This placeholder is no longer supported in USoft 11.

![](/api/Web%20and%20app%20UIs/Scripting%20with%20data%20sources/assets/22fff438-3acd-485b-90d0-d44868e85f2a.png)



The **getExpression** placeholder copies the Output Expression property from a TableColumn object.  It can be used in the Where Clause property of a data source, or in the Output Expression property of a TableColumn object. It refers to the underlying data source item of a data source:

```
  ${getExpression( *data-source*, *data-source-item* ) }
```

You can use the getExpression placeholder with any kind of TableDataSource object.

*Data-source-item* can be a column name or a variable name of the corresponding data source.

To obtain the output expression from a column of a data source, you can set, for example:

```
  ${getExpression(SCHEDTOUR,DESTINATION)}
```

The result of this expression is either the data source alias and column name from the data source item if it is an actual table column, or its expression as set in the Output Expression property. This allows referencing of a formula specified in that data source item in a WHERE clause possible, without requiring to copy the entire formula.

For example, you have a data source named RECORDS with a data source item named TOTALS with the following expression set in the Output Expression property:

```
  VALUE_FIRST + VALUE_SECOND
```

Now, you can use it in a Where Clause property like:

```
  ${getExpression(RECORDS, TOTALS)} > 50
```

The Page Engine translates this to:

```
  t1.VALUE_FIRST + t1.VALUE_SECOND > 50
```