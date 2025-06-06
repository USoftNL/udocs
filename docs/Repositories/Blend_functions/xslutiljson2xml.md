---
id: xslutiljson2xml
---

# xslutil:json2xml



> [!NOTE]
> This article is about the **xslutil:json2xml**[ Blend function](/docs/Repositories/Blend_functions).

## **xslutil:json2xml**

Converts a JSON fragment to an equivalent XML fragment.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:xslutil="USoft:XslUtil"
```

*Function call*

```js
xslutil:json2xml( *json* )

*json*   ::=  { *filepath* | *xpath* }
```

Pass the required *json* input code:

- As a *filepath* if you want the JSON input to be read from the file pointed at. **See Example 1.**
- As an *xpath* expression if  you want to pass the JSON input inline (that is, inside the Blend script). **See Example 2.**

> [!TIP]
> To convert JSON to XML, prefer the [pc:assign-nodeset-from-json](/docs/Repositories/Blend_directives/pcassignnodesetfromjson.md) directive, which stores the XML result in a nodeset variable for further processing.

*Example 1*

```js
<example xmlns:pc="Processing.Command">
	<pc:assign-string jsonstring = "{path:Combine('c:\usoft\blend\JSON', 'app.config.json')}"/>
	<pc:assign-nodeset xmlresult = "{xslutil:json2xml($jsonstring)}" />
	<pc:copy-of select="$xmlresult"/>
</example>
```

*Example 2*

```js
<example xmlns:pc="Processing.Command">
	<pc:assign-string jsonstring = "{.}">{"myname":"Lakshmi"}</pc:assign-string>
	<pc:assign-nodeset xmlresult = "{xslutil:json2xml($jsonstring)}" />
	<pc:copy-of select="$xmlresult"/>
</example>
```

 