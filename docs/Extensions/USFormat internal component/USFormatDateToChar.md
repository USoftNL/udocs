# USFormat.DateToChar



> [!NOTE]
> This article is about the **DateToChar** method of the [USFormat internal component](/docs/Extensions/USFormat%20internal%20component).

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

Both *date* and *date-format-pattern* are required. *Date-format-pattern* must be one of the [USoft IO formats](/docs/Modeller%20and%20Rules%20Engine/Domains/IO%20formats.md) for date values.

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

 