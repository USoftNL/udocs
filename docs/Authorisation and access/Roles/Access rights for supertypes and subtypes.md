# Access rights for supertypes and subtypes

Access rights on subtypes require special consideration. For example:

- It makes no sense to give users INSERT rights on a subtype if they do not also have INSERT rights on mandatory columns of the supertype, since these are mandatory also for the subtype.
- Conditions placed on table rights for subtype tables could implicitly apply to the supertype as well.
- Subtype indicator columns are part of the supertype table. Access rights on subtype indicator columns are separate from access rights on subtype columns, but must be functionally consistent with them.

### How INSERTs into subtype constellations are authorised

A SQL statement that inserts records into any table of a subtype constellation is considered to be an insert in the whole constellation. The necessary INSERT right is checked for the uppermost supertype table, and for all the subtype tables for which the indicator column is set to 'Y'. For columns that are part of the primary key, insert rights are only checked for the uppermost supertype. Rights on the primary key columns of subtype tables are ignored.

In Windows Designer, navigation between a supertype window and (one of) its subtype windows does not automatically trigger the Store Record action. The insert in the supertype/subtype table constellation takes place at the time when the end user explicitly chooses the Store Record option from the menu, or when the cursor is moved to a different record, for example, by scrolling to another record within the constellation.

 

### How DELETEs from subtype constellations are authorised

A SQL statement that deletes records from any table of a subtype constellation (assuming supertype and subtype object data are stored in separate tables), is considered to be a delete in the whole constellation but only if, for the subtype table, option "Delete Super on Delete" is set to active (in the Definer). If this is the case, deleting the subtype record causes its supertype counterpart to be deleted, which in turn will trigger cascading deletes to other subtype records.

These data manipulations are only allowed if separate rights are defined for all the tables or columns that take part in the operation.

If "Delete Super on Delete" is set to 'NO', a delete of a subtype record actually causes an update to be executed on the supertype table (the indicator column is set to 'N'). For this operation to be possible, you must define a separate right for the subtype indicator.

It does not make any difference whether supertype and subtype object data are physically stored in one, or in separate tables: the delete of the subtype record actually causes an update to be executed on the supertype column in either case.

 

### How UPDATEs to subtype constellations are authorised

A SQL statement that updates a column requires access rights on the table to which the column belongs, except in the following situations:

If the column is part of the primary key of a subtype constellation, the UPDATE right is checked only in the uppermost supertype table. Any rights defined (for the column) on subtype tables are ignored.

If the column is a subtype indicator column that is switched from 'Y' to 'N', this causes the subtype data to be deleted (if the subtype object data is physically stored in a separate table), and the supertype record to be updated (its subtype indicator column is set to N).

However, denying the delete right on the subtype table is not enough to prevent loss of the subtype object data. This may appear confusing, but an UPDATE of the subtype indicator column is also considered to be an UPDATE on the subtype table. In this situation, an UPDATE right on the subtype is sufficient for the user to be able to delete the subtype record: DELETE is not required.

Likewise, if the column is a subtype indicator that is switched from 'N' to 'Y', this is considered to be an update on the supertype and subtype tables. UPDATE rights at the supertype and subtype levels is sufficient for the user to be able to add the subtype record: INSERT is not required.

The differences between manipulation types in subtype constellations can be slight. If the subtype is physically stored in a separate table, when you add a new supertype with the subtype indicator set to 'Y', this causes both a subtype and supertype record to be inserted at Store Record time. If, for whatever reason, the Store Record event executes before the subtype columns are populated, for example immediately after selecting the subtype indicator in the supertype box, and before navigating to the subtype box, then populating the subtype columns, again followed by a Store Record event, corresponds to an UPDATE of the supertype in addition to the INSERT.

 

 