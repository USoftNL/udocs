---
id: Column_expressions
---

# Column expressions



> [!NOTE]
> This article is about **Column expressions** as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **Column expressions**

In SQL, column expressions are used :

- In the select-list of a SELECT statement.
- In the VALUES clause of an INSERT statement.
- To the right of the = symbol in a SET clause of an UPDATE statement.
- To the left and to the right of a comparison operator in a condition.

*Syntax*

A column expression is a column name, or a literal value, or a composition of columns names and literals connected by function calls or computations:

```sql
*column-expression* ::=  {
                         {  *column*         | 
*literal*        |  
*pseudo-column*  |  
*column-expr*    |
*function-call*  |
*computation*
                         }  [*column-alias*]   |   
*column-wildcard*
                      }

*function-call*     ::=  *function*( *column-expr*, *column-expr*... )

*computation*       ::=  *column-expr  math-operator  column-expr*

*column*            ::=  {*table-name*|*table-alias*}.*column-name*

*column-wildcard*   ::=  {*table-name*|*table-alias*}.*
```

In its simple form, a column expression is a column name, a literal, or a pseudo-column. A special form is the asterisk (*) as column wildcard. This is a shorthand for "all the columns of the table".

A column expression optionally ends with a column alias.

There are two ways to produce composite column expressions: function calls and computations. These productions may be nested to any level deep, and may also be mixed.

A function call consists of the name of an inline function immediately followed by parentheses surrounding zero or more comma-separated column expressions. The parenthesised expressions are passed as input parameters to the function. An inline function (or scalar function) is any supported SQL function other than a group function. Here is an example with nested function calls. This example returns the first word of each title:

```sql
SUBSTR( title, 1, INSTR( title, ' ' ) )
```

In a computation, a mathematical operator is applied to 2 input values. The input values are written as 2 column expressions to the left and to the right of the operator. This example returns the percentage that each sample (from a table s) is of a total population (from a related  table p):

```sql
( s.sample / p.total) * 100
```

## Column names

A *column name* may appear independently. It may be prefixed with the name or alias of the table instance that the column belongs to. A dot separates the prefix from the column name. The prefix is optional, but it is necessary for disambiguisation if the column name occurs in more than 1 table instance referenced by the SQL statement.

A column name must refer to an existing column in the data model. It must identify that column uniquely:

- If the SQL statement refers to different tables that each have a column with the column name, prefixes are necessary to identify the column.
- If the SQL statement refers to multiple table instances of the column's table, you must give each table instance a unique table alias and prefix the column names with the aliases.

The prefixes are also legal if they are not essential for unique identification of the column. USoft recommends you ALWAYS use table aliases in column expressions, except perhaps in single-table SQL statements.

## Column wildcards

The asterisk (*) as a *column wildcard* is a shorthand for enumerating all the column names in the table. When the statement executes, the processor substitutes the column names. The equivalent is a comma-separated list of all the column names of all the table instances in the statement.

This shorthand is practical in an ad-hoc query if you do not want to spend time lookup up column names or if you want to prevent typing effort, but has drawbacks in other contexts. A notable drawback is that the same SQL statement returns different results if columns are added, renamed or dropped later.

Prefixing is possible in the same way as with regular column names. In statements with multiple table instances, this restricts the scope of the wildcard to just the columns in the prefixed table instance.

For logical reasons you cannot apply functions and calculations to the column wildcard, with the exception of the COUNT group function.

## Column aliases

You can optionally provide a column alias as the last element of a column expression, separated by whitespace from the remainder of the column expression. A column alias must not contain whitespace. A column alias may optionally be surrounded by double quotes.

The only real use case in USoft for column aliases are Logical View statements. In a Logical View, you can only have a compound output expression if you label it with a column alias. When the Logical View is checked, the column alias becomes a column name. A Logical View with the following SQL will have a column named FULL_NAME:

```sql
SELECT     person_id
,          UPPER( SUBSTRING( first_name, 1, 1 ) ) ||
           LOWER( SUBSTRING( first_name, 2 ) || ' ' ||
           UPPER( initials ) || ' ' ||
           UPPER( family_name ) "Full_name"
FROM       person
```

Do not confuse with table aliases.

 