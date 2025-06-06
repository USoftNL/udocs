---
id: Underlying_queries_of_info_boxes
---

# Underlying queries of info boxes

An info box has an *underlying query.* It has an object called "query" that has a property Underlying Query. The value of this property is a SQL statement that determines what data is shown in the info box.

Editing an underlying query can be a quick and elegant way to change the data behaviour of a window. For example:

- If you only need a small number of columns from a table with many columns, enumerate the columns you need in the SELECT clause.

- If you only need a subset of the records, add a WHERE clause. You can do this in the underlying query statement itself or in the query object's "WHERE Clause" property.

The underlying query of a default info box of types **Info Window, Lookup Window, Secondary Window** on table PERSON is:

```sql
SELECT * FROM person p

```

The underlying query of a default info box of type **Related Window** for a Relationship "Person makes Reservation" is:

```sql
SELECT * FROM RESERVATION r
WHERE ( :"Parent*PERSON_ID" = r.MADE_BY OR (:"Parent*PERSON_ID" IS NULL AND r.MADE_BY IS NULL))

```

The underlying query of a default info box of type **Subtype Window follow the pattern:**

```
SELECT    primary-key-column(s)
,         subtype-column
,         subtype-column
,         ...
FROM      subtype

```

where *subtype-column* is a column that is in the subtype but not in the supertype.

For example, the underlying query of a default info box of types **Info Window, Lookup Window, Secondary Window** on table GUIDE, subtype of PERSON, is:

```sql
SELECT    g.person_id
,         g.bank_account
,         g.db_user
,         g.experience
FROM      guide g

```

## Data synchronisation

Data synchronization occurs when retrieved data in one info box is automatically synchronized with corresponding data in another info box.

Data synchronization occurs if the two info boxes are in the same window, but also if they are in different windows. Th

**Synchronisation of related data**

Related info boxes (say, ORDER data) are synchronized with parent info boxes (say, CUSTOMER data).

If a customer is retrieved, corresponding orders are automatically retrieved. Each time the user scrolls to a new customer, orders are replaced by the new customer's orders.

**Synchronisation of subtype data**

Subtype info boxes (OFFICE STAFF data) are synchronized with supertype info boxes (EMPLOYEE data).

If an employee is retrieved, corresponding office staff data (perhaps a room number) is automatically retrieved if the employee is part of office staff. Each time the user scrolls to a new employee, subtype data are replaced by new corresponding subtype data, or if the new employee is not part of office staff, the subtype box is cleared.

Subtype boxes are synchronized internally by USoft Developer because of their nature. You cannot manually influence this type of synchronization.

**Synchronisation of secondary data**

Secondary info boxes are synchronized with master info boxes. You can use secondary info boxes for any purpose requiring data synchronization.

Columns in master and secondary boxes behave as if they were part of a single record. If data is retrieved in one of the boxes, or the user scrolls to new data, all data belonging to the same record is also shown in the other info box. If the user updates a column value in one info box, the same column in the other box becomes non-updatable (grayed out).

Secondary info boxes are synchronized internally by USoft Developer because of their nature. You cannot manually influence this type of synchronization.

**Synchronisation in tree views and list views**

Finally, you can also synchronize tree views or list views with data displayed in info boxes.

 

###  