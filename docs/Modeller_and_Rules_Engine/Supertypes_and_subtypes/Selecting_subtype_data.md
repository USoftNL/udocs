---
id: Selecting_subtype_data
---

# Selecting subtype data

In the SQL statements you write, you may refer to a subtype as if it were a separate table. From a subtype, you can select:

- All supertype columns.
- All columns of the subtype.
- All subtype indicators of the constellation, since these are attributes of the supertype.

This applies whether your subtype data is stored in the same table as the supertype data or in separate database tables. Set the Create Separate Tables attribute to determine how subtype data should be stored.

*Example 1*

If Persons can be Guides, then:

```sql
SELECT    *
FROM      guide
```

will not only retrieve Guide (subtype) attributes but also Person (supertype) attributes.

*Example 2*

As a variation on Example 1, the following will retrieve only data about Guides and not other Persons, but this time, it will omit Guide (subtype) attributes:

```sql
SELECT    *
FROM      person
WHERE     guide = 'Y'
```

*Example 3* 

This statement will automatically combine **name** and **address** information retrieved from the Person (supertype) table with **experience** information retrieved from the Guide (subtype) table:

```sql
SELECT    name, address, experience
FROM      guide
```