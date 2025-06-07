---
id: Server_configuration_Services_element
---

# Server configuration: Services element

In a **config.xml**server configuration file, the \<Services> element contains configuration properties for services defined in Service Definer. This element has \<Service> child elements.

*Example*

```xml
<Services>
   <Service name="CustomREST" active="true"/>
   <Service name="CustomSOAPLiteral" active="true"/>
</Services>

```

## Services element

**Child elements**

The following table describes child elements for the \<Services> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Service |No      |Contains configurable properties for a service.|



**Attributes**

none

## Service element

**Child elements**

none

**Attributes**

The following table describes attributes for the \<Service> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|name    |Yes     |String  |The name of a service as defined in Service Definer.|
|active  |No      |Y/N value|Defines if a service is activated the current server. You can also remove the Service element in order to deactivate the service.|



###  