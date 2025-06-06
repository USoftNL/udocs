# CursorGotoRecord()



> [!NOTE]
> This article is about the **CursorGotoRecord** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **CursorGotoRecord()**

Moves the cursor to the specified record in the current column. The specified record number must be in the range of retrieved columns.

*Syntax*

```
CursorGotoRecord( *record-id* )
```

The required *record-id* is an integer identifying the record where you want the cursor to go. The first record is identified by 0 (zero).