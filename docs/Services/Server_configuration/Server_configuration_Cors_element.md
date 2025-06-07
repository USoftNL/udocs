---
id: Server_configuration_Cors_element
---

# Server configuration: Cors element

In a **config.xml**server configuration file, the \<Cors> element contains configuration properties for CORS configurations. This element has \<CorsConfig> and \<Rule> child elements.

*Example*

```xml
<Cors>
   <CorsConfig name="Default">
      <Rule 
        Access-Control-Allow-Origin="*" 
        Access-Control-Allow-Methods="GET, POST, PUT, DELETE" 
        Access-Control-Allow-Headers="Content-Type,Authorization,Accept,X-US-Transaction" 
        Access-Control-Allow-Credentials="true"/>
   </CorsConfig>
</Cors>

```

## Cors element

**Child elements**

The following table describes child elements for the \<Cors> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|CorsConfig|No      |Contains a collection of rules describing a CORS configuration.|



**Attributes**

none

## CorsConfig element

**Child elements**

The following table describes child elements for the \<CorsConfig> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Rule    |No      |A rule used for CORS.|



**Attributes**

none

## Rule

## Child elements

none

## Attributes

The following table describes attributes for the \<Rule> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|Access-Control-Allow-Origin|No      |String  |Indicates which origin sites may access the resource.|
|Access-Control-Allow-Methods|No      |String  |Specifies the methods allowed when accessing the resources.|
|Access-Control-Allow-Headers|No      |String  |Specifies the headers allowed to be used in the request.|
|Access-Control-Expose-Headers|No      |String  |Indicates which headers can be exposed as part of the response|
|Access-Control-Max-Age|No      |Integer |Indicates how long the results of a preflight request can be cached (-1 if disabled).|
|Access-Control-Allow-Credentials|No      |true/false value|Indicates whether or not the response to the request can be exposed when the credentials flag is true.|