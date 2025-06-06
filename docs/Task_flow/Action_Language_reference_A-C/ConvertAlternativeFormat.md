---
id: ConvertAlternativeFormat
---

# ConvertAlternativeFormat()



> [!NOTE]
> This article is about the **ConvertAlternativeFormat** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **ConvertAlternativeFormat()**

Enables a field to accept a variety of input formats, while maintaining a consistent visual presentation (output format) of the data accepted.

You can call this action from a column's Adjust Change property.

> [!WARNING]
> This action is supported for backward compatibility only. Use the Alternative Input Format property instead.

*Syntax*

```
ConvertAlternativeFormat( *format*, ... )
```

The required *format* represents one format to be accepted. You can pass multiple *formats* separated by commas. The result is that the field will accept each of those formats.

*Example*

When the system year is 2000, this example causes the field to accept 160100, 16 01 00, 011600, 1601, or JAN16, all of which are converted to 16-JAN-2000 when the cursor leaves the field.

```
ConvertAlternativeFormat('DDMMYY','MMDDYY','DDMM','MONDD')
```

 