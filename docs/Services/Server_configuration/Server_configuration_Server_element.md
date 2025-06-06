---
id: Server_configuration_Server_element
---

# Server configuration: Server element

In a **config.xml**server configuration file, a \<Server> element contains the configuration for a server and its services.

*Example*

```language-xml
<Server 
  name="Default" 
  baseURI="http://0.0.0.0:8090/" 
  publicationLocation="C:\usoft\servers\Default\" 
  serviceDescription="REST and WSDL services" 
  advertise=
    "GenericResource,AdminResource,LoggingResource,GenericExceptionHandler,">     
  <Services>         
    <Service name="myservice" active="true"/>         
    <Service name="mycustomservice" active="true"/>      
  </Services>
</Server>

```

## Child elements

The following table describes child elements for the \<Server> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Authenticator|No      |Contains configuration properties for authenticating administration resources.|
|Properties|No      |Contains server properties.|
|Services|No      |Contains configuration properties for services defined in Service Definer.|
|HttpProtocol|No      |Contains configuration properties for HTTP Headers.|



## Attributes

The following table describes attributes for the \<Server> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|name    |Yes     |String  |The name of the server.|
|baseURI |Yes     |String  |The base uri of the server. This is the first part in the URL used to access a service defined in Service Definer.|
|externalBaseURI|No      |String  |The external uri of the server as it will be used by a client application. This is the first part in the URL used to access a service defined in Service Definer.|
|publicationLocation|Yes     |String  |The path where the server is published.|
|serviceDescription|No      |String  |Server description string.|
|advertise|No      |String  |Comma separated string, defining a collection of REST resources that are not defined in Service Definer. AdminResource, LogResources from Administration page of a server in Service Definer are published in this attribute.|
|corsConfig|No      |String  |A reference to a CORS configuration defined in Cors element. This attribute contains the name of the CORS configuration used for this server.|
|defaultSecurityConfigName|No      |String  |A reference to a security configuration section defined in SecurityConfig.xml used for this server.|
|throttlingEnabled|No      |Y/N value|Enables requests throttling on a server. This property is used in combination with *maxServerRequests* property.Default value = N|
|maxServerRequests|No      |Integer |Define the maximum allowed number of requests allowed by a server. This property is used when throttlingEnabled="Y".|