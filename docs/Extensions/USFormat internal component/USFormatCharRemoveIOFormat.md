# USFormat.CharRemoveIOFormat



> [!NOTE]
> This article is about the **CharRemoveIOFormat** method of the [USFormat internal component](/docs/Extensions/USFormat%20internal%20component).

## **USFormat.CharRemoveIOFormat**

Removes a string format, using the string IO format pattern for the format to be removed.

Returns the result of the operation as a string.

*Syntax*

```sql
SELECT USFormat.CharRemoveIOFormat(
    *string*
,   *string-io-format-pattern*
)
```

Both *string* and *string-io-format-pattern* are required. *String-io-format-pattern* must be one of the [USoft IO formats](/docs/Modeller%20and%20Rules%20Engine/Domains/IO%20formats.md) for string values.

*Example*

```sql
SELECT USFormat.CharRemoveIOFormat(
         '12-MAR-2019'
,        '99-XXX-9999'
)
```

The return value of this statement is:

```
12MAR2019
```

 