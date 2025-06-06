# Blend functions



> [!NOTE]
> This is a wayfinding article on **Blend functions** in the USoft Community Knowledge Base.

You can call most of the functionality in USoft Blend by placing **Blend directives** in your scripts. These act as commands and are comparable to commands in a Powershell script. The following example script contains 2 Blend directives. The first is a command to create Authorizer tables. The second is a command to fill the tables with data found in an external file.

```language-xml
<example xmlns:pc="Processing.Command">
  <pc:Creapp application="USAUTH" ... />
  <pc:XmlImport alias="x1" commit="commit" source="c:\example\USAUTH.xml"/>
</example>
```

Some of the functionality of USoft Blend is available by calling **Blend functions** instead.

Functionally, the main difference between directives and functions is syntax. With directives, you pass parameters in XML attributes, that is, by *name:*

```language-xml
<pc:Creapp application="USAUTH"... />
```

With directives, you pass parameters comma-separated between parentheses, that is, by *position:*

```
variable:Set('envxml', files:XmlFile('env.xml'))
```

> [!NOTE]
> Technically, functions are responsible for actually executing USoft Blend. Directives are offered as wrappers around the most popular functions so they can be integrated more easily in Blend scripts.

The pc:evaluate directive lets you wrap a function in a directive:

```language-xml
<pc:evaluate select="variable:Set('envxml', files:XmlFile('env.xml'))"/>
```

For an alphabetical list of Blend functions, go [here](/docs/Repositories/Blend%20functions).

For an alphabetical list of Blend directives, go [here](/docs/Repositories/Blend%20directives).

For an introduction to USoft Blend, go to [Introducing Blend scripts](/docs/Repositories/Blend%20scripts%20for%20repository%20management/Introducing%20Blend%20scripts.md).

For a functional overview, go to [Understanding USoft Blend](/docs/Repositories/Blend%20scripts%20for%20repository%20management/Understanding%20USoft%20Blend.md).