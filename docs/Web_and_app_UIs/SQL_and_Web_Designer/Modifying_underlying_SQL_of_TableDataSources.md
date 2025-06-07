---
id: Modifying_underlying_SQL_of_TableDataSources
---

# Modifying underlying SQL of TableDataSources

This article is about modifying or "tweaking” the SQL that underlies TableDataSource objects.

## When to use?

Modifying the underlying SQL of a TableDataSource is an optimal strategy in situations where TableDataSources *almost* fulfil your needs, but you need some small changes or additions to the underlying SQL to get what you really want.

## Default SQL underlying a TableDataSource

To understand how you might want to modify a TableDataSource’s SQL, let's first look at the SQL that a TableDataSource executes for you *by default* - that is, before you start making any modifications.

### Underlying SELECT… WHERE

When your user queries data through a TableDataSource that you have not modified in any way, she performs an underlying SELECT statement that typically retrieves from the RDBMS all the column values in all the records in the table. The values are typically displayed in screen fields (record by record). Each field corresponds to a column. If the user specifies 1 or more search conditions in fields before activating the query behaviour, these conditions are added to the underlying SELECT as WHERE conditions. This functionality is sometimes called "Query By Example”.

### Underlying INSERT… VALUES

When your user inserts a data record by filling out a form of empty fields and then pressing Submit, she submits to the RDBMS an INSERT… VALUES statement where each column value submitted is in one of the fields. The form is based on the TableDataSource.

### Underlying UPDATE

When your user retrieves data in a form, updates some of the values in the fields, and then presses Submit, she submits to the RDBMS an underlying UPDATE statement. The form is based on the TableDataSource.

### Underlying DELETE

When your user retrieves data in a form, then selects one or more retrieved records, and then presses Drop, she submits to the RDBMS an underlying DELETE statement. The form is based on the TableDataSource.

## Adding an output column to a TableDataSource

You can insert a TableColumn into a TableDataSource. You can then specify the Output Expression property of the inserted TableColumn. Use column names, constants and SQL functions just like you would in a regular SELECT output list, for example:

```sql
CONCAT( column_1, 'text' )
```

If the TableColumn has a GroupBy expression (via its GroupBy property), you can also use group functions here.

You can call RDMI components here, using function call syntax:

```sql
*component.method*( *input-parameters* )
```

## Limiting query results

At runtime, when users perform a query by using a form based on a TableDataSource, they can limit query results by typing search conditions in form fields. This adds a WHERE clause to the underlying SQL at runtime. This WHERE clause has the equality operator (=) by default, but end users can specify an inequality operator `(!=)` by typing '!’ as the first symbol in a search field, they can specify comparison operators by typing `>`, `<`, `>=` or `<=` as the first symbol(s) in a search field, and they can specify a LIKE operator by including `_` and/or `%` symbols in their search condition.

In addition to this default runtime behaviour, you can add WHERE clauses of your own at development time. Do this by setting the TableDataSource’s **Where Clause** property:

- Omit the initial WHERE keyword.
- You can use column names, hard-coded text, SQL functions and logical connectors (AND, OR) like you would in regular WHERE clauses.
- Use SHIFT+ENTER or CTRL+ENTER to create a new line if necessary.

This effectively adds a WHERE clause to the underlying SQL.

*Example*

To retrieve only tours that take longer than 1 week, set WHERE Clause property of the TOUR TableDataSource to:

```sql
num_days > 7
```

## Grouping by a column of a TableDataSource

You can group by 1 or more TableColumns of a TableDataSource by setting the GroupBy property of those TableColumns to Yes (the default is No).

If you group by just 1 column, set that TableColumn's **OrderBy/GroupBy Position** property to '1’.

If you group by multiple columns, make sure that the first column you want to group by has this property set to '1’, the next column you want to group by has this property set to '2’, and so on.

This effectively adds a GROUP BY clause to the underlying SQL.

## Sorting query results

You can sort query results.

If you order by just 1 column, set that TableColumn's **OrderBy/GroupBy Position** property to '1’.

If you order by multiple columns, make sure that the first column you want to order by has this property set to '1’, the next column you want to order by has this property set to '2’, and so on.

This applies to non-grouped columns (GroupBy = No), but also to grouped columns (GroupBy = Yes).

This effectively adds an ORDER BY clause to the underlying SQL.

## Setting record set size

This option may or may not correspond to a SQL clause in the SQL syntax of your database vendor.

Large query results are broken up into **record sets** that are browsed via multiple page views, so that the end user can see results without having to wait for a large set of data to be retrieved completely from the server.

By default, USoft displays 20 records at a time. If there are more than 20 results, in USoft default pages, an automatically generated DataSetNumbersControlGroup control allows the end user to navigate to the next or previous set or to jump to a different set by clicking a sequence number.

How query results are broken up into record sets depends on the TableDataSource's **Maximum number of records** property. This is the number of records per record set.

 