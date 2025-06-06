# USFormat.LongToChar



> [!NOTE]
> This article is about the **LongToChar** method of the [USFormat internal component](/docs/Extensions/USFormat%20internal%20component).

## **USFormat.LongToChar**

Converts a long number to a character string.

Returns the result of the conversion as a string.

*Syntax*

```sql
SELECT USFormat.LongToChar(
    *long-number*
,   *number-format-pattern*
)
```

Both *long-number* and *number-format-pattern* are required. *Number-format-pattern* must be one of the [USoft IO formats](/docs/Modeller%20and%20Rules%20Engine/Domains/IO%20formats.md) for number values.

*Example*

```sql
SELECT USFormat.LongToChar(
         2
,        '$$$$999'
)
```

The return value of this statement is the following string value, which starts with 3 spaces:

```
$002
```

 