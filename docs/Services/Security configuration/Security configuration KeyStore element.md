# Security configuration: KeyStore element

In a **SecurityConfig.xml**security configuration file, the \<KeyStore> element contains the security certificate for working with SSL.

## Child elements

none

## Attributes

The following table describes attributes for the \<KeyStore> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|alias   |No      |String  |The name of the alias in a certificate store.|
|pwd     |Yes     |String  |The encrypted password used for opening the certificate store.|
|type    |Yes     |String  |The type of certificate store.|



## Value

The value of this element contains a reference to the certificate store or the certificate as a value.