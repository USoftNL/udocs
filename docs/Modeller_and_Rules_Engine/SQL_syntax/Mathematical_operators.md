---
id: Mathematical_operators
---

# Mathematical operators



> [!NOTE]
> This article is about **mathematical operators** as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **Mathematical operators**

A mathematical operator applies a basic arithmetic calculation to the values represented to its left and right.

*Syntax*

```sql
*value  math-operator  value*
```

The following 4 mathematical operators are supported:

|        |        |
|--------|--------|
|`+`     |addition|
|`-`     |subtraction|
|`*`     |multiplication|
|`/`     |division|



Parentheses may be used to indicate order of evaluation.

|        |        |
|--------|--------|
|`( 2 / 5 ) * 100`|2 is first divided by 5. The outcome is multiplied by 100. The outcome is 40.|



If you omit parentheses, multiplication and dividion take precedence over addition and subtraction, but USoft recommends you ALWAYS write parentheses for readability.

## Calculations with non-number values

Mathematical operators are mostly used with number values, where they take their full arithmetic meaning.
On some RDBMSs, you can add days to a date by adding a numerical value, where 1 = a 24-hour day. Likewise, you can use the '-' operator to subtract 2 date values. The result is the time difference, expressed as a number, where 1 = a 24-hour day. USoft recommends that you use functions for date calculations instead.

On MS SQL Server, the '+' operator may be used to concatenate 2 string values. This is RDBMS-specific. USoft recommends you use the equivalent CONCAT function if you can. It has the advantage of being convertible, but the drawback that it takes 2 input values only.