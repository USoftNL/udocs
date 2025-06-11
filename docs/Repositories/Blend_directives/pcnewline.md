---
id: pcnewline
---

# pc:newline




:::note

This article is about the **pc:newline**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:newline**

Outputs one or more newline characters.

*Syntax*

```
<pc:newline n="*integer*" />

*integer*  ::=  { 1, 2, ... }
```

The optional **n** attribute indicates the number of newlines to be output. If you omit it, a single newline is output.

*Examples*

```xml
<pc:newline />
```

```xml
<pc:newline n="3" />
```

 