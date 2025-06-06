# Update-on-self corrections

**Update-on-self corrections** are corrections of column values within the record being processed. To do an update-on-self correction, values from other records (within the same table instance, or from a different instance of the same table, or from a different table altogether) may be needed, but no values in other records are in danger of being *affected*.

Update-on-self corrections are performed at store-record time, before any row checks are applied to the record, and before the row is actually stored. This is also expressed by saying that update-on-self corrections occur in the pre-store phase of a store-record event.

A table constraint is evaluated as an update-on-self correction if it meets all of the following conditions:

- The constraint SQL statement is an UPDATE statement.
- The updated table is the table of the record being processed.
- The constraint is either non-transitional, or it is transitional and its Transition Table is the table of the record being processed.
- The constraint is not deferred.
- The constraint does not contain an outer-join condition.
- The constraint does not perform an UPDATE on a subtype indicator.

Update-on-self corrections contrast with cascade-to-other corrections.

*Example*

Consider the business rule: "The price of a reservation is the price of the scheduled tour multiplied by the number of participants in the reservation. Personal discount and group discount percentages may apply. If both apply, only the higher percentage is deduced." This rule is implemented by a productive constraint:

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

- If it is evaluated as a result of one of the RESERVATION columns being modified, the constraint is handled as an **update-on-self correction**. This is because in this case, the two adjustments required (the update of the SCHEDTOUR_ID column value and the update of the PRICE column value) are both within the record being processed. This applies, for instance, if the scheduled tour of an existing reservation is changed. As a result of this update, the price must be re-calculated.

- If it is evaluated as a result of a PARTICIPANT record being added to the reservation or deleted from the reservation, the constraint is handled as a **cascade-to-other correction** because the two adjustments required (the addition or deletion of the participant in PARTICIPANT, and the price re-calculation in RESERVATION) are not within the record being processed.
- If it is evaluated as a result of a SCHEDTOUR price being changed, the constraint is handled as a **cascade-to-other correction** because the two adjustments required (the price change in SCHEDTOUR, and the price re-calculation in RESERVATION) are not within the record being processed.

## Effect of update-on-self corrections

An update-on-self correction has an effect if, by setting the columns mentioned in the SET clause to the outcome of evaluating the expression on the right hand side of the SET clause (a scalar expression or, as in the example, a SQL subquery), it actually causes this value to change.

In contrast with field corrections, an update-on-self correction may recursively trigger other update-on-self corrections and even itself.