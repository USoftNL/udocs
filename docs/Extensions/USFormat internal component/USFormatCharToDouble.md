# USFormat.CharToDouble



> [!NOTE]
> This article is about the **CharToDouble** method of the [USFormat internal component](/docs/Extensions/USFormat%20internal%20component).

## **USFormat.CharToDouble**

Converts a character string to a formatted numeric value of type double.

Returns the result of the conversion as a number.

*Syntax*

```sql
SELECT USFormat.CharToDouble(
*string*
,         *number-format-pattern*
)
```

Both *string* and *number-format-pattern* are required. *Number-format-pattern* must be one of the [USoft IO formats](/docs/Modeller%20and%20Rules%20Engine/Domains/IO%20formats.md) for number values.

*Example*

```sql
SELECT USFormat.CharToDouble(
         '3,333.93'
,        '9,999.99'
)
```

The return value of this statement is the number:

```
3333.93
```

 

 