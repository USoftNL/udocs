---
id: pctab
---

# pc:tab




:::note

This article is about the **pc:tab**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:tab**

Outputs one or more tab characters.

*Syntax*

```
<pc:tab n="*integer*" />

*integer*  ::=  { 1, 2, ... }
```

The optional **n** attribute indicates the number of tabs to be output. If you omit it, a single tab is output.

*Examples*

```xml
<pc:tab />
```

```xml
<pc:tab n="3" />
```

 