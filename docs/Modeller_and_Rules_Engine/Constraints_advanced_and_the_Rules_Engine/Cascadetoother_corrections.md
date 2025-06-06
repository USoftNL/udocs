---
id: Cascadetoother_corrections
---

# Cascade-to-other corrections

**Cascade-to-other corrections** are corrections of column values in one or more records that are *different* from the record being processed. These may be different records in the same table instance, records in a different table instance of the same table, or records in a different table altogether.

Cascade-to-other corrections are performed at record-store time, after any row checks applied to the record being processed, and after this record is actually stored internally. This is also expressed by saying that cascade-to-other corrections occur in the post-store phase of a store-record event.

A productive multi-record constraint is evaluated as a cascade-to-other correction if it meets both of the following conditions:

- The constraint cannot be evaluated as an update-on-self correction.
- The constraint is not deferred to the next transition (= does not have Deferred = Post Commit).

*Example*

A business rule "The price of a reservation is the price of the scheduled tour multiplied by the number of participants in the reservation. Personal discount and group discount percentages may apply. If both apply, only the higher percentage is deduced." is implemented by a productive constraint:

```
UPDATE    reservation r
SET       r.price =
(
    SELECT    s.price * COUNT( pt.person_id ) *
              (( 100 – GREATEST( r.person_discount, r.group_discount )) / 100 )
    FROM      schedtour s
    ,         participant pt
    WHERE     s.schedtour_id = r.schedtour_id
    AND       r.res_id = pt.res_id
    GROUP BY  s.price
    ,         r.person_discount
    ,         r.group_discount
)
```

This price calculation constraint is non-transitional. It will be evaluated as soon as any of the columns mentioned in the constraint SQL is manipulated.

- If it is evaluated as a result of a PARTICIPANT record being added to or deleted from  the reservation, the constraint is handled as a **cascade-to-other correction** because the two adjustments required (the addition or deletion of the participant in PARTICIPANT, and the price re-calculation in RESERVATION) are not within the record being processed.

- If it is evaluated as a result of a SCHEDTOUR price being changed, the constraint is handled as a **cascade-to-other correction** because the two adjustments required (the price change in SCHEDTOUR, and the price re-calculation in RESERVATION) are not within the record being processed.

- If it is evaluated as a result of one of the RESERVATION columns being modified, the constraint is handled as an **update-on-self correction**. This is because in this case, the two adjustments required (the update of the SCHEDTOUR_ID column value and the update of the PRICE column value) are both within the record being processed. This applies, for instance, if the scheduled tour of an existing reservation is changed. As a result of this update, the price must be re-calculated.

## Effect of cascade-to-other corrections

If an evaluated cascade-to-other correction has an effect, this effect is to manipulate one or more records other than the record being processed. For each of these records, this effect is that a new record-store event occurs.

A cascade-to-other correction may recursively trigger any number of further corrections until all the application data satisfies the conditions defined in the table constraints or the maximum constraint depth limit is reached.

 