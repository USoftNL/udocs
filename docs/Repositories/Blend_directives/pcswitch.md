---
id: pcswitch
---

# pc:switch



> [!NOTE]
> This article is about the **pc:switch**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:switch**

Executes different actions depending on the value of a variable.

Returns a text string or an XML fragment.

*Syntax*

```
<pc:switch select="*variable-reference*">
   [     <pc:case value="*xpath*"> *content* </pc:case>
         ...   ]
         <pc:default> *content* </pc:default>
</pc:switch>
```

The required **select** attribute could be any XPath expression, but is typically a variable reference to the variable that you want to test the value of.

Each of the pc:case child elements has a required **value** attribute. If the value of pc:switch's **select** attribute matches the value of this attribute, then the child element's *content* is executed. If there are multiple matches, they are all executed, in the document order in which the matching pc:case elements appear.

If the optional pc:default element is present, its *content* is executed if none of the pc:each elements has a matching value. This happens regardless of whether pc:case elements occur before or after the pc:default element, or both.

*Example*

```language-xml
<example xmlns:pc="Processing.Command">
       <pc:switch select="$x">
             <pc:case value="john">the name is John</pc:case>
             <pc:case value="mary"><pc:value-of select="strings:TitleCase($x)"/></pc:case>
             <pc:case value="mary"> is the name</pc:case>
             <pc:default><pc:value-of select="$x"/> was not matched</pc:default>
             <pc:case value="{$y}"> x matches y </pc:case>
       </pc:switch>
</example>
```

The outcome is as follows:

|**Value of $x**|**Value of $y**|**Outcome**|
|--------|--------|--------|
|(empty, not supplied)|        |was not matched|
|john    |mary    |the name is John|
|mary    |        |Mary is the name|
|kajsa   |        |kajsa was not matched|
|john    |john    |the name is John x matches y|
|johnn   |        |johnn was not matched|
|johnn   |johnn   |x matches y|



 