# C# components

A  **C# component** is an RDMI component for which the Program Source is expressed in the C# language.

## Defining a C# component

You can define a C# component in 2 different ways:

- By starting from a generated stub. You provide name, method and parameters. USoft automatically generates and compiles a C# stub that you can then customise.
- By starting from C# code. You provide C# Program Code. USoft compiles the code for you.

### Defining a C# component by starting from a generated stub

This example shows how you can define, by having a stub generated, a C# component that retrieves the value of an environment variable of which you pass the name.

1. In USoft Definer, from the menu, choose Define, RDMI, dotNet Components, C# Components from the Define menu. The "C#t Components" window opens.

2. Set Name = ENV.

3. Define a Method (in the empty record on the Methods tab). For this method, set Method = GET. Set Physical Method = getValue.

4. Define two Parameters (in the empty related box headed Parameters, for the GET Method):

|**Seqno**|**Name**|**Mode**|**Data Type**|
|--------|--------|--------|--------|
|0       |name    |In      |String  |
|1       |Return_from_getValue|Return  |String  |



5. Press Commit. USoft generates the C# stub in the Program Source field and it compiles this code.

6. USoft has now generated a new class with the same name as the component name (ENV) and a method with the same name as the physical method(getvalue). The method has the same number and types of parameters as defined in the RDMI definition. The last thing you need to define is the implementation for this method. Change the default "OK" string to:

```
Environment.GetEnvironmentVariable(name)
```

The Program Source code should now look like this:

```language-cs
using System;
using System.Text;

class ENV
{

   public static String getValue(String name)
   {
      return Environment.GetEnvironmentVariable(name);
   }
}
```

7. Commit changes. At runtime, when the .NET component is called, USoft compiles the source code ("just in time" (JIT) compilation), creates an instance of the class according to the component lifetime settings, and executes the method call. Here is an example call:

```
select env.get('windir')
```

### Defining a C# component by starting from C# code

This example shows how you can define, by starting from C# code that you already have, a C# component that retrieves the value of an environment variable of which you pass the name.

1. In USoft Definer, from the menu, choose Define, RDMI, dotNet Components, C# Components from the Define menu. The "C#t Components" window opens.

2. Set Name = ENV.

3. In the Program Source field, paste this code:

```language-cs
using System;
using System.Text;

class ENV
{

   public static String getValue(String name)
   {
      return Environment.GetEnvironmentVariable(name);
   }
}
```

3. Commit work.

4. Press the Check button in the top right corner. In the question box, choose the Yes button.

5. See that methods and parameters have been generated. To see this, click in the Method field on the Methods tab at the bottom of the window, and scroll down. A constructor method (here, with name ENV) may or may not be apparent. In addition, a method with name GETVALUE and 2 parameters has been generated.

6. You are now ready to call the GETVALUE method. At runtime, when the .NET component is called, USoft compiles the source code ("just in time" (JIT) compilation), creates an instance of the class according to the component lifetime settings, and executes the method call. Here is an example call:

```
select env.getvalue('windir')
```

## Assembly References

The Assembly References property of a C# component specifies other C# components or libraries that must be included for the component to work properly.

When you have your C# component checked, it will only be set to Correct = Yes if all the referenced components and libraries are found.

### Referencing other components in Assembly References

When you reference a package directly by “.dll” name, the dll is searched in the \\bin64 subfolder of your USoft installation folder:

```
MyPackage.dll
```

Alternatively, you can provide an absolute filepath:

```
C:/temp/mypackages/mypackage.dll
```

Alternatively, to include a C# component or other .NET component, you can reference it by literal component name. The component is found if it is listed as a "C# Component” in the Definer catalog:

```
MyCSharpComponent 
```

Alternatively, you can reference a nuget package by its package name together with the version you intend to reference. The package version is searched in the dotnet.packages subfolder of your USoft installation folder:

```
MyNugetPackage\1.0.0
```

You can omit the version, but this is not generally recommended. If you omit the version, the latest available version is selected:

```
MyNugetPackage
```

### Environment variables in assembly references

Assembly references in C# components can use environment variables declared on the system.
Refer to the environment variable by having its name wrapped in percent (%) symbols.

*Example* 

```
%MY_DUMMY_PATH%\MyDummy.dll
```

where MY_DUMMY_PATH is declared on the system environment variable list.

> [!TIP]
> This feature could be helpful when a component needs to be checked in a Windows Definer but is then run in a Docker container, where surely file paths are different. This nuisance is overcome by using environment variables.

### Having referenced nuget packages installed automatically

You can [have referenced nuget packages installed automatically](/docs/Extensions/DotNet%20components/Nugets.md).