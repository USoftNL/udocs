---
id: The_getValue_placeholder
---

# The getValue placeholder

![](./assets/c29894ef-9824-498a-9b23-e1cd94c27a76.png)



> [!CAUTION]
> This placeholder is no longer supported in USoft 11.

![](./assets/22fff438-3acd-485b-90d0-d44868e85f2a.png)



The **getValue** placeholder reads a value from the selected record in a web page. This can be a column value of the selected record, or the current value of a variable in a variable set.

This placeholder refers to the underlying data source item of a data source:

```
${getValue( data-source, data-source-item ) }
```

You can use the getValue placeholder with any kind of TableDataSource or VariableSetDataSource object. When you do, the *data-source-item* parameter can be a column name or a variable name of the corresponding data source.

*Examples*

To obtain a column value from the selected record of a data source, you can set, for example:

```
${getValue( SCHEDTOUR, DESTINATION) }
```

```sql
INVOKE   BatchRunner.RunJob WITH
SELECT   'MyJob' JobName
,        'job-parameter='|| ${getValue( SCHEDTOUR, DESTINATION )} JobParameter
```

## Comparisons with NULL or empty strings

In comparisons between NULL and ${getValue( )}, be sure to use the operators IS NULL (and IS NOT NULL for the opposite case):

```
${getValue( PERSON, FAMILY_NAME )} IS NULL
```

Do NOT compare ${getValue( )} with the empty string:

```
${getValue( PERSON, FAMILY_NAME )} = ''
```

In JavaScript, by contrast, you must write:

```
getValue( "PERSON", "FAMILY_NAME" ) == ""
```

## Added single quotes

When using the getValue placeholder in a SQL statement, by default single quotation marks (' ') are added automatically around the retrieved value, according to the type of the DataSource item: A numeric type gets a single quote, and other types do not.

You can change this default behavior by adding a third, optional argument (True or False) to the placeholder to enforce or skip the addition of single quotes:

```
${getValue( data-source, data-source-item, { True | False } ) }
```