---
id: USMetaComponents
---

# USMeta.Components




:::note

This article is about the **Components** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

:::

## **USMeta.Components**

At runtime, gets metadata information about components from the model developed in USoft Definer. This information covers general information about the component, methods, and parameters.

Returns an XML document of the form demonstrated in the Example below.

*Syntax*

```sql
SELECT USMeta.Components(
*name-pattern*           Components
,      *architecture-pattern*   Architecture
,      *interfaces-only*        InterfacesOnly
,      *module-pattern*         Module
,      *mime-type*              MimeType
)

*mime-type*   ::=  {  application/xml
                 ,  xml
                 ,  application/json
                 ,  json  }
```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The '.*DOT NET.*' value in the following example is for *architecture-pattern* because of the "Architecture" alias:

```sql
SELECT   USMeta.Components( '.*DOT NET.*' Architecture )
```

This results in all components of the "DOT NET", and the "DOT NET INTERNAL" architectures.


:::tip

For backward compatibility only, it is possible to supply parameter values by position. Using this syntax, a list of non-aliased values maps to the parameter list in the order stated, with empty values at the end of the list if you supply less than 4 values, and '' (the empty string) as a way of explicitly declaring an empty value.

:::

*Name-pattern* is a regular expression that matches zero, one or more component names in the model. The result data is limited to components matching the pattern. If *name-pattern* is omitted, then result data is not limited in this way.

*Architecture-pattern* is a regular expression that matches zero, one or more component architectures in the model. The result data is limited to components with architectures matching the pattern. If *architecture-pattern* is omitted, then result data is not limited in this way. The following are valid component architectures in USoft:

|        |        |
|--------|--------|
|DOT NET |UNSPECIFIED|
|DOT NET INTERNAL|WEB SERVICE|
|INTERNAL|WEB SERVICE PROVIDER|
|J2EE    |        |



If *interfaces-only* is set to 'yes', only columns that have Interface = Yes are included. The default of *interfaces-only* is 'no', meaning that components are in scope regardless of the value of their Interface attribute.

*Module-pattern* is a regular expression that matches zero, one or more module names in the model. The result data is limited to components within modules matching the pattern. Any components that are consumed from a different module which is filtered out by the regular expression, will show two additional fields 'INTERFACE_FROM_MODULE', which will be 'Y', and 'IMPLEMENTING_MODULE', which will contain the module name where the component originates from. The 'MODULE_NAME' field will in this case contain the name of the module in which the interface was consumed. If *module-pattern* is omitted, then the result data is not limited in this way.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example*

This example returns component information about any components in the model that have the name 'REGEXP', and are of the 'J2EE' architecture :

```sql
SELECT USMeta.Components(
   'REGEXP'    Components
,  'J2EE'      Architecture
)
```

The return value of this statement could be:

```xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Components>
      <Component NAME="REGEXP" MODULE_NAME="TRAVEL" USABLE_AS_INTERFACE="N" ARCHITECTURE="J2EE" LIFE_TIME="STATELESS"
         OPERATION_COUNT="2" ASSEMBLY_REFERENCES="" COM_CLS_ID="" COM_HOST="" COM_PROG_ID="">
         <Operations>
            <Operation NAME="MATCHES" INPUT_PARAMETERS_COUNT="2" OUTPUT_PARAMETERS_COUNT="1" RETURN_PARAMETER="result">
               <Parameters>
                  <Parameter NAME="str" KIND="IN" PRIMITIVE_DATATYPE="STRING"/>
                  <Parameter NAME="regexp" KIND="IN" PRIMITIVE_DATATYPE="STRING"/>
                  <Parameter NAME="result" KIND="RETURN" PRIMITIVE_DATATYPE="BOOLEAN"/>
               </Parameters>
            </Operation>
            <Operation NAME="REPLACE" INPUT_PARAMETERS_COUNT="3" OUTPUT_PARAMETERS_COUNT="1" RETURN_PARAMETER="result">
               <Parameters>
                  <Parameter NAME="input" KIND="IN" PRIMITIVE_DATATYPE="STRING"/>
                  <Parameter NAME="pattern" KIND="IN" PRIMITIVE_DATATYPE="STRING"/>
                  <Parameter NAME="replacement" KIND="IN" PRIMITIVE_DATATYPE="STRING"/>
                  <Parameter NAME="result" KIND="RETURN" PRIMITIVE_DATATYPE="STRING"/>
               </Parameters>
            </Operation>
         </Operations>
      </Component>
   </Components>
</Meta>
```

 