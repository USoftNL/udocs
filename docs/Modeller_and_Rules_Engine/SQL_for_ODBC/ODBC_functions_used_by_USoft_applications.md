---
id: ODBC_functions_used_by_USoft_applications
---

# ODBC functions used by USoft applications

## ODBC Core functions

The following ODBC core functions are used by USoft applications.

- SQLAllocConnect
- SQLAllocEnv
- SQLAllocStmt
- SQLBindCol
- SQLConnect
- SQLDisconnect
- SQLError
- SQLExecDirect
- SQLExecute
- SQLFetch
- SQLFreeConnect
- SQLFreeEnv
- SQLFreeStmt
- SQLPrepare
- SQLSetParam
- SQLTransact

## ODBC Level-1 function calls

The following ODBC Level-1 function calls are made by USoft applications.

- SQLGetConnectOption (SQL_AUTOCOMMIT)
- SQLSetConnectOption (SQL_AUTOCOMMIT, Off)

### When available

The following ODBC Level-1 function calls are made by USoft applications if these functions are available.

- SQLDriverConnect
- SQLSetConnectOption(SQL_LOGIN_TIMEOUT)

### When creating tables

The following ODBC Level-1 function calls are made by USoft applications only at the time of creating tables (either from the USoft Definer tool or by calling CREAPP from a different context).

- SQLColumns
- SQLGetFunctions
- SQLGetInfo
- SQLGetTypeInfo
- SQLTables

## Scalar functions

The following ODBC scalar functions are used by USoft applications:

- CONCAT( *str1, str2* )
- IFNULL()
- LOCATE( *str1, str2, expr* )
- NOW()
- UCASE( *str* )