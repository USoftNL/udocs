---
id: stringsReplaceVariables
---

# strings:ReplaceVariables




:::note

This article is about the **strings:ReplaceVariables**[ Blend function](/Repositories/Blend_functions).

:::

- [System-named attributes](#system-named-attributes)
- [User-named attributes](#user-named-attributes)
- [Pattern attributes for substitution based on regular expressions](#pattern-attributes-for-substitution-based-on-regular-expressions)

## **strings:ReplaceVariables**

In an input text, replaces all occurrences of a set of text strings, or matches of regular-expression patterns, by target values. The replacements required are provided as replacement instructions.

Returns the replaced text.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:ReplaceVariables(
*input-text*
, *replace-instruction*
  [{
   , *name-attribute-name*
   , *value-attribute-name*
   , *pattern-attribute-name*
  }]
)

*replace-instruction*  ::=

  <*top-level-element*>
    <*instruction-element   name-attribute  pattern-attribute   value-attribute*  />
    <*instruction-element   name-attribute  pattern-attribute   value-attribute*  />
    ...

  </*top-level-element*>
```

The required *input-text* is a regular text string, for example, a SQL statement.

The required *replace-instruction* is an XML fragment containing a single top-level-element and any number of child instruction-elements. 0 instruction elements is legal but will have no effect.

You can pass input parameters to the replacement routine by using variable references in the *replace-instruction*.

What each *instruction-element* must look like depends on whether you are passing *name-attribute-name, value-attribute-nam*e and *pattern-attribute-name* or not. Either NONE of these 3 arguments must be passed, or ALL 3 must be passed as single-quoted string literals, in which case the single-quoted empty string ( '' ) is a valid option.

## System-named attributes

If **none** of the 3 optional arguments is passed, each *instruction-element* must have an attribute named NAME (with capitals) and an attribute named VALUE (with capitals).

In place of the NAME attribute you can have a PATTERN attribute, or you can have both a NAME and a PATTERN attribute. See the "Pattern attributes" section later in this article.

*Example*

```xml
<example xmlns:pc="Processing.Command" pc:hideme="true" >
<pc:defs>
     update book set published_in = 'English' where author = 'English'; update book set published_in = 'American' where author = 'American';
</pc:defs>
<pc:defs>
   <Languages>
      <LANGUAGE_CODE NAME="eng" VALUE="en"/>   
        <LANGUAGE_CODE NAME="English" VALUE="eng-GB"/>
        <LANGUAGE_CODE NAME="American" VALUE="eng-US"/>
    </Languages>
</pc:defs>
<pc:assign-string   input_text=    "{//pc:defs[1]}"/>
<pc:assign-nodeset  replacements=  "{//pc:defs[2]/*}"/>
<pc:assign-string   replaced_text="{strings:ReplaceVariables($input_text,$replacements)}" />     

<pc:value-of select="$replaced_text"/>

</example>
```

The result is:

```sql
update book set published_in = 'en-GB' where author = 'en-GB'; update book set published_in = 'en-US' where author = 'en-US';
```

## User-named attributes

If **all** of the 3 optional arguments are passed, each *instruction-element* in *replace-instruction* must have:

- an attribute by the name of *name-attribute-name*, or an attribute by the name of *pattern-attribute-name*, or both, and :
- an attribute by the name of *value-attribute-name*.

*Example*

```xml
<example xmlns:pc="Processing.Command" pc:hideme="true" >
<pc:defs>
     update book set published_in = 'English' where author = 'English'; update book set published_in = 'American' where author = 'American';
</pc:defs>
<pc:defs>
   <Languages>
      <LANGUAGE_CODE language="eng" code="en"/>   
        <LANGUAGE_CODE language="English" code="eng-GB"/>
        <LANGUAGE_CODE language="American" code="eng-US"/>
    </Languages>
</pc:defs>
<pc:assign-string   input_text=    "{//pc:defs[1]}"/>
<pc:assign-nodeset  replacements=  "{//pc:defs[2]/*}"/>
<pc:assign-string   replaced_text="{strings:ReplaceVariables($input_text,$replacements, 'language', 'code', '')}" />     

<pc:value-of select="$replaced_text"/>

</example>
```

The result is:

```sql
update book set published_in = 'en-GB' where author = 'en-GB'; update book set published_in = 'en-US' where author = 'en-US';
```

## Pattern attributes for substitution based on regular expressions

The above examples showed simple string substitutions because *pattern-attribute-name* was empty.

If *pattern-attribute-name* is non-empty, then all text occurrences that match any of the values of *pattern-attribute-name* (considered as regular-expression patterns) are replaced by the corresponding *value-attribute-name*.

If both *name-attribute-name* and *pattern-attribute-name* are non-empty, replacements on the basis of the regular-expression patterns occur first, followed by replacements on the basis of the hard-coded strings.

*Example*

```xml
<example xmlns:pc="Processing.Command" pc:hideme="true" >
<pc:defs>
     ID: 18900, RGB: grey red; ID: 18901, RGB: gray red;
</pc:defs>
<pc:defs>
   <colours>
      <colour en="red" de="rot" />   
      <colour en_pattern="gr[a|e]y" de="grau" />
    </colours>
</pc:defs>
<pc:assign-string    input_text=    "{//pc:defs[1]}"/>
<pc:assign-nodeset   replacements=  "{//pc:defs[2]/*}"/>
<pc:assign-string    replaced_text="{strings:ReplaceVariables($input_text,$replacements, 'en', 'de', 'en_pattern')}" />     

<pc:value-of select="$replaced_text"/>

</example>
```

The result is:

```
ID: 18900, RGB: grau rot; ID: 18901, RGB: grau rot;
```

 