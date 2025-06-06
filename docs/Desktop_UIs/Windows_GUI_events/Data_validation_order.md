---
id: Data_validation_order
---

# Data validation order

As the user enters and changes data, field values and data manipulations are validated using a system of four set routines:

- Field validation
- Group validation
- Record validation
- Transaction validation
Groups are primary key fields, foreign key fields or virtual fields. A primary key group consists of only one field if the primary key is single-column. It consists of more than one field if the primary key spans more than one column; the same applies to foreign key groups and groups of virtual fields.


:::note

Do not confuse group validation with GUI control groups. The two issues are entirely unrelated.

:::

Field validation occurs when the user leaves the field. Group validation occurs when the user leaves the group and record validation, when the user leaves the record. Note that "leaving the field" can be achieved by actual navigation but also implicitly, by issuing the Save/Commit command, for example.

All new data is validated only once: validation only takes place if the value in a field, group etc. was actually changed, or newly entered by the user.

If the user moves out of a field to the next field within the record, only field validation occurs, followed by group validation if the move is across a group boundary.

Likewise, if the user moves out of a field to the next record, field validation occurs, followed by group validation (if applicable) and record validation.


:::warning

To avoid complexity, do not tamper with internal validation handling. In particular, DO NOT manipulate the current field value in the Post-change action statement script for that field. For a similar value adjustment, use the Adjust Change field property instead.
In the Post-change action statement script for a field you can, however, manipulate OTHER field values within the record.

:::

 


:::warning

DO NOT issue the RecordStore() command, or otherwise manipulate the current record in a record validation property (Pre-insert validation; Pre-update validation; Post-change for the info box).

:::

- > [!WARNING]
> DO NOT issue the RecordStore(), RecordCreate(), or QueryExecute() command on a column's pre-field-entry, post-edit or post-change action lists.


- *Example*
The user queries a record with a primary key spanning two columns, changes the value of one of the primary key values (UPDATE), and commits.

In this example the following validations and behavior properties are triggered as a result of the commit command, in the order stated:

1. Adjust Change (Field behavior property)

2. Field validation

- Column attribute checks such as Minimum Value
- Productive domain constraints
- Restrictive domain constraints
3. Post-change (Field behavior property)

4. Post-Edit (Field behavior property)

5. Group validation

- Virtual field groups
- Primary key groups
- Foreign key groups
Group validation checks for data integrity, such as uniqueness of the key. Some integrity rules, such as the Child Must Exist relationship attribute, are handled as restrictive constraints and therefore occur later.

6. Post-Change (Info Box behavior property; insert/update only)

7. Pre-insert Validation, Pre-update Validation, or Pre-delete (Info Box behavior properties)

8. Record validation

- Mandatory checks
- Productive single-record constraints
- Restrictive single-record constraints
9. Post-Insert, Post-Update, Post-Delete (Info Box behavior properties)

10.Transaction validation

- Productive multi-record constraints
- Restrictive multi-record constraints
11.Pre-Commit (Application behavior property)