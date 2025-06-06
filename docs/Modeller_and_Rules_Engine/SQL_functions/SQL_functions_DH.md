---
id: SQL_functions_DH
---

# SQL functions D-H

> [!NOTE]
> [SQL functions  A - C](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_AC.md)
> SQL functions  D - H
> [SQL functions  I - M](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_IM.md)
> [SQL functions  N - R](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_NR.md)
> [SQL functions  S - Z](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_SZ.md)

 

> [!TIP]
> Check out how to read this article by clicking the “Show content” link.
> **I have a SQL function in mind. Can I use it in my USoft application?** 
Find the function in the alphabetic list. Look in the column for your database platform. If there is a dash in that cell, or if the function is not in the list at all, then the function is not supported.
> Otherwise, have a look also in the USoft column (the second column from the left):
> There may be special details or restrictions. Consult your RDBMS documentation. In some places, function names are hyperlinked to additional information supplied by USoft.
> To get more detail on how USoft converts a function, and whether or not it is sent to the RDBMS for evaluation, run a profile in USoft Benchmark.
> **Special cases**
The table refers to ROWNUM, SYSDATE and USER even though these are technically pseudo-columns rather than functions. Pseudo-columns are like function calls without arguments. They are different from functions in that the call syntax does not use empty parentheses.
The table refers to TOP and RECORDS even though these are technically in-line operators and not functions. Rather than taking their input from arguments passed between parentheses, TOP and RECORDS operate on a query result, in a way similar to DISTINCT, GROUP BY, or ORDER BY.

|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**DATABASE**|-       |-       |-       |DATABASE|-       |
|**DATALENGTH**|-       |-       |[DATALENGTH](/docs/Modeller_and_Rules_Engine/SQL_functions/DATALENGTH_LEN.md)|-       |-       |
|**DATEDIFF**|[DATEDIFF_IN_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS.md)|[DATEDIFF_IN_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS.md)|DATEDIFF|[DATEDIFF_IN_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS.md)|[DATEDIFF_IN_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS.md)|
|**DATEDIFF_IN_DAYS**|[DATEDIFF_IN_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS.md)|[DATEDIFF_IN_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS.md)|DATEDIFF|[DATEDIFF_IN_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS.md)|[DATEDIFF_IN_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS.md)|
|**DATEADD**|-       |-       |DATEADD |-       |DATEADD |
|**DATENAME**|-       |-       |DATENAME|-       |-       |
|**DATEPART**|-       |-       |DATEPART|-       |-       |
|**DATE_TO_CHAR**|[DATE_TO_CHAR](/docs/Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR.md)|TO_CHAR(*datetime*)|CONVERT(*datetime*)|[DATE_TO_CHAR](/docs/Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR.md)|TO_CHARDATE|
|**DB_ID**|-       |-       |DB_ID   |-       |-       |
|**DB_NAME**|-       |-       |DB_NAME |-       |-       |



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**DAYNAME**|-       |-       |-       |DAYNAME |-       |
|**DAYOFMONTH**|-       |-       |-       |DAYOFMONTH|-       |
|**DAYOFWEEK**|-       |-       |-       |DAYOFWEEK|-       |
|**DAYOFYEAR**|-       |-       |-       |DAYOFYEAR|-       |
|**DECODE**|[DECODE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|[DECODE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|[CASE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|[CASE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|[CASE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|
|**DEGREES**|-       |DEGREES |-       |DEGREES |DEGREES |
|**DIFFERENCE**|-       |-       |DIFFERENCE|DIFFERENCE|-       |
|**DUMP**|        |DUMP    |-       |-       |-       |
|**ELAPSEDQUERY			TRANSACTIONTIME**|[ELAPSEDQUERY			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDQUERYTRANSACTIONTIME.md)|[ELAPSEDQUERY			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDQUERYTRANSACTIONTIME.md)|[ELAPSEDQUERY			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDQUERYTRANSACTIONTIME.md)|[ELAPSEDQUERY			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDQUERYTRANSACTIONTIME.md)|[ELAPSEDQUERY			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDQUERYTRANSACTIONTIME.md)|
|**ELAPSED			TRANSACTIONTIME**|[ELAPSED			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDTRANSACTIONTIME.md)|[ELAPSED			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDTRANSACTIONTIME.md)|[ELAPSED			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDTRANSACTIONTIME.md)|[ELAPSED			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDTRANSACTIONTIME.md)|[ELAPSED			TRANSACTIONTIME](/docs/Modeller_and_Rules_Engine/SQL_functions/ELAPSEDTRANSACTIONTIME.md)E|



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**EXP** |EXP     |EXP     |EXP     |EXP     |EXP     |
|**FLOOR**|FLOOR   |FLOOR   |FLOOR   |FLOOR   |FLOOR   |
|**GETDATE**|[CURRENT_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/CURRENT_DATE.md)|SYSDATE |GETDATE |NOW     |SYSDATE |
|**GREATEST**|-       |GREATEST|-       |-       |-       |
|**GUID**|[GUID](/docs/Modeller_and_Rules_Engine/SQL_functions/GUID.md)|[GUID](/docs/Modeller_and_Rules_Engine/SQL_functions/GUID.md)|[GUID](/docs/Modeller_and_Rules_Engine/SQL_functions/GUID.md)|[GUID](/docs/Modeller_and_Rules_Engine/SQL_functions/GUID.md)|[GUID](/docs/Modeller_and_Rules_Engine/SQL_functions/GUID.md)|
|**HEXTORAW**|-       |HEXTORAW|-       |-       |-       |
|**HEXTOROWID**|-       |HEXTOROWID|-       |-       |-       |
|**HOST_ID**|-       |-       |HOST_ID |-       |-       |
|**HOST_NAME**|-       |-       |HOST_NAME|-       |-       |
|**HOUR**|-       |-       |-       |HOUR    |-       |