---
id: IO_formats
---

# IO formats

**IO formats**, or format masks, allow you to specify how values of a domain must be presented in the screen, and in what format users are allowed to enter new values.

## Alphanumeric IO Format Characters

|**Character**|**Purpose**|
|--------|--------|
|`X`     |<p>Indicates an alphanumeric character.</p><p>Excludes: "/\\^ ~ @ & \| -( ) [ ] { } * ? = + . , ; : '</p>|
|`A`     |Indicates a letter (A-Z, a-z).|
|`9`     |Indicates a digit. The number of digits entered by the end-user must actually match the number of 9s in the mask. For example, if the IO format is "999", the end-user must type in three digits.|
|`(n)`   |<p>Indicates that the preceding character is repeated N times. For example, a zip code mask with five digits can be written as:</p>`9(5)`<p> </p>|



## Numeric IO Format Characters

|**Character**|**Purpose**|
|--------|--------|
|`.`     |Indicates a decimal point. The number of 9s after the decimal point indicates the precision. See the note below.|
|`,`     |Indicates a comma used as numeric separator (e.g. in amounts of money). See the note below.|
|`/`     |Indicates a slash.|
|`9`     |<p>Indicates a digit. For example,</p><p>- If the IO format is 999, and the value 2.2, the display is 002.<br/>- If the IO format is 9.99, and the value 2.2, the display is 2.20.<br/></p>|
|`B`     |Indicates a blank.|
|`Z`     |Indicates that leading zeroes must not be displayed on the positions of digits. For example, ZZZZ9.99 displays 1.25 instead of 00001.25 (the leading zeroes are replaced by blanks).|
|`$``£``€`|Used instead of leading 9s, these characters indicate where the currency sign is to be displayed. First, the 9s and currency signs are used to determine the positions of the digits to be displayed. Then, the rightmost unused $, £ or € character determines the position of the currency sign. For example, $$$$999 displays a value of 2222 as $2222|
|`+``-`  |<p>Used instead of leading 9s, these characters indicate where the plus or minus sign is to be displayed. First, the 9s and plus or minus signs are used to determine the positions of the digits to be displayed. Then, the rightmost unused + or – character determines the position of the plus or minus sign. For example, ++++999 displays a value of 2222 as +2222.</p><p>If you use minus signs, the minus is not displayed when the value is positive.</p>|
|`(n)`<p> </p>|<p>Indicates that the preceding character is repeated N times. For example, an amount of money with 8 visible positions in front of the decimal separator and 2 visible decimals can be written as:</p>`Z(8).99`<p> </p>|



## Date IO Format Characters

|**Character**|**Purpose**|
|--------|--------|
|`CC, or SCC`|Current Century ("S" prefixes a BC date with "-")|
|`YYYY, or SYYYY`|Year ("S" prefixes a BC date with "-")|
|`YYY, YY, or Y`|Last 3, 2, or 1 digit(s) of the year|
|`CCYY`  |<p>This element does almost the same as YYYY. The difference is that when CCYY is used and only part of the year is given as input the rest of the date is defaulted to the last millennium, century or decade.</p><p>For example; when using the CCYY IO-Format, in 1999, the input 99 will result in: 1999. When using the YYYY IO-format the result would have been: 0099<br/>			Note that this differs from the Oracle-meaning of CC (Current Century). In Oracle, the statement:</p><p>`SELECT TO_CHAR(sysdate,'CC') FROM DUAL`</p><p>will, in 1999, result in: 20</p><p>The CCYY element cannot be used in combination with one of the following format elements: BC, AD, B.C., A.D., AM, PM, A.M., P.M., SSSSS FM, TH, SP<br/>			(These format elements are supported on Oracle only).</p>|
|`RR`    |(Oracle only.) RR replaces YY. When you specify a date format of DD-MON-RR, upon entering data, Oracle will store the value as either 19YY or 20YY depending on the value entered.<br/>			If the last two digits of system date are between 0-49 and the specified year you enter is between 0-49, the returned value stored in the database is for the current century. If the specified date is from 50-99, then the return date is the century before the current one.<br/>			If the last two digits of the system date are from 50-99 and the specified two-digit year is between 0-49, then the return date is the century after the current one, and if the specified date is between 50-99, the return date is for the current century.|
|`Q`     |Quarter of the year (possible values: 1-4; January- March is 1)|
|`MM`    |Month (possible values: 01-12; January is 01)|
|`MONTH` |Name of the month (padded with blanks to a length of nine characters)|
|`MON`   |3-letter abbreviation of month|
|`WW`    |Week of year (possible values: 1-53; the week numbering method depends upon the standard used by the underlying RDBMS. In the case of the commonly used ISO or ANSI standards, week 1 is the first week which includes at least four days in the new year)|
|`W`     |Week of month (possible values: 1-5; week 1 includes the first day of the month)|
|`DDD`   |Day of year (possible values: 1-366)|
|`DD`    |Day of month (possible values: 1-31)|
|`D`     |Day of week (possible values: 1-7, where 1 is Monday, 7 is Sunday)|
|`DAY`   |Name of day (padded with blanks to a length of nine characters)|
|`DY`    |3-letter abbreviation of day (MON, etc.)|
|`J`     |Julian day (number of days since January 1, 4712 BC)|
|`AM, or: PM`|Meridian indicator|
|`HH, or: HH12`|Hours of day (possible values: 1-12)|
|`HH24`  |Hours of day (possible values: 0-23)|
|`MI`    |Minutes (possible values: 0-59)|
|`SS`    |Seconds (possible values: 0-59)|
|`MMM`   |Milliseconds (possible values: 000-999)|
|`/ . , .`|Specified punctuation is included in the result (see NOTE 1)|
|`"..."` |String to be included in the result|
|`$$SHORTDATE$$`|See NOTE 2|
|`$$LONGDATE$$`|See NOTE 2|




:::note

NOTE 1: When using a date input format such as DD-MON-YYYY on Oracle, input with different punctuation than specified is also accepted, e.g. "01.JAN.1999" or "01/JAN/1999".

:::


:::note

NOTE 2: For DATE fields, instead of specifying a fixed IO format on domain (or Windows Designer) level, you can make the representation format conform to the specification in your operating system environment. This environment usually contains both a short and a long date format.

:::

You can choose between them by specifying $$SHORTDATE$$ or $$LONGDATE as domain IO format.

If you use this IO format, it is also advisable to use the ConvertAlternativeFormat method, or specify an Alternative Input Format, to enable users to enter dates in formats other than the one used for representation. Especially if you use $$LONGDATE$$ which usually includes a spelled week day.

You can adapt the DATE formats in the system environment via the Control Panel/Regional Settings.

## Other IO Format Characters

|**Character**|**Purpose**|
|--------|--------|
|`XML`   |Indicates that XML documents must be received or returned.|



 