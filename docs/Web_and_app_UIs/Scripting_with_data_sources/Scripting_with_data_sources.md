---
id: Scripting_with_data_sources
---

# Scripting with data sources

You can use the following functions to script around data source objects.

## Data sources

You can refer to data sources by using these placeholders:

- ${DefaultDataSource} contains the data source in the current page that has the Default Data Source = Yes property setting.
- ${getDataSourceAlias} is used to refer to the (USoft-generated) alias of a data source in a SQL statement.
- ${getMainDataSourceAlias} is used in the WHERE clause of a SQL statement, and refers to the (USoft-generated) alias of the main data source in the FROM clause.
- ${getThisDataSourceAlias} is used in the WHERE clause of a SQL statement, and refers to the (USoft-generated) alias of the data source itself.

## Objects related to data sources

You can refer to objects related to data sources by using these placeholders:

- ${getSearchValue} is used to retrieve values from query conditions.
- ${getValue} reads a value from the selected record in a web page. This can be a column value of the selected record, or the current value of a variable in a variable set.
- ${getWhereClause} is used in the WHERE clause of a SQL statement, and copies the WHERE clause of another data source based on the same table to the appropriate data source.
- ${getSelection} is used in the WHERE clause of a SQL statement, and creates an expression of the selected record of another data source based on the same table.
- ${getExpression} is used to copy the Output Expression of a table column to use it in other expressions.

## Host variables

To refer to host variables in SELECT or WHERE clause of a SQL statement, you can use a **colon** ( **:** ) as a **prefix**, for example:

```
:customer_id 
```