# USoft for Oracle

Oracle versions 10 and later are currently supported by USoft Developer. Oracle 9 is supported with limitations.

## Supported Data Types

The following data types are supported for Oracle:

 

|        |        |        |
|--------|--------|--------|
|BLOB    |CHAR    |CLOB    |
|DATE    |LONG    |LONG RAW|
|NUMBER  |RAW     |VARCHAR2|



 

The LONG and LONG RAW data types are still supported by USoft and Oracle for backward compatibility, but will eventually disappear.

## Unsupported Data Types

Oracle user-defined data types are not supported in USoft .

## Supported SQL Constants

The following SQL constants are supported for Oracle:

 

|        |        |        |
|--------|--------|--------|
|CURRENT_USER|DATABASE|DBA     |
|INITIAL_USER|LANGUAGE|SYSTEM_USER|
|TERMINAL|USERNAME|        |



##  

## Oracle Optimization Hints

Oracle SQL hints that are used in a SELECT statement are passed through to the RDBMS. An Oracle SQL hint has the following form:

```
SELECT /*+ hint */ ...
```

Where *hint* is a hint for the Oracle RDBMS. Refer to your Oracle documentation for details.

The Rules Engine does not interpret these comments. Take in mind that the Rules Engine can change SQL statements for optimization reasons. When making these changes, the Oracle SQL hints are not taken into consideration. Therefore, the hints may not fit the resulting SQL statement.

## Oracle Messages

The "orawarnings.ust" file in USoft's \\app folder (app-defaults directory on UNIX) contains error messages that are to be ignored, and warning messages that are to be displayed.

- To suppress an Oracle Error message, add the error number to the orawarnings.ust file.
- To make sure that a warning message is displayed, add the code for that message to the orawarnings.ust file.
- If the orawarnings.ust file exists but is empty, all warnings are ignored, but all error messages are displayed.

For example, to ensure that the message: 'ORA-28002: the password will expire within \<X> days’ is displayed, add the message number 28002 to the "orawarnings.ust" file. Note that only the number should be used, not the 'ORA-' part.

## Character Set Conversion

When the character set on the client is different from the database server, for example when the client uses WE8ISO8859P1 and the server uses WE8MSWIN1252, Oracle performs a character set conversion. Characters that do not exist in one of the sets will be converted to a ¿ (ASCII value 191) in the database. This might be the case for the Euro sign (ASCII value 128) and several other characters.

You can overrule a client character setting by using the environmentSet resource. To set the client character set to WE8MSWIN1252 add the following resource setting to the Application Properties in the USoft Binder:

```
-xrm *environmentSet:NLS_LANG=AMERICAN_AMERICA.WE8MSWIN1252
```

This resource setting can be used to change any environment setting for the client. The syntax is:

```
-xrm *environmentSet:par1=value1;par2=value2;...
```