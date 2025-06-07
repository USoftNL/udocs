---
id: pcblend
---

# pc:blend




:::note

This article is about the **pc:blend**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:blend**

Executes processing instructions represented by nodes located in a different script file, or in a different part of the current script file.

Think of this as a *call* to those nodes, in the sense of a procedure call. A synonym of **pc:blend** is [pc:call](/docs/Repositories/Blend_directives/pccall.md).

If you call a section within the current script file, it is customary to place the called target code block in a [pc:defs](/docs/Repositories/Blend_directives/pcdefs.md)****section at the beginning of the script, as in the Examples, but this is not necessary.


:::note

The result is the same as when the nodes pointed at are passed to **ublendit.exe**on the command line, or to **select uscsxsl.blend** in a SQL command context.

:::

*Syntax*

```xml
<pc:blend
  {
    pc:filepath = "*file-path*" |
    pc:xpath = "*root-xpath* >> *node-set*" |
    pc:id = "*id*" |
    *embedded-xml*
  }
  [ *parameter-list* ]
  [ pc:samecontext="{true|yes}" ]
/>

*root-xpath*  ::=  /*xpath*
*parameter-list*  ::=  variable = "*value*" ...	

```

You must either have one of the attributes **pc:filepath, pc:xpath, pc:id,** or you must have [embedded XML](/docs/Repositories/Blend_scripts_for_repository_management/Guide_to_Blend_expressions_and_data_types.md). The attributes point to the target code block to be executed (Examples 1 and 2). If you have *embedded-xml*, that embedded XML is itself the target code block (Example 3).

Use **pc:filepath** to point at a different Blend script file on the file system.

Use **pc:xpath** (Example 1) or **pc:id** (Example 2) to point at a target section within the Blend script itself. It is customary to place this target section, ie., the section to be executed, in a **pc:defs** element near the top of the script. In the case of **pc:defs**, you can choose to point at the descendant nodes to be executed (as in Example 1). You can also choose to point at the **pc:defs** element itself, in which case all child nodes of the **pc:defs** element are executed.

If you use **pc:xpath,** *root-path* must be an absolute path, ie., it must start with a forward slash.

You can pass both **pc:filepath** and **pc:xpath**. In this case, **pc:filepath** points at an external script file, and **pc:xpath** at a location within that script file.

Optionally, with your call, you can pass a *parameter-list* containing one or more name-value pairs as input parameters, using assigment attributes (with the syntax *variable*="*value*”). This is demonstrated in Examples 1-3.

See Example 3 for details of variable scope and parameter scope.

For the optional **pc:samecontext**, see the section on variable scope and parameter scope at the end of this article.

*Example 1*

The output of this example is:

```
Hello world
```

This example demonstrates using **pc:xpath** to point at the target nodes to be executed:

```xml
<example xmlns:pc="Processing.Command" pc:hideme="yes">
  <pc:defs>
    <pc:text>Hello </pc:text>
    <pc:value-of select="$val"/>
  </pc:defs>
  <pc:blend pc:xpath="/example/pc:defs/*" val="world"/>
</example>
```

*Example 2*

The output of this example is:

```
blending is great once you are used to blend
```

This example demonstrates using **pc:id** to point at the target section to be executed. With this option,

```
pc:id="*id*"
```

is a convenient shorthand for:

```
pc:xpath="//pc:*[@id='*id*']"
```

Here is the example:

```xml
<example xmlns:pc="Processing.Command" pc:hideme="yes">
	<pc:defs id="callme">
		<pc:text> once </pc:text><pc:value-of select="$msg"/>
	</pc:defs>
	<pc:defs id="123">
		<pc:text>blending</pc:text><pc:value-of select="$msg"/>
	</pc:defs>
	<pc:defs>
		<pc:blend id="123" pc:id="callme" msg="you are used to blend"/>
	</pc:defs>
	<pc:blend pc:id="123" msg=" is great"/>
</example>
```

*Example 3*

The output of this example is:

```
Hi *user*
Life is good
Food is good
Crime is bad
```

This example demonstrates using embedded XML as the code block to be executed. This example also illustrates certain aspects of variable scope discussed in the next section.

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign" pc:ignorewhitespace="yes" pc:hideme="yes">
	<pc:assign-string msg="Crime is bad"/>
	<pc:defs id="42">
		<pc:text>Life </pc:text><pc:value-of select="$msg"/>
	</pc:defs>
	<pc:defs name="findme">
		<pc:text>&#10;Food </pc:text><pc:value-of select="$msg"/>
	</pc:defs>	
	<pc:blend msg="is good" assign:result="."> 
		<pc:defs>
			<pc:text>Hi </pc:text><pc:value-of select="environment:GetVariable('USERNAME')"/>
			<pc:newline/>
		</pc:defs>
		<pc:call pc:id="42" msg="{$msg}"/>
		<pc:call pc:xpath="/example/pc:defs[@name='findme']" msg="{$msg}"/>
	</pc:blend>
	<pc:copy-of select="$result"/>
	<pc:newline/>
	<pc:value-of select="$msg"/>
</example>
```

## Variable scope and parameter scope

Variables set in the calling context are automatically available in the called context.

Variables passed in the *parameter-list* of the \<pc:blend> call override any variable with the same name in the calling context.

Variables set locally in the called context are available only in that context. Variables set locally in the called context do not affect a setting for a variable with the same name in the calling context.

If you pass **pc:samecontext=true**, any local variables set by the called context will overwrite variables with the same name in the calling context.

If you pass **pc:samecontext=true** and the called context uses **pc:terminate**, not only the callee but also the caller will be terminated. If you pass **pc:samecontext=false**,****or you do not pass **pc:samecontext**, the callee will terminate and then the caller will continue processing.

## Errors

\<pc:blend> can lead to infinite recursion, eg.

```xml
<pc:blend pc:xpath="/*" />
```

This is reported as a StackOverflowException.