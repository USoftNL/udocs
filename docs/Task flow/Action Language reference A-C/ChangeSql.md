# ChangeSql()



> [!NOTE]
> This article is about the **ChangeSql** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ChangeSql()**

Changes the value of a column's "Values to Query" property dynamically at runtime. This property holds a query that is used to generate an allowed values list.

Calling ChangeSql() also takes care of refreshing the value lists of any objects displayed. This contrasts with the result of (re)setting the XtNsql BaseColumn property.

*Syntax*

```
ChangeSql( *select-statement* )
```

The required *select-statement* is a query that defines the new list of values for the "Values to Query" property.

> [!WARNING]
> If allowed values have been defined at the underlying Domain or Column level (in USoft Definer), an error is raised.

 