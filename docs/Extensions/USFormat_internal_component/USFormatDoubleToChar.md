---
id: USFormatDoubleToChar
---

# USFormat.DoubleToChar



> [!NOTE]
> This article is about the **DoubleToChar** method of the [USFormat internal component](/docs/Extensions/USFormat%20internal%20component).

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

Both *double* and *number-format-pattern* are required. *Number-format-pattern* must be one of the [USoft IO formats](/docs/Modeller%20and%20Rules%20Engine/Domains/IO%20formats.md) for number values.

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

 