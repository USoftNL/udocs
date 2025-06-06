---
id: USFormatCharToDate
---

# USFormat.CharToDate



> [!NOTE]
> This article is about the **CharToDate** method of the [USFormat internal component](/docs/Extensions/USFormat_internal_component).

## **USFormat.CharToDate**

Converts a character string to a date.

Returns the result of the conversion as a date.

*Syntax*

```sql
SELECT USFormat.CharToDate(
    *string*
,   *date-format-pattern*
)
```

Both *string* and *date-format-pattern* are required. *Date-format-pattern* must be one of the [USoft IO formats](/docs/Modeller_and_Rules_Engine/Domains/IO_formats.md) for date values.

*Example*

```sql
SELECT USFormat.CharToDate(
         '12-MAR-2019'
,        'DD-MON-YYYY'
)
```

 