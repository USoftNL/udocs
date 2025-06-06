# Relationship Inheritance from supertype to subtype (RELATE)

If you have defined a relationship between a supertype and another table, you can join any subtypes to that other table using the same relationship.

Suppose "Sub1" is a subtype of "Super1", and you have a relationship between "Super1" and "Other". In this situation, you can use that same relationship to join "Sub1" to "Other1", because "Sub1" inherits the relationship from its supertype "Super1":

```sql
SELECT    ...
FROM      Sub1, Other1
RELATE    Sub1 "HAS" Other1
WHERE     ...
```

or, if for some reason you use conventional join syntax rather than RELATE:

```sql
SELECT    ...
FROM      Sub1, Other1
WHERE     Sub1.*primary-key* = Other1.*foreign-key*
AND       ...
```