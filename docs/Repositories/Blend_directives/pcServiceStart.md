---
id: pcServiceStart
---

# pc:ServiceStart



> [!NOTE]
> This article is about the **pc:ServiceStart**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:ServiceStart**

Starts a Windows service on the local computer.

*Syntax*

```
<pc:ServiceStart servicename="*servicename*" />
```

> [!NOTE]
> This directive is also allowed to appear, without the servicename attribute, as a child element of [pc:ConfigRulesService](/docs/Repositories/Blend%20directives/pcConfigRulesService.md).

*Example*

```language-xml
<pc:ServiceStart servicename="RulesService-7779"/>
```

 