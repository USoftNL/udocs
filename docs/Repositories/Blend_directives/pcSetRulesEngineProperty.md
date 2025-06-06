---
id: pcSetRulesEngineProperty
---

# pc:SetRulesEngineProperty



> [!NOTE]
> This article is about the **pc:SetRulesEngineProperty**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:SetRulesEngineProperty**

Sets or resets a named Rules Engine property to a value.

*Syntax*
 

```
<pc:SetRulesEngineProperty
     alias="*name-literal*"
     name="*name*"
     value="*value*"
     transaction="*transaction-mode*" />

*transaction-mode*  ::=  { commit | rollback }
```

Calling this directive is equivalent to executing the following SQL statement in a USoft context:

```sql
SELECT RulesEngine.SetProperty( name, value )
```

The required **alias** identifies the Rules Service instance that you want to connect to. **Alias** has been previously obtained by calling pc:RunRulesService.

The required **name** is the name of the Rules Engine property that you want to set. The required **value** is the value you want to set it to.

The optional **transaction-mode** is appropriate only for a subset of Rules Engine properties. If you set it to 'commit', the setting is automatically committed. If you set it to 'rollback' (the default), the setting is part of your transaction and may be committed or rolled back at a later time.

*Example*

This example deactivates all constraints that are active for connection "thisconn":

```language-xml
<pc:SetRulesEngineProperty alias="thisconn" name="CONSTRAINTSACTIVE" value="no" transaction="commit"/>
```

 