---
id: Blend_directives
---

# Blend directives




:::note

This is a wayfinding article on **Blend directives** in the USoft Community Knowledge Base.

:::

Blend directives are XML elements that act as commands in the USoft Blend scripting language. They are comparable to commands in a Powershell script.

The following example script contains 2 Blend directives. The first is a command to create Authorizer tables. The second is a command to fill the tables with data found in an external file.

```xml
<example xmlns:pc="Processing.Command">
  <pc:Creapp application="USAUTH" ... />
  <pc:XmlImport alias="x1" commit="commit" source="c:\example\USAUTH.xml"/>
</example>
```

For an alphabetical list of Blend directives, go [here](/Repositories/Blend_directives).

For an introduction to USoft Blend, go to [Introducing Blend scripts](/Repositories/Blend_scripts_for_repository_management/Introducing_Blend_scripts.md).

For a functional overview, go to [Understanding USoft Blend](/Repositories/Blend_scripts_for_repository_management/Understanding_USoft_Blend.md).

In addition to Blend directives, some additional functionality can be scripted by calling [Blend functions](/Repositories/Blend_functions).

 