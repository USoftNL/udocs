---
id: ReevaluateTableSequence
---

# ReevaluateTableSequence()




:::note

This article is about the **ReevaluateTableSequence** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ReevaluateTableSequence()**

Evaluates sequences defined for a specific table, or all sequences of the application. 

This action will update the current value if it is incorrect. For example, if you have inserted a row in your table (AGENCY) that contains a value(20) in the primary key field (ID) that is higher than the current value(15) of the sequence (SEQ_AGENCY), you will get a unique key error on SEQ_AGENCY when NEXT VALUE results in 20 because it was inserted without considering the sequence. This action will set the nextvalue of the sequence to max(primaryKey) +1.

*Syntax*

```
ReevaluateTableSequence ( *tablename* )
```

The optional *tablename* is the name of the table for which the sequence(s) is or are defined. If you do not provide a tablename all sequences in the application context will be checked. So for example when you use this action in a USoft Definer instance, all USoft Definer sequences will be checked.

*Example*

```
ReevaluateTableSequence ( 'AGENCY' )
```

 