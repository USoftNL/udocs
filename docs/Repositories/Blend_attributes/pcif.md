---
id: pcif
---

# pc:if




:::note

This article is about the **pc:if**[ Blend attribute](/docs/Repositories/Blend_attributes).

:::

## **pc:if**

The **pc:if** attribute makes the execution of a directive subject to a condition.

*Syntax*

```
<pc:*directive* pc:if="*xpath >> boolean*" ... />
```

The *directive* executes only if **pc:if** evaluates to Boolean true().

*Example 1*

```xml
<pc:copy pc:if="$application='MY_APP'" select="$mylist" />
```

*Example 2*

```xml
<pc:text pc:if="xslutil:test($doaction)">The action will be done.</pc:text>
```

 