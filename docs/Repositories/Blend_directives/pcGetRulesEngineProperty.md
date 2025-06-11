---
id: pcGetRulesEngineProperty
---

# pc:GetRulesEngineProperty




:::note

This article is about the **pc:GetRulesEngineProperty**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:GetRulesEngineProperty**

Gets the current setting of a named Rules Engine property.

Returns a string value.

*Syntax*

```
<pc:GetRulesEngineProperty
     alias="*name-literal*"
     name="*name-literal*" />
```

The **alias** attribute identifies the Rules Service connection used to get the result. This attribute is required if you are calling this directive outside USoft, eg. on the command line. For more information on aliases, go to the pc:RunRulesService help topic.

The **name** attribute identifies the Rules Engine property that you want to get the value of.

Calling this directive is equivalent to executing the following SQL statement in a USoft context:

```sql
SELECT RulesEngine.GetProperty( name )
```

*Example*

This example finds out whether constraints for connection "thisconn" are currently deactivated or not:

```xml
<pc:GetRulesEngineProperty connection="{$thisconn}" name="USoftLogDir" />
```

 