# Logical operators



> [!NOTE]
> This article is about **logical operators** as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **Logical operators**

When a SQL statement is executed, each individual condition evaluates to either True or False: the condition's truth value.

The logical operators AND, OR, NOT operate on these truth values. They allow combination and reversal of truth values.

|        |        |
|--------|--------|
|`condition-1  AND  condition-2`|<p>Evaluates to True if *condition-1* and *condition-2* are both True.</p><p>Otherwise, evaluates to False.</p>|
|`condition-1  OR   condition-2`|<p>Evaluates to True if either *condition-1* or *condition-2* (or both) are True.</p><p>Otherwise, evaluates to False.</p>|
|`NOT  condition-1`|<p>Evaluates to True if *condition-1* is False.</p><p>Otherwise, evaluates to False.</p>|



## AND and OR

AND and OR connect 2 conditions, or combinations of conditions. One is placed to the left, and the other to the right of the operator. Parentheses may be used to indicate order of evaluation:

|        |        |
|--------|--------|
|`condition-1  AND  (  condition-2  OR  condition-3  )`|<p>First, evaluate the OR condition.</p><p>Then, apply AND to the truth value of the outcome and the truth value of *condition-1*.</p>|
|`( condition-1  AND    condition-2  )  OR  condition-3`|<p>First, evaluate the AND condition.</p><p>Then, apply OR to the truth value of the outcome and the truth value of *condition-3*.</p>|
|`  condition-1  AND    condition-2     OR  condition-3`|(Same as previous)|



As the last example shows, AND has precedence over OR if there are no parentheses to indicate precedence.

USoft recommends ALWAYS using parentheses with AND and OR, and using whitespace and indentation to visually depict the nesting of conditions.

## NOT

NOT reverses the truth value of 1 condition. The outcome is True if the condition is False, and False if the condition is True. The condition appears to the right of the NOT operator. Parentheses may be used to indicate order of evaluation. The opening parenthesis must immediately follows NOT. The closing parenthesis must be placed at the end of the expression that NOT operates on.

|        |        |
|--------|--------|
|`NOT  condition-1`|<p>Evaluates to True if *condition-1* is False.</p><p>Otherwise, evaluates to False.</p>|
|`NOT  ( condition-1 )`|(Same as previous)|
|`NOT  ( condition-1  AND  (  condition-2  OR  condition-3  ) )`|First, the entire expression following NOT is evaluated. Then, NOT reverses the outcoming truth value.|
|`NOT  ( condition-1  AND    condition-2  )  OR  condition-3`|First, NOT reverses the outcome of the parenthesised expression. The expression as a whole is true if that reversed outcome is True or if *condition-3* is true, or both.|



USoft recommends ALWAYS using parentheses with NOT, except when NOT precedes a SQL operator, in which case parentheses are not customary and not needed:

```sql
... NOT LIKE ...
... NOT IN   ...
... NOT EXISTS  ...
... NOT BETWEEN ...
```

 