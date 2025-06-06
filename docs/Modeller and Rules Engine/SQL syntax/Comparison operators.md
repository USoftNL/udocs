# Comparison operators



> [!NOTE]
> This article is about **comparison operators** as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **Comparison operators**

In a condition with a comparison operator, the expression to the left of the operator is compared to the expression to the right. The outcome is a truth value: True or False.

|        |        |
|--------|--------|
|`expr-a = expr-b`|*a* is equal to *b*|
|`expr-a != expr-b`|*a* is not equal to *b*|
|`expr-a > expr-b`|*a* is greater than *b*|
|`expr-a >= expr-b`|*a* is greater than or equal to *b*|
|`expr-a < expr-b`|*a* is smaller than *b*|
|`expr-a <= expr-b`|*a* is smaller or equal to *b*|
|`expr-a <> expr-b`|*a* is not equal to *b*|
|`expr-a IS NULL`|*a* is equal to the NULL value|
|`expr-a IS NOT NULL`|*a* is not equal to the NULL value|



The != and \<> operators are equivalent. They both return True if the expressions evaluate to a different value and False if they evaluate to the same value.

A number value is greater than another number value if it is greater in the mathematical sense. A string value is greater than another string value if it is comes last in alphabetical sort order. A date value is greater than another date/time value if it designates a later date/time.

## NULL values

Comparisons with a NULL value evaluate to False, regardless of the mathematical operator.

> [!WARNING]
> This is a source of errors when working with relational databases generally, but especially in a USoft context, because comparisons with NULL will cause a constraint not to have an effect.
> Best practice in USoft applications is to keep non-mandatory columns (columns where NULLs are allowed) to an absolute minimum.