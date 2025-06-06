---
id: USFormatCharToLong
---

# USFormat.CharToLong



> [!NOTE]
> This article is about the **CharToLong** method of the [USFormat internal component](/docs/Extensions/USFormat%20internal%20component).

## **USFormat.CharToLong**

Converts a character string to a long number.

Returns the result of the conversion as a long number.

*Syntax*

```sql
SELECT USFormat.CharToLong(
*string*
,         *number-format-pattern*
)
```

Both *string* and *number-format-pattern* are required. *Number-format-pattern* must be one of the [USoft IO formats](/docs/Modeller%20and%20Rules%20Engine/Domains/IO%20formats.md) for number values.

*Example*

```sql
SELECT USFormat.CharToLong(
         '3,333'
,        '9,999'
)
```

The return value of this statement is the long number:

```
3333
```

 