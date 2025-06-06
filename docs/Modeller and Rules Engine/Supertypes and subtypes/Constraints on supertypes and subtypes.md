# Constraints on supertypes and subtypes

When you write constraint statements on a supertype table, you can refer to:

- All supertype columns.
- All subtype indicators of the constellation, since these are attributes of the supertype.

Constraints on supertypes are automatically enforced on all subtype manipulations of that supertype.

When you write constraints statements on a subtype table, you can refer to all of the following without joining with another table:

- All supertype columns.
- All columns of the subtype table.
- All subtype indicators of the constellation, since these are attributes of the supertype.

In the following example you only need a single table name in your statement.

*Example 1*

Suppose Persons can be Guides or Office Staff (subtype set Occupation), and they can be Male or Female (subtype set Gender).

Maternity leave is not possible for guides, only for office staff. This business rule can be enforced by a restrictive constraint with the following statement:

```sql
SELECT    ' '
FROM      female
WHERE     maternity_leave = 'Y'
AND       guide = 'Y'
```

In this example, Female is a subtype table, Maternity_leave is a column of this subtype table, and Guide is a subtype indicator of the constellation.

In the following example, you need to join tables only because the business rule refers to subtype columns in different subtype tables:

*Example 2*

Office staff can only get maternity leave if a number of conditions are met. These conditions refer to office staff attributes such as the person's hire date.

This business rule can be enforced by a constraint with the following statement:

```sql
SELECT    ' '
FROM      female f
,         staff s
WHERE     f.primary_key = s.primary_key
AND       f.maternity_leave = 'Y'
AND       s.hire_date = condition
AND       ...
```