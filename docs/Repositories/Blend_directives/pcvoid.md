---
id: pcvoid
---

# pc:void




:::note

This article is about the **pc:void**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:void**

Nullifies the result value returned by the execution of a script section or the resolution of an attribute.
pc:void is the counterpart of pc:evaluate, which does return the result value.

The content of pc:void is executed without result value. The content of pc:defs is not executed at all.

*Syntax*
 

```
<pc:void *attribute*="*value*" ... >

*content*

</pc:void>
```

You can use pc:void if you are interested in having an attribute resolved (as in the Example) but you are not interested in the return value.

You can use pc:void to surround a directive or an entire script section (a set of directives) that you want to suppress the result value of.

Often, you do not need to write pc:void explicitly. It is standard behaviour in USoft Blend that the return value of pc:copy-of is automatically suppressed if the script returns (also) other output.

*Example*

```language-xml
<pc:assign-string mystring="HelloUniverse"/>
<pc:defs><somexml>Hi</somexml></pc:defs>
<pc:assign-nodeset mydefs="{preceding-sibling::pc:defs/*}"/>
<pc:void select="variable:Enqueue('iamaqueue', 2)"/>
<pc:void select="variable:Enqueue('iamaqueue', 1)"/>
<pc:void select="variable:Enqueue('iamaqueue', 'somestring')"/>
<pc:GetVariables/>
```

 