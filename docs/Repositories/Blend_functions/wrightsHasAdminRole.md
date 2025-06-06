---
id: wrightsHasAdminRole
---

# wrights:HasAdminRole




:::note

This article is about the **wrights:HasAdminRole**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **wrights:HasAdminRole**

Finds out if the script is being run with the Run As Administrator option or not.

Returns a boolean.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:wrights="USoft:WRights"
```

*Function call*

```
wrights:HasAdminRole()
```

*Example*

To prevent a deploy script from being run otherwise than with the Run As Administrator option, add the following directive at the top of the script:

```language-xml
<pc:terminate 
  test="not(wrights:HasAdminRole())" 
  msg="This script must be run with the Run As Administrator option."
/>
```

 