---
id: Blend_directives
---

# Blend directives



> [!NOTE]
> This is a wayfinding article on **Blend directives** in the USoft Community Knowledge Base.

Blend directives are XML elements that act as commands in the USoft Blend scripting language. They are comparable to commands in a Powershell script.

The following example script contains 2 Blend directives. The first is a command to create Authorizer tables. The second is a command to fill the tables with data found in an external file.

```language-xml
<example xmlns:pc="Processing.Command">
  <pc:Creapp application="USAUTH" ... />
  <pc:XmlImport alias="x1" commit="commit" source="c:\example\USAUTH.xml"/>
</example>
```

For an alphabetical list of Blend directives, go [here](/docs/Repositories/Blend%20directives).

For an introduction to USoft Blend, go to [Introducing Blend scripts](/docs/Repositories/Blend%20scripts%20for%20repository%20management/Introducing%20Blend%20scripts.md).

For a functional overview, go to [Understanding USoft Blend](/docs/Repositories/Blend%20scripts%20for%20repository%20management/Understanding%20USoft%20Blend.md).

In addition to Blend directives, some additional functionality can be scripted by calling [Blend functions](/docs/Repositories/Blend%20functions).

 