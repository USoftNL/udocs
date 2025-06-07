---
id: pcStopRulesService
---

# pc:StopRulesService




:::note

This article is about the **pc:StopRulesService**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:StopRulesService**

Stops a USoft Rules Service identified by an alias.

*Syntax*

```
<pc:StopRulesService  alias="*name-literal*"/>
```

where alias is the alias that was provided when \<pc:RunRulesService> was called.

*Example*

```xml
<root xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
  <pc:RunRulesService waittime="10000"
        user="MYNAME" pwd="MYPWD" rdbmstype="oracle" connection="XE" application="MYAPP"
        owner="MYNAME"
        alias="x1" />   

   <!--
        Actions to be performed by the Rules Service
   -->

  <pc:StopRulesService  alias="x1" />

</root>
```

 