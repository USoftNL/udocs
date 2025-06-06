---
id: RecordScrollTo
---

# RecordScrollTo()



> [!NOTE]
> This article is about the **RecordScrollTo** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **RecordScrollTo()**

Scrolls to a specified record. The cursor does not enter this record. The specified record becomes the first displayed record. If the record containing the cursor stays displayed on the screen it keeps the focus, otherwise focus is lost.

*Syntax*

```
RecordScrollTo( *record* )
```

The required *record* is an integer representing the record you want to scroll to. The first record is represented by 0 (zero).