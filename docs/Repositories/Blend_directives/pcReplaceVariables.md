---
id: pcReplaceVariables
---

# pc:ReplaceVariables



> [!NOTE]
> This article is about the **pc:ReplaceVariables**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:ReplaceVariables**

Replaces all occurrences of a given text or pattern by a different text. You can give multiple replacement instructions in one go.

Returns the text after the replacements have been made. USoft Delivery Manager uses this mechanism to do machine-specific replacements when data are deployed on target machines.

> [!TIP]
> If you simply want to replace a substring by another string, prefer [strings:Replace()](/docs/Repositories/Blend_functions/stringsReplace.md).

*Syntax*
 

```
<pc:ReplaceVariables

    txt="*expr*"

  {
    select="*xpath >> xml-fragment*"  |
    varlist="*varlist*"               }  

/>
```

The required **txt** is a regular text string, for example, a narrative text, or an SQL statement. This is the input text.

The replacement instructions must be expressed either in a **select** attribute or in a **varlist** attribute. One of these is required, but you cannot have both. You can pass input parameters to the replacement routine by using variable references in the select attribute value. See the section “Passing input parameters ...” at the end of this article.

Example

In this example, each occurrence in the TRAVEL.txt file of ITALIA is translated to ITALIA and each occurrence of GERMANY to DEUTSCHLAND, and the result is returned.

```language-xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign" >
    <pc:defs><Settings><Setting NAME="ITALY" VALUE="ITALIA"/><Setting NAME="GERMANY" VALUE="DEUTSCHLAND"/></Settings></pc:defs>
    <pc:ReadFile filepath="TRAVEL.txt" assign:fileContent="."/>
    <pc:assign-nodeset settings="{//pc:defs/*}"/>
    <pc:ReplaceVariables txt="{$fileContent}" select="$settings"/>
</example>
```

## select, syntax

If you are using **select**, the **select** attribute must be an XPath expression referencing an XML fragment that has a single top-level node with 1 or more child nodes. 0 child nodes is also legal but will have no effect. Each of the child nodes must have:

- an attribute or a child element named either NAME or PATTERN, and:
- an attribute or a child element named VALUE,

for example:

```language-xml
<r>
    <abc NAME="lazy" VALUE="wild"/>
    <abc NAME="dog" VALUE="lazy cat"/>
</r>
```

or:

```language-xml
<r>
    <abc><NAME>lazy</NAME><VALUE>wild</VALUE></abc>
    <def><NAME>dog</NAME><VALUE>lazy cat</VALUE></def>
</r>
```

or:

```language-xml
<r>
   <abc><NAME>active</NAME><VALUE>lazy</VALUE></abc>
   <def NAME="dog" VALUE="active cat"/>
   <qwe><PATTERN>a(?=\s*active)</PATTERN><VALUE>an</VALUE></qwe>
</r>
```

The name of the top-level element (here, r) and the names of its child elements (here, abc, def, qwe) are irrelevant. In the replacement instructions, if you want to use different names than NAME, PATTERN, and VALUE, you can use the strings:ReplaceVariables() function.

## select, example with NAME only

```language-xml
<example xmlns:pc="Processing.Command">
<pc:defs>
   <r><abc NAME="lazy" VALUE="wild"/><def NAME="dog" VALUE="lazy cat"/></r>
</pc:defs>

<pc:ReplaceVariables
   txt="This is a story about a dog. The dog is named Max."
   select="/example/pc:defs[1]/r" />

</example>
```

The result of this example is:

```
This is a story about a wild cat. The wild cat is named Max.
```

## select, example with NAME and PATTERN

```language-xml
<example xmlns:pc="Processing.Command">
  <pc:ReplaceVariables
     txt="This is a story about a dog. The dog is named Max."
     select=".">
     <r>
       <abc><NAME>active</NAME><VALUE>lazy</VALUE></abc>
       <def NAME="dog" VALUE="active cat"/> >
       <qwe><PATTERN>a(?=\s*active)</PATTERN><VALUE>an</VALUE></qwe> <!-- a before active is replaced by an -->
     </r>   
  </pc:ReplaceVariables>   
</example>
```

The result of this example is:

```
This is a story about an lazy cat. The lazy cat is named Max.
```

All the replacements are executed recursively, and all the matching replacements are ALWAYS executed, regardless of the order in which the instructions are stated (this is the difference with **varlist** in the next section). Following **about**, **a** is changed to **an** because, at one point in the replacement process, the text has "active cat", and **an** remains a part of the end result after the replacement of **active** by **lazy**. This unwanted effect may be countered by adding an extra instruction:

```language-xml
<example xmlns:pc="Processing.Command">
  <pc:ReplaceVariables
     txt="This is a story about a dog. The dog is named Max."
     select=".">
     <r>
       <abc><NAME>active</NAME><VALUE>lazy</VALUE></abc>
       <def NAME="dog" VALUE="active cat"/> >
       <qwe><PATTERN>a(?=\s*active)</PATTERN><VALUE>an</VALUE></qwe> <!-- a before active is replaced by an -->
       <qwe><PATTERN>an(?=\s*lazy)</PATTERN><VALUE>a</VALUE></qwe> --><!-- an before lazy is replaced by a -->
     </r>   
  </pc:ReplaceVariables>   
</example>
```

The result of this example is:

```
This is a story about a lazy cat. The lazy cat is named Max.
```

## varlist, syntax

If you are using **varlist**, the **varlist** attribute must be an ordered list of one or more name-value pairs in the following syntax:

```
*varlist*  ::=  *name=value*[,*name=value*...]
```

## varlist, example

```language-xml
<example xmlns:pc="Processing.Command">
  <pc:ReplaceVariables
      txt="This is a story about a dog. The dog is named Max."
      varlist="dog=active cat;active=lazy" />
</example>
```

The result of this example is:

```
This is a story about a lazy cat. The lazy cat is named Max.
```

In the same way as with replacements expressed by select, each of the replacements expressed by varlist is applied recursively to the input text. But UNLIKE replacements with select, each replacement with varlist is executed only once in the stated sequence of replacements. Compare:

```language-xml
<example xmlns:pc="Processing.Command">
  <pc:ReplaceVariables
      txt="This is a story about a dog. The dog is named Max."
      varlist="active=lazy;dog=active cat" />
</example>
```

The result of this example is:

```
This is a story about a active cat. The active cat is named Max.
```

## Passing input parameters to the replacement routine

If you are using an XML fragment as replacement instruction for the pc:ReplaceVariables directive or for the strings:ReplaceVariables() function, you can have variable elements in this XML string.

This allows you to pass input parameters to the replacement routine.

Express the variable elements as variable references. Do an extra call to pc:assign-nodeset with Attribute Value Template (AVT) curly bracket. This causes the variable references to be resolved before the XML is passed to the replacement routine.

*Example 1*

This example shows input parameters passed to the pc:ReplaceVariables directive.

```language-xml
<pc:assign-string-default myparameter1="my_replacement1"/>
<pc:assign-string-default myparameter2="my_replacement2"/>

<pc:assign-nodeset input="input.xml"/>
<pc:assign-nodeset replacements="{rs}">
    <rs>
        <r NAME="replace_this_string1" VALUE="{$myparameter1}"/>
        <r NAME="replace_this_string2" VALUE="{$myparameter2}"/>
    </rs>
</pc:assign-nodeset>
<pc:WriteFile filepath="output.xml" disable-output-escaping="yes">
    <pc:ReplaceVariables txt="{$input}" select="$replacements"/>
</pc:WriteFile>
```

*Example 2*

This example is equivalent to Example 1. This example shows input parameters passed to the strings:ReplaceVariables() function.

```language-xml
<pc:assign-string-default myparameter1="my_replacement1"/>
<pc:assign-string-default myparameter2="my_replacement2"/>

<pc:assign-nodeset input="input.xml"/>
<pc:assign-nodeset replacements="{rs}">
   <rs>
      <r NAME="replace_this_string1" VALUE="{$myparameter1}"/>
      <r NAME="replace_this_string2" VALUE="{$myparameter2}"/>
   </rs>
</pc:assign-nodeset>   
<pc:assign-nodeset replaced="{strings:ReplaceVariables($input, $replacements)}"/>
<pc:WriteFile filepath="output.xml">
   <pc:copy-of select="$replaced"/>
</pc:WriteFile>
```

 