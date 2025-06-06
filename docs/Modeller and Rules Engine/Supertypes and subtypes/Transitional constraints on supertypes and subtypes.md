# Transitional constraints on supertypes and subtypes

When you use a subtype table in a transitional constraint, the conditions under which the constraint are evaluated require special attention.

The Fire On ... flags react to what happens to the supertype-subtype constellation as a whole, not to what happens to the subtype data alone.

*Example*

Each time new subtype data is entered, information about this event (such as a timestamp) must be logged in a special log table.

You want to log these events when the entire constellation including the supertype data is new (INSERT of the record constellation), but also when the supertype already exists (UPDATE of the record constellation).

The constraint SQL statement has the following form:

```sql
INSERT INTO    log_table
SELECT         log_information
FROM           subtype_table
WHERE          subtype_indicator = 'Y'
AND
(          old( subtype-indicator ) = 'N'    
     OR    old( subtype-indicator ) IS NULL
)
```

The correct transition properties for this constraint are:

```
Fire On Insert:    Always
Fire On Delete:    Never
Fire On Update:    Used Columns
```

Fire On Update must be set to ensure that the constraint is also evaluated when supertype data already existed but subtype data is new.

The WHERE clause is needed to ensure that the constraint is not evaluated when a column value in existing subtype data is modified. Without this clause, the constraint would also be evaluated if the subtype data were removed, because this would be an Update manipulation involving the subtype_indicator used column.

## Notes

In the example, the transition table is the subtype table. It could equally well be the supertype table (appearing both in the FROM clause and in the Transition Table field). The subtype indicator is available to both the supertype table and the subtype table.

If the constraint had additional clauses referring to subtype attributes, you would HAVE to use the subtype table, which would then also be the transition table.

Transitional constraint evaluation for subtypes also depends on:

- The Update Supertype on Insert deployment configuration parameter setting in the Authorizer.
- The Delete Super on Delete subtype table attribute.