---
id: Updating_supertype_and_subtype_data
---

# Updating supertype and subtype data

Existing supertype-subtype record constellations may be updated in three ways:

- Supertype values are changed.
- Subtype values are changed.
- New subtypes are selected for an existing supertype, or existing subtypes are de-selected.

Subtypes are selected or de-selected for an existing supertype by:

- Selecting or clearing subtype indicators (check boxes).
- Inserting or deleting records in windows based on the subtype table.
- Indirectly, by executing one of the following SQL statements:

```
INSERT INTO *subtype*
```

```
DELETE FROM *subtype*
```

Such a statement could be executed from a constraint.

These manipulations are treated as UPDATEs to the record constellation. Transitional constraints defined on the record constellation are evaluated if the Fire On Update flag is set.

A possible exception is adding new subtype data to an existing supertype constellation. If this new data is inserted through a window based on the subtype, or inserted indirectly through a constraint, it is handled as INSERT rather than UPDATE if the Update Supertype on Insert deployment configuration parameter in the Authorizer is set to No.