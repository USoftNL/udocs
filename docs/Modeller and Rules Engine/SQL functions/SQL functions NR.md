# SQL functions N-R

> [!NOTE]
> [SQL functions  A - C](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20AC.md)
> [SQL functions  D - H](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20DH.md)
> [SQL functions  I - M](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20IM.md)
> SQL functions  N - R
> [SQL functions  S - Z](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20SZ.md)

 

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
|**NEW_TIME**|-       |NEW_TIME|-       |-       |NEW_TIME|
|**NEXT_DAY**|-       |NEXT_DAY|-       |-       |NEXT_DAY|
|**NLSSORT**|-       |NLSSORT |-       |-       |-       |
|**NLS_INITCAP**|-       |NLS_INITCAP|-       |-       |-       |
|**NLS_LOWER**|-       |NLS_LOWER|-       |-       |NLS_LOWER|
|**NLS_UPPER**|-       |NLS_UPPER|-       |-       |NLS_UPPER|
|**NOW** |[CURRENT_DATE](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/CURRENT_DATE.md)|SYSDATE |GETDATE |NOW     |SYSDATE |
|**NULLVAL_CHAR**|-       |-       |-       |NULLVAL_CHAR|-       |
|**NULLVAL_INT**|-       |-       |-       |NULLVAL_INT|-       |
|**NUMBERTOCHAR**|NUMBERTOCHAR|TO_CHAR(*number*)|CONVERT(*number*)|NUMBERTOCHAR|NUMBERTOCHAR|
|**NVL** |IFNULL  |NVL     |ISNULL  |IFNULL  |COALESCE|
|        |NVL     |NVL     |ISNULL  |IFNULL  |COALESCE|



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**OBJECT_ID**|-       |-       |OBJECT_ID|-       |-       |
|**OBJECT_NAME**|-       |-       |OBJECT_NAME|-       |-       |
|**OLD** |[OLD](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/OLD.md)|[OLD](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/OLD.md)|[OLD](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/OLD.md)|[OLD](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/OLD.md)|[OLD](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/OLD.md)|
|**PATINDEX**|-       |-       |PATINDEX|-       |-       |
|**PI**  |-       |-       |PI      |PI      |PI      |
|**POWER**|POWER   |POWER   |POWER   |POWER   |POWER   |
|**QUARTER**|-       |-       |-       |QUARTER |-       |
|**RADIANS**|-       |-       |RADIANS |RADIANS |RADIANS |
|**RAND**|-       |-       |RAND    |RAND    |RAND    |
|**RAWTOHEX**|-       |RAWTOHEX|-       |-       |RAWTOHEX|



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**RDBMSTYPE**|RDBMSTYPE|RDBMSTYPE|RDBMSTYPE|RDBMSTYPE|RDBMSTYPE|
|**RECORDS**|[RECORDS](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/RECORDS.md)|[RECORDS](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/RECORDS.md)|[RECORDS](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/RECORDS.md)|[RECORDS](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/RECORDS.md)|[RECORDS](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/RECORDS.md)|
|**REGEXP_INSTR**|-       |REGEXP_INSTR|-       |-       |REGEXP_INSTR|
|**REGEXP_REPLACE**|-       |REGEXP_REPLACE|-       |-       |REGEXP_REPLACE|
|**REGEXP_SUBSTR**|-       |REGEXP_SUBSTR|-       |-       |REGEXP_SUBSTR|
|**REPEAT**|-       |-       |-       |REPEAT  |-       |
|**REPLACE**|REPLACE |REPLACE |REPLACE |REPLACE |REPLACE |
|**REPLICATE**|-       |-       |REPLICATE|-       |-       |
|**REVERSE**|-       |-       |REVERSE |-       |-       |
|**RIGHT**|-       |-       |RIGHT   |RIGHT   |-       |
|**ROLE**|[ROLE](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/ROLE.md)|[ROLE](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/ROLE.md)|[ROLE](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/ROLE.md)|[ROLE](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/ROLE.md)|[ROLE](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/ROLE.md)|
|**ROUND**|ROUND   |ROUND   |ROUND   |ROUND   |ROUND   |
|        |[TRUNC](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/TRUNC%20TRUNCATE.md)|[TRUNC](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/TRUNC%20TRUNCATE.md)|[ROUND](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/TRUNC%20TRUNCATE.md)|[TRUNCATE](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/TRUNC%20TRUNCATE.md)|[TRUNC](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/TRUNC%20TRUNCATE.md)|
|**ROWIDTOCHAR**|-       |ROWIDTOCHAR|-       |-       |ROWIDTOCHAR|
|**ROWNUM**|ROWNUM  |ROWNUM  |ROWNUM  |-       |ROWNUM  |
|**RPAD**|-       |RPAD    |-       |-       |RPAD    |
|**RTRIM**|RTRIM   |RTRIM   |RTRIM   |RTRIM   |RTRIM   |