---
id: pcevaluate
---

# pc:evaluate




:::note

This article is about the **pc:evaluate**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:evaluate**

Executes a script section or resolves an attribute, and returns the result value (the outcome).

**pc:evaluate** is the counterpart of **pc:void**, which nullifies the result value.

*Syntax*
 

```
<pc:evaluate attribute="*value*" ... >

*content*

</pc:evaluate>
```

You can use pc:evaluate if you are interested in having an attribute resolved (as in Example 1) and you want the script to produce the result value.

*Example 1*

```xml
<pc:evaluate select="service:InstallServiceMode('RulesService-7755', 'c:\usd90\bin\RulesService.exe', 'bla', 'manual')"/>
```

*Example 2*

As its second argument, the strings:ReplaceVariables function takes an XPath expression, which references the XML content of the pc:evaluate element.

```xml
<example xmlns:pc="Processing.Command">

<pc:assign-string-default
   mytext="This is a story about a dog. The dog is named max and has a big tail" />

<pc:evaluate expression="strings:ReplaceVariables($mytext, r)">
  <r><abc NAME="lazy" VALUE="wild"/><def NAME="dog" VALUE="lazy cat"/><def NAME="max" VALUE="fifi"/></r>
</pc:evaluate>

</example>
```

 