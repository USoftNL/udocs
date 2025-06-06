# Rules Engine optimisation techniques

The Rules Engine automatically optimises its action by applying a number of techniques. Most of these techniques consist of applying logic that reduces the number of actions that need to be executed whilst ensuring at the same time that the data result is the same.

```
DELETE FROM    ORDER_HISTORY
WHERE EXISTS   
(            
             SELECT    ''
             FROM      ORDER t1
             WHERE     ORDER_HISTORY.ID = t1.ID
             AND       t1.STATUS = 'CLOSED'
)
```

 

### Local evaluation of SQL functions

The Rules Engine is able to resolve many SQL functions locally. This way the number of trips to the database is minimized.

You can use all SQL functions supported by your RDBMS (please consult the database vendor's SQL syntax documentation) but if the Rules Engine does not support the function, each time it is called a trip to the database is necessary.

You can improve performance by avoiding RDBMS-specific functions where possible. You also benefit from this strategy when migrating to another RDBMS.

Find out which SQL functions are supported locally by the Rules Engine by referring to the listings in the Available SQL Functions section of the Definer help.

There are a number of borderline cases. For instance, LTRIM and RTRIM are possible against both Oracle and Sybase and are also ODBC functions, but because these platforms handle these functions differently they are not resolved locally.

SUBSTR and INSTR are handled locally by USoft, but because these functions are handled differently on Sybase than on for example Oracle, the Rules Engine may adjust the number of parameters by truncating the function call as it was submitted, or by adding dummy parameter values.

For these borderline cases, refer to the listings in the Available SQL Functions section of the Definer help.

### Void condition resolution

When the Rules Engine receives a SQL statement, it tries to resolve void conditions. That is, in a set of WHERE conditions connected by AND, if one of the expressions can be evaluated to False, the complete set can be replaced by False.

*Example*

Consider the business rule: "SURVIVAL tours do not have more than 10 participants". This business rule is implemented by the constraint:

```
SELECT    '' violation
FROM      schedtour st
WHERE     10 <
          (    SELECT    COUNT(*)
               FROM      reservation r
               ,         participant pt
               WHERE     st.schedtour_id=r.schedtour_id
               AND       r.res_id=pt.res_id )
AND       tour_type='SURVIVAL'
```

If a new scheduled tour is entered, there is no point in checking the number of reservations for that scheduled tour, because there are no reservations yet. So the second, 'SURVIVAL' condition does not need to be checked anymore.

Likewise, in a set of WHERE conditions connected by OR, if one of the expressions can be evaluated to true, the complete set can be replaced by True.

During local evaluation, expressions can often be reduced to very basic expressions like "1=1" or "\<value> != \<value>". This type of expression is used to resolve large parts of the WHERE conditions. The size of the SQL statement sent over the network is reduced.

### Local values

When a record is locked, for example when the user changes a column value, a SELECT_FOR_UPDATE statement is sent to the database. This single operation serves two purposes:

- All column values are queried.
- The record is locked.

Once a record is locked in the database on behalf of the current user, if column values of this record are needed later in the transaction, these values are not queried in the database but the client substitutes the values locally available.

This is particularly important for single-record constraints, for example: "The cancel date of a reservation must be later than the booking date". If a reservation is cancelled by entering the cancel_date field, first the record is locked, and then the locally available booking date can be substituted.

It is also applicable to some multi-record constraints, for example if a price must be compared with a price in some parent table. If the parent record is already locked because of foreign key manipulation, then the price in the parent table is read from client if available, and not re-queried in the database.

### Row binding

The Rules Engine uses a number of SQL optimization techniques that make sure that SQL statements are executed only for those records that correspond or relate to the records actually changed by the user.

Row binding is the general term used to describe these techniques.

If the SQL statement of a constraint were used literally, all records in the database would be re-checked each time a constraint is activated. This is because SQL statements by nature apply to the entire set of records involved.

With row binding, the Rules Engine substitutes known column values for one record only in a SQL statement. Placeholders for column values appear in BenchMark Profiler and Tracer output as colons followed by integers:

```
:1, :2,...
```

Row binding is achieved by:

- Adding WHERE clauses to SQL statements that will restrict the scope of the statement to one record.
- Substitution of known column values for one record in a SQL statement.

*Example 1*

Consider the business rule: "Guid

es have a minimum personal discount of 10%". This business rule is implemented by a productive, single-record constraint:

```
UPDATE    person
SET       discount = 10
WHERE     guide = 'Y'
AND 
(
          discount < 10
    OR    discount is null
)
```

When a person without a discount is turned into a guide, the Rules Engine can evaluate the constraint locally, and issues the UPDATE statement:

```
UPDATE    COURSE1.PERSON
SET       DISCOUNT = :1
,         GUIDE = :2
WHERE    
(
          PERSON.PERSON_ID = :3
)
(10,Y,236)
```

In this statement, a WHERE clause is added that restricts the update to the record currently visible on the screen. This way the statement is bound to one row.

 

*Example 2*

Consider the business rule: "A reservation can only be canceled after the reservation is booked". This business rule is implemented by a restrictive, single-record constraint:

```
SELECT  '' violation
FROM    reservation
WHERE   cancel_date < book_date
```

When a reservation is canceled, the Rules Engine is able to evaluate this constraint locally via the SQL statement:

```
SELECT    ''
FROM      dual
WHERE    ( :1 < :2 )
(1999/0423000000,1999/0422224414)
```

In this statement, for the cancel_date and book_date columns, current screen values are substituted. The substituted values are listed below the statement between parentheses. This is also an example of row binding; this way the statement is bound to one row.

*Example 3*

Consider the business rule: "The return date of a scheduled tour should match the preset duration of the tour". This business rule is implemented by a productive, multi-record constraint:

```
UPDATE schedtour st
SET    st.return_date =
(
    SELECT    TRUNC(st.start_date) + t.num_days - 1
    FROM      tour t
    WHERE     t.destination = st.destination
    AND       t.tour_type = st.tour_type
)
```

When the number of days for a tour is changed, at record validation time the Rules Engine:

1. Updates the tour itself. This is a straightforward SQL statement.

2. Selects the scheduled tours that should be updated, and also locks these records. This operation is identified in BenchMark's profiler output as SELECT_FOR_UPDATE:

```
SELECT   s.schedtour_id
,        s.destination
,        s.tour_type
,        s.start_date
,        s.return_date
,        s.price
,        s.max_part
,        s.guide
FROM     schedtour s
WHERE
(
         :1 = s.destination
    AND  :2 = s.tour_type
)
FOR UPDATE OF s.schedtour_id
(AUSTRALIA,SURVIVAL)
```

In this statement, two WHERE clauses are added that restricts the SELECT statement to the scheduled tours of ONE record, the tour record currently visible on the screen. This way the statement is bound to one row.

3. For each selected scheduled tour, a new row event is triggered. Each scheduled tour is updated by the statement:

```
UPDATE schedtour s
SET    s.schedtour_id = :1
,      s.destination = :2
,      s.tour_type = :3
,      s.start_date = :4
,      s.return_date = :5
,      s.price = :6
,      s.max_part = :7
,      s.guide = :8
WHERE (    
       s.schedtour_id = :9
)
(131,AUSTRALIA,SURVIVAL,2000/0301000000,2000/0320000000,2000,10,5,131)
```

In this statement, a WHERE clause is added that restricts the update to one record: the scheduled tour record within the triggered row event. This way the statement is bound to one row.

### Update change checks

For UPDATE statements, new column values are compared with old column values. If it turns out that the column is updated to the same value, the operation is not sent to the database.

Queried records that undergo updates or deletes are locked as soon as editing takes place in the record. At record validation time, however, for UPDATE statements the Rules Engine checks that old and new values of the manipulated record are different.

This is done by adding WHERE conditions in an attempt to detect as soon as possible that a constraint need not be evaluated.

*Example*

The SQL statement:

```
UPDATE tour SET max_age = 70
```

is expanded to:

```
UPDATE    tour
SET       max_age = 70
WHERE     max_age <> 70
OR        (max_age IS NULL AND 70 IS NOT NULL)
OR        (max_age IS NOT NULL AND 70 IS NULL)
```

The OR clauses are added only if applicable. This depends on the max_age column being mandatory or not and whether the expression can result in a NULL or not.

### Set-oriented processing

A secure algorithm for a Rules Engine is to always handle manipulations record-by-record. This means that for each record to be manipulated, the Rules Engine implements all restrictive and productive rules, and only then continues with the next record.

To optimise, the USoft Rules Engine handles manipulations record-by-record only if constraints or relationships need to be checked. Otherwise, a manipulation statement for multiple records is sent directly to the RDBMS.

In Definer, the ALLOW_SET_MANIPULATIONS Rules Engine parameter specifies whether manipulations are handled set-oriented or not. This parameter can be specified separately for batch and online applications. The default value of this parameter is 'False' for online applications and 'True' for batch applications.

*Example*

This example demonstrates the difference between handling a statement record-by-record or as a set. Suppose there is an ORDER table and an ORDER_HISTORY table. Some constraint inserts a record in the history table every time the total amount of the order changes.

A batch job, which runs once a month, removes all occurrences of closed orders in the history table.

|**ORDER**|
|--------|--------|--------|
|ID      |Total   |Status  |
|1       |15000   |CLOSED  |
|2       |12750   |OPEN    |



 

|**ORDERLINE**|
|--------|--------|--------|
|Order ID|Datetime|Total   |
|1       |23-SEP-1999 13:59:35|12000   |
|1       |23-SEP-1999 15:21:15|13200   |
|1       |24-SEP-1999 09:01:21|15000   |
|2       |24-SEP-1999 08:41:14|12750   |



The batch job contains a SQL statement:

```
DELETE FROM      order_history oh
WHERE EXISTS   
```

```
(
```

```
        SELECT   ''
        FROM     order o
        WHERE    o.id=oh.order_id
        AND      oh.status = 'CLOSED'
)
```

If manipulations are handled record-by-record, the Rules Engine:

1. Locks all child records with order_id 1in the ORDER_HISTORY table.

2. Deletes the first record with order id 1.

3. Deletes the second record with order id 1.

4. Deletes the third record with order id 1.

If manipulations are handled set-oriented, the handling of this batch job statement has been optimized: all history records are now deleted in one single SQL statement:

```
DELETE FROM    ORDER_HISTORY
WHERE EXISTS   (SELECT    ''
             FROM   ORDER t1
             WHERE  ORDER_HISTORY.ID=t1.ID
             AND    t1.STATUS = 'CLOSED')
)
```

If manipulations are handled set-oriented, there will be no automatic refresh of records on the screen. Also, the Rules Engine will perform no uniqueness checks. If a unique key violation takes place, the user will see a database error message instead of a USoft error message.

The Rules Engine CANNOT handle a manipulation set-oriented if:

- Constraints that need to be evaluated have been defined on the manipulated table, except when these constraints are deactivated.
- Relationship columns (primary or foreign key columns) are changed within the manipulation. Insert and delete manipulations will therefore never be handled set-oriented in case of relationships.
- Authorization on column level has been defined on the manipulated table.
- The manipulation statement contains an 'INVOKE' part.
- The manipulated table is a view, a temporary table, or a static table.
- For INSERT statements, default values are defined for columns of the manipulated table that are not specified in the statement.
- Generate Unique Values has been set for a column of the manipulated table.
- The manipulated table is being referenced a second time in the new-values part.
- The transaction mode of the Rules Engine is specified as 'Batch Manipulation'. In batch-manipulation mode the Rules Engine collects all row events and executes them on commit time.
- The Auto-Commit application property has been set to Yes.
- Productive domain constraints have been defined.
- Domain checks or column checks have been defined on the manipulated table.

Manipulations on subtype constellations are partially supported:

- Insert statements are not supported.
- Delete statements are only supported if the whole constellation resides in the same physical table and the delete-super-on-delete attribute is switched on for all affected subtypes.
- Update statements are only supported if the columns being updated reside in the same physical table and none of the updated columns is a subtype indicator.

### Local calculation

The Rules Engine performs mathematical calculations locally where possible, instead letting the RDBMS do the calculation.

The Rules Engine handles numbers with at least the same precision as the underlying database does. Calculations on large numbers are only processed locally if the Rules Engine can be sure that the resulting value will not be truncated. if not, the calculation task is sent to the database.

### No childless parent cascade

For cascading UPDATE or DELETE rules in relationships, the Rules Engine only performs this cascading manipulation if child records exist.