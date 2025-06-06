---
id: USFileWrite
---

# USFile.Write




:::note

This article is about the **Write** method of the [USFile internal component](/docs/Extensions/USFile_internal_component).

:::

## **USFile.Write**

Writes text to a file previously opened with the **USFile.Open** method in WRITE or APPEND mode.

*Syntax*

```sql
INVOKE USFile.Write WITH
SELECT    *alias*
,         *value*
```

The required and case-insensitive *alias* is the alias of the file to be closed. This alias must previously have been assigned to a file when the **USFile.Open** method was called. *Alias* is a regular name string that may or may not use the 'USFile.' prefix.

*Value* is a regular text string that may or may not contain whitespace.

- If **USFile.Open** was called in APPEND mode, value is appended to the existing contents of the file (if any).
- If **USFile.Open** was called in WRITE mode, value replaces the existing contents of the file (if any).

*Example*

```sql
INVOKE   USFile.Write WITH
SELECT   'USFile.ToursFile'
,        t.text
FROM     tour t
```