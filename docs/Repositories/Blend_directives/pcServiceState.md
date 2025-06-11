---
id: pcServiceState
---

# pc:ServiceState




:::note

This article is about the **pc:ServiceState**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:ServiceState**

Outputs the state of a Windows service on the local computer.

*Syntax*

```
<pc:ServiceState servicename="*servicename*" />
```

*Example*

```xml
<pc:ServiceState servicename="RulesService-7779"/>
```

## Output values

Output values are as follows:

|**Output value**|**Meaning**|
|--------|--------|
|Running |<p>The Windows Service is running.</p><p>The Services panel shows Status = Running.</p>|
|Stopped |<p>The Windows Service is not running.</p><p>The Services panel shows Status = (none).</p>|



 