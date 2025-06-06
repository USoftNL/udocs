# External Sets for Export tasks, Child sets

When used for an export task, the elements of an external set correspond to the fields in the external file into which the data is to be exported. For each field, you need to define the output data type. When you are using the FIXED or FIXEDVLE format, you also have to specify either the length or the (IO) format (except for the last field when using FIXEDVLE). The SQL statement determines which data is to be exported.

You can have USoft Batch compute the set elements for you (on the basis of the SQL statement), and then change them, if required.

## Child sets

When exporting data, you may want to export both parent and child records. For example, the Travel Agency may want to export scheduled tours including the reservations for each of these scheduled tours to one file.

To export parent and child records, you need to define two external sets, one describing the structure of the parent data, and the other describing the structure of the child data. This last one is called a child set.

To specify the relationship between the parent external set and the child set, you have to:

- Specify this relationship in the SQL statement of the child external set, by means of a RELATE clause or a join.
- Check that the primary key columns of the parent table are set elements of the parent external set.
- Manually add the child set as a set element to the parent external set.
- Check that the parent columns that are mentioned in the SELECT clause of the child set are also mentioned in the SELECT clause of the parent set, and not within an expression.

*Example:*

To export scheduled tours including their reservations, define an EXP_SCHEDTOUR external set representing the SCHEDTOUR table, and an EXP_RESERVATION external set representing the RESERVATION table.

The SQL Statement of the EXP_SCHEDTOUR (parent) external set reads:

```sql
SELECT   schedtour_id
,        destination
,        tour_type
,        start_date
,        return_date
FROM     schedtour

```

The SQL Statement of the EXP_RESERVATION (child) external set reads:

```sql
SELECT   r.res_id
,        r.made_by
,        r.dealt_with_by
,        r.person_discount
,        r.group_discount
,        r.price
,        r.book_date
FROM     schedtour s
,        reservation r
WHERE    r.schedtour_id = s.schedtour_id

```

Finally, manually add a new RESERVATIONS set element to the EXP_SCHEDTOUR external set, and attach the EXP_RESERVATION child set to it.

The child set will now be synchronized with the parent external set. This is possible because the schedtour_id primary key column is an element of the EXP_SCHEDTOUR parent external set.

For synchronization, USoft implicitly adds a join condition coupling records from the parent set with records from the parent table in the child set. If the parent table appears two or more times in the child set's FROM clause, the join is with the first table (reading from left to right) for which all primary key columns appear in the SQL statement.

> [!NOTE]
> An external set cannot have a child set if the query contains one of the set operators UNION, MINUS, or INTERSECT.