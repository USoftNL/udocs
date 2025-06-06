# USFile.ReadBinaryFile



> [!NOTE]
> This article is about the **ReadBinaryFile** method of the [USFile internal component](/docs/Extensions/USFile%20internal%20component).

## **USFile.ReadBinaryFile**

Reads a complete file in binary mode. Returns the data contained in the file.

The file is identified by supplying a filepath.

*Syntax*

```sql
INVOKE  USFile.ReadBinaryFile WITH
SELECT  *filepath*
```

The required *filepath* is the name of the file to read. *Filepath* is allowed to contain environment variables and is not allowed to contain a full stop ( . ).

*Examples*

```sql
INVOKE   USFile.ReadBinaryFile WITH
SELECT   'C:\temp\MyOverview.pdf'
```

```sql
UPDATE   tours_backup
SET      tours_pdf = USFile.ReadBinaryFile( 'C:\temp\MyOverview.pdf' )
WHERE    id = 1
```

```sql
UPDATE   tours_backup
SET      tours_pdf = USFile.ReadBinaryFile( '%TEMP%\ToursOverviewFile.pdf' )
WHERE    id = 1
```

 