---
id: rulesserviceReadConfig
---

# rulesservice:ReadConfig




:::note

This article is about the **rulesservice:ReadConfig**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **rulesservice:ReadConfig**

Returns the contents of a USoft Rules Service configuration file converted to an XML document.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:rulesservice="USoft:RulesService"
```

*Function call*

```
rulesservice:ReadConfig( *path* )
```

The required path is a path expression identifying the configuration file that you want to read.

*Example*

```language-xml
<example xmlns:pc="Processing.Command">
    <pc:copy-of select="rulesservice:ReadConfig('c:\usd91\bin64\RulesService-7777.config')"/>
</example>
```

```
If the input file looks like this:

URE.PASSWORD.RDBMSPassword
 o1@(mWVKD'>YL6HAVV=Z4-<8*519>I[J4*#T-R$.?9)1W:\b7XU
URE.TEXT.Application
TRAVEL
URE.TEXT.AutoStart
yes

…
```

then the return value looks like this:

```language-xml
<example>
   <config>
      <param name="URE.PASSWORD.RDBMSPassword"> o1@(mWVKD'>YL6HAVV=Z4-<8*519>I[J4*#T-R$.?9)1W:\b7XU</param>
      <param name="URE.TEXT.Application">TRAVEL</param>
      <param name="URE.TEXT.AutoStart">yes</param>

      ...

   </config>
</example>
```

 