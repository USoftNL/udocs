---
id: Inserting_supertype_and_subtype_data
---

# Inserting supertype and subtype data

Whenever you insert supertype or subtype data, this affects the entire record constellation (the supertype data and all corresponding subtype data).

You can insert new subtype data:

- By using a window or info box based on the subtype table. In this case, both the supertype and the subtype attributes will be shown.
- By using a window based on the supertype table. In this case, select the appropriate subtype indicator(s). You can access the subtype windows by clicking the list buttons provided for each subtype.
- Indirectly, by executing one of the following SQL statements:

```
INSERT INTO *subtype*
```

```sql
UPDATE   *supertype*
SET      *subtype-indicator* = 'Y'
```

In all cases you need to provide values for any mandatory subtype columns.

If the record constellation is subject to one or more totality rules, you are allowed to insert a new supertype record only if you also set the necessary subtype(s) and provide values for its mandatory columns.

If the record constellation is subject to one or more exclusivity rules, you are allowed to add subtype data only if this does not violate these rules.

How USoft Developer handles new subtype data added to existing supertype data depends in part on the Update Supertype on Insert deployment configuration parameter setting in the Authorizer.