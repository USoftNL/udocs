---
id: pcServiceUninstall
---

# pc:ServiceUninstall



> [!NOTE]
> This article is about the **pc:ServiceUninstall**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:ServiceUninstall**

Uninstalls a Windows service on the local computer.

*Syntax*

```
<pc:ServiceUninstall servicename="*servicename*" />
```

> [!NOTE]
> This directive is also allowed to appear, without the servicename attribute, as a child element of [pc:ConfigRulesService](/docs/Repositories/Blend%20directives/pcConfigRulesService.md).

*Example*

An example of a service name is **RulesService-7779**.

```language-xml
<example xmlns:pc="Processing.Command">

   <pc:assign-string-default servicename=""/>
   <pc:terminate test="$servicename=''" msg="Please specify servicename."/>

   <pc:ServiceUninstall servicename="{$servicename}">
      <pc:Succeeded>Removed: <pc:value-of select="$servicename"/></pc:Succeeded>
      <pc:Failed>
         <Failed><pc:msg/></Failed>
         <pc:comment-of>
            <pc:text>The service log file location is: </pc:text>
            <pc:value-of select="service:ServiceLogFile()"/>
         </pc:comment-of>
      </pc:Failed>
   </pc:ServiceUninstall>
</example>  
```

 