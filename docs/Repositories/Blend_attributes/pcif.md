---
id: pcif
---

# pc:if



> [!NOTE]
> This article is about the **pc:if**[ Blend attribute](/docs/Repositories/Blend%20attributes).

## **pc:if**

The **pc:if** attribute makes the execution of a directive subject to a condition.

*Syntax*

```
<pc:*directive* pc:if="*xpath >> boolean*" ... />
```

The *directive* executes only if **pc:if** evaluates to Boolean true().

*Example 1*

```language-xml
<pc:copy pc:if="$application='MY_APP'" select="$mylist" />
```

*Example 2*

```language-xml
<pc:text pc:if="xslutil:test($doaction)">The action will be done.</pc:text>
```

 