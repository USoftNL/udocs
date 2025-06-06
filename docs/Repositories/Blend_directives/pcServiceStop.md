---
id: pcServiceStop
---

# pc:ServiceStop



> [!NOTE]
> This article is about the **pc:ServiceStop**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:ServiceStop**

Stops a Windows service on the local computer.

*Syntax*

```
<pc:ServiceStop servicename="*servicename*" />
```

*Example*

```language-xml
<pc:ServiceStop servicename="RulesService-7779"/>
```

> [!NOTE]
> This directive is also allowed to appear, without the servicename attribute, as a child element of [pc:ConfigRulesService](/docs/Repositories/Blend%20directives/pcConfigRulesService.md).

> [!NOTE]
> If the Windows service was already stopped, \<pc:ServiceStop> exits without raising an error.