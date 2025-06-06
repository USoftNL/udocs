# pc:comment-of



> [!NOTE]
> This article is about the **pc:comment-of**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:comment-of**

Outputs to the result tree an XML comment that contains some specified content.

*Syntax*

```
<pc:comment-of
     select="*xpath-expression*" >

*   content*

</pc:comment>
```

Either the **select** attribute or a *content* XML fragment are required. If a **select** attribute is present, then *content* must be empty. If the **select** attribute evaluates to a node set, boolean or number, then this value is first converted to a string and then copied to the result.

If **select** is absent, *content* is first converted to a string and then copied to the result. See the Limitations section in this article.

*Example*

This example returns the XML document in the "env.xml" file in XML comment brackets:

```language-xml
<pc:assign-nodeset envxml="{files:XmlFile('env.xml')}"/>
<pc:comment-of select="$envxml"/>
```

## Limitations

If the select attribute is absent and content evaluates to a node set, the value of content is NOT copied to the result.