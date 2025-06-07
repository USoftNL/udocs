---
id: USMetaDecisions
---

# USMeta.Decisions




:::note

This article is about the **Decisions** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

:::

## **USMeta.Decisions**

At runtime, gets metadata information about decisions from the model developed in USoft Definer.
For each retrieved decision, this information takes the form of name/value pairs. Each name/value pair expresses a decision attribute setting.

Returns an XML document of the form demonstrated in the Example below.

*Syntax*

```sql
SELECT USMeta.Decisions(
    *decision-name-pattern*     Decisions
,   *interfaces-only*           InterfacesOnly
,   *module-pattern*            Module
,   *mime-type*                 MimeType
)

*interfaces-only* ::=  { yes | no }

*mime-type*       ::=  {  application/xml
                     ,  xml
                     ,  application/json
                     ,  json  }
```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The '.*test.*' value in the following example is for *decision-name-pattern* because of the "Decisions" alias:

```sql
SELECT USMeta.Decisions( '.*test.*' Decisions )
```

*Decision-name-pattern* is a regular expression that matches zero, one or more decision names in the model. The result data is limited to decisions matching the pattern. If *decision-name-pattern* is omitted, the result data is not limited in this way.

If *interfaces-only* is set to 'yes', only decisions that have Interface = Yes are included. If it is set to 'no' (the default), the result data is not limited in this way.

*Module-pattern* is a regular expression that matches zero, one or more module names in the model. The result data is limited to decisions within modules that match the pattern. If *module-pattern* is omitted, the result data is not limited in this way.

Result data for decisions from consumed modules that match module-pattern contain two additional attributes:

- 'INTERFACE_FROM_MODULE', which is set to 'Y',
- ''IMPLEMENTING_MODULE', which is set to the module name where the decision originates from. The 'MODULE_NAME' attribute is set in this case to the name of the consumer module.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example*

This example returns decision information about any decisions in the model with a name containing the string 'test':

```sql
SELECT USMeta.Decisions( '.*test.*' Decisions )
```

The return value of this statement could be:

```xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Decisions>
      <Decision NAME="ALL_TEST" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" CLIENT=""/>
      <Decision NAME="BM_TEST_FAILEXEC" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" CLIENT=""/>
      <Decision NAME="BM_TEST_FAILPROC" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" CLIENT=""/>
      <Decision NAME="BM_TEST_LOOKUP_CONSTRAINT" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" CLIENT=""/>
      <Decision NAME="BM_TEST_SQLGRP1" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" CLIENT=""/>
   </Decisions>
</Meta>
```

 