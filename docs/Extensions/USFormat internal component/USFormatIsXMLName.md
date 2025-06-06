# USFormat.IsXMLName



> [!NOTE]
> This article is about the **IsXMLName** method of the [USFormat internal component](/docs/Extensions/USFormat%20internal%20component).

## **USFormat.IsXMLName**

Tests if a string is a valid local name according to the XML specification. Such a name begins with a letter or underscore and contains only letters, digits, underscores, hyphens and full stops.

Returns the number 1 if the string is a valid local XML name, and the number 0 otherwise.

*Syntax*

```sql
SELECT USFormat.IsXMLName(
    *string*
)
```

 