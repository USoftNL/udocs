---
id: USFileWriteBinaryFile
---

# USFile.WriteBinaryFile




:::note

This article is about the **WriteBinaryFile** method of the [USFile internal component](/Extensions/USFile_internal_component).

:::

## **USFile.WriteBinaryFile**

Writes binary data to a file. If the file already exists, all data in the existing file will be lost.

*Syntax*

```sql
INVOKE USFile.WriteBinaryFile WITH
SELECT      *filename*
,           *value*
```

*Filename* is the name of the file to write to. This name is allowed to contain environment variables.

*Example*

```sql
INVOKE     USFile.WriteBinaryFile WITH
SELECT     '%TEMP%\ToursOverviewFileCopy.pdf'
,          tours_pdf
FROM       tours_backup
WHERE      id = 1
```

 