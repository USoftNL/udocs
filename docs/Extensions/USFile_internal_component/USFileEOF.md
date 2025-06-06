---
id: USFileEOF
---

# USFile.EOF




:::note

This article is about the **EOF** method of the [USFile internal component](/docs/Extensions/USFile_internal_component).

:::

## **USFile.EOF**

Checks if an end-of-file is reached when reading a file. May be used in conjunction with the ReadLine method to check if all lines have been read.

Returns 0 when the end of the file has not yet been reached, and 1 if it has been reached.

*Syntax*

```sql
INVOKE     USFile.EOF WITH
SELECT     *alias*
```

The required and case-insensitive *alias* is the alias of the file to be closed. This alias must previously have been assigned to a file at the time when the USFile.Open method was called. Alias is a regular name string that may or may not use the 'USFile.' prefix.

*Example*

```sql
SELECT  USFile.ReadLine( 'USFile.ToursFile ')
WHERE   USFile.EOF( 'USFile.ToursFile' ) = 0
```

 