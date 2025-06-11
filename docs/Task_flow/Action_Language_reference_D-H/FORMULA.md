---
id: FORMULA
---

# FORMULA()




:::note

This article is about the **FORMULA** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **FORMULA()**

Subjects values in a non-SQL environment to operations requiring a SQL evaluator.

Use FORMULA() outside SQL, i.e. in action call syntax, to:

- Subject values to scalar SQL functions such as ROUND(), SUBSTR() and so on.
- Subject numerical values to mathematical operations.
- Concatenate string values.

You can use any SQL syntax supported by your database vendor. To keep your USoft application portable between databases, however, you should adhere to standards. This is particularly a concern when calling SQL functions. USoft converts certain key SQL functions automatically between databases. Others are database-specific.

FORMULA() is an embedded action call that returns a string value to the embedding action call.

*Syntax*

```
FORMULA( *formula*, *value*, ... ) 
```

*Formula* is the SQL expression, with placeholders (:1, :2 ...) representing the values identified by the *value* parameter(s). The :1 placeholder represents the first *value* passed, the :2 placeholder the second *value*, and so on.

*Value(s)* are expressions evaluating to the values used in *formula.* These can be hard-coded strings, or values represented by embedded action calls. If multiple *values* are passed, they are separated by commas.

*Examples*

```
FORMULA( ':1 || :2', query.file_name(), '.TXT' )
```

```
FORMULA( ':1 || SUBSTR(INSTR(:2,:3)', 'Domain = ', query.email(), '@' )
```

 