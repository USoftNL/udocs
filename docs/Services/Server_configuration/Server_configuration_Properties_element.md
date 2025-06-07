---
id: Server_configuration_Properties_element
---

# Server configuration: Properties element

In a **config.xml**server configuration file, the \<Properties> element contains configuration properties for the server itself: server properties.  This element has \<Property> child elements.

*Example*

```xml
<Properties>   
  <Property name="QUEUE_NAME" index="1" value="TestQueue"/>   
  <Property name="WAIT_TIMEOUT" index="1" value="100"/>       
</Properties>

```

## Properties element

**Child elements**

The following table describes child elements for the \<Properties> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Property|No      |Defines a server property.|



**Attributes**

none

## Property element

**Child elements**

none

**Attributes**

The following table describes attributes for the \<Property> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|name    |Yes     |String  |The name of a server property|
|index   |Yes     |Integer |The index of a server property.  |
|value   |Yes     |String  |The value of a server property|