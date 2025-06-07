---
id: pcSucceeded
---

# pc:Succeeded




:::note

This article is about the **pc:Succeeded**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:Succeeded**

Makes an action, or a series of actions, dependent on the successful outcome of another action.

*Syntax*

```
<!-- *Action(s) that succeed(s)* -->

  <pc:Succeeded>

    <!-- *Action(s) to be performed* -->

  </pc:Succeeded>
```

The \<pc:Succeeded> element is a child element of the action that potentially succeeds. The XML content that it contains is executed if that action succeeds and not otherwise.

*Example*

A message "Logging in: ..." is written to the console if a logfile is successfully opened for logging.

```xml
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

 