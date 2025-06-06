---
id: Storerecord_event_overview
---

# Store-record event overview

The table below affords an overview of all the possible constraint validations that could take place at **store-record event** time.

- It shows the default order in which these potential validations take place.
- It shows the Reason listed for the validation in BenchMark Profiler output.
- Finally, it shows which validation steps potentially apply when the record manipulation is INSERT, when it is UPDATE, and when it is DELETE.

|**Order**|**Validation**|**Reason inBenchMark Profiler**|**INSERT**|**UPDATE**|**DELETE**|
|--------|--------|--------|--------|--------|--------|
|1       |Lock record and subtype records|LOCK_RECORD|        |Y       |Y       |
|2       |Set default values|        |Y       |        |        |
|3       |Foreground authorization|AUTHORIZATION|Y       |Y       |Y       |
|4       |Productive domain constraints|DOMAIN_CONSTRAINT|Y       |Y       |        |
|5       |Sequence numbers|SEQNO   |Y       |        |        |
|6       |Update On Self constraints|SELECT_FOR_UPDATENEWVALUES|Y       |Y       |        |
|7       |Mandatory columns|        |Y       |Y       |        |
|8       |Domain constraints|        |Y       |Y       |        |
|9       |Columns updatable(Yes, No, Only if Null)|        |        |Y       |        |
|10      |Restrictive domain constraints|DOMAIN_CONSTRAINT|Y       |Y       |        |
|11      |Foreign keys updatable(Yes, No, Only if Null)|        |        |Y       |        |
|12      |Unique keys|UNIQUE_KEY|Y       |Y       |        |
|13      |Restrictive Update/Delete Rules|RESTRICTED|        |Y       |Y       |
|14      |Restrictive, non-transitional,single-record constraints|ROW_CONSTRAINT|Y       |Y       |        |
|15      |Restrictive, transitional,single-record constraints|ROW_CONSTRAINT|Y       |Y       |Y       |
|16      |Restrictive, transitional,multi-record constraints|ROW_CONSTRAINT|Y       |Y       |Y       |
|17      |Immediate subtype definitions (totality, exclusivity)|        |Y       |Y       |        |
|18      |STORE-RECORD,first subtype, then supertype.|MANIPULATION|Y       |Y       |Y       |
|19      |<p>For restrictive, non-transitional, multi-record constraints,</p><p>the primary key of the driving table record is determined.</p><p>In some cases, a constraint key query is needed.</p>|CONSTRAINT_KEYQUERY|Y       |Y       |Y       |
|20      |Cardinality checks are generated for relationships in which the current record is a child.|CARDINALITY|Y       |Y       |Y       |
|21      |Cascading or nullifying Update/Delete Rules|CASCADING|        |Y       |Y       |
|22      |Productive, non-transitional multi-record constraints (not deferred)|SELECT_FOR_\<manip>NEWVALUESor OLD_NEWVALUES|Y       |Y       |Y       |
|23      |Productive, transitional, multi-record constraints (not deferred)|SELECT_FOR_\<manip>NEWVALUESor OLD_NEWVALUES|Y       |Y       |Y       |



 