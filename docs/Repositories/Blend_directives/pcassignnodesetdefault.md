---
id: pcassignnodesetdefault
---

# pc:assign-nodeset-default




:::note

This article is about the **pc:assign-nodeset-default**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:assign-nodeset-default**

This directive is the same as [pc:assign-nodeset](/Repositories/Blend_directives/pcassignnodeset.md) for those variables that have not already been instantiated. For variables that have already been instantiated, their existing variable value is NOT overwritten, but it is still converted to a node set.

*Syntax*

```
<pc:assign-nodeset-default
  [  *variable* = "*xpath >> node-set*" ... ] />
```

 

 