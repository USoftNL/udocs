---
id: Authentication_in_services
---

# Authentication in services


:::note

See also: [Authentication and USoft](/docs/Authorisation_and_access/Authentication_and_USoft/Authentication_and_USoft.md)

:::

The USoft Service Framework is aware of different authentication schemes and different kind of resources. Following is a matrix of authentication possibilities based on how credentials are provided.

|**Authentication Type**|**Credentials coming via**|**REST services**|**SOAP services**|**WebSocket services**|**Web Applications**|
|--------|--------|--------|--------|--------|--------|
|[USoft authentication](/docs/Services/Authentication_in_services/USoft_authentication_for_services.md)|Authentication header|Yes     |Yes     |Yes     |No      |
|Form authentication|n/a     |No      |No      |Yes     |
|USoft authentication cookie|Cookie  |Yes     |Yes     |Yes     |
|[SAML authentication](/docs/Services/Authentication_in_services/SAML_authentication.md)|SAML form authentication|No      |No      |No      |Yes     |
|SAML authentication cookie|Cookie  |Yes     |Yes     |Yes     |
|[Anonymous authentication](/docs/Services/Authentication_in_services/Anonymous_authentication.md)|n/a     |Yes     |Yes     |Yes     |No      |



 