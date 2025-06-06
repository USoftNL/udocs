---
id: Constraint_key_query
---

# Constraint key query

At store-record time, in an operation known as a *constraint key query,* the Rules Engine may attempt to get primary key information of records being processed. This is because database values needed during later transaction checks will be retrieved faster if primary key values can be used.

Constraint key queries are identified in BenchMark profiler output as having Reason = CONSTRAINT_KEYQUERY.

*Example*

A business rule: "A guide cannot guide more than one tour at the same time" is implemented by a restrictive constraint:

```
SELECT    '' violation
FROM      schedtour st1
,         schedtour st2
WHERE     st1.guide = st2.guide
AND       st1.schedtour_id != st2.schedtour_id
AND       st1.start_date BETWEEN st2.start_date AND st2.return_date
```

In this constraint, there is no join based on relationship columns (because there is no relationship). When a manipulation takes place on the SCHEDTOUR table, a constraint key query is issued to retrieve the primary key values of the driving table (SCHEDTOUR st1). These primary key values are substituted during the transaction check at commit time:

```
SELECT    t1.SCHEDTOUR_ID
FROM      OPS$CP2.SCHEDTOUR t1
WHERE   
(
          t1.GUIDE = TO_NUMBER(:1)
   AND    t1.SCHEDTOUR_ID <> TO_NUMBER(:2)
   AND    t1.START_DATE BETWEEN
              TO_DATE(:3, 'SYYYY/MMDDHH24MISS') AND
              TO_DATE(:4, 'SYYYY/MMDDHH24MISS')
)
(5,127,2000/0101000000,2000/0101000000)
```

This check will now perform much faster than without the primary key information.