# dates:ShowInputFormats

Returns a list of input formats that USoft Blend uses to interpret XPath string expressions intended to express a date or time.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:dates="USoft:Dates"
```

*Function call*

```
dates:ShowInputFormats()
```

*Example*

```language-xml
<pc:value-of select="dates:ShowInputFormats()"/>
```

 