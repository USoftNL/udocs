---
id: pcerrormsg
---

# pc:error-msg




:::note

This article is about the **pc:error-msg**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:error-msg**

Returns the information, warning or error message (if any) that was most recently produced by the USoft Blend processor. This will often be a message as encountered in USoft Rules Service logs. This takes the form of an XML document. The Blend processor sets or overwrites this message each time it encounters a message in the result of a function call.

Returns an XML document.


:::tip

By contrast, [pc:error-textmsg](/docs/Repositories/Blend_directives/pcerrortextmsg.md) returns a text string.

:::

*Syntax*

```xml
<pc:error-msg />
```


:::note

For examples, go to [pc:msg](/docs/Repositories/Blend_directives/pcmsg.md), which is a synonym of **pc:error-msg**.

:::
