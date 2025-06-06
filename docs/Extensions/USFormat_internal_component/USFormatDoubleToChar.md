---
id: USFormatDoubleToChar
---

# USFormat.DoubleToChar



> [!NOTE]
> This article is about the **DoubleToChar** method of the [USFormat internal component](/docs/Extensions/USFormat_internal_component).

## **USFormat.DoubleToChar**

Converts a numeric value of type double to a character string.

Returns the result of the conversion as a string.

*Syntax*

```sql
SELECT USFormat.DoubleToChar(
*double*
,         *number-format-pattern*
)
```

Both *double* and *number-format-pattern* are required. *Number-format-pattern* must be one of the [USoft IO formats](/docs/Modeller_and_Rules_Engine/Domains/IO_formats.md) for number values.

*Example*

```sql
SELECT USFormat.DoubleToChar(
         '1234.56'
,        '9,999.99'
)
```

The return value of this statement is the string:

```
1,234.56
```

 