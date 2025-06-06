# Deleting supertype and subtype data

Whenever you delete supertype or subtype data, this affects the entire record constellation (the supertype data and all corresponding subtype data).

When you delete supertype data, all the associated subtype data is deleted as well.

Subtype data may be removed from a record constellation by:

- Deleting a record in a window or info box based on the subtype table (this causes the supertype data to be removed as well).
- De-selecting the subtype indicator in a window or info box based on the supertype table.
- Indirectly, by executing one of the following SQL statements:

```sql
UPDATE *supertype* SET *subtype-indicator* = 'N' 
```

```sql
DELETE FROM *subtype*
```

These statement could be executed from a constraint.

In all cases, the corresponding subtype data is removed. If the subtype window is open, its column displays become non-editable.

What happens as a result of removing subtype data depends on the value of the Delete Super on Delete table attribute for the removed subtype.

If Delete Super on Delete is set for that subtype, the supertype data, and thereby the entire record constellation, is automatically removed. Fire On Delete transition constraints on the record constellation are evaluated.

If Delete Super on Delete is not set for the removed subtype, the corresponding subtype indicator in the supertype record is automatically de-selected. This is handled as an UPDATE manipulation on the record constellation. Fire On Update transition constraints defined on the constellation are evaluated.