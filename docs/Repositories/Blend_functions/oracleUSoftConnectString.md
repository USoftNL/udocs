---
id: oracleUSoftConnectString
---

# oracle:USoftConnectString




:::note

This article is about the **oracle:USoftConnectString**[ Blend function](/Repositories/Blend_functions).

:::

## **oracle:USoftConnectString**

Returns a valid full database connection string for the Oracle RDBMS on the basis of host name and SID.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:oracle="USoft:Oracle"
```

*Function call*

```
oracle:USoftConnectString( *host*, *sid* )
```

If you do not specify *host* (as in Example 2), the computername of the current computer is used.

If you do not specify *sid* (as in Example 2), the string **XE** is used.

*Example 1*

```xml
<pc:evaluate select="oracle:USoftConnectString('MYSERVER', 'MYSID')"/>
```

The result is:

```
(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=MYSERVER)(PORT=1521))(CONNECT_DATA=(SID=MYSID)))
```

*Example 2*

```xml
<pc:evaluate select="oracle:USoftConnectString('', '')"/>
```

The result looks like this:

```
(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=PC4400945)(PORT=1521))(CONNECT_DATA=(SID=XE)))
```

 