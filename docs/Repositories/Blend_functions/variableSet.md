---
id: variableSet
---

# variable:Set




:::note

This article is about the **variable:Set**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **variable:Set**

Evaluates an expression, initialises a named variable if it does not exist, then assigns the result of the evaluation to the variable.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:variable="USoft:Variable"
```

*Function call*

```
variable:Set( *name*, *expression* )
```

Both *name* and *expression* are required. *Expression* may be a constant, a function (Example 1), or an XPath expression (Example 2).

A variable is created with name *name* if such a variable does not exist. The result of evaluating expression is assigned to the variable, overwriting any existing value of the variable.

*Example 1*

This example creates the variable "envxml" and sets it to the contents of the "env.xml" file.

```language-xml
<pc:evaluate select="variable:Set('envxml', files:XmlFile('env.xml'))"/>
```

*Example 2*

This example creates the variable "mytableregexp" and sets it to the text contents of the \<result> element in the outcome of an XSLT transformation executed by a \<pc:apply> child node instruction. This outcome is a regular expression representing a list of tables, of the format

```
(TABLE1|TABLE2|...)
```

```sql
select uscsxsl.blend(
   '<example xmlns:pc="Processing.Command" pc:hideme="true">
   <pc:assign sql = "SELECT TO_CLOB(( INVOKE XML.EXPORT WITH SELECT * FROM T_TABLE ))" />
    <pc:assign xml = "{sql:SqlStmnt('''', $sql)}" />
    <pc:evaluate select="variable:Set(''mytableregexp'', ./result/text())">

      <pc:apply   xml="{$xml}" xsl="{xsl:stylesheet}" >
        <xsl:stylesheet  version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

         <xsl:output method="xml" encoding="UTF-8"/>

          <xsl:template match="/">
            <result>
              <xsl:text>(</xsl:text>
              <xsl:for-each select ="*/T_TABLE">
                <xsl:value-of select="@TABLE_NAME"/>
                <xsl:if test="position()<last()">
                  <xsl:text>|</xsl:text>
                </xsl:if>
              </xsl:for-each>
              <xsl:text>)</xsl:text>
            </result>
          </xsl:template>

        </xsl:stylesheet>
      </pc:apply>

    </pc:evaluate>
    <pc:comment-of><pc:copy-of select="$mytableregexp"/></pc:comment-of>  
  </example>'
)
```

 