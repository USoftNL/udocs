---
id: pcServiceStart
---

# pc:ServiceStart




:::note

This article is about the **pc:ServiceStart**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:ServiceStart**

Starts a Windows service on the local computer.

*Syntax*

```
<pc:ServiceStart servicename="*servicename*" />
```


:::note

This directive is also allowed to appear, without the servicename attribute, as a child element of [pc:ConfigRulesService](/docs/Repositories/Blend_directives/pcConfigRulesService.md).

:::

*Example*

```xml
<pc:ServiceStart servicename="RulesService-7779"/>
```

 