---
id: DataToClipboard
---

# DataToClipboard()



> [!NOTE]
> This article is about the **DataToClipboard** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **DataToClipboard()**

Copies all selected records to the clipboard.

Returns data converted to text. In the return value, columns are separated by tabs, and records by newline characters.

*Syntax*

```
DataToClipboard()
```

DataToClipboard() can only be used to copy data that has been explicitly selected. To copy the current record, you must first use RecordSelect(). To copy all records resulting from a query, you must first use RecordSelectAll().