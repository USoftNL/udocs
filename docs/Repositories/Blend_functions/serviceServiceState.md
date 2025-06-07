---
id: serviceServiceState
---

# service:ServiceState




:::note

This article is about the **service:ServiceState**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **service:ServiceState**

Returns the state of the Windows service named servicename on the local computer.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:service="USoft:Service"
```

*Function call*

```
service:ServiceState( *servicename* )
```

*Example*

```xml
<pc:value-of select="service:ServiceState($servicename)"/>
```

## Return values

Return values are as follows:

|        |        |
|--------|--------|
|`Running`|<p>The Windows Service is running.</p><p>The Services panel shows Status = Running.</p>|
|`Stopped`|<p>The Windows Service is not running.</p><p>The Services panel shows Status = (none).</p>|



 