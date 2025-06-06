---
id: environmentMachineName
---

# environment:MachineName



> [!NOTE]
> This article is about the **environment:MachineName**[ Blend function](/docs/Repositories/Blend_functions).

## **environment:MachineName**

Returns the computername of the local computer.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:environment="USoft:Environment"
```

*Function call*

```
environment:MachineName( )
```

This function returns the same value as the following SQL statement executed in a USoft context:

```sql
SELECT rulesengine.getproperty( 'env computername' )
```

 