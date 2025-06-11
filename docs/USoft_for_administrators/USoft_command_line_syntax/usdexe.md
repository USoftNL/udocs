---
id: usdexe
---

# usd.exe

Starts a USoft application, or starts a user application built with USoft.

The table below lists the command line options available for use with the usd.exe command.

|**Option**|**Purpose**|
|--------|--------|
|`-A`    |Starts the Authorizer.|
|`-D`<p> </p>|Starts the Definer. Works only in combination with the -ddfile option, because the repository of USoft Developer itself is only presented in a file.|
|`-app name`|Runs USoft Developer on the repository specified by name. USoft Developer will search for the repository in the **name.CON** file, and for the *name* resource files. Under X-Windows, these files must all be in the XAPPLRESDIR directory.|
|`-d`    |Debug option.|
|`-database name`|Specifies which database is to be used. This parameter is mandatory for SQL Server (OLEDB) and for ODBC, and optional for Oracle, but USoft recommends you specify this parameter also for each Oracle connection.|
|`-ddfile`|Reads the repository from flat files instead of from your RDBMS. If you use this option, you must use the -app option to let USoft Developer know which files to look for.|
|`-ddodbc`|Reads the repository from an ODBC-enabled RDBMS.|
|`-ddoracle`|Reads the repository from the Oracle RDBMS.|
|`-ddowner name`|Specifies that the repository tables are stored in a different database account than the application tables.<br/>			To be used in combination with the -app option if you are NOT using the -ddfile option.<br/>			You only need this option if you have repository tables and application tables in different accounts.<br/>			This corresponds to the "[Separate Properties for Repository and Application](/USoft_for_administrators/USoft_Binder/USoft_Binder_for_administrators.md)" option of USoft Binder.|
|`-endusermsgs`|Replaces all technical error messages with a standard message:<br/>			"internal error (code). Contact your system administrator"|
|`-exe action`|<p>Executes the specified action when USoft Developer has been started. For example, to immediately start the Course table, run the following command:</p>`usd.exe -exe table(COURSE)`|
|`-generate file-specification`|<p>Generates an ESI flat file from the command line. The option is followed by the file specification. For example:</p>`usd.exe –generate C:\usd90\app\MYAPP.esi`<p>This option does not create a GUI and exits the process after the file has been created..</p>|
|`-iconic`|Iconizes USoft Developer immediately after it has been started. Useful in combination with the -exe option (UNIX only).|
|`-messagesToFile`|Specifies that all messages, including error messages at startup, are sent to the Messages.log file in the working directory.|
|`-name name`|Runs USoft Developer under the specified name. This name will be placed in the window's title bar. In resource files, you can use it to refer to a specific application. In this way, it is possible to have resources for different applications in the same USDIx file, e.g. to see the difference between the Definer and USoft Developer running on the application tables.|
|`-nologin`|Performs a dummy login. This is useful if you do not want to log on to the database, e.g. for test purposes.<br/>			If you specify this option, make sure that the application is read from flat files.|
|`-odbc` |Specifies that the application tables are in an ODBC enabled RDBMS.|
|`-oledb`|Specifies the MS SQL Server database platform.|
|`-oracle`|Specifies the Oracle database platform.|
|`-owner name`|Specifies the database user who is the owner of the application tables at RDBMS level.<br/>			You only need to use this option if this is a different database user from the user that you log on with (identified by -u or -user).|
|<pre><code>-password <br/>or:<br/>-pw </code></pre>|Specifies the RDBMS password. Use this option in combination with -u (username).<br/>			You only need to use these options if you want to log in automatically.|
|`-r value`|Specifies that all SQL statements must be written in the specified file. If the file already exists, the SQL statements will be appended. Use with -d.|
|`-run script-file-path`|Executes the actions that are defined in the script file, and exits the application when the actions are finished.|
|`-title name`|Specifies the text displayed in the window's title bar. The difference with the -name option is that -title ONLY concerns the window's title.|
|<pre><code>-user <br/>or:<br/>-u </code></pre>|Specifies your RDBMS username. Use this option in combination with -pw (password).<br/>			You only need to use these options if you want to log in automatically.|
|`-xrm`  |Specifies a resource.|



 