---
id: Sort
---

# Sort()



> [!NOTE]
> This article is about the **Sort** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **Sort()**

Sorts all queried records on the column that is currently selected. After sorting, the cursor is in the same record as before sorting. This action toggles between ascending and descending sort order.

You cannot sort columns that are based on a LONGRAW or LONG VARBINARY datatype.

*Syntax*

```
Sort( *mode* )

*mode*  ::=  { TOGGLE | FETCHTOGGLE }
```

If *mode* is set to TOGGLE (the default), and not all records have been fetched, a question box will be displayed. This question allows the user to cancel the operation or to continue fetching records before sorting.

If *mode* is set to FETCHTOGGLE, all records will be fetched without displaying a question box.

*Exposed by*

- Column controls (Fields)