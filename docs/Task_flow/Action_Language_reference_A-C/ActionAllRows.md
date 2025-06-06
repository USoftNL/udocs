---
id: ActionAllRows
---

# ActionAllRows()



> [!NOTE]
> This article is about the **ActionAllRows** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ActionAllRows()**

Performs one or more actions on all retrieved records of the current table. This is NOT necessarily the set of all records in the database table.

You cannot use the ActionAllRows() action to perform data manipulations on multiple records.

*Syntax*

```
ActionAllRows( *action*, ... )
```

The required *action* performs the action (the action). You can use specify multiple *actions* separated by commas.

*Example*

```
ActionAllRows(RecordWrite( 'c:\temp\myfile.txt' ))
```

 