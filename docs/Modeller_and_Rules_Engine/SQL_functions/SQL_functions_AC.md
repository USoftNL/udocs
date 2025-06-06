---
id: SQL_functions_AC
---

# SQL functions A-C


:::note

SQL functions  A - C
[SQL functions  D - H](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_DH.md)
[SQL functions  I - M](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_IM.md)
[SQL functions  N - R](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_NR.md)
[SQL functions  S - Z](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_SZ.md)

:::

 


:::tip

Check out how to read this article by clicking the “Show content” link.
**I have a SQL function in mind. Can I use it in my USoft application?**

:::
Find the function in the alphabetic list. Look in the column for your database platform. If there is a dash in that cell, or if the function is not in the list at all, then the function is not supported.
> Otherwise, have a look also in the USoft column (the second column from the left):
> There may be special details or restrictions. Consult your RDBMS documentation. In some places, function names are hyperlinked to additional information supplied by USoft.
> To get more detail on how USoft converts a function, and whether or not it is sent to the RDBMS for evaluation, run a profile in USoft Benchmark.
> **Special cases**
The table refers to ROWNUM, SYSDATE and USER even though these are technically pseudo-columns rather than functions. Pseudo-columns are like function calls without arguments. They are different from functions in that the call syntax does not use empty parentheses.
The table refers to TOP and RECORDS even though these are technically in-line operators and not functions. Rather than taking their input from arguments passed between parentheses, TOP and RECORDS operate on a query result, in a way similar to DISTINCT, GROUP BY, or ORDER BY.

|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**ABS** |ABS     |ABS     |ABS     |ABS     |ABS     |
|**ACOS**|ACOS    |ACOS    |ACOS    |ACOS    |ACOS    |
|**ADD_DAYS**|[ADD_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/ADD_DAYS.md)|[ADD_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/ADD_DAYS.md)|[ADD_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/ADD_DAYS.md)|[ADD_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/ADD_DAYS.md)|[ADD_DAYS](/docs/Modeller_and_Rules_Engine/SQL_functions/ADD_DAYS.md)|
|**ADD_MONTHS**|-       |ADD_MONTHS|-       |-       |ADD_MONTHS|
|**ADD_YEARS**|-       |-       |-       |-       |ADD_YEARS|
|**ASCII**|ASCII   |ASCII   |ASCII   |ASCII   |ASCII   |
|**ASIN**|ASIN    |ASIN    |ASIN    |ASIN    |ASIN    |
|**ATAN**|ATAN    |ATAN    |ATAN    |ATAN    |ATAN    |
|**ATAN2**|ATAN2   |ATAN2   |ATAN2   |ATAN2   |ATAN2   |
|**AVG** |AVG     |AVG     |AVG     |AVG     |AVG     |



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**CASE**|[DECODE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|[DECODE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|[CASE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|[CASE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|[CASE](/docs/Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE.md)|
|**CAST**|[CAST](/docs/Modeller_and_Rules_Engine/SQL_functions/CAST.md)|[CAST](/docs/Modeller_and_Rules_Engine/SQL_functions/CAST.md)|[CAST](/docs/Modeller_and_Rules_Engine/SQL_functions/CAST.md)|[CAST](/docs/Modeller_and_Rules_Engine/SQL_functions/CAST.md)|[CAST](/docs/Modeller_and_Rules_Engine/SQL_functions/CAST.md)|
|        |CHAR_TO_DATE|TO_DATE |CONVERT(*datetime*)|CAST    |TO_DATE |
|**CEIL**|CEIL    |CEIL    |CEILING |CEILING |CEIL    |
|        |CEILING |CEIL    |CEILING |CEILING |CEILING |
|**CEILING**|CEIL    |CEIL    |CEILING |CEILING |CEIL    |
|        |CEILING |CEIL    |CEILING |CEILING |CEILING |
|**CHAR**|CHAR    |CHAR    |CHAR    |CHAR    |CHAR    |
|**CHARINDEX**|CHARINDEX|[INSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|CHARINDEX|LOCATE  |[INSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|
|        |[INSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|[INSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|CHARINDEX|LOCATE  |[INSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|
|**CHARTOROWID**|-       |CHARTOROWID|-       |-       |-       |
|**CHAR_TO_DATE**|CHAR_TO_DATE|TO_DATE |CONVERT(*datetime*)|CAST    |TO_DATE |



 

|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**CHR** |-       |CHR     |-       |-       |CHR     |
|**COALESCE**|IFNULL  |NVL     |ISNULL  |ISNULL  |COALESCE|
|        |NVL     |NVL     |ISNULL  |ISNULL  |COALESCE|
|**COL_LENGTH**|-       |-       |COL_LENGTH|-       |-       |
|**COL_NAME**|-       |-       |COL_NAME|-       |-       |
|**CONCAT**|[CONCAT or \|\|](/docs/Modeller_and_Rules_Engine/SQL_functions/CONCAT.md)|[CONCAT or \|\|](/docs/Modeller_and_Rules_Engine/SQL_functions/CONCAT.md)|[CONCAT or \|\| or +](/docs/Modeller_and_Rules_Engine/SQL_functions/CONCAT.md)|[CONCAT or +](/docs/Modeller_and_Rules_Engine/SQL_functions/CONCAT.md)|[CONCAT or \|\|](/docs/Modeller_and_Rules_Engine/SQL_functions/CONCAT.md)|
|**CONVERT(datetime)**|[DATE_TO_CHAR](/docs/Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR.md)|TO_CHAR(*datetime*)|CONVERT(*datetime*)|[DATE_TO_CHAR](/docs/Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR.md)|TO_CHARDATE|
|        |TO_INTEGER|TO_NUMBER|CONVERT(*datetime*)|TO_NUMBER|TO_NUMBER|
|**CONVERT(integer)**|-       |TO_NUMBER|CONVERT(*integer*)|CONVERT |TO_NUMBER|
|**CONVERT(ntext)**|-       |TO_NCLOB|CONVERT(*ntext*)|-       |TO_NCLOB|
|**CONVERT(number)**|NUMBERTOCHAR|TO_CHAR(*number*)|CONVERT(*number*)|NUMBERTOCHAR|NUMBERTOCHAR|
|**CONVERT(text)**|CHAR_TO_DATE|TO_DATE |CONVERT(*text*)|CAST    |TO_DATE |
|        |[TO_CLOB](/docs/Modeller_and_Rules_Engine/SQL_functions/TO_CLOB.md)|[TO_CLOB](/docs/Modeller_and_Rules_Engine/SQL_functions/TO_CLOB.md)|CONVERT(*text*)|[TO_CLOB](/docs/Modeller_and_Rules_Engine/SQL_functions/TO_CLOB.md)|[TO_CLOB](/docs/Modeller_and_Rules_Engine/SQL_functions/TO_CLOB.md)|



 

|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**COS** |COS     |COS     |COS     |COS     |-       |
|**COSH**|-       |COSH    |-       |-       |COSH    |
|**COT** |-       |-       |COT     |COT     |COT     |
|**COUNT**|COUNT   |COUNT   |COUNT   |COUNT   |COUNT   |
|**CURDATE**|-       |-       |-       |CURDATE |-       |
|**CURRENT_DATE**|[CURRENT_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/CURRENT_DATE.md)|SYSDATE |GETDATE |NOW     |SYSDATE |
|**CURRENT_TIMESTAMP**|-       |-       |-       |CURTIME |CURRENT_TIMESTAMP|
|**CURTIME**|-       |-       |-       |CURTIME |CURRENT_TIMESTAMP|