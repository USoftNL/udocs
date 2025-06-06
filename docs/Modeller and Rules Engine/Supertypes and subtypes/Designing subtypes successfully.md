# Designing subtypes successfully

This help topic contains tips for good design of subtypes.

## Avoiding mandatory subtype columns without default values

The USoft implementation of subtypes has drawbacks when dealing with mandatory subtype columns that have no default value defined for them:

- Do not define Mandatory = Yes for a subtype column unless this is really necessary from a functional point of view.
- Make sure that each subtype column that has Mandatory = Yes also has a default value, if this is at all possible. You can define a default value for a column by setting Default Value at domain level or at column level.
- If you plan to have mandatory subtype columns in multiple subtypes that share the same supertype, be aware that such a construct is relatively difficult to transfer to a different repository when using XML formats (XML.Export, XML.Import, XML.MultiExportTables, as also used by the USoft Delivery Manager XML routines). Special arrangements are necessary. See the Delivery Manager Help for details.

## Keeping subtype indicators at their default

USoft creates a subtype indicator column when you define a subtype. By default, such a subtype indicator is based on the BOOLEAN template domain, this BOOLEAN domain has Default Value = N, and each subtype indicator has Default Value = (null) at column level.

- Avoid subtype indicators with a default value of Y, if at all possible.
- Do not interfere with the BOOLEAN domain and its settings, nor with any other USoft-shipped domain. Use your own domains for columns you define yourself.
- Keep all subtype indicators based on the BOOLEAN domain, if at all possible.

## Setting Delete Super on Delete

For subtype tables, you can set the Delete Super on Delete table attribute.

When the user deletes subtype data, Delete Super on Delete determines what happens to the remainder of the record constellation (supertype data and possibly other subtype data).

If Delete Super on Delete is set (the default), deleting subtype data automatically results in deleting corresponding supertype data and all other subtype data (the entire record constellation). Transition constraints defined on the constellation are evaluated if the Fire On Delete flag is set.

If Delete Super on Delete is NOT set, deleting subtype data from a subtype window is handled as an UPDATE to the constellation. The corresponding subtype indicator is set from 'Y(es)' to 'N(o)'. Transition constraints defined on the constellation are evaluated if the Fire On Update flag is set.

The following operations are handled differently depending on the Delete Super on Delete attribute:

|        |
|--------|
|The user deletes a subtype record from a subtype window opened from a supertype info window.|
|The user deletes a subtype record from a subtype window opened from a supertype info window.|
|The user deletes a record from an info window based on the subtype (which, by default, also shows the supertype columns).|
|A productive constraint performs a correction and executes a statement of the following type:DELETE FROM *subtype* ...|



The following operations are always handled as a DELETE of the entire record constellation. In these cases the Delete Super on Delete attribute is not relevant:

|        |
|--------|
|The user removes a record from an info window based on the supertype.|
|A productive constraint performs a correction and executes a statement of the following type:DELETE FROM *supertype* ...|



## Setting Update Supertype on Insert

For the application, you can set the Update Supertype on Insert Deployment Configuration parameter in the Authorizer.

This parameter determines what happens to an existing record constellation when the user adds new subtype data to it:

- By entering this data in a subtype window.
- Indirectly, when a productive constraint is evaluated containing a statement of the following type:

```
**INSERT INTO** *subtype*** ...**
```

If Update Supertype on Insert is set to No (the default), inserting new subtype data as described above is handled internally as an INSERT even if a record constellation already existed.

If Update Supertype on Insert is set to Yes, the manipulation is handled internally as an UPDATE to the existing record constellation.

> [!NOTE]
> If the user adds new subtype data to an existing record constellation by selecting the corresponding subtype indicator in an info window and then filling out the fields in the subtype window, this is always handled as an UPDATE to the record constellation. Update Supertype on Insert has no relevance in this case.

The Update Supertype on Insert Deployment Configuration parameter has no relevance to the application user.

For the application developer, the only relevant aspects of this parameter are:

- If the type of subtype insert described above is traced in BenchMark or in a native database monitoring tool:
- If Update Supertype on Insert is set to No, it will show up as an INSERT command.
- If Update Supertype on Insert is set to Yes, it will show up as an UPDATE command.
- If the type of subtype insert described above occurs and transitional constraints are defined on the record constellation,
- If Update Supertype on Insert is set to No, they are evaluated depending on the Fire on Insert flag.
- If Update Supertype on Insert is set to Yes, they are evaluated depending on the Fire on Update flag.