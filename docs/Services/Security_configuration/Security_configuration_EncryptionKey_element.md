---
id: Security_configuration_EncryptionKey_element
---

# Security configuration: EncryptionKey element

In a **SecurityConfig.xml**security configuration file, the \<EncryptionKey> element contains the security certificate used for encrypting SAML assertions.

## Child elements

none

## Attributes

The following table describes attributes for the \<EncryptionKey> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|alias   |No      |String  |The name of the alias in a certificate store.|
|pwd     |Yes     |String  |The encrypted password used for opening the certificate store.|
|type    |Yes     |String  |The type of certificate store.|