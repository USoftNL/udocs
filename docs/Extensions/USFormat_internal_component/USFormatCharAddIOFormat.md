---
id: USFormatCharAddIOFormat
---

# USFormat.CharAddIOFormat




:::note

This article is about the **CharAddIOFormat** method of the [USFormat internal component](/Extensions/USFormat_internal_component).

:::

## **USFormat.CharAddIOFormat**

Formats a string using a string IO format pattern.

Returns the result of the operation as a string.

*Syntax*

```sql
SELECT USFormat.CharAddIOFormat(
    *string*
,   *string-io-format-pattern*
)
```

Both *string* and *string-io-format-pattern* are required. *String-io-format-pattern* must be one of the [USoft IO formats](/Modeller_and_Rules_Engine/Domains/IO_formats.md) for string values.

*Example*

```sql
SELECT USFormat.CharAddIOFormat(
       'YESNO'
,      'XXX/XX'
)
```

The return value of this statement is the string value:

```
YES/NO
```

 