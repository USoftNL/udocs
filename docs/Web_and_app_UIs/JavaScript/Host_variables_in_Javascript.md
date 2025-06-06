---
id: Host_variables_in_Javascript
---

# Host variables in Javascript

There are four methods available to handle hostvars in Javascript:

- The hostvars option of a $.udb function (if available).
- $.udb.hostvars.
- $.udb.genericHostVar().
- $.udb.clearGenericHostVars().

Use the **$.udb.hostvars** object ONLY if you are not scripting a $.udb function that has its own hostvars option (for example, $.udb.executeSQLStatement() or $.udb(*datasource*).executeQuery() ).

The **$.udb.hostvars** object is for holding temporary host variables (ie., variables with one-time use) that have literal values. This object can be used in a SQL query triggered by an event that is fired after the value is set. That event can contain the **ExecuteSQLStatement** action, or any other action that queries data sources with host variable placeholders.


:::note

You can also set host variables on the [beforeexecutequery](/docs/Web_and_app_UIs/UDB_Events/beforeexecutequery.md) event of data sources.

:::

The object structure is of a structure of the form:

```
{ name:value, name: value, ... }
```

where *name* is the name of a host variable used in the SELECT or WHERE clauses of a data source, and *value* is a literal value that is substituted for this host variable. *Value* is typed either as a numeric value, in which case it is unquoted, or as a string value, in which cases it is quoted.


:::note

*Name* is typed as a string. *Name* must be surrounded by single or double quotes if it contains one or more spaces. If not, the quotes are optional. JSON prescribes double quotes.

:::

*Example 1*

```
$.udb.hostvars = {ID: 242, NAME: "Jones"};
$.udb.executeSQLStatement("InsertStatement"});

```

*Example 2*

```
$.udb.executeSQLStatement("InsertStatement", {hostvars: { ID: 242, NAME: "Jones"} });
```

The ExecuteSQLStatement call in these examples refers to an action defined in the Web Designer that has its Label property set to 'InsertStatement' and that performs this query:

```sql
INSERT INTO PERSON( person_id, name ) 
VALUES ( :ID, :NAME )
```

If placeholders are used in Output Expressions or the Where Clause definition of a data source, then you must make sure that each time the data source is addressed, appropriate host variable values are supplied:

```
$.udb("ds").executeQuery({hostvars:{name: 'JONES'}});
```

If the same host variable and value is required in multiple actions or events, use the **$.udb.genericHostVar() function** instead. Generic host variables and their values are valid and included in every PageEngine call until removed with the $.udb.clearGenericHostVars() function, or until you navigate to another page.

## Date/time host variable values

Host variable values that represent dates and times are typed as string values and therefore quoted, as the following 2 snippets show:

```
$.udb.hostvars = {ID: 242, NAME: "Jones", START_DATE: "12-02-2020"};

```

```
$.udb("ds").executeQuery({hostvars:{agreement_date: '22-06-2022'}});
```

You must cast these string values to actual date and time values if you want to store them in the database or execute queries based on them. For example, to execute a query with '22-06-2022' from the example as a date value, refer to the host variable in the Where Clause of the data source:

```
agreement_date = USFormat.CharToDate( :agreement_date, 'DD-MM-YYYY' )
```

 