---
id: pcassignnodesetfromjson
---

# pc:assign-nodeset-from-json




:::note

This article is about the **pc:assign-nodeset-from-json**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:assign-nodeset-from-json**

Converts a JSON fragment to an equivalent XML fragment for the purpose of processing in a USoft Blend context.

*Syntax*

```js
<pc:assign-nodeset-from-json *variable*="{ *filepath* | *xpath* }">
```

The required *variable* is a variable name by which you can reference the converted JSON later in the script, using:

```
$*variable*
```

- To read the JSON input from file, specify *filepath.* **See Example 1.*** * 
- To pass inline JSON input in the script itself, specify an *xpath* expression. **See Example 2.**

*Example 1*

```xml
<example xmlns:pc="Processing.Command">
  <pc:assign-nodeset-from-json
    xmlresult = "{path:Combine('c:\usoft\blend\JSON', 'app.config.json')}" />
  <pc:copy-of select="$xmlresult"/>
</example>
```

 *Example 2a*

This example passes JSON as *embedded text*:

```xml
<example xmlns:pc="Processing.Command">
	<pc:assign-nodeset-from-json xmlresult = "{.}">
	  {"myname":"Lakshmi"}
	</pc:assign-nodeset-from-json>
	<pc:copy-of select="$xmlresult"/>
</example>

```

 *Example 2b*

This example passes JSON as the content of *an**element*:

```xml
<example xmlns:pc="Processing.Command">
	<pc:assign-nodeset-from-json xmlresult = "{myjson}">
	  <myjson>{"myname":"Lakshmi"}</myjson>
	</pc:assign-nodeset-from-json>
	<pc:copy-of select="$xmlresult"/>
</example>
```

 *Example 2c*

This example passes JSON as the value of *an**attribute*. The attribute value is specified by single quotes because the JSON content already uses double quotes:

```xml
<example xmlns:pc="Processing.Command">
	<pc:assign-nodeset-from-json xmlresult = "{myjson/@somejson}">
	  <myjson somejson='{"myname":"Lakshmi"}'/>
	</pc:assign-nodeset-from-json>
	<pc:copy-of select="$xmlresult"/>
</example>
```

 *Example 2d*

This example passes JSON as an *inline expression*. The double brackets are an escape strategy. They are needed because single brackets would be interpreted as an XSLT attribute value template:

```xml
<example xmlns:pc="Processing.Command">
	<pc:assign-nodeset-from-json xmlresult = '{{"myname":"Lakshmi"}}'/>
	<pc:copy-of select="$xmlresult"/>
</example>
```

 *Example 2e*

This example passes JSON inline in a *string variable:*

```xml
<example xmlns:pc="Processing.Command">
	<pc:assign-string jsonstring = "{.}">{"myname":"Lakshmi"}</pc:assign-string>
	<pc:assign-nodeset-from-json xmlresult = "{$jsonstring}" />
	<pc:copy-of select="$xmlresult"/>
</example>
```

 *Example 2f*

This example explicitly calls the underlying converter function to a JSON string and catches the result in a nodeset variable:

```xml
<example xmlns:pc="Processing.Command">
	<pc:assign-string jsonstring = "{.}">{"myname":"Lakshmi"}</pc:assign-string>
	<pc:assign-nodeset xmlresult = "{xslutil:json2xml($jsonstring)}" />
	<pc:copy-of select="$xmlresult"/>
</example>
```

 