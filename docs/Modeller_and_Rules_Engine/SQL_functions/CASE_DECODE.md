---
id: CASE_DECODE
---

# CASE, DECODE




:::note

This article has additional information about the **CASE** and **DECODE** SQL functions.
For convertibility of this function, go to [SQL functions  A - C](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_AC.md).

:::

## **CASE, DECODE**

CASE and DECODE return output values dependent on value comparisons.

CASE is a native function on all RDBMSs. DECODE is native on Oracle. DECODE is convertible in USoft for all other platforms. USoft converts DECODE to CASE on non-Oracle platforms.

## CASE

*Syntax 1*

This syntax applies to CASE only.

```sql
CASE
WHEN *condition* THEN *output-expression*
WHEN *condition* THEN *output-expression* ...
ELSE *default-output-expression*
END
```

If condition evaluates to true, output-expression is returned. Otherwise, default-output-expression (if any) is returned. Otherwise, NULL is returned.

One WHEN clause is required. Further WHEN clauses are optional. If there are multiple WHEN clauses, they are evaluated in the order in which they appear. As soon as a condition applies, the output-expression is returned and further clauses are ignored.

*Syntax 2*

This syntax has a DECODE counterpart (see below). The syntax between CASE and DECODE is different but the functionality is otherwise equivalent.

```sql
CASE *evaluated-expression*
WHEN *input-expression* THEN *output-expression*
WHEN *input-expression* THEN *output-expression* ...
ELSE *default-output-expression*
END
```

If input-expression is equal to evaluated-expression, output-expression is returned. Otherwise, default-output-expression (if any) is returned. Otherwise, NULL is returned.

One WHEN clause is required. Further WHEN clauses are optional. If there are multiple WHEN clauses, they are evaluated in the order in which they appear. As soon as input-expression matches evaluated-expression, output-expression is returned and further clauses are ignored.

## DECODE

*Syntax*

```sql
DECODE(
*evaluated-expression*
,     *input-expression, output-expression*
,     *input-expression, output-expression*
,     *default-output-expression*
)
```

If input-expression is equal to evaluated-expression, output-expression is returned. Otherwise, default-output-expression (if any) is returned. Otherwise, NULL is returned.

One input-expression, output-expression pair is required. Further pairs are optional. If there are multiple pairs, they are evaluated in the order in which they appear. As soon as input-expression matches evaluated-expression, output-expression is returned and further pairs are ignored.

## Example 1: SELECT clause, CASE with conditions

```sql
SELECT     CASE WHEN city = 'BRUSSELS' THEN 'BRUXELLES' ELSE city END
FROM       person
WHERE      city LIKE 'B%'
```

An example result is:

```
BERLIN
BIRMINGHAM
BRISTOL
BRUXELLES
BRUXELLES
```

## Example 2a: SELECT clause, CASE with evaluated expression

```sql
SELECT     CASE city WHEN 'BRUSSELS' THEN 'BRUXELLES' ELSE city END
FROM       person
WHERE      city LIKE 'B%'
```

An example result is:

```
BERLIN
BIRMINGHAM
BRISTOL
BRUXELLES
BRUXELLES
```

## Example 2b: SELECT clause, DECODE

```sql
SELECT     DECODE( city, 'BRUSSELS', 'BRUXELLES', city )
FROM       person
WHERE      city LIKE 'B%'
```

An example result is:

```
BERLIN
BIRMINGHAM
BRISTOL
BRUXELLES
BRUXELLES
```

## Example 3: WHERE clause, CASE with conditions

```sql
SELECT     city
FROM       person
WHERE      city LIKE 'B%'
AND        CASE WHEN city = 'BRUSSELS' THEN 'BRUXELLES' ELSE city END = 'BRUXELLES'
```

An example result is:

```
BRUSSELS
BRUSSELS
```

## Example 4: Default NULL values

```sql
SELECT     NVL( CASE WHEN city = 'BRUSSELS' THEN 'BRUXELLES' END , 'NULL' )
FROM       person
WHERE      city LIKE 'B%'
```

An example result is:

```
NULL
NULL
NULL
BRUXELLES
BRUXELLES
```

 