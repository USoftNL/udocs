---
id: Visual_Basic_components
---

# Visual Basic components

A  **Visual Basic component** is an RDMI component for which the Program Source is expressed in Visual Basic. Visual Basic (VB) is a programming language associated with the .NET framework.

You can define a Visual Basic component in 2 different ways:

- By starting from a generated stub. You provide name, method and parameters. USoft automatically generates and compiles a Visual Basic stub that you can then customise.
- By starting from Visual Basic code. You provide Visual Basic Program Source code. USoft compiles the code for you.

Either way, the result is that methods and parameters for the Visual Basic code are declared in USoft Definer. The purpose of defining a Visual Basic component is that you can make RDMI calls to its methods in your USoft application.

This technique is analogous to defining and calling C# components. See C# components for detailed steps.


:::tip

You can work with Visual Basic in the generic DotNet Components window: from the USoft Definer menu, choose Define, RDMI, DotNet Components, All DotNetComponents. When USoft compiles your Program Source code, it will recognise it as Visual Basic and set Language = Visual Basic. Alternatively, you can work in the Visual Basic Components window: in the last submenu, choose Visual Basic Components instead.

:::
