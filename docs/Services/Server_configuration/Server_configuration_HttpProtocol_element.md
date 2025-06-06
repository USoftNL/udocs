---
id: Server_configuration_HttpProtocol_element
---

# Server configuration: HttpProtocol element

In a **config.xml**server configuration file, the \<HttpProtocol> element contains configuration properties for HTTP headers. This element contains \<Headers> and \<Header> elements.

*Example*

```language-xml
<HttpProtocol>
 <Headers>
    <Header 
      name="X-Frame-Options" 
      value="SAMEORIGIN" 
      description="Protects against Clickjacking attacks."/>
    <Header 
      name="X-XSS-Protection" 
      value="1; 
      mode=block" 
      description="Protects against XSS injections"/>
    <Header 
      name="X-Powered-By" 
      value="USoft B.V." 
      description="Custom header"/>
 </Headers>
</HttpProtocol>

```

## HttpProtocol

**Child elements**

The following table describes child elements for the \<HttpProtocol> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Headers |No      |Contains a collection of HTTP headers that are added to the response of all  services in a server.|



**Attributes**

none

## Headers element

**Child elements**

The following table describes child elements for the \<Headers> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Header  |No      |Defines a HTTP header that will be added to the response of all  services in a server.|



**Attributes**

none

## Header element

**Child elements**

none

**Attributes**

The following table describes attributes for the \<Header> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|name    |Yes     |String  |The name of the HTTP header to be added to the response of all  services in a server.|
|value   |Yes     |String  |The value of the HTTP header to be added to the response of all  services in a server.|
|description|No      |String  |The description of the HTTP header added to the response.|