---
id: USMetaRoles
---

# USMeta.Roles




:::note

This article is about the **Roles** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

:::

## **USMeta.Roles**

At runtime, gets metadata information about roles from the model developed in USoft Definer. For each retrieved role, this information takes the form of name/value pairs. Each name/value pair expresses a role attribute setting.

Returns an XML document of the form demonstrated in Example 1 below.

*Syntax*

```sql
SELECT USMeta.Roles(
    *role-name-pattern*      Roles
,   *description-pattern*    Description
,   *mime-type*              MimeType
)

*mime-type*   ::=  {  application/xml
                 ,  xml
                 ,  application/json
                 ,  json  }
```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The 'ADMIN' value in the following example is for role-name-pattern because of the "Roles" alias:

```sql
SELECT   USMeta.Roles( 'ADMIN' Roles )
```


:::tip

For backward compatibility only, it is possible to supply parameter values by position. Using this syntax, a list of non-aliased values maps to the parameter list in the order stated, with empty values at the end of the list if you supply less than 2 values, and '' (the empty string) as a way of explicitly declaring an empty value.

:::

*Role-name-pattern* is a regular expression that matches zero, one or more role names in the model. The result data is limited to roles matching the pattern. If *role-name-pattern* is omitted, then result data is not limited in this way.

*Description-pattern* is a regular expression that matches zero, one or more descriptions of roles in the model. The result data is limited to roles with a description matching the pattern. If *description-pattern* is omitted, then result data is not limited in this way.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example 1*

This example returns column information about any roles in the model in which the word 'configures' exists in the Description:

```sql
SELECT USMeta.Roles(
   '.*'               Roles
,  '.*configures.*'   Description
)
```

The return value of this statement could be:

```xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Roles>
      <Role NAME="MAINTAINER" MODULE="USoftBindingModule" DESCRIPTION="Person who configures the app" DEPLOYMENT_CONFIGURATION=""/>
   </Roles>
</Meta>
```

 