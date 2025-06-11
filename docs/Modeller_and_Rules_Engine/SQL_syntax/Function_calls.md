---
id: Function_calls
---

# Function calls




:::note

This article is about **function calls** as part of the [SQL syntax](/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

:::

## **Function calls**

Column expressions may contain functions calls. A function call is signalled by the required presence of parentheses around the column name or literal. The function name is the name immediately preceding the opening parenthesis:

```sql
*function-name*( { *column* | *literal* } [ , *argument* ... ] )
```

Functions expect 0, 1 or multiple arguments, which may be required or optional depending on the function. Function arguments are separated by commas. Functions may be nested.

*Example*

In this example, the UPPER( ) function converts retrieved values from the NAME column to all-uppercase. The result is passed as the first argument of the SUBSTR( ) function, which in this case takes 2 arguments, the input string and the number 5, which causes it to return the input string from position 5 onward.

```sql
SELECT     SUBSTRING( UPPER( name ), 5 )
```

This example returns the string **SON** if the retrieved name is **Johnson**.

## Method invocations

Invocations of methods of RDMI components are a special case of function call. These invocations are signalled by the presence of a full-stop separator ( . ) in the function name:

```sql
*component.method*( { *column* | *literal* } )
```

These invocations can alternatively be expressed by an INVOKE ... WITH SELECT statement.