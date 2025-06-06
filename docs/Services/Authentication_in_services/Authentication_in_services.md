---
id: Authentication_in_services
---

# Authentication in services

> [!NOTE]
> See also: [Authentication and USoft](/docs/Authorisation%20and%20access/Authentication%20and%20USoft/Authentication%20and%20USoft.md)

The USoft Service Framework is aware of different authentication schemes and different kind of resources. Following is a matrix of authentication possibilities based on how credentials are provided.

|**Authentication Type**|**Credentials coming via**|**REST services**|**SOAP services**|**WebSocket services**|**Web Applications**|
|--------|--------|--------|--------|--------|--------|
|[USoft authentication](/docs/Services/Authentication%20in%20services/USoft%20authentication%20for%20services.md)|Authentication header|Yes     |Yes     |Yes     |No      |
|Form authentication|n/a     |No      |No      |Yes     |
|USoft authentication cookie|Cookie  |Yes     |Yes     |Yes     |
|[SAML authentication](/docs/Services/Authentication%20in%20services/SAML%20authentication.md)|SAML form authentication|No      |No      |No      |Yes     |
|SAML authentication cookie|Cookie  |Yes     |Yes     |Yes     |
|[Anonymous authentication](/docs/Services/Authentication%20in%20services/Anonymous%20authentication.md)|n/a     |Yes     |Yes     |Yes     |No      |



 