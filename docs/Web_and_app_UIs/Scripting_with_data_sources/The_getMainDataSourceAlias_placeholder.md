---
id: The_getMainDataSourceAlias_placeholder
---

# The getMainDataSourceAlias placeholder

The **getMainDataSourceAlias** placeholder is used exclusively in WHERE clauses, and refers to the (USoft-generated) alias of the main data source in the FROM clause.

This placeholder is similar to the getDataSourceAlias and getThisDataSourceAlias placeholders.

*Syntax*

```
${getMainDataSourceAlias()}
```

*Example*

For a PERSON table with a relationship to itself, the Where Clause property can be set to:

```sql
EXISTS(    
    SELECT  * 
    FROM    PERSON     
    RELATE Person "IS FATHER OF" ${getMainDataSourceAlias()}     
    WHERE family_name LIKE 'R%'
)
```

The Page Engine translates this statement to:

```sql
SELECT    ID
,         FAMILY_NAME
,         FIRST_NAME
,         'Yes' UseIOFormats
FROM      PERSON t1
WHERE EXISTS (    
    SELECT    * 
    FROM      PERSON
    RELATE    Person "IS FATHER OF" t1
    WHERE family_name LIKE 'R%'
)
```

So the getMainDataSourceAlias placeholder is used to point to the t1 alias used for this table.