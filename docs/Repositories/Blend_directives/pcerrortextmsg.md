---
id: pcerrortextmsg
---

# pc:error-textmsg




:::note

This article is about the **pc:error-textmsg**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:error-textmsg**

Returns the information, warning or error message (if any) that was most recently produced by the USoft Blend processor. This will often be a message as encountered in USoft Rules Service logs. This takes the form of a text string. The Blend processor sets or overwrites this message each time it encounters a message in the result of a function call.

Returns a text string.


:::tip

By contrast, [pc:error-msg](/Repositories/Blend_directives/pcerrormsg.md) returns an XML document.

:::

*Syntax*

```xml
<pc:error-textmsg />
```


:::note

For examples, go to [pc:text-msg](/Repositories/Blend_directives/pctextmsg.md), which is a synonym of **pc:error-textmsg**.

:::
