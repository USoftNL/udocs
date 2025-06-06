---
id: USFileReadLine
---

# USFile.ReadLine




:::note

This article is about the **ReadLine** method of the [USFile internal component](/docs/Extensions/USFile_internal_component).

:::

## **USFile.ReadLine**

Reads a line of text from a file previously opened by the **USFile.Open** method in READ mode. This method reads text until it reaches a newline character.

Reads a complete file in text mode. Returns a sequence of human-readable characters.

Returns the text read. If there are no more lines to read, or if an empty line is read, NULL is returned.

*Syntax*

```sql
INVOKE   USFile.ReadLine WITH
SELECT   *alias*
```

The required *alias* must be the alias that was associated with the file to be read when the file was opened by calling the **USFile.Open** method.

*Example*

```sql
INVOKE    USFile.ReadLine WITH
SELECT    'USFile.ToursFile'
```

 