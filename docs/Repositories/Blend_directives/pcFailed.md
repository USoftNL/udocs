---
id: pcFailed
---

# pc:Failed




:::note

This article is about the **pc:Failed**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:Failed**

Makes an action, or a series of actions, dependent on the fact that another action fails.

*Syntax*
 

```language-xml
<!-- Action(s) that fail(s) -->

  <pc:Failed>

    <!-- Action(s) to be performed -->

  </pc:Failed>
```

The \<pc:Failed> element is a child element of the action that potentially fails. The XML content that it contains is executed if that action fails and not otherwise.

*Example*

A message "Failed to open file for logging" is written to the console if a logfile is not successfully opened for logging.

```language-xml
<pc:WriteFile filepath="{$logfile}">
  <pc:Succeeded>
    <pc:ConsoleWrite>Logging in: <pc:value-of select="$logfile"/>...<pc:newline/></pc:ConsoleWrite>
  </pc:Succeeded>

  <pc:Failed>
    <pc:ConsoleWrite>Error: Failed to open file for logging.</pc:ConsoleWrite>
    <pc:terminate/>
  </pc:Failed>

</pc:WriteFile>   
```

 