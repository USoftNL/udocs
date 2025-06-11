---
id: SQL_functions_IM
---

# SQL functions I-M


:::note

[SQL functions  A - C](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_AC.md)
[SQL functions  D - H](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_DH.md)
SQL functions  I - M
[SQL functions  N - R](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_NR.md)
[SQL functions  S - Z](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_SZ.md)

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
|**IFNULL**|IFNULL  |NVL     |ISNULL  |IFNULL  |COALESCE|
|        |NVL     |NVL     |ISNULL  |IFNULL  |COALESCE|
|**INDEX_COL**|-       |-       |INDEX_COL|-       |-       |
|**INITCAP**|-       |INITCAP |-       |-       |-       |
|**INSERT**|-       |-       |-       |INSERT  |-       |
|**INSTR**|CHARINDEX|[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|CHARINDEX|LOCATE  |[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|
|        |[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|CHARINDEX|LOCATE  |[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|
|**INSTRB**|-       |INSTRB  |-       |-       |INSTRB  |
|**ISINTEGER**|ISINTEGER|ISINTEGER|ISINTEGER|ISINTEGER|ISINTEGER|
|**ISNULL**|IFNULL  |NVL     |ISNULL  |IFNULL  |COALESCE|
|        |NVL     |NVL     |ISNULL  |IFNULL  |COALESCE|
|**ISNUMERIC**|ISNUMERIC|ISNUMERIC|ISNUMERIC|ISNUMERIC|ISNUMERIC|



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**LAST_DAY**|-       |LAST_DAY|-       |-       |LAST_DAY|
|**LCASE**|LOWER   |LOWER   |LOWER   |LCASE   |LOWER   |
|**LEAST**|-       |LEAST   |-       |-       |-       |
|**LEFT**|-       |-       |LEFT    |LEFT    |-       |
|**LEN** |LENGTH  |LENGTH  |[LEN](/Modeller_and_Rules_Engine/SQL_functions/DATALENGTH_LEN.md)|LENGTH  |LENGTH  |
|**LENGTH**|LENGTH  |LENGTH  |[LEN](/Modeller_and_Rules_Engine/SQL_functions/DATALENGTH_LEN.md)|LENGTH  |LENGTH  |
|**LENGTHB**|-       |LENGTHB |-       |-       |LENGTHB |
|**LN**  |LOG     |LN      |LOG     |LOG     |LN      |
|**LOCATE**|LOCATE  |CHARINDEX|[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|LOCATE  |LOCATE  |
|        |[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|[INSTR](/Modeller_and_Rules_Engine/SQL_functions/INSTR.md)|CHARINDEX|LOCATE  |



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**LOG** |LOG     |LN      |LOG     |LOG     |LN      |
|**LOG10**|-       |-       |LOG10   |LOG10   |LOG10   |
|**LOWER**|LOWER   |LOWER   |LOWER   |LCASE   |LOWER   |
|**LPAD**|-       |LPAD    |-       |-       |LPAD    |
|**LTRIM**|LTRIM   |LTRIM   |LTRIM   |LTRIM   |LTRIM   |
|**MAX** |MAX     |MAX     |MAX     |MAX     |MAX     |
|**MIN** |MIN     |MIN     |MIN     |MIN     |MIN     |
|**MINUTE**|-       |-       |-       |MINUTE  |-       |
|**MOD** |MOD     |MOD     |MOD     |MOD     |MOD     |
|**MONTH**|-       |-       |-       |MONTH   |MONTH   |
|**MONTHNAME**|-       |-       |-       |MONTHNAME|-       |
|**MONTHS_			BETWEEN**|-       |MONTHS_<br/>			BETWEEN|-       |-       |MONTHS_<br/>			BETWEEN|