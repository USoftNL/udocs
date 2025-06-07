---
id: Security_configuration_Attributes_element
---

# Security configuration: Attributes element

In a **SecurityConfig.xml**security configuration file, the \<Attributes> element contains a collections of attributes used in SAML assertions.

*Example*

```xml
<Attributes representation="adfs" description="" serviceName="travel_saml" nameIDFormats="EMAIL ">
   <Attribute require="false" friendlyName="E-Mail Address" name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" />
</Attributes>
```

## Attributes element

**Child elements**

The following table describes child elements for the \<Attributes> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Attribute|No      |Identity provider attribute used in SAML assertion.|



**Attributes**

The following table describes attributes for the \<Attributes> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|nameIDFormats|Yes     |String  |Indicates what SAML name identifier format will be used for the comunication between the SP (Service Provider) and Idp (Identity Provider)|
|serviceName|Yes     |String  |Specifies the name of the connection used in Service Definer to connect to the Rules Service.|
|description|No      |String  |Contains a description of the attributes.|



## Attribute element

**Child elements**

none

**Attributes**

The following table describes attributes for the \<Attribute> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|name    |Yes     |String  |Specifies the attribute name as required by SAML protocol.|
|friendlyName|Yes     |String  |Specifies an human readable name of the attribute.|
|require |Yes     |true/falsevalue|If the attributed is required in the SAML assertion.|