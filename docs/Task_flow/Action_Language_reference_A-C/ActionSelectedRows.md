---
id: ActionSelectedRows
---

# ActionSelectedRows()




:::note

This article is about the **ActionSelectedRows** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ActionSelectedRows()**

Perform one or more actions on all selected records in a spreadsheet.

You cannot use the ActionSelectedRows() action to perform data manipulations on multiple records.

*Syntax*

```
ActionSelectedRows( *action*, ... )
```

The required *action* is the action you want to perform. You can perform multiple *actions* separated by commas.

*Example*

```
ActionSelectedRows( RecordWrite( 'C:\MY FILE.TXT' , ',' ))
```

*Exposed by*

- Windows or embedded windows that have their Column Manager Class property set to Spreadsheet