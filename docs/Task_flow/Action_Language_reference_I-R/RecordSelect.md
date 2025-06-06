---
id: RecordSelect
---

# RecordSelect()



> [!NOTE]
> This article is about the **RecordSelect** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **RecordSelect()**

Gives the current or specified record the status of being 'selected'. This action is valid for tables in spreadsheet look.

*Syntax*

```
RecordSelect( *record* )
```

The optional *record* is an integer representing the record you want to have the status of 'selected'. The first record is represented by 0 (zero).

If you do not specify *record,* the current record is selected.

*Exposed by*

- Table controls with the Column Manager Class property set to Spreadsheet