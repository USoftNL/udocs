# Transaction checklist signals

A **transaction checklist signal** consist of adding, at store-record time, an entry to an internal list or *transaction checklist* of all the records that must be subjected to a transaction check at commit time.

The point of making a transaction checklist at store-record time is that it makes the processing of certain transaction checks (at commit time) faster. The strategy is to keep a list of primary key values that identify the records being processed. This is efficient if these records turn out to be driving table records for a transaction check:

- The transaction check can be executed faster, because the primary key values for the driving table record are known, and indexes can be used to quickly retrieve the database values needed for the check.
- It is possible to *merge* transaction checks. If two store-record events cause a need to do a transaction check for the same driving table record, this evaluation only needs to be performed once.

This type of row binding, however, is only possible if the primary key values of the driving table are known. Therefore, at store-record time, the Rules Engine attempts to find these primary key values. If these values are found, they are registered in the transaction checklist, together with the name of the constraint to be checked.

In the determination of primary key values of the driving table there are four possible scenarios, that depend on both the triggering table and the constraint SQL:

1. The user manipulation is on the driving table. The primary key of the driving table is therefore immediately known.

2. The user manipulation is NOT on the driving table, but the primary key of the driving table can be determined directly.

An example is when a child record of the driving table is manipulated. The foreign key values of this child record are the primary key values of the driving table record.

3. The user manipulation is NOT on the driving table, and the primary key of the driving table cannot be determined directly.

In this case, a constraint key query is needed to retrieve the primary key values.

To optimise, the primary key of the manipulated record is substituted, except when the constraint is evaluated for more than one record (for example when group functions are involved).

If the triggering table is not mentioned in the main query of the constraint, the Rules Engine also tries to calculate a path from the triggering table to the driving table. This calculated path is made explicit by query conditions used in the constraint key query statement.

4. A path to the driving table cannot be calculated. The transaction check is executed without extra conditions.

If the Rules Engine can find the primary key values (scenarios 1, 2, and 3), the resulting primary key values for the driving table are substituted in the constraint test statement at commit time.

If the Rules Engine can NOT find the primary key values (scenario 4), then the constraint SQL statement is sent to the database "as is", that is, without primary key substitutions. Data integrity is safeguarded, but the constraint is checked against all the data in the database.

*Example 1*

A business rule "A reservation cannot be booked once the scheduled tour has started" is implemented by a restrictive constraint:

```
SELECT    '' violation
FROM      schedtour st
,         reservation r
WHERE     st.schedtour_id = r.schedtour_id
AND       r.book_date >= st.start_date
```

The driving table of this constraint is SCHEDTOUR, because it is the first table in the FROM clause for which all primary key columns are mentioned.

- If the user manipulation is also on the SCHEDTOUR table, for instance the start date of a scheduled tour is changed, then the primary key of the driving table is immediately known.
- If the user manipulation is on RESERVATION, for instance a new reservation is made, then the primary key of the driving table can be determined directly via the join:

```
st.schedtour_id = r.schedtour_id
```

Neither of these cases requires a constraint key query.

At commit time, the primary key value of the scheduled tour is substituted in the constraint test statement:

```
SELECT    ''
FROM      OPS$CP1.RESERVATION t1
WHERE   
(
          t1.SCHEDTOUR_ID = TO_NUMBER(:1)
   AND    t1.BOOK_DATE >= TO_DATE(:2, 'SYYYY/MMDDHH24MISS')
)
(64,2001/0111000000)
```

*Example 2*

A business rule "Participants for a SURVIVAL tour need to be insured" is implemented by a restrictive constraint:

```
SELECT    '' violation
FROM      schedtour st
,         reservation r
,         participant pt
WHERE     st.schedtour_id = r.schedtour_id
AND       r.res_id = pt.res_id
AND       pt.insurance = 'N'
AND       st.tour_type = 'SURVIVAL'
```

The driving table of this constraint is SCHEDTOUR, because it is the first table in the FROM clause for which all primary key columns are mentioned.

If the user manipulation is on PARTICIPANT, for instance when a new participant is added, then a path to the driving table can be determined via:

```
WHERE     st.schedtour_id=r.schedtour_id
AND       r.res_id=pt.res_id
```

A constraint key query is necessary in this case to retrieve the primary key values of the scheduled tours concerned.

```
SELECT     t1.SCHEDTOUR_ID
FROM       OPS$CP2.SCHEDTOUR t1
,          OPS$CP2.RESERVATION t2
WHERE   
(
           t1.SCHEDTOUR_ID = t2.SCHEDTOUR_ID
   AND     t2.RES_ID = TO_NUMBER(:1)
   AND     t1.TOUR_TYPE = 'SURVIVAL'
)
(200)
```

At commit time, the primary key value of the scheduled tour (128) is substituted in the SQL for the transaction check:

```
SELECT     ''
FROM       OPS$CP1.RESERVATION t1
,          OPS$CP1.PARTICIPANT t2
WHERE      
(
           TO_NUMBER(:1) = t1.SCHEDTOUR_ID
   AND     t1.RES_ID = t2.RES_ID
   AND     t2.INSURANCE = 'N'
)
(128)
```

*Example 3*

A business rule "A person must not be enrolled twice as participant on the same Scheduled Tour" is implemented by a restrictive constraint:

```
SELECT      '' violation
FROM        reservation r
,           participant pt
WHERE       pt.res_id = r.res_id
GROUP BY    r.schedtour_id
,           pt.person_id
HAVING      COUNT(*) > 1
```

In this case, the constraint is sent to the database without primary key substitutions. The Rules Engine does not build a constraint key query statement if the constraint SQL statement contains a GROUP BY clause or group functions, or if the SQL statement contains no primary key references.