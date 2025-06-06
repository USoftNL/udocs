# Import task status files

During an import task, each file import can lead to *import task status files* being produced.

By default, they have the same location and filename as the import file, but a different file extension: .ERR, .SUC and .MES.

By default, only .ERR files are produced. You can customize the production of import task status files by using the -create_err, -create_suc and -create_mes predefined parameters.

### .ERR files

An .ERR file contains all records of the import file that were rejected. Rejection may occur, for example, when the IO format of a record is incorrect.

For driving sets, this means that the file contains all the records that were rejected when they were imported into their temporary table in memory, or that the import SQL statements executed for this record could not be committed.

For non-driving sets, this means that the file contains all the records that were rejected when they were imported into their temporary table.

### .SUC files

A .SUC file contains all records of the import file that were successfully imported.

For driving sets, this means that the file contains all the records that were imported successfully into their temporary table in memory, and that the import SQL statements executed for this record were successfully processed and committed.

For non-driving sets, this means that the file contains all the records that were imported successfully into their temporary table.

### .MES files

A .MES file contains all the failure messages that are produced when records are rejected during an import.

### Import task status files, location

By default, import task status files (.SUC, .ERR, .MES files) are output in the same directory as where the import file is located. To have these files in a different location, do one of the following:

- Specify the Directory attribute for a Batch Runner item in USoft Binder.
- In Batchrunner calls, use the -data_directory predefined parameter.
- Add a data_directory parameter to the Batch Runner command line, for example:

```
-exe "job( EXP_PERSON,INS_AFTER=01-APR-2001,data_directory=C:\Data\ )"

```

You may want to set a hard-coded File Name attribute within the Import Task Set definition.

> [!NOTE]
> The data_directory parameter takes precedence over hard-coded paths or %% variables in Import or Export Task definitions. If data_directory is set, partial paths (subfolder/filename) are concatenated with data_directory. File location is determined in the following order of precedence:

- data_directory parameter
- Hard-coded path with system variables substituted
- No path: current (working) directory