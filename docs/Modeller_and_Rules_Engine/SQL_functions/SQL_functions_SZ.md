---
id: SQL_functions_SZ
---

# SQL functions S-Z

> [!NOTE]
> [SQL functions  A - C](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_AC.md)
> [SQL functions  D - H](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_DH.md)
> [SQL functions  I - M](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_IM.md)
> [SQL functions  N - R](/docs/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_NR.md)
> SQL functions  S - Z

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
|**SECOND**|-       |-       |-       |SECOND  |-       |
|**SESSION_ID**|[SESSION_ID](/docs/Modeller_and_Rules_Engine/SQL_functions/SESSION_ID.md)|[SESSION_ID](/docs/Modeller_and_Rules_Engine/SQL_functions/SESSION_ID.md)|[SESSION_ID](/docs/Modeller_and_Rules_Engine/SQL_functions/SESSION_ID.md)|[SESSION_ID](/docs/Modeller_and_Rules_Engine/SQL_functions/SESSION_ID.md)|[SESSION_ID](/docs/Modeller_and_Rules_Engine/SQL_functions/SESSION_ID.md)|
|**SIGN**|SIGN    |SIGN    |SIGN    |SIGN    |SIGN    |
|**SIN** |SIN     |SIN     |SIN     |SIN     |SIN     |
|**SINH**|-       |-       |-       |-       |SINH    |
|**SOUNDEX**|-       |SOUNDEX |SOUNDEX |SOUNDEX |-       |
|**SPACE**|-       |-       |SPACE   |SPACE   |-       |
|**SQRT**|SQRT    |SQRT    |SQRT    |SQRT    |SQRT    |
|**STDDEV**|STDDEV  |STDDEV  |STDDEV  |STDDEV  |STDDEV  |
|**STR** |-       |-       |STR     |-       |-       |
|**STUFF**|-       |-       |STUFF   |-       |-       |



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBC, Derby**|
|--------|--------|--------|--------|--------|--------|
|**SUBSTR**|[SUBSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|[SUBSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|[SUBSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|[SUBSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|[SUBSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|
|**SUBSTRB**|-       |SUBSTRB |-       |-       |-       |
|**SUBSTRING**|[SUBSTRING](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|[SUBSTRING](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|[SUBSTRING](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|[SUBSTRING](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|[SUBSTR](/docs/Modeller_and_Rules_Engine/SQL_functions/SUBSTR.md)|
|**SUM** |SUM     |SUM     |SUM     |SUM     |SUM     |
|**SUSER_ID**|-       |-       |SUSER_ID|-       |-       |
|**SUSER_NAME**|-       |-       |SUSER_NAME|-       |-       |
|**TAN** |TAN     |TAN     |TAN     |TAN     |TAN     |
|**TANH**|-       |TANH    |-       |-       |-       |
|**TEXTPTR**|-       |-       |TEXTPTR |-       |-       |
|**TEXVALID**|-       |-       |TEXVALID|-       |-       |



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**TIMESTAMPADD**|-       |-       |TIMESTAMPADD|-       |-       |
|**TIMESTAMPDIFF**|-       |-       |TIMESTAMPDIFF|-       |-       |
|<p>**TIMESTAMP_**</p><p>**TO_DATE**</p>|<p>[TIMESTAMP_](/docs/Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE.md)</p><p>[TO_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE.md)</p>|<p>[TIMESTAMP_](/docs/Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE.md)</p><p>[TO_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE.md)</p>|<p>[TIMESTAMP_](/docs/Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE.md)</p><p>[TO_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE.md)</p>|<p>[TIMESTAMP_](/docs/Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE.md)</p><p>[TO_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE.md)</p>|-       |
|**TOP** |[RECORDS](/docs/Modeller_and_Rules_Engine/SQL_functions/RECORDS.md)|[RECORDS](/docs/Modeller_and_Rules_Engine/SQL_functions/RECORDS.md)|[TOP](/docs/Modeller_and_Rules_Engine/SQL_functions/RECORDS.md)|[RECORDS](/docs/Modeller_and_Rules_Engine/SQL_functions/RECORDS.md)|[RECORDS](/docs/Modeller_and_Rules_Engine/SQL_functions/RECORDS.md)|
|**TO_CHAR(datetime)**|[DATE_TO_CHAR](/docs/Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR.md)|TO_CHAR(*datetime*)|CONVERT(*datetime*)|[DATE_TO_CHAR](/docs/Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR.md)|TO_CHARDATE|
|**TO_CHAR(number)**|NUMBERTOCHAR|TO_CHAR(*number*)|CONVERT(*number*)|NUMBERTOCHAR|NUMBERTOCHAR|
|**TO_CHARDATE**|[DATE_TO_CHAR](/docs/Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR.md)|TO_CHAR(*datetime*)|CONVERT(*datetime*)|[DATE_TO_CHAR](/docs/Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR.md)|TO_CHARDATE|
|**TO_CLOB**|[TO_CLOB](/docs/Modeller_and_Rules_Engine/SQL_functions/TO_CLOB.md)|[TO_CLOB](/docs/Modeller_and_Rules_Engine/SQL_functions/TO_CLOB.md)|CONVERT(*text*)|[TO_CLOB](/docs/Modeller_and_Rules_Engine/SQL_functions/TO_CLOB.md)|[TO_CLOB](/docs/Modeller_and_Rules_Engine/SQL_functions/TO_CLOB.md)|
|**TO_DATE**|CHAR_TO_DATE|TO_DATE |CONVERT(*text*)|CAST    |TO_DATE |
|        |TO_DATE |TO_DATE |CONVERT(*text*)|-       |TO_DATE |
|**TO_INTEGER**|TO_INTEGER|TO_NUMBER|CONVERT(*datetime*)|TO_NUMBER|TO_NUMBER|



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**TO_MULTI_BYTE**|-       |TO_MULTI_BYTE|-       |-       |TO_MULTI_BYTE|
|**TO_NCHAR**|TO_NCHAR|TO_NCHAR|TO_NCHAR|TO_NCHAR|TO_NCHAR|
|**TO_NCLOB**|-       |TO_NCLOB|CONVERT(*ntext*)|-       |TO_NCLOB|
|**TO_NUMBER**|TO_INTEGER|TO_NUMBER|CONVERT(*datetime*)|TO_NUMBER|TO_NUMBER|
|**TO_NVARCHARMAX**|-       |-       |TO_NVARCHARMAX|-       |-       |
|**TRANSACTION_DATE**|[TRANSACTION_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TRANSACTION_DATE.md)|[TRANSACTION_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TRANSACTION_DATE.md)|[TRANSACTION_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TRANSACTION_DATE.md)|[TRANSACTION_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TRANSACTION_DATE.md)|[TRANSACTION_DATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TRANSACTION_DATE.md)|
|**TRANSLATE**|-       |TRANSLATE|TRANSLATE|-       |-       |
|**TRUNC**|[TRUNC](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|[TRUNC](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|[ROUND](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|[TRUNCATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|[TRUNC](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|
|**TRUNCATE**|[TRUNC](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|[TRUNC](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|[ROUND](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|[TRUNCATE](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|[TRUNC](/docs/Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE.md)|
|**UCASE**|UPPER   |UPPER   |UPPER   |UCASE   |UPPER   |
|**UID** |-       |UID     |USER_ID |-       |-       |



|**Name**|**USoft**|**Oracle**|**SQLServer**|**ODBC**|**JDBCY, Derby**|
|--------|--------|--------|--------|--------|--------|
|**UPPER**|UPPER   |UPPER   |UPPER   |UCASE   |UPPER   |
|**USER**|USER    |USER    |USER    |USER    |USER    |
|**USERENV**|-       |USERENV |-       |-       |USERENV |
|**USERGROUP**|[USERGROUP](/docs/Modeller_and_Rules_Engine/SQL_functions/USERGROUP.md)|[USERGROUP](/docs/Modeller_and_Rules_Engine/SQL_functions/USERGROUP.md)|[USERGROUP](/docs/Modeller_and_Rules_Engine/SQL_functions/USERGROUP.md)|[USERGROUP](/docs/Modeller_and_Rules_Engine/SQL_functions/USERGROUP.md)|[USERGROUP](/docs/Modeller_and_Rules_Engine/SQL_functions/USERGROUP.md)|
|**USER_ID**|-       |UID     |USER_ID |-       |-       |
|**USER_NAME**|-       |-       |USER_NAME|-       |-       |
|**VARIANCE**|VARIANCE|VARIANCE|VARIANCE|VARIANCE|VARIANCE|
|**VSIZE**|-       |VSIZE   |-       |-       |VSIZE   |
|**WEEK**|-       |-       |-       |WEEK    |-       |
|**YEAR**|YEAR    |YEAR    |YEAR    |YEAR    |YEAR    |