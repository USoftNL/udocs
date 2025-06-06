# The getWhereClause placeholder

![](/api/Web%20and%20app%20UIs/Scripting%20with%20data%20sources/assets/c29894ef-9824-498a-9b23-e1cd94c27a76.png)



> [!WARNING]
> This placeholder is **deprecated** in USoft 11 but still functional on data sources on the current main page.

![](/api/Web%20and%20app%20UIs/Scripting%20with%20data%20sources/assets/22fff438-3acd-485b-90d0-d44868e85f2a.png)



The **getWhereClause** placeholder copies the WHERE clause of another data source, and pastes it into the WHERE clauses in which it is used. Both data sources must be a main data source (not embedded), and also both based on the same table.

You can adjust the data source aliases in the WHERE clause by that of another, and also specify a clause (which is by default '1=1') in the case that the specified data source has no WHERE clause at all, as specified by the syntax:

```
  ${getWhereClause( data-source, data-source-alias, if-null-string ) }
```

The resulting expression from the getWhereClause placeholder includes all parent references of the specified data source, and its outer join clauses from embedded data sources. The latter may also expand the FROM clause of your data source, with the joined (embedded) data sources that belong to the specified data source. It excludes the WHERE clause of the selected record, however.

For example, for a MANAGER table on a related page that must have the same WHERE clause as it has on a parent (previous page), you can set the Where Clause property to:

```
  ${getWhereClause(../MANAGER,MANAGER)}
```

If the MANAGER table on the previous page has a WHERE clause with the condition t1.NAME = 'JOHN', then the MANAGER table on this page has this condition also, with t1 replaced by its own data source alias.