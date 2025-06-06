---
id: USFileClose
---

# USFile.Close



> [!NOTE]
> This article is about the **Close** method of the [USFile internal component](/docs/Extensions/USFile%20internal%20component).

## **USFile.Close**

Closes a file which was previously successfully opened with **USFile.Open**.

Returns no value and generates no error message.

*Syntax*

```sql
INVOKE    USFile.Close WITH
SELECT    *alias*
```

The required and case-insensitive *alias* is the alias of the file to be closed. This *alias* must previously have been assigned to a file when the USFile.Open method was called.

*Example*

```sql
INVOKE    USFile.Close WITH
SELECT    'ToursFile'
```

## The USFile prefix

When you close a file, as a handle for identifying that file the USFile component uses a case-insensitive prefix.alias name where prefix is "USFILE" and the separator symbol between prefix and alias is a full stop ( . ). For example, if you close a file with alias "MyFile", the internal name is "USFILE.MYFILE".

When calling the USFile.Close method, you are allowed to spell out the prefix if you like:

```sql
INVOKE    USFile.Close WITH
SELECT    'USFile.ToursFile'
```

When calling read methods of USFile other than by a full filepath, the "USFile." prefix is required.

## Errors and repeated calls to USFile.Close

Calls to the USFile.Close method do not raise errors. For example, no error is raised if the file was already closed or if the alias was not previously used.

Repeated calls to the USFile.Close method without intervening calls to the USFile.Open method have no effect.

 