---
id: pcignorewhitespace
---

# pc:ignorewhitespace




:::note

This article is about the **pc:ignorewhitespace**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:ignorewhitespace**

Strips, from the output of the parent element and all its descendent elements, all whitespace-only nodes (newlines, tabs, spaces) that can be identified as irrelevant. These include whitespace-only nodes in the source XML of your input script, but not whitespace specifically produced as part of the output of your script.

*Syntax*

```
<*element* pc:ignorewhitespace="{ yes | no }"

*content*

</*element*>
```

 