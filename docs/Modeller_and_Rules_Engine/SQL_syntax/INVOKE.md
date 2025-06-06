---
id: INVOKE
---

# INVOKE



> [!NOTE]
> This article is about the **INVOKE** statement as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **INVOKE**

The INVOKE keyword is a special, USoft-specific extension to the industry-standard SQL otherwise used to specify Rules Engine behaviour.

*Syntax*

```sql
INVOKE *component.method* WITH
SELECT     ...
FROM       ...
WHERE      …
```

In this construct, the SELECT output list is required. The FROM and WHERE clauses are optional.
As you can see, this allows interoperability between SELECT and INVOKE. The outcome of the SELECT query is passed as the input for INVOKE:

- If a FROM clause is specified, the component is called as many times as there are rows in the result of the SELECT query: 0, 1 or more times.
- If no FROM clause is specified, the component is called 1 time, and is passed the values in the SELECT list.

The INVOKE statement can appear in place of a top-level SELECT but also in place of a subquery SELECT.

## Function call syntax

An alternative for the INVOKE call without FROM is *function call syntax*:

```sql
SELECT *component.method*(
*value(s)*
)
```

In function call syntax, component.method is an argument of the SELECT keyword. A FROM keyword does not appear.

Function call syntax may also be used in other places than in the SELECT output list, for example:

```sql
SELECT   ...
FROM     ...
WHERE    column = *component.method*( *value(s)* )
```

 