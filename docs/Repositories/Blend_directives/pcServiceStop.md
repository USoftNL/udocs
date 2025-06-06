---
id: pcServiceStop
---

# pc:ServiceStop




:::note

This article is about the **pc:ServiceStop**[ Blend directive](/docs/Repositories/Blend_directives).

:::

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


:::note

This directive is also allowed to appear, without the servicename attribute, as a child element of [pc:ConfigRulesService](/docs/Repositories/Blend_directives/pcConfigRulesService.md).

:::


:::note

If the Windows service was already stopped, \<pc:ServiceStop> exits without raising an error.

:::
