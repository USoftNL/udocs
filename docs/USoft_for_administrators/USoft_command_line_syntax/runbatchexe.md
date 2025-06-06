---
id: runbatchexe
---

# runbatch.exe

Starts the USoft processor that executes USoft jobs in order to run a named job.

The table below lists the command line options available for use with the **runbatch.exe** command.

|**Option**|**Purpose**|
|--------|--------|
|`-app name`|Specifies the name of the application.|
|`-database name`|Specifies which database is to be used. This parameter is mandatory for SQL Server (OLEDB) and for ODBC, and optional for Oracle, but USoft recommends you specify this parameter also for each Oracle connection.|
|`-ddfile`|<p>Reads the repository from flat files instead of from repository.</p><p>If you use this option, also use the -app option to specify the application to look for.</p>|
|`-ddowner name`|<p>Specifies that the application must be run on a repository owned by another user than the one under whose name you log in.</p><p>To be used in combination with the -app option if you are NOT using the -ddfile option.</p><p>This corresponds to the "[Separate Properties for Repository and Application](/docs/USoft_for_administrators/USoft_Binder/USoft_Binder_for_administrators.md)" option of USoft Binder.</p>|
|`-exe "job(name, parameter=value... )"`|<p>Executes the specified job.</p><p>*Example*</p>`-exe "job(EXP_PERSON,name=johnson)"`|
|`-logfile name`|<p>Specifies the full path name or the file name of the log file, if you do not want the default **jobnameHHMMSSLL.log** file name.</p><p>You can also specify a folder name, ending with the '\\' character.</p>|
|`-odbc` |Specifies that the application tables are in an ODBC enabled RDBMS.|
|`-oledb`|Specifies the MS SQL Server database platform.|
|`-oracle`|Specifies the Oracle database platform.|
|`-owner name`|Specifies the database user who is the owner of the application tables at RDBMS level.<br/>			You only need to use this option if this is a different database user from the user that you log on with (identified by -u or -user)..|
|`-password name`*or:*`-pw name`|Specifies the RDBMS password. You only need to use this option if you want to log in automatically. Use this option in combination with -u (username).|
|`-silent`|Suppresses the display of error messages on Windows.<br/>			Some exceptional messages (such as fatal errors during startup or initialization) will always be reported by means of message boxes, even when this –silent option has been used.|
|`-title "name"`|Specifies the text displayed in the window's title bar. Note that this option may only be used on Windows platforms.|
|`-user name`*or:*`-u name`|Specifies the RDBMS username. You only need to use this option if you want to log in automatically. Use this option in combination with -pw (password).|
|`-wlogfile`<p> </p>|Specifies that an existing log file is to be overwritten by a new log file, instead of being appended with new logging information.|



 