# Limitations of Logical Views

In many respects, a Logical View behaves in the same way as a Table. In USoft Windows Designer and Web Designer, you get default info windows and info pages for Logical Views in the same way as for Tables.

But Logical Views have limitations that Tables do not have.

### Limitations in SQL

The SQL constructs you can use to define a Logical View are limited:

- You cannot use ORDER BY, CONNECT BY or START WITH clauses.
- You cannot use the UNION, INTERSECT and MINUS set operators. Only UNION ALL is allowed.

A Logical View's SQL Statement may contain joins, subqueries, WHERE, HAVING and GROUP BY clauses, and SQL functions.

### Limitations in model structure

A Logical View:

- Cannot be used as the Parent Object or Child Object of a Relationship.

- Cannot be a supertype or subtype.
- Cannot be the Transition Table of a Constraint.

### Limitations in data manipulation options

> [!TIP]
> This section discusses limitations of data manipulation in Logical Views. However, you can customise data manipulation through Logical Views by using

Data manipulation through Logical Views is limited:

1. You cannot INSERT, UPDATE or DELETE data through a Logical View if its SQL Statement contains one of the following:

- the UNION ALL operator.

- the DISTINCT function.

2. You can INSERT, UPDATE or DELETE data in a table T through a Logical View V only if the SELECT list in V's SQL Statement names ALL the primary key columns of T.

3. You cannot INSERT or UPDATE a view column that is subject to any SQL function in the view's SELECT list.

4. You cannot INSERT data through a Logical View that does not offer access to mandatory columns, unless those columns have default values.

The inability to perform data manipulation may take different shapes. An error message may appear. Inability to UPDATE may be signalled by non-updatable fields. Inability to DELETE may be tacit: if the Logical View joins two tables and one does not have all primary key columns named in the view's SQL, then DELETE may be performed only on the other table, without the user being signalled in any way about

If the primary key column(s) of more than one table appear in the SELECT list, manipulations (inserts, updates and deletes) are executed on each of these tables.

If your Logical View does not offer the data manipulation options you want, you can create these options by turning it into a rule-based logical view.

*Example 1*

In this Logical View, only the EMPLOYEE table has a primary key in the SELECT list. Therefore only the EMPLOYEE table is updatable through this Logical View:

```sql
SELECT     d.name
,          e.id
,          e.dept_id
,          e.name
FROM       department d
,          employee e
WHERE      e.dept_id = d.id
```

*Example 2*

In this Logical View, both underlying tables has a primary key in the SELECT list. A manipulation on this Logical View will be executed on both tables:

```sql
SELECT     d.id
,          d.name
,          e.id
,          e.dept_id
,          e.name
FROM       department d
,          employee e
WHERE      e.dept_id = d.id
```

*Example 3*

In this Logical View, you can UPDATE the FAMILY_NAME column but not the SALUTATION column, because the SALUTATION column is subject to SQL functions:

```sql
SELECT     p.person_id
,          p.family_name
,          'Dear ' ||           
           DECODE(              
              p.gender
           ,  'M'
           ,  'Mr. '
           ,  'Ms. '
           ) ||
           UPPER( SUBSTR( p.family_name, 1, 1 ) ) ||
           LOWER( SUBSTR( p.family_name, 2 ) ||
           ': '           salutation
FROM       person p
```

### No Update Notify on multi-record Logical Views

Update Notify is the standard USoft behavior in C/S applications that data on the screen is refreshed if that data is updated by the Rules Engine. Update Notify is NOT supported on multi-table Logical Views; the user or the application must re-query to get the new data in view.

The fact that Update Notify is not supported on multi-table Logical Views can lead to unexpected results on the screen if the same underlying column is used multiple times in the Logical View's SELECT list.