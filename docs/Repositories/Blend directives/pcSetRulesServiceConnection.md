# pc:SetRulesServiceConnection



> [!NOTE]
> This article is about the **pc:SetRulesServiceConnection**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:SetRulesServiceConnection**

Identifies an existing Rules Service connection by an alias, so that you can address it in subsequent directives.

*Syntax*

```
<pc:SetRulesServiceConnection
     alias="*alias*"
     port="*port*"
     application="*application*"
     user="*user*"
     {pwd|password}="*password*" />
```

All attributes are required. **Alias** is a name-literal that acts as a handle by which you can address the connection later, as demonstrated in the Example.

*Example*

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="false">
<pc:assign-string-default
       port = "9157"
       application="MYAPP"
       user = "{$application}"
       pwd = "{$user}"/>
<pc:SetRulesServiceConnection alias="xyz" port="{$port}" application="{$application}" user="{$user}" pwd="{$pwd}"/>
<pc:SqlStatement alias="xyz" >
     <s>select name, position from p_person</s>   
</pc:SqlStatement>
</example>
```

 