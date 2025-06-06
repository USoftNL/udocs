---
id: USFormatDateToChar
---

# USFormat.DateToChar




:::note

This article is about the **DateToChar** method of the [USFormat internal component](/docs/Extensions/USFormat_internal_component).

:::

## **USFormat.DateToChar**

Converts a date value to a string.

Returns the result of the conversion as a string.

*Syntax*

```sql
SELECT USFormat.DateToChar(
*date*
,        *date-format-pattern*
)
```

Both *date* and *date-format-pattern* are required. *Date-format-pattern* must be one of the [USoft IO formats](/docs/Modeller_and_Rules_Engine/Domains/IO_formats.md) for date values.

*Example*

```sql
SELECT USFormat.DateToChar(
         current_date()
,        'DD-MM-YYYY'
)
```

On March 28, 2019, the return value of this statement is the string:

```
28-03-2019
```

 