---
id: USFileOpen
---

# USFile.Open



> [!NOTE]
> This article is about the **Open** method of the [USFile internal component](/docs/Extensions/USFile%20internal%20component).

## **USFile.Open**

Opens a file for reading, writing, or appending. Assigns an alias to the opened file. This alias can then be used in successive calls to the USFile component. The alias can also be used by the **XML.Export** method.

Opens a connection to a file for subsequent reading or writing. If the file is successfully opened, the alias is returned. If a failure occurs, an error message is returned.

When you have finished reading from or writing to a file that was successfully opened, close it by using the **USFile.Close** method.

*Syntax*

```sql
INVOKE USFile.Open WITH
SELECT     *alias*
,          *filename*
,          *mode*        "Mode"
,          *encoding*    Encoding

*alias*     :=  { USFile.*string* | *string* }
*mode*      :=  { APPEND | READ | WRITE }
*encoding*  :=  { UTF-8 | ASCII | UTF16LE }
```

The required and case-insensitive *alias* acts as a handle for identifying the opened file in subsequent calls. *Alias* optionally starts with a prefix that is the string "USFILE" (case-insensitively) followed by a full stop ( . ). For consistency, best practice is to use the prefix in all calls to USFile.Open(). (For some methods such as USFile.ReadLine() it does not make a difference whether you use the prefix. For others, such as USFile.ReadTextFile(), the alias is interpreted as a file handle if the prefix is present and as a filepath if the prefix is absent.)

The required *filename* specifies the folderpath and filename of the text file to be opened. This name is allowed to contain environment variables.

The required *mode* is the mode in which the file is opened. Possible values are READ, WRITE and the default APPEND. Use READ to read from the opened file. Use APPEND or WRITE to write to the opened file. If you use WRITE, the existing contents of the file (if any) are lost.

> [!CAUTION]
> The optional column alias "Mode" must be surrounded by double quotes if "Mode" is a SQL keyword on your database platform. Otherwise, double quotes around column aliases are optional.

The optional encoding is effective only if mode is APPEND and the external file does not yet exist, or if mode is WRITE. If mode is APPEND and the external file exists, or if mode is READ, the existing encoding of the file applies. Possible values for encoding are: UTF-8 (the recommended default), ASCII, and UTF16LE (= UTF-16 Little Endian).

*Example*

```sql
INVOKE    USFile.Open WITH
SELECT    'USFile.ToursFile'
,         '%TEMP%\MyToursFile.txt'
,         'WRITE'   "Mode"
,         'ASCII'   Encoding
```

## Errors

If you call the USFile.Open repeatedly without an intervening call to **USFile.Close**, the second and subsequent calls lead to an error ("The alias is already in use").

 