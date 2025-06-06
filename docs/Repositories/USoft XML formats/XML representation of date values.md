# XML representation of date values

In general, the ISO 8601 standard is used for representing date values within XML documents. A description of the ISO 8601 standard for dates can be found at:

[http://www.iso.ch/](http://www.iso.ch/)

In the area of exporting and importing XML documents, USoft supports the following date formats.

## XML Export IO Format

When exporting date values to an XML document, this IO format is produced:

```
CCYY-MM-DDThh:mm:ss
```

*Example*

```
2008-11-23T20:05:30
```

## XML Import IO Formats 

When importing an XML document, these date value IO formats are recognised:

|**Format**|**Example**|**Description**|
|--------|--------|--------|
|YYMMDD  |850412  |A specific date in the current century|
|YY-MM-DD|85-04-12|Extended format|
|-YYMM   |-8504   |A specific year and month in the current century|
|-YY-MM  |-85-04  |Extended format|
|-YY     |-85     |A specific year in the current century|
|--MMDD  |--0412  |A specific day of a month|
|--MM-DD |--04-12 |Extended format|
|--MM    |--04    |A specific month|
|---DD   |---12   |A specific day|
|CCYYMMDD|19850412|        |
|CCYY-MM-DD|1985-04-12|        |
|CCYYMM  |198504  |        |
|CCYY-MM |1985-04 |        |
|CCYY    |1985    |        |
|YYWwwD  |85W155  |Year, week and day in the current century|
|YY-Www-D|85-W15-5|Extended format|
|YYWww   |85W15   |Year and week only in the current century|
|YY-Www  |85-W15  |Extended format|
|-YwwwD  |-5W155  |Year of the current decade, week and day only|
|-Y-Www-D|-5W15-5 |Extended format|
|-WwwD   |-W155   |Week and day only of the current year|
|-Www-D  |-W15-5  |Extended format|
|-Www    |-W15    |Week only of the current year|
|-W-D    |-W-5    |Day only of the current week|
|---D    |---5    |Day only of any week|
|-mm:ss  |-20:50  |<p>A specific minute and second of the hour</p><p>(Extended format)</p>|
|CCYYMMDDThhmmss|19850412T101530|Calendar date and local time of the day|
|CCYYMMDDThhmm|19850412T1015|        |
|CCYYMMDDThh|19850412T10|        |
|        |1985-04-12T10:15:30|Extended format|
|CCYY-MM-DDThh:mm|1985-04-12T10:15|        |
|CCYY-MM-DDThh|1985-04-12T10|        |
|CCYYDDDThhmmss|1985102T235030|Ordinal date and local time of the day|
|CCYYDDDThhmm|1985102T2350|        |
|CCYYDDDThh|1985102T23|        |
|        |1985-102T23:50:30|Extended format|
|CCYY-DDDThh:mm|1985-102T23:50|        |
|CCYY-DDDThh|1985-102T23|        |
|CCYYWwwDThhmmss|1985W155T235030|Date indentified by calendar week and day numbers and local time of the day|
|CCYYWwwDThhmm|1985W155T2350|        |
|CCYYWwwDThh|1985W155T23|        |
|        |1985-W15-5T23:50:30|Extended format|
|CCYY-Www-DThh:mm|1985-W15-5T23:50|        |
|CCYY-Www-DThh|1985-W15-5T23|        |



## Unsupported date formats

The following data value IO formats are not supported:

|**Format**|**Example**|**Description**|
|--------|--------|--------|
|hh,h    |23,3    |A specific hour of the day and decimal fraction of the hour|
|-mm,m   |-20,9   |A specific minute of the hour and a decimal fraction of the minute|
|-mmss,s |-2050,5 |A specific minute and second of the hour and a decimal fraction of the second|
|-mm:ss.s|-20:50,5|Extended format|
|--ss,s  |--50,5  |A specific second of the minute and a decimal fraction of the second|
|HhmmssZ |232030Z |Time with Coordinated Universal Time (UTC)|
|        |23:20:30Z|Extended format|
|HhmmZ   |2320Z   |        |
|hh:mmZ  |23:20Z  |        |
|HhZ     |23Z     |        |



## Midnight time

There are two representations of midnight time:

```
00:00:00 000000

24:00:00 240000
```

The Rules Engine only supports '00:00:00' when exporting and importing XML documents.

## Period of time

Period of time is a duration with a start time and an end time. The Rules Engine does not support the period of time IO format.