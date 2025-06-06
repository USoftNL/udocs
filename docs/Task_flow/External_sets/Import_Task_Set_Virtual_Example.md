---
id: Import_Task_Set_Virtual_Example
---

# Import Task Set Virtual: Example

A sales representative has been entering details about new clients from Sydney and some reservations they have booked. These new data must now be transferred from a laptop to the application (imported into the application).

Suppose the person data is in one external file; persons.TXT, and the corresponding reservations data in another file; reservations.TXT. These two external files must be merged before they are written to the PERSON and RESERVATION tables. The structure of these files is the same as the structure of the PERSON and RESERVATION tables.

The files contain primary key values for each person and each reservation. These primary key IDs have been generated on an external system. They must not be imported. Instead, your application must be allowed to generate suitable primary key IDs for these new data.

The reservation data includes a foreign key referring to the person primary key in the other file. This foreign key will allow you to join the reservation data with the right person data.

Performance can be gained by retrieving the primary key value once for the entire set of children. This value will be stored in a virtual column of the parent external set.

### Defining external sets

To define the two external sets to be used:

1. Define an external set IMP_PERSON with a SQL Statement that selects all columns from the PERSON table. This statement will be used to describe the contents of the persons.TXT file.

2. Define an external set IMP_RESERVATION with a SQL Statement that selects all database columns of the RESERVATION table. This statement will be used to describe the contents of the reservations.TXT file.

3. Click the Compute Elements button to have USoft Batch compute the external set elements in both cases.

4. Commit your changes and close the External Sets window.

### Defining the import task

To define an import task based on the external sets you just defined:

This import task must contain two import SQL Statements. One to insert new data into the PERSON table and another to insert data into the RESERVATION table. This import task must also be associated with both of the external sets you just defined.

1. Define an Import Task with Import Name IMP_PERSON_RESERVATION.

2. Click the Import Task Sets tab page and insert the two external sets IMP_PERSON and IMP_RESERVATION, with the corresponding file names.

3. Each import task must have exactly one driving set. Make the IMP_PERSON external set describing the parent data the driving set. This way the job will perform better. Because the child data will contain more records than the parent data, it makes sense to import it into a temporary table in one go and then join it one by one with the parent rows, rather than the other way around.

4. Click the Import SQLs tab page.

The first import SQL statement should insert all data from persons.TXT into the PERSON table except the primary key values, which you want the application to generate for you.

Import Name: IMP_PERSON_RESERVATION

Import SQLs: Sequence: 1

Description: Insert Person data except PK

*SQL Statement*

```sql
INSERT INTO person
(
        (all columns EXCEPT the Primary Key-column(s))
)
SELECT
        (all columns EXCEPT the Primary Key-column(s))
FROM    IMP_PERSON

```

### Storing the value if a virtual column of the parent external set

To store the value in a virtual column of the parent external set:

If each parent has several children, performance can be gained by retrieving the primary key value in the batch environment once for the entire set of children.

1. On the Import Task Sets tab page, define an import task set virtual for the IMP_PERSON import task set.

Virtual Name: VIRT1,

Data Type: NUMBER,

Length: 4

2. Insert an import SQL that will retrieve the newly generated primary key value for the current PERSON import record into the virtual:

Sequence: 2

Description: Get generated Person PK into new_res

*SQL Statement*

```sql
UPDATE    IMP_PERSON np
SET       virt1 =
(
SELECT    p.person_id
FROM      person p
WHERE     p.first_name = np.first_name
AND       p.family_name = np.family_name
AND       p.birth_date = np.birth_date )

```

3. Add another import SQL statement producing the child foreign key value. Instead of joining with the PERSON table, use the value stored in the virtual of the current parent row.

Sequence: 3

Description: Import Reservation data except PK; FK from virtual

*SQL Statement*

```sql
INSERT INTO  reservation
(
             schedtour_id
,            made_by
,            num_part
,            dealt_with_by
,            price
,            book_date
,            cancel_date
)
SELECT
             nr.schedtour_id
,            np.virt1
,            nr.num_part
,            nr.dealt_with_by
,            nr.price
,            nr.book_date
,            nr.cancel_date
FROM         IMP_RESERVATION nr, IMP_PERSON np
WHERE        np.person_id = nr.made_by

```