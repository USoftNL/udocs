---
id: USFile_internal_component
---

# USFile internal component



> [!NOTE]
> This article contains general information about the **USFile** internal component.
> For an alphabetic list of USFile methods, click [here](/docs/Extensions/USFile_internal_component).

The **USFile** internal component provides basic file-IO functionality. Text files can be kept open for a period longer than a single statement, making it possible to write to the file using multiple write statements. It is also possible to append the output of an **XML.Export** statement to a file which is opened with this USFile component.

*Example*

This script opens a file, writes data to it, then closes the file:

```sql
INVOKE   USFile.Open WITH
SELECT   'MyFile'
,        'c:\temp\myfile.xml'
,        'WRITE'  "Mode"
;

INVOKE   XML.Export WITH
SELECT   'MyFile' WriteOutputTo
,        *
FROM     booking
WHERE    destination = 'AUSTRALIA'
;

INVOKE   USFile.Close WITH
SELECT   'MyFile'
;
```

The USFile component provides methods to:

- Open a text file for reading, writing, or appending.
- Write text or binary data to a file.
- Read lines or a complete binary or text file.
- Check if the end of a file has been reached when reading lines.
- Close a file.