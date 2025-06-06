---
id: Security_configuration_SigningKey_element
---

# Security configuration: SigningKey element

In a **SecurityConfig.xml** security configuration file, the \<SigningKey> element contains the security certificate used for signing SAML assertions.

## Child elements

none

## Attributes

The following table describes attributes for the \<SigningKey> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|alias   |No      |String  |The name of the alias in a certificate store.|
|pwd     |Yes     |String  |The encrypted password used for opening the certificate store.|
|type    |Yes     |String  |The type of certificate store.|