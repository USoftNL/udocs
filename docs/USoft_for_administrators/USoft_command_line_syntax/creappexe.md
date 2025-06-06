---
id: creappexe
---

# creapp.exe

Creates or re-creates database tables for a USoft application, or for a user application built with USoft.

The table below lists the command line options available for use with the creapp.exe command.

|**Option**|**Purpose**|
|--------|--------|
|`-A`    |Starts the Authorizer.|
|`-D`<p> </p>|Starts the Definer. Works only in combination with the -ddfile option, because the repository of USoft Developer itself is only presented in a file.|
|`-app name`|Creates tables for the application named by *name*. USoft Developer will read table definitions from the **name.CON** file, except when reading from repository.|
|`-database name`|<p>Specifies which database is to be used. Use **oracle** for Oracle, **oledb** for SQL Server, **odbc** for ODBC.</p><p>This parameter is mandatory for SQL Server (OLEDB) and for ODBC, and optional for Oracle, but USoft recommends you specify this parameter also for each Oracle connection.</p>|
|`-ddfile`|Reads table definitions from flat files instead of from your RDBMS. If you use this option, you must use the -app option to let USoft Developer know which files to look for.|
|`-ddodbc`|Reads table definitions from an ODBC-enabled RDBMS.|
|`-ddoracle`|Reads table definitions from the Oracle RDBMS.|
|`-ddowner name`|Specifies that the repository tables are stored in a different database account than the application tables.<br/>			To be used in combination with the -app option if you are NOT using the -ddfile option.<br/>			You only need this option if you have repository tables and application tables in different accounts.<br/>			This corresponds to the "[Separate Properties for Repository and Application](/docs/USoft%20for%20administrators/USoft%20Binder/USoft%20Binder%20for%20administrators.md)" option of USoft Binder.|
|`-droptables`|Specifies that existing database tables (if any) must be dropped.|
|`-job`  |Specifies a USoft Batch job that is to be run after the database tables have been created. Use this to populate the freshly created tables with data that are defined at development time.|
|`-odbc` |Specifies that the application tables are in an ODBC enabled RDBMS.|
|`-oledb`|Specifies the MS SQL Server database platform.|
|`-oracle`|Specifies the Oracle database platform.|
|`-owner name`|Specifies the database user who is the owner of the application tables at RDBMS level.<br/>			You only need to use this option if this is a different database user from the user that you log on with (identified by -u or -user).|
|<pre><code>-password <br/>or:<br/>-pw </code></pre>|Specifies the RDBMS password. Use this option in combination with -u (username).<br/>			You only need to use these options if you want to log in automatically.|
|`-silent`|Do not display the message that the create-tables routine executed successfully.|
|`-stdio`|Specifies that the output must be sent to the command line console and not to an interactive message window. Allows a parent process to read the output stream.|
|`-upgrade`|Creates only new tables.|
|<pre><code>-user <br/>or:<br/>-u </code></pre>|Specifies your RDBMS username. Use this option in combination with -pw (password).<br/>			You only need to use these options if you want to log in automatically.|
|`-validate`|Validates the job specified by -job, but does not execute the job.|
|`-xrm`  |Specifies a resource.|



 