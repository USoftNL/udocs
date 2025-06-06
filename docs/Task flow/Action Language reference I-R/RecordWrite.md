# RecordWrite()



> [!NOTE]
> This article is about the **RecordWrite** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **RecordWrite()**

Writes the contents of the current record to the specified file. If the file already exists the records will be appended to the file. The columns are separated by the specified column-separator string. If not specified the column-separator defaults to a space. Each record is placed on a new line.

If the file cannot be opened for writing (for example, write-protected or wrong path specification), no warning is displayed and no write occurs.

*Syntax*

```
RecordWrite( *file*, *column-separator* )
```

*File* is the file to which you want to write the contents of the record. *Column-separator* is the symbol or string that is used to separate column values in the record.

*Example*

```
RecordWrite( 'C:\MY FILE.TXT', ',' )
```

 