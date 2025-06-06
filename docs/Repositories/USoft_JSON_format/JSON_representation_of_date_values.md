---
id: JSON_representation_of_date_values
---

# JSON representation of date values

In general, the ISO 8601 standard is used for representing date values within JSON documents. A description of the ISO 8601 standard for dates can be found at:

[http://www.iso.ch/](http://www.iso.ch/)

In the area of exporting and importing JSON documents, USoft supports the following date formats.

## JSON Export IO Format

When exporting date values to an XML document, this IO format is produced:

```
CCYY-MM-DDThh:mm:ss
```

*Example*

```
2008-11-23T20:05:30
```

## JSON Import IO Formats 

When importing a JSON document, the [same date value IO formats are recognised as for XML imports](/docs/Repositories/USoft_XML_formats/XML_representation_of_date_values.md).

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

The Rules Engine only supports '00:00:00' when exporting and importing JSON documents.

## Period of time

Period of time is a duration with a start time and an end time. The Rules Engine does not support the period of time IO format.