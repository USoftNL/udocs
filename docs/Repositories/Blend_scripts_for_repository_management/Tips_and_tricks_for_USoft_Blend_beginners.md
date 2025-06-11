---
id: Tips_and_tricks_for_USoft_Blend_beginners
---

# Tips and tricks for USoft Blend beginners

This section highlights some typical problems that beginners have with USoft Blend. This will help you get over these problems quickly.

## Node sets are different from strings

To work with USoft Blend successfully, it's a good idea to constantly keep in mind the difference between **node sets** and **strings**.

In practice, you often get a string when you expect a string, and a node set when you expect a node set, but if you don't understand the difference you will ultimately get stuck in situations you will find difficult to solve.

For example, **pc:value-of** is for evaluating and returning string values, so that you will have no trouble understanding that

```xml
<pc:value-of select="concat('A','B')"/>
```

will give you the string value:

```
AB
```

But beginners often forget that **select** attributes in XSLT, and therefore also in USoft Blend, expect **node set** expressions as a default. This script:

```xml
<pc:value-of select="xy">
  <xy>z</xy>
</pc:value-of>
```

will return:

```
z
```

If you wanted to return the value “xy” instead, you would need to quote the value of the **select** attribute:

```xml
<pc:value-of select="'xy'">
  <xy>z</xy>
</pc:value-of>
```

Node sets and strings are the 2 most important data types in XSLT and in USoft Blend. If node sets are new to you, start by reading the "Node set expressions” section of the "[Guide to Blend expressions and data types](/Repositories/Blend_scripts_for_repository_management/Guide_to_Blend_expressions_and_data_types.md)” article.

## Curly braces are needed to have values computed

Beginners are often confused by the fact that in some places, they need to write **curly braces** to get values evaluated, while in other places, they don't.

In this example, **pc:assign-string***expects* a string value, so if you pass a string value, you simply pass it as an attribute value (between the double quotes):

```xml
<pc:assign-string username="ADMIN"/>
```

But if you pass an XPath expression, you need to write curly braces to indicate that the expression is to be evaluated and converted to the expected string type:

```xml
<pc:assign-string workingdir="{directories:Get()}"/>
```

In this particular example, the curly-braced expression refers to a function, but that is not the point. The point is that a literal is expected but the value supplied is not a literal: it is an expression to be evaluated. The result is converted to the expected string. The expression is said to "evaluate to a string”.

The reverse can be seen in this contrasting example. Because it is the mission of **pc:value-of** to evaluate an XPath expression and convert it to a string value, its **select** attribute *expects* an XPath expression and not a string. As a result, if it is an XPath expression that you are supplying, you must write it WITHOUT curly braces:

```xml
<pc:value-of select="path:Combine('c:\temp',$mysubdir)"/>
```

By contrast, in contexts that DO expect string values, such as the following context in which a directory path is expected, you MUST write curly braces if the value you supply is not a literal string:

```xml
<pc:assign-string mysubdir="temp2">
<pc:DeleteDirectories>
     <Directory dirpath="{path:Combine('c:\temp',$mysubdir)}" />
     ...
</pc:DeleteDirectories>
```

For more, read the "Evaluated expressions vs. literal expressions” sections at the end of the "[Guide to Blend expressions and data types](/Repositories/Blend_scripts_for_repository_management/Guide_to_Blend_expressions_and_data_types.md)” article.

## Sandbox scripts are best for debugging

USoft Blend is a simple scripting utility built on top of XSLT 1.0. It is not a fully-fledged programming language. Programmers often look in vain for debugging tools, logging behaviour and error reporting, but these facilities are few and far between in USoft Blend. Another drawback is that USoft Blend is USoft-specific and therefore you cannot easily find help on the Internet.

Best practice when debugging is to keep constantly one or more *sandbox scripts* at hand. Make sure these scripts only contain the snippet that you want to test and understand the behaviour of.

If you are not completely sure about some code, do not hesitate to test it in a sandbox first. Once tested, a snippet can easy be cut-and-pasted into your production script. Here is a sandbox script that tests the behaviour of the **select** attribute of **pc:value-of**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mytest xmlns:pc="Processing.Command">
  <pc:value-of select="xy">
    <xy>z</xy>
  </pc:value-of>
</mytest>
```

Put this in a file called "mytest.xml” and call that file like so:

```
> *usoft-bindir*\ublendit.exe mytest.xml
```

Please click [here](/Repositories/Blend_scripts_for_repository_management/Guide_to_Blend_debugging.md) for more debugging tips.

 