---
id: Server_configuration_Authenticator_element
---

# Server configuration: Authenticator element

In a **config.xml**server configuration file, an \<Authenticator> element contains configuration properties for authenticating administration resources.

*Example*

```xml
<Authenticator 
  name="Fixed Password Sample" 
  type="FixedPassword" 
  user="admin" 
  password="admin"/>

```

## Child elements

none

## Attributes

The following table describes attributes for the \<Authenticator> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|name    |Y       |String  |The name of the authentication used for administration resources.|
|type    |Y       |FixedPassword/DirectoryService/USoftAuthorizervalues|Type of the authentication used for administration resources.|
|user    |N       |String  |The user name used for administration resources. NoteUsed only when type = "FixedPassword"|
|password|N       |String  |The password used for administration resources.NoteUsed only when type = "FixedPassword"|
|url     |N       |String  |LDAP (lightweight directory access protocol) connection string pointing to that directory service for type="DirectoryService"Rules Service that runs the USoft application to validate against, or a USoft application name that already has connections defined in the Applications section of Service Definer for type = "USoftAuthorizer"|
|condition|N       |String  |        |



 