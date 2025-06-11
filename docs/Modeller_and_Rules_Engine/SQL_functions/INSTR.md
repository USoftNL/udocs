---
id: INSTR
---

# INSTR




:::note

This article has additional information about the **INSTR** SQL function.
For convertibility of this function, go to [SQL functions  I - M](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_IM.md).

:::

## **INSTR**

INSTR is a native SQL function on Oracle and JDBC.

INSTR is a convertible function for USoft on SQL Server. However, when USoft converts INSTR for SQL Server, if the number of arguments is higher than 2, only the first 2 arguments are passed.


:::tip

The mechanism whereby you can pass an argument to look for the *nth* occurrence (rather than the *first* occurrence) of the substring in the containing string, is not available on SQL Server.

:::
