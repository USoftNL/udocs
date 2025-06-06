# USFile.ReadTextFile



> [!NOTE]
> This article is about the **ReadTextFile** method of the [USFile internal component](/docs/Extensions/USFile%20internal%20component).

## **USFile.ReadTextFile**

Reads a complete file in text mode. Returns a sequence of human-readable characters.

The file is identified either by referring to an alias (Syntax 1) or by supplying a filepath (Syntax 2).

*Syntax 1*

```sql
INVOKE USFile.ReadTextFile WITH
SELECT   *alias*

*alias*  :=  USFile.*string*
```

The required *alias* must be the alias that was associated with the file to be read when the file was opened by calling the USFile.Open method.

*Alias* in this syntax must be preceded by the prefix "USFile." This prefix is case-insensitive and ends in a full stop. Like the prefix, *string* is case-insensitive.

For more details, see the "Calling USFile.ReadTextFile with an alias" section below.

*Syntax 2*

```sql
INVOKE  USFile.ReadTextFile WITH
SELECT  *filepath*
```

The required *filepath* is the name of the file to read. This name is allowed to contain environment variables.

*Filepath* is not allowed to contain a full stop. If it contains a full stop, the call is interpreted as in Syntax 1 above.

For more details, see the "Calling USFile.ReadTextFile with a filepath" section below.

*Examples*

```sql
INVOKE   USFile.ReadTextFile WITH
SELECT   'USFile.MyOverview'
```

```sql
UPDATE   tours_backup
SET      tours_pdf = USFile.ReadTextFile( 'USFile.MyOverview' )
WHERE    id = 1
```

```sql
UPDATE   tours_backup
SET      tours_pdf = USFile.ReadTextFile( '%TEMP%\ToursOverviewFile.pdf' )
WHERE    id = 1
```

## Calling USFile.ReadTextFile with an alias

Calling USFile.ReadTextFile with an alias (Syntax 1 in this help topic) is successful only if you have first called **USFile.Open** in READ mode. At that occasion, you must have associated a file on the file system with the alias.

Only the FIRST time you call USFile.ReadTextFile with the alias is it possible to get file contents as a return value. Second and subsequent calls will return the NULL value. To get another successful read action, you must first close the file by calling **USFile.Close** and re-opening it by calling **USFile.Open**. This contrasts with calling the method with a filepath instead of an alias (next section).

## Calling USFile.ReadTextFile with a filepath

To call USFile.ReadTextFile with a filepath (Syntax 2 in this help topic), you do not first open a file connection with **USFile.Open**. If you call USFile.Open first, the alias connected with the file at that time is ignored by USFile.ReadTextFile, which will return the file contents regardless of the alias or the open or closed connection.

Each time you call USFile.ReadTextFile with the filepath, you get file contents as a return value. This contrasts with calling the method with an alias instead of a filepath (previous section).